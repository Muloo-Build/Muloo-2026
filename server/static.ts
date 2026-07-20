import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { getMetaForPath, injectMeta } from "./seo";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexPath = path.resolve(distPath, "index.html");
  const template = fs.readFileSync(indexPath, "utf-8");

  app.use(express.static(distPath, { index: false }));

  // Fall through to index.html with route-specific head tags injected so
  // crawlers get unique titles/descriptions/canonicals without running JS.
  app.use("/{*path}", async (req, res) => {
    try {
      const meta = await getMetaForPath(req.path);
      const html = injectMeta(template, meta, req.path);
      res.status(200).set({ "Content-Type": "text/html" }).send(html);
    } catch (err) {
      console.error("Failed to inject route meta, serving raw index.html:", err);
      res.sendFile(indexPath);
    }
  });
}
