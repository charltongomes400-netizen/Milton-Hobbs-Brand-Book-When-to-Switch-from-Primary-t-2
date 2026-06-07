import express, { type Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import rateLimit from "express-rate-limit";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { insertApplicationSchema, insertPostSchema, insertJobSchema, type Application } from "@shared/schema";
import { z } from "zod";
import { registerAuthRoutes } from "./authRoutes";
import { requireAdmin } from "./auth";

const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const blogUploadsDir = path.join(uploadsDir, "blog");
if (!fs.existsSync(blogUploadsDir)) fs.mkdirSync(blogUploadsDir, { recursive: true });

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = [".pdf", ".doc", ".docx"];
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, allowed.includes(ext));
  },
});

const imageUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = [".jpg", ".jpeg", ".png", ".webp"];
    const ext = path.extname(file.originalname).toLowerCase();
    const okExt = allowed.includes(ext);
    const okMime = file.mimetype.startsWith("image/");
    cb(null, okExt && okMime);
  },
});

function saveUploadedImage(buffer: Buffer, originalname: string): string {
  const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const filename = `${unique}${path.extname(originalname).toLowerCase()}`;
  fs.writeFileSync(path.join(blogUploadsDir, filename), buffer);
  return filename;
}

function isUniqueViolation(err: unknown): boolean {
  let current: unknown = err;
  for (let i = 0; i < 5 && current; i++) {
    if (typeof current === "object" && (current as { code?: string }).code === "23505") {
      return true;
    }
    current = (current as { cause?: unknown }).cause;
  }
  return false;
}

const uploadRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." },
});

const imageUploadRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
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

  registerAuthRoutes(app);

  app.use("/uploads/blog", express.static(blogUploadsDir));

  app.get("/api/posts", async (_req, res) => {
    const posts = await storage.getPosts(true);
    res.json(posts);
  });

  app.get("/api/posts/:slug", async (req, res) => {
    const post = await storage.getPostBySlug(req.params.slug);
    if (!post || !post.published) return res.status(404).json({ error: "Not found" });
    res.json(post);
  });

  app.get("/api/admin/posts", requireAdmin, async (_req, res) => {
    const posts = await storage.getPosts(false);
    res.json(posts);
  });

  app.post("/api/admin/posts", requireAdmin, async (req, res) => {
    const parsed = insertPostSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid post data", details: parsed.error.flatten() });
    }
    try {
      const post = await storage.createPost(parsed.data);
      res.status(201).json(post);
    } catch (err) {
      if (isUniqueViolation(err)) return res.status(409).json({ error: "Slug already exists" });
      throw err;
    }
  });

  app.patch("/api/admin/posts/:id", requireAdmin, async (req, res) => {
    const id = parseInt(req.params.id as string, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });

    const parsed = insertPostSchema.partial().safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid post data", details: parsed.error.flatten() });
    }
    try {
      const updated = await storage.updatePost(id, parsed.data);
      if (!updated) return res.status(404).json({ error: "Not found" });
      res.json(updated);
    } catch (err) {
      if (isUniqueViolation(err)) return res.status(409).json({ error: "Slug already exists" });
      throw err;
    }
  });

  app.delete("/api/admin/posts/:id", requireAdmin, async (req, res) => {
    const id = parseInt(req.params.id as string, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });
    await storage.deletePost(id);
    res.json({ ok: true });
  });

  app.post("/api/admin/posts/reorder", requireAdmin, async (req, res) => {
    const parsed = z
      .object({ ids: z.array(z.number().int().positive()) })
      .safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid order data" });
    }
    await storage.reorderPosts(parsed.data.ids);
    res.json({ ok: true });
  });

  app.post("/api/admin/posts/image", imageUploadRateLimit, requireAdmin, imageUpload.single("image"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "A valid image file (.jpg, .jpeg, .png, .webp) is required" });
    }
    const filename = saveUploadedImage(req.file.buffer, req.file.originalname);
    res.json({ url: `/uploads/blog/${filename}` });
  });

  app.get("/api/admin/jobs", requireAdmin, async (_req, res) => {
    const jobs = await storage.getJobs(false);
    res.json(jobs);
  });

  app.post("/api/admin/jobs", requireAdmin, async (req, res) => {
    const parsed = insertJobSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid job data", details: parsed.error.flatten() });
    }
    const job = await storage.createJob(parsed.data);
    res.status(201).json(job);
  });

  app.patch("/api/admin/jobs/:id", requireAdmin, async (req, res) => {
    const id = parseInt(req.params.id as string, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });

    const parsed = insertJobSchema.partial().safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid job data", details: parsed.error.flatten() });
    }
    const updated = await storage.updateJob(id, parsed.data);
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  });

  app.delete("/api/admin/jobs/:id", requireAdmin, async (req, res) => {
    const id = parseInt(req.params.id as string, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });
    const job = await storage.getJob(id);
    if (!job) return res.status(404).json({ error: "Not found" });
    await storage.deleteJob(id);
    res.json({ ok: true });
  });

  const stripCvPath = ({ cvPath, ...rest }: Application) => rest;

  app.get("/api/admin/applications", requireAdmin, async (req, res) => {
    const jobIdParam = req.query.jobId;
    if (typeof jobIdParam === "string" && jobIdParam.length > 0) {
      const jobId = parseInt(jobIdParam, 10);
      if (isNaN(jobId)) return res.status(400).json({ error: "Invalid jobId" });
      const applications = await storage.getApplicationsByJob(jobId);
      return res.json(applications.map(stripCvPath));
    }
    const applications = await storage.getApplications();
    res.json(applications.map(stripCvPath));
  });

  app.get("/api/admin/applications/:id/cv", requireAdmin, async (req, res) => {
    const id = parseInt(req.params.id as string, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });

    const application = await storage.getApplication(id);
    if (!application) return res.status(404).json({ error: "Not found" });

    const candidate = path.resolve(path.join(uploadsDir, application.cvFilename));
    const resolvedUploadsDir = path.resolve(uploadsDir);
    if (candidate !== resolvedUploadsDir && !candidate.startsWith(resolvedUploadsDir + path.sep)) {
      return res.status(400).json({ error: "Invalid file path" });
    }
    if (!fs.existsSync(candidate)) return res.status(404).json({ error: "File not found" });

    res.download(candidate, application.cvFilename);
  });

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
    const jobId = parseInt(req.params.id as string);
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
