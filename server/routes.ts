import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
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
