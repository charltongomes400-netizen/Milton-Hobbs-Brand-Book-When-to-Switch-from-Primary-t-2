import { eq, and, desc, asc } from "drizzle-orm";
import { db } from "./db";
import { users, jobs, applications, posts } from "@shared/schema";
import type { User, InsertUser, Job, InsertJob, Application, InsertApplication, Post, InsertPost } from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getJobs(activeOnly?: boolean): Promise<Job[]>;
  getJob(id: number): Promise<Job | undefined>;
  createJob(job: InsertJob): Promise<Job>;
  updateJob(id: number, job: Partial<InsertJob>): Promise<Job | undefined>;
  deleteJob(id: number): Promise<void>;

  createApplication(application: InsertApplication): Promise<Application>;
  getApplicationsByJob(jobId: number): Promise<Application[]>;
  getApplications(): Promise<Application[]>;
  getApplication(id: number): Promise<Application | undefined>;

  getPosts(publishedOnly?: boolean): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  getPostById(id: number): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
  updatePost(id: number, patch: Partial<InsertPost>): Promise<Post | undefined>;
  deletePost(id: number): Promise<void>;
  reorderPosts(ids: number[]): Promise<void>;
}

export class DrizzleStorage implements IStorage {
  async getUser(id: string) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getJobs(activeOnly = true) {
    if (activeOnly) {
      return db.select().from(jobs).where(eq(jobs.isActive, true)).orderBy(jobs.createdAt);
    }
    return db.select().from(jobs).orderBy(jobs.createdAt);
  }

  async getJob(id: number) {
    const [job] = await db.select().from(jobs).where(eq(jobs.id, id));
    return job;
  }

  async createJob(job: InsertJob) {
    const [created] = await db.insert(jobs).values(job).returning();
    return created;
  }

  async updateJob(id: number, job: Partial<InsertJob>) {
    const [updated] = await db.update(jobs).set(job).where(eq(jobs.id, id)).returning();
    return updated;
  }

  async deleteJob(id: number) {
    await db.transaction(async (tx) => {
      await tx.update(applications).set({ jobId: null }).where(eq(applications.jobId, id));
      await tx.delete(jobs).where(eq(jobs.id, id));
    });
  }

  async createApplication(application: InsertApplication) {
    const [created] = await db.insert(applications).values(application).returning();
    return created;
  }

  async getApplicationsByJob(jobId: number) {
    return db.select().from(applications).where(eq(applications.jobId, jobId)).orderBy(desc(applications.createdAt));
  }

  async getApplications() {
    return db.select().from(applications).orderBy(desc(applications.createdAt));
  }

  async getApplication(id: number) {
    const [application] = await db.select().from(applications).where(eq(applications.id, id));
    return application;
  }

  async getPosts(publishedOnly = false) {
    if (publishedOnly) {
      return db
        .select()
        .from(posts)
        .where(eq(posts.published, true))
        .orderBy(asc(posts.sortOrder), desc(posts.createdAt));
    }
    return db.select().from(posts).orderBy(asc(posts.sortOrder), desc(posts.createdAt));
  }

  async getPostBySlug(slug: string) {
    const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
    return post;
  }

  async getPostById(id: number) {
    const [post] = await db.select().from(posts).where(eq(posts.id, id));
    return post;
  }

  async createPost(post: InsertPost) {
    const [created] = await db.insert(posts).values(post).returning();
    return created;
  }

  async updatePost(id: number, patch: Partial<InsertPost>) {
    const [updated] = await db
      .update(posts)
      .set({ ...patch, updatedAt: new Date() })
      .where(eq(posts.id, id))
      .returning();
    return updated;
  }

  async deletePost(id: number) {
    await db.delete(posts).where(eq(posts.id, id));
  }

  async reorderPosts(ids: number[]) {
    await db.transaction(async (tx) => {
      for (let i = 0; i < ids.length; i++) {
        await tx.update(posts).set({ sortOrder: i }).where(eq(posts.id, ids[i]));
      }
    });
  }
}

export const storage = new DrizzleStorage();
