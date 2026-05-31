import { type User, type InsertUser, type Inquiry, type InsertInquiry, users, inquiries, websiteContent } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  getWebsiteContent(key: string): Promise<unknown | undefined>;
  upsertWebsiteContent(key: string, value: unknown): Promise<unknown>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [created] = await db.insert(inquiries).values(inquiry).returning();
    return created;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
  }

  async getWebsiteContent(key: string): Promise<unknown | undefined> {
    const [row] = await db.select().from(websiteContent).where(eq(websiteContent.key, key));
    return row?.value;
  }

  async upsertWebsiteContent(key: string, value: unknown): Promise<unknown> {
    const [row] = await db
      .insert(websiteContent)
      .values({ key, value })
      .onConflictDoUpdate({
        target: websiteContent.key,
        set: { value, updatedAt: new Date() },
      })
      .returning();

    return row.value;
  }
}

export const storage = new DatabaseStorage();
