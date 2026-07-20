import { storage } from "./storage";
import {
  defaultMeetingProfiles,
  defaultResourcePosts,
  websiteContentSchema,
  type WebsiteContent,
} from "@shared/website-content";
import { caseStudies } from "../client/src/lib/content";

export const siteUrl = "https://www.wearemuloo.com";

export interface RouteMeta {
  title: string;
  description: string;
  /** Absolute canonical URL. Defaults to siteUrl + path. */
  canonical?: string;
  robots?: string;
}

const DEFAULT_META: RouteMeta = {
  title: "Muloo | Technical Systems & AI Acceleration Partner",
  description:
    "Cape Town-based engineering consultancy specializing in HubSpot architecture, custom engineering, and AI automation.",
};

/**
 * Single source of truth for per-route head tags served to crawlers.
 * Keep titles/descriptions in sync with the <SEO> props inside each page
 * component so the pre-JS and post-JS head match.
 */
const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: "Muloo | Technical Systems & AI Acceleration Partner",
    description:
      "Cape Town-based HubSpot technical partner for CRM architecture, HubSpot implementation, migrations, custom engineering, and AI automation.",
  },
  "/muloo-hub": {
    title: "Muloo Hub | Enterprise HubSpot Architecture",
    description:
      "Muloo Hub designs, deploys and governs enterprise HubSpot environments, from first implementations to complex global rollouts.",
  },
  "/muloo-hub/hubspot-architecture": {
    title: "HubSpot architecture and CRM system design",
    description:
      "How Muloo designs scalable HubSpot CRM systems with structured data, pipeline architecture, automation logic, and reliable reporting.",
  },
  "/muloo-hub/architecture": {
    title: "HubSpot architecture and CRM system design",
    description:
      "How Muloo designs scalable HubSpot CRM systems with structured data, pipeline architecture, automation logic, and reliable reporting.",
    canonical: `${siteUrl}/muloo-hub/hubspot-architecture`,
  },
  "/muloo-hub/enterprise-hubspot": {
    title: "Enterprise HubSpot | Muloo",
    description:
      "Enterprise HubSpot architecture for growing and global organisations, including governance, integrations, and reporting frameworks.",
  },
  "/muloo-hub/revops": {
    title: "RevOps with HubSpot | Muloo",
    description:
      "How Revenue Operations works in HubSpot through structured funnel architecture, lifecycle design, and reporting governance.",
  },
  "/muloo-hub/hubspot-vs-salesforce": {
    title: "HubSpot vs Salesforce | Muloo",
    description:
      "Neutral expert comparison of HubSpot and Salesforce for organisations evaluating CRM fit, implementation complexity, and operational requirements.",
  },
  "/muloo-hub/hubspot-audit": {
    title: "HubSpot Audit | Muloo",
    description:
      "Stop guessing why your CRM feels broken. We diagnose structural flaws and tangled automations to give you a clear roadmap for technical recovery.",
  },
  "/muloo-hub/hubspot-implementation": {
    title: "HubSpot Implementation | Muloo",
    description:
      "Deploy HubSpot properly from day one with structured implementation, governance controls, and clear delivery phases.",
  },
  "/muloo-hub/hubspot-migration": {
    title: "HubSpot Migration | Muloo",
    description:
      "Move from Salesforce, Pipedrive, Zoho, Dynamics or custom CRM platforms into HubSpot safely with clean data and structured pipelines.",
  },
  "/muloo-hub/hubspot-governance": {
    title: "HubSpot Governance | Muloo",
    description:
      "How organisations control and manage HubSpot with permission governance, data integrity rules, workflow ownership, and reporting standards.",
  },
  "/muloo-hub/salesforce-to-hubspot-migration": {
    title: "Salesforce to HubSpot Migration | Muloo",
    description:
      "Structured Salesforce to HubSpot migration services with data mapping, workflow rebuild, pipeline redesign, and reliable reporting rollout.",
  },
  "/muloo-hub/hubspot-optimisation": {
    title: "HubSpot Optimisation | Muloo",
    description:
      "Fix messy pipelines, broken automation, and unreliable reporting with a structured HubSpot optimisation approach.",
  },
  "/muloo-hub/guided-deployment": {
    title: "Guided Deployment | Muloo",
    description:
      "Structured delivery for HubSpot and connected systems, with clear governance, sprint based releases, and confident launches.",
  },
  "/services/guided-deployment": {
    title: "Guided Deployment | Muloo",
    description:
      "Structured delivery for HubSpot and connected systems, with clear governance, sprint based releases, and confident launches.",
    canonical: `${siteUrl}/muloo-hub/guided-deployment`,
  },
  "/services/hub": {
    title: "Muloo Hub | Enterprise HubSpot Architecture",
    description:
      "Muloo Hub designs, deploys and governs enterprise HubSpot environments, from first implementations to complex global rollouts.",
    canonical: `${siteUrl}/muloo-hub`,
  },
  "/services/build": {
    title: "Muloo Build | Agentic Full-Stack Builds",
    description:
      "Muloo Build uses human-led, AI-assisted delivery to design, build, harden, and ship full-stack software, APIs, integrations, data layers, and operational workflows.",
  },
  "/services/product": {
    title: "Products & Platforms | Muloo",
    description:
      "Muloo builds and runs its own software: Muloo Reporting (unified client reporting across HubSpot, GA4, Google Ads and LinkedIn) and Muloo Signals (personalised LinkedIn outbound into HubSpot), plus custom product engineering.",
  },
  "/services/consulting": {
    title: "Muloo Consulting | Senior Systems & Governance Advisory",
    description:
      "Senior support without the overhead. Muloo diagnoses, prioritises, and guides delivery across HubSpot, systems, and governance.",
  },
  "/services/ai": {
    title: "Muloo AI | Production Agent Workflows",
    description:
      "Muloo AI designs agent workflows, AI-assisted build processes, app hardening, and production guardrails that support full-stack delivery.",
  },
  "/advisory": {
    title: "Muloo Advisory | Systems & Governance Advisory",
    description:
      "Advisory for businesses between growth and complexity — organisational structure, due diligence audits, architecture reviews, and compliance guidance.",
  },
  "/advisory/operator-circle": {
    title: "Operator Circle | Muloo Advisory",
    description:
      "A private circle for operators shaping how modern revenue, delivery, and AI-assisted systems get built, facilitated by Muloo.",
  },
  "/about": {
    title: "About Muloo | The Team Behind the Systems",
    description:
      "Meet the Muloo team — the Cape Town-based engineers designing, rescuing, and governing HubSpot environments, custom software, and AI automation.",
  },
  "/contact": {
    title: "Contact Muloo | Talk to a HubSpot & Systems Partner",
    description:
      "Get in touch with Muloo in Cape Town. Book a call or send a message about HubSpot implementation, CRM rescue, integrations, or AI automation.",
  },
  "/resources": {
    title: "Resources | Muloo",
    description:
      "Muloo resources, case studies, and practical insights on HubSpot architecture, CRM rescue, integrations, AI automation, and technical revenue systems.",
  },
  "/case-studies": {
    title: "Case Studies | Muloo",
    description:
      "Real engagements, documented end to end — HubSpot architecture, rescue, automation and platform builds.",
  },
  "/blog": {
    title: "Insights | Muloo",
    description:
      "Practical Muloo insights on HubSpot architecture, CRM data, integrations, custom software, and AI automation.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Muloo",
    description: "How Muloo collects, uses and protects your personal information.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Muloo",
    description: "The terms that govern your use of the Muloo website.",
  },
  "/styleguide": {
    title: "Styleguide | Muloo",
    description: "Internal Muloo design system reference.",
    robots: "noindex,nofollow",
  },
};

