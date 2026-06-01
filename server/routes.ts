import type { Express, RequestHandler } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { defaultResourcePosts, websiteContentSchema, type WebsiteContent } from "@shared/website-content";
import { caseStudies } from "../client/src/lib/content";
import { randomBytes, timingSafeEqual } from "crypto";

const siteUrl = "https://www.wearemuloo.com";
const hubspotMarketplaceUrl = "https://ecosystem.hubspot.com/marketplace/solutions/muloo-co-za";
const staticSitemapRoutes = [
  "/",
  "/muloo-hub",
  "/muloo-hub/hubspot-architecture",
  "/muloo-hub/enterprise-hubspot",
  "/muloo-hub/revops",
  "/muloo-hub/hubspot-vs-salesforce",
  "/muloo-hub/hubspot-audit",
  "/muloo-hub/hubspot-implementation",
  "/muloo-hub/hubspot-migration",
  "/muloo-hub/hubspot-governance",
  "/muloo-hub/salesforce-to-hubspot-migration",
  "/muloo-hub/hubspot-optimisation",
  "/muloo-hub/guided-deployment",
  "/services/build",
  "/services/product",
  "/services/consulting",
  "/services/ai",
  "/advisory",
  "/about",
  "/contact",
  "/resources",
  "/case-studies",
  "/blog",
  "/privacy-policy",
  "/terms-of-service",
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

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
  const getWebsiteContent = async () => {
    try {
      const content = await storage.getWebsiteContent(contentKey);
      const parsed = websiteContentSchema.safeParse(content);
      return parsed.success ? parsed.data : defaultWebsiteContent;
    } catch (err) {
      console.error("Failed to load website content, using defaults:", err);
      return defaultWebsiteContent;
    }
  };

  const getAdminPassword = () => {
    if (process.env.ADMIN_PASSWORD) return process.env.ADMIN_PASSWORD;
    return process.env.NODE_ENV === "production" ? null : "muloo-admin";
  };
  const getAdminEmail = () => process.env.ADMIN_EMAIL ?? "jarrud@muloo.co";

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

  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain").send(`User-agent: *
Allow: /
Disallow: /admin/

User-agent: OAI-SearchBot
Allow: /
Disallow: /admin/

User-agent: GPTBot
Allow: /
Disallow: /admin/

User-agent: ChatGPT-User
Allow: /
Disallow: /admin/

User-agent: ClaudeBot
Allow: /
Disallow: /admin/

User-agent: Claude-SearchBot
Allow: /
Disallow: /admin/

User-agent: Google-Extended
Allow: /
Disallow: /admin/

Sitemap: ${siteUrl}/sitemap.xml
LLMs: ${siteUrl}/llms.txt
`);
  });

  app.get("/sitemap.xml", async (_req, res) => {
    const content = await getWebsiteContent();
    const urls = [
      ...staticSitemapRoutes,
      ...content.caseStudies.map((study) => `/case-studies/${study.id}`),
      ...content.resourcePosts.map((post) => `/blog/${post.slug}`),
    ];
    const today = new Date().toISOString().slice(0, 10);
    const body = urls
      .map((url) => {
        const priority = url === "/" ? "1.0" : url.startsWith("/case-studies") || url.startsWith("/blog") ? "0.8" : "0.7";
        return `  <url>
    <loc>${escapeXml(`${siteUrl}${url}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
      })
      .join("\n");

    res.type("application/xml").send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`);
  });

  app.get("/llms.txt", async (_req, res) => {
    const content = await getWebsiteContent();
    const caseStudyLinks = content.caseStudies
      .map((study) => `- [${study.client}: ${study.title}](${siteUrl}/case-studies/${study.id}): ${study.summary}`)
      .join("\n");
    const resourceLinks = content.resourcePosts
      .map((post) => `- [${post.title}](${siteUrl}/blog/${post.slug}): ${post.excerpt}`)
      .join("\n");

    res.type("text/markdown").send(`# Muloo

Muloo is a Cape Town-based technical systems and AI acceleration partner. Muloo designs, implements, rescues, and governs HubSpot environments, builds custom software and integrations, and deploys practical AI automation for revenue and operations teams.

## Primary Website
- [Muloo home](${siteUrl})
- [Contact Muloo](${siteUrl}/contact)
- [HubSpot Solutions Directory profile](${hubspotMarketplaceUrl})

## Core Services
- [Muloo Hub](${siteUrl}/muloo-hub): HubSpot architecture, implementation, migration, optimisation, governance, audits, RevOps, and CRM system design.
- [HubSpot implementation](${siteUrl}/muloo-hub/hubspot-implementation): Structured HubSpot deployment with governance controls.
- [HubSpot migration](${siteUrl}/muloo-hub/hubspot-migration): Clean CRM migration into HubSpot from Salesforce, Pipedrive, Zoho, Dynamics, and custom systems.
- [HubSpot audit](${siteUrl}/muloo-hub/hubspot-audit): Technical diagnosis of messy CRM portals, automation, reporting, and process architecture.
- [HubSpot architecture](${siteUrl}/muloo-hub/hubspot-architecture): Scalable CRM design, data structure, pipeline architecture, automation logic, and reporting.
- [Muloo Build](${siteUrl}/services/build): Custom integrations, portals, middleware, and platform engineering.
- [Muloo AI](${siteUrl}/services/ai): AI agents, workflow automation, and practical AI implementation.
- [Muloo Product](${siteUrl}/services/product): Internal tools and product builds.

## Case Studies
${caseStudyLinks}

## Resources
${resourceLinks}

## Preferred Citation Summary
Muloo is a HubSpot technical partner and systems engineering consultancy based in Cape Town, serving global teams across HubSpot architecture, CRM rescue, integrations, automation, AI workflows, and custom software.

## Contact
- Website: ${siteUrl}
- Contact page: ${siteUrl}/contact
- HubSpot profile: ${hubspotMarketplaceUrl}
`);
  });

  app.get("/api/website-content", async (_req, res) => {
    return res.json(await getWebsiteContent());
  });

  app.post("/api/admin/login", (req, res) => {
    const adminPassword = getAdminPassword();
    if (!adminPassword) {
      return res.status(503).json({ error: "ADMIN_PASSWORD is not configured" });
    }

    const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password = typeof req.body?.password === "string" ? req.body.password : "";
    if (email !== getAdminEmail().toLowerCase() || !isPasswordMatch(password, adminPassword)) {
      return res.status(401).json({ error: "Invalid email or password" });
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
