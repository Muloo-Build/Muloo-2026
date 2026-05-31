import type { Express, RequestHandler } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { defaultResourcePosts, websiteContentSchema, type WebsiteContent } from "@shared/website-content";
import { caseStudies } from "../client/src/lib/content";
import { randomBytes, timingSafeEqual } from "crypto";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  const contentKey = "website";
  const adminSessions = new Set<string>();
  const defaultWebsiteContent: WebsiteContent = {
    caseStudies,
    resourcePosts: defaultResourcePosts,
  };

  const getAdminPassword = () => {
    if (process.env.ADMIN_PASSWORD) return process.env.ADMIN_PASSWORD;
    return process.env.NODE_ENV === "production" ? null : "muloo-admin";
  };

  const parseCookies = (cookieHeader?: string) =>
    Object.fromEntries(
      (cookieHeader ?? "")
        .split(";")
        .map((part) => part.trim())
        .filter(Boolean)
        .map((part) => {
          const index = part.indexOf("=");
          return index === -1 ? [part, ""] : [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
        }),
    );

  const isPasswordMatch = (candidate: string, expected: string) => {
    const candidateBuffer = Buffer.from(candidate);
    const expectedBuffer = Buffer.from(expected);
    return candidateBuffer.length === expectedBuffer.length && timingSafeEqual(candidateBuffer, expectedBuffer);
  };

  const requireAdmin: RequestHandler = (req, res, next) => {
    const session = parseCookies(req.headers.cookie).muloo_admin_session;
    if (!session || !adminSessions.has(session)) {
      return res.status(401).json({ error: "Admin login required" });
    }

    return next();
  };

  app.get("/api/website-content", async (_req, res) => {
    try {
      const content = await storage.getWebsiteContent(contentKey);
      const parsed = websiteContentSchema.safeParse(content);
      return res.json(parsed.success ? parsed.data : defaultWebsiteContent);
    } catch (err) {
      console.error("Failed to load website content, using defaults:", err);
      return res.json(defaultWebsiteContent);
    }
  });

  app.post("/api/admin/login", (req, res) => {
    const adminPassword = getAdminPassword();
    if (!adminPassword) {
      return res.status(503).json({ error: "ADMIN_PASSWORD is not configured" });
    }

    const password = typeof req.body?.password === "string" ? req.body.password : "";
    if (!isPasswordMatch(password, adminPassword)) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const session = randomBytes(32).toString("hex");
    adminSessions.add(session);
    res.cookie("muloo_admin_session", session, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 8,
      path: "/",
    });

    return res.json({ authenticated: true });
  });

  app.post("/api/admin/logout", requireAdmin, (req, res) => {
    const session = parseCookies(req.headers.cookie).muloo_admin_session;
    if (session) adminSessions.delete(session);
    res.clearCookie("muloo_admin_session", { path: "/" });
    return res.json({ authenticated: false });
  });

  app.get("/api/admin/session", requireAdmin, (_req, res) => {
    return res.json({ authenticated: true });
  });

  app.put("/api/admin/website-content", requireAdmin, async (req, res) => {
    const parsed = websiteContentSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }

    try {
      const saved = await storage.upsertWebsiteContent(contentKey, parsed.data);
      return res.json(saved);
    } catch (err) {
      console.error("Failed to save website content:", err);
      return res.status(500).json({
        error: "Failed to save website content. Make sure the database schema has been pushed.",
      });
    }
  });

  app.post("/api/inquiries", async (req, res) => {
    try {
      const parsed = insertInquirySchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
      }
      
      try {
        const inquiry = await storage.createInquiry(parsed.data);
        return res.status(201).json(inquiry);
      } catch (dbErr) {
        console.error("Database error (ignored since HubSpot captures forms):", dbErr);
        // We still return 201 so the frontend shows a success toast
        // since HubSpot already captures the submission automatically.
        return res.status(201).json({ success: true, warning: 'Failed to write to DB' });
      }
    } catch (err) {
      console.error("Failed to process inquiry:", err);
      return res.status(500).json({ error: "Failed to process inquiry" });
    }
  });

  // Explicit JSON 404 for unknown API routes.
  app.use("/api/{*path}", (_req, res) => {
    return res.status(404).json({ error: "Not Found" });
  });

  return httpServer;
}
