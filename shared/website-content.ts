import { z } from "zod";

export const resourcePostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  date: z.string(),
  readTime: z.string(),
  category: z.string(),
  excerpt: z.string(),
  body: z.array(
    z.object({
      heading: z.string().optional(),
      body: z.string(),
    }),
  ),
});

export const caseStudySchema = z.object({
  id: z.string(),
  stream: z.enum(["hub", "build", "ai", "product"]),
  tag: z.string(),
  client: z.string(),
  logo: z.object({
    text: z.string(),
    src: z.string().optional(),
    website: z.string().optional(),
    surface: z.enum(["light", "dark"]).optional(),
  }),
  title: z.string(),
  status: z.string().nullable().optional(),
  summary: z.string(),
  metrics: z.array(z.object({ value: z.string(), label: z.string() })),
  facts: z.object({
    industry: z.string(),
    region: z.string(),
    timeline: z.string(),
    services: z.array(z.string()),
    stack: z.array(z.string()),
  }),
  champion: z.object({ label: z.string(), detail: z.string() }),
  problemBullets: z.array(z.string()),
  solutionBullets: z.array(z.string()),
  challenge: z.string(),
  approach: z.array(z.string()),
  built: z.array(z.string()),
  outcome: z.string(),
  quote: z
    .object({
      text: z.string(),
      name: z.string(),
      role: z.string(),
      company: z.string(),
    })
    .nullable()
    .optional(),
});

export const websiteContentSchema = z.object({
  caseStudies: z.array(caseStudySchema),
  resourcePosts: z.array(resourcePostSchema),
});

export type ResourcePost = z.infer<typeof resourcePostSchema>;
export type WebsiteContent = z.infer<typeof websiteContentSchema>;

export const defaultResourcePosts: ResourcePost[] = [
  {
    id: "hubspot-data-hygiene",
    title: "Why your HubSpot data is messy",
    slug: "hubspot-data-hygiene",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    category: "Architecture",
    excerpt:
      "Data hygiene is the unsexy hero of revenue operations. Without clean data, automation only scales chaos.",
    body: [
      {
        body:
          "Messy CRM data usually starts as a small operational compromise: a duplicate property here, a manual import there, a pipeline stage that means different things to different teams. Over time, those small compromises become reporting noise.",
      },
      {
        heading: "The problem with manual entry",
        body:
          "When users are asked to remember every field, every naming convention, and every lifecycle rule manually, the system quietly drifts. The fix is not more reminders. The fix is better architecture.",
      },
      {
        heading: "Automating the clean-up",
        body:
          "Good CRM hygiene combines clear properties, lifecycle governance, deduplication logic, validation rules, and dashboards that expose data quality issues before they become leadership reporting problems.",
      },
    ],
  },
  {
    id: "hubspot-cms-react",
    title: "Building custom React apps on HubSpot CMS",
    slug: "hubspot-cms-react",
    date: "Sep 28, 2025",
    readTime: "8 min read",
    category: "Integration Patterns",
    excerpt:
      "How to think about custom interfaces, HubSpot CMS constraints, and maintainable frontend architecture.",
    body: [
      {
        body:
          "HubSpot CMS can support more sophisticated web experiences when the architecture is planned properly. The trick is knowing which parts belong in HubSpot modules, which parts belong in custom code, and where the handover boundaries sit.",
      },
    ],
  },
  {
    id: "modern-revenue-stack",
    title: "The modern revenue stack: 2026 Edition",
    slug: "modern-revenue-stack",
    date: "Sep 15, 2025",
    readTime: "6 min read",
    category: "CRM Architecture",
    excerpt:
      "A practical view of the systems, integrations, data rules, and AI workflows that support revenue teams.",
    body: [
      {
        body:
          "A modern revenue stack is less about collecting more tools and more about making fewer systems work together cleanly. CRM, finance, product data, marketing attribution, support workflows, and AI agents all need a shared operating model.",
      },
    ],
  },
];