const NOINDEX_PREFIXES = ["/admin", "/meetings", "/contact/book"];

let cachedContent: { value: WebsiteContent; expires: number } | null = null;

const defaultWebsiteContent: WebsiteContent = {
  caseStudies,
  resourcePosts: defaultResourcePosts,
  meetings: defaultMeetingProfiles,
};

export async function getSiteContent(): Promise<WebsiteContent> {
  if (cachedContent && cachedContent.expires > Date.now()) {
    return cachedContent.value;
  }

  let value = defaultWebsiteContent;
  try {
    const content = await storage.getWebsiteContent("website");
    const parsed = websiteContentSchema.safeParse(content);
    if (parsed.success) value = parsed.data;
  } catch {
    // fall back to defaults
  }

  cachedContent = { value, expires: Date.now() + 5 * 60 * 1000 };
  return value;
}

function normalisePath(path: string): string {
  const noQuery = path.split("?")[0].split("#")[0];
  if (noQuery.length > 1 && noQuery.endsWith("/")) return noQuery.slice(0, -1);
  return noQuery || "/";
}

export async function getMetaForPath(rawPath: string): Promise<RouteMeta> {
  const path = normalisePath(rawPath);

  if (NOINDEX_PREFIXES.some((prefix) => path.startsWith(prefix))) {
    return { ...DEFAULT_META, robots: "noindex,nofollow" };
  }

  const staticMeta = routeMeta[path];
  if (staticMeta) return staticMeta;

  const caseStudyMatch = path.match(/^\/case-studies\/([^/]+)$/);
  const blogMatch = path.match(/^\/blog\/([^/]+)$/);

  if (caseStudyMatch || blogMatch) {
    const content = await getSiteContent();

    if (caseStudyMatch) {
      const study = content.caseStudies.find((s) => s.id === caseStudyMatch[1]);
      if (study) {
        return {
          title: `${study.client} — ${study.tag} | Muloo`,
          description: study.summary,
        };
      }
    }

    if (blogMatch) {
      const post = content.resourcePosts.find((p) => p.slug === blogMatch[1]);
      if (post) {
        return { title: `${post.title} | Muloo`, description: post.excerpt };
      }
    }
  }

  // Unknown route: serve defaults but keep it out of the index (client
  // renders the 404 page for these).
  return { ...DEFAULT_META, robots: "noindex,nofollow" };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setMetaContent(
  html: string,
  attr: "name" | "property",
  key: string,
  value: string,
): string {
  const before = new RegExp(
    `(<meta[^>]*${attr}="${key}"[^>]*content=")[^"]*(")`,
  );
  if (before.test(html)) return html.replace(before, `$1${value}$2`);

  const after = new RegExp(
    `(<meta[^>]*content=")[^"]*("[^>]*${attr}="${key}")`,
  );
  if (after.test(html)) return html.replace(after, `$1${value}$2`);

  return html.replace(
    "</head>",
    `  <meta ${attr}="${key}" content="${value}" />\n  </head>`,
  );
}

/**
 * Rewrites the static index.html head (and hidden crawler summary block)
 * with route-specific metadata so crawlers see unique titles, descriptions,
 * canonicals, and robots directives without executing JavaScript.
 */
export function injectMeta(html: string, meta: RouteMeta, rawPath: string): string {
  const path = normalisePath(rawPath);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const canonical = escapeHtml(meta.canonical ?? `${siteUrl}${path === "/" ? "" : path}`);
  const robots = escapeHtml(meta.robots ?? "index,follow");

  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  out = setMetaContent(out, "name", "description", description);
  out = setMetaContent(out, "property", "og:title", title);
  out = setMetaContent(out, "property", "og:description", description);
  out = setMetaContent(out, "name", "twitter:title", title);
  out = setMetaContent(out, "name", "twitter:description", description);
  out = setMetaContent(out, "name", "robots", robots);
  out = setMetaContent(out, "property", "og:url", canonical);

  if (/<link[^>]*rel="canonical"/.test(out)) {
    out = out.replace(
      /(<link[^>]*rel="canonical"[^>]*href=")[^"]*(")/,
      `$1${canonical}$2`,
    );
  } else {
    out = out.replace(
      "</head>",
      `  <link rel="canonical" href="${canonical}" />\n  </head>`,
    );
  }

  // Make the hidden crawler summary lead with this route's content.
  out = out.replace(
    /(<main[^>]*aria-label="Muloo static site summary"[^>]*>\s*)<h1>[^<]*<\/h1>\s*<p>[\s\S]*?<\/p>/,
    `$1<h1>${title}</h1>\n      <p>${description}</p>`,
  );

  return out;
}
