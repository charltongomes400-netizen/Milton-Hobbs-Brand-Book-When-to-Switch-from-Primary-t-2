import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import rateLimit from "express-rate-limit";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { insertApplicationSchema } from "@shared/schema";
import { z } from "zod";

const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = [".pdf", ".doc", ".docx"];
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, allowed.includes(ext));
  },
});

const uploadRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." },
});

function saveUploadedFile(buffer: Buffer, originalname: string): { filename: string; filePath: string } {
  const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const filename = `${unique}${path.extname(originalname)}`;
  const filePath = path.join(uploadsDir, filename);
  fs.writeFileSync(filePath, buffer);
  return { filename, filePath };
}

const bodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  coverLetter: z.string().optional(),
});

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {

  app.get("/api/jobs", async (_req, res) => {
    const jobs = await storage.getJobs(true);
    res.json(jobs);
  });

  app.get("/api/jobs/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });
    const job = await storage.getJob(id);
    if (!job || !job.isActive) return res.status(404).json({ error: "Not found" });
    res.json(job);
  });

  app.post("/api/jobs/:id/apply", uploadRateLimit, upload.single("cv"), async (req, res) => {
    const jobId = parseInt(req.params.id);
    if (isNaN(jobId)) return res.status(400).json({ error: "Invalid job id" });

    const job = await storage.getJob(jobId);
    if (!job || !job.isActive) return res.status(404).json({ error: "Position not found" });

    if (!req.file) return res.status(400).json({ error: "CV file is required" });

    const parsed = bodySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    }

    const { filename, filePath } = saveUploadedFile(req.file.buffer, req.file.originalname);

    try {
      const application = await storage.createApplication({
        jobId,
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        coverLetter: parsed.data.coverLetter ?? null,
        cvFilename: filename,
        cvPath: filePath,
      });
      res.json({ success: true, id: application.id });
    } catch (err) {
      fs.unlink(filePath, () => {});
      throw err;
    }
  });

  app.post("/api/spontaneous-apply", uploadRateLimit, upload.single("cv"), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: "CV file is required" });

    const parsed = bodySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    }

    const { filename, filePath } = saveUploadedFile(req.file.buffer, req.file.originalname);

    try {
      const application = await storage.createApplication({
        jobId: null,
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        coverLetter: parsed.data.coverLetter ?? null,
        cvFilename: filename,
        cvPath: filePath,
      });
      res.json({ success: true, id: application.id });
    } catch (err) {
      fs.unlink(filePath, () => {});
      throw err;
    }
  });

  return httpServer;
}
