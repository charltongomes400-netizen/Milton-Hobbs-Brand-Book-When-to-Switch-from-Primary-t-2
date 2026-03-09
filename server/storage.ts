import { eq, and } from "drizzle-orm";
import { db } from "./db";
import { users, jobs, applications } from "@shared/schema";
import type { User, InsertUser, Job, InsertJob, Application, InsertApplication } from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getJobs(activeOnly?: boolean): Promise<Job[]>;
  getJob(id: number): Promise<Job | undefined>;
  createJob(job: InsertJob): Promise<Job>;
  updateJob(id: number, job: Partial<InsertJob>): Promise<Job | undefined>;

  createApplication(application: InsertApplication): Promise<Application>;
  getApplicationsByJob(jobId: number): Promise<Application[]>;
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

  async createApplication(application: InsertApplication) {
    const [created] = await db.insert(applications).values(application).returning();
    return created;
  }

  async getApplicationsByJob(jobId: number) {
    return db.select().from(applications).where(eq(applications.jobId, jobId));
  }
}

export const storage = new DrizzleStorage();
