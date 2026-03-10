import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { insertApplicationSchema } from "@shared/schema";
import { z } from "zod";

const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadsDir),
    filename: (_req, file, cb) => {
      const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      cb(null, `${unique}${path.extname(file.originalname)}`);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = [".pdf", ".doc", ".docx"];
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, allowed.includes(ext));
  },
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
    if (!job) return res.status(404).json({ error: "Not found" });
    res.json(job);
  });

  app.post("/api/jobs/:id/apply", upload.single("cv"), async (req, res) => {
    const jobId = parseInt(req.params.id);
    if (isNaN(jobId)) return res.status(400).json({ error: "Invalid job id" });

    const job = await storage.getJob(jobId);
    if (!job || !job.isActive) return res.status(404).json({ error: "Position not found" });

    if (!req.file) return res.status(400).json({ error: "CV file is required" });

    const bodySchema = z.object({
      name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(5),
      coverLetter: z.string().optional(),
    });

    const parsed = bodySchema.safeParse(req.body);
    if (!parsed.success) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    }

    const application = await storage.createApplication({
      jobId,
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      coverLetter: parsed.data.coverLetter ?? null,
      cvFilename: req.file.originalname,
      cvPath: req.file.path,
    });

    res.json({ success: true, id: application.id });
  });

  app.post("/api/spontaneous-apply", upload.single("cv"), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: "CV file is required" });

    const bodySchema = z.object({
      name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(5),
      coverLetter: z.string().optional(),
    });

    const parsed = bodySchema.safeParse(req.body);
    if (!parsed.success) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    }

    const application = await storage.createApplication({
      jobId: null,
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      coverLetter: parsed.data.coverLetter ?? null,
      cvFilename: req.file.originalname,
      cvPath: req.file.path,
    });

    res.json({ success: true, id: application.id });
  });

  return httpServer;
}
