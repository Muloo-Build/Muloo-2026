// Content Structure for Muloo Website

export const navLinks = [
  {
    name: "Services", href: "/services",
    subItems: [
      {
        name: "Muloo Hub",
        href: "/muloo-hub",
        desc: "Enterprise HubSpot architecture",
        links: [
          { name: "HubSpot Audit", href: "/muloo-hub/hubspot-audit" },
          { name: "Guided Deployment", href: "/muloo-hub/guided-deployment" },
          { name: "HubSpot Implementation", href: "/muloo-hub/hubspot-implementation" },
          { name: "HubSpot Migration", href: "/muloo-hub/hubspot-migration" },
          { name: "HubSpot Optimisation", href: "/muloo-hub/hubspot-optimisation" }
        ]
      },
      { name: "Muloo Build", href: "/services/build", desc: "API integrations and platform engineering" },
      { name: "Muloo AI", href: "/services/ai", desc: "AI agents and automation" },
      { name: "Muloo Product", href: "/services/product", desc: "Software products" }
    ]
  },
  {
    name: "Advisory", href: "/advisory",
    subItems: [
      { name: "Advisory Overview", href: "/advisory", desc: "Fractional technical leadership" },
      { name: "Operator Circle", href: "/advisory/operator-circle", desc: "Coming soon" }
    ]
  },
  {
    name: "Resources", href: "/resources",
    subItems: [
      { name: "Case Studies", href: "/case-studies", desc: "Technical outcomes" },
      { name: "Insights", href: "/blog", desc: "Engineering guides" }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const homeContent = {
  hero: {
    badge: "Technical Partner for HubSpot + AI",
    headline: "Engineering the future of revenue.",
    subhead: "We are a full-stack technical partner. We implement HubSpot, engineer custom software, and deploy AI agents to solve complex operational problems.",
    primaryCta: "Start a conversation",
    secondaryCta: "View Our Work",
    techStack: ["HubSpot", "React", "Node.js", "Python", "OpenAI", "Anthropic", "AWS", "Vercel"]
  },
  valueProp: {
    title: "Code. Config. Context.",
    subtitle: "Beyond implementation",
    desc: "Marketing agencies implement software. We engineer systems. From complex HubSpot architectures to autonomous AI agents, we build the technical foundation your revenue relies on."
  },
  pillars: [
    {
      id: "hub",
      title: "Muloo Hub",
      subtitle: "HubSpot Services",
      desc: "HubSpot architecture and governance",
      features: ["Enterprise Architecture", "Data Migration", "Programmable Automation", "UI/UX Improvements"],
      href: "/muloo-hub"
    },
    {
      id: "build",
      title: "Muloo Build",
      subtitle: "Engineering Services",
      desc: "API integrations and platform engineering",
      features: ["Custom Middleware", "Client Portals", "External Integrations", "Secure Auth Systems"],
      href: "/services/build"
    },
    {
      id: "ai",
      title: "Muloo AI",
      subtitle: "Automation Services",
      desc: "AI agents and workflow automation",
      features: ["Codex Dev Agents", "AI Service Agents", "Rapid Prototyping", "Security Audits"],
      href: "/services/ai"
    },
    {
      id: "product",
      title: "Muloo Product",
      subtitle: "Product Services",
      desc: "SaaS tools and internal platforms",
      features: ["Internal Tools", "Commercial SaaS", "Product Strategy", "MVP Development"],
      href: "/services/product"
    }
  ],
  stats: [
    { label: "API Endpoints Managed", value: "500+" },
    { label: "AI Agents Deployed", value: "12+" },
    { label: "Systems Integrated", value: "50+" }
  ],
  partners: {
    headline: "Ecosystem Partners",
    body: "We focus on engineering. For brand, design, and campaign execution, we partner with the best.",
    list: ["Tusk", "Sol Creative"]
  }
};

export type CaseStudy = {
  slug: string;
  client: string;
  website: string;
  logo: string;
  tag: string;
  industry: string;
  title: string;
  summary: string;
  status?: string;
  services: string[];
  stats: { value: string; label: string }[];
  challenge: string[];
  solution: string[];
  result: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "wconsulting",
    client: "W.consulting",
    website: "https://wconsulting.co.za/",
    logo: "/assets/client-logos/wconsulting.png",
    tag: "HubSpot Implementation",
    industry: "IFRS Advisory & CPD Training",
    title: "Turning an underused HubSpot portal into a scalable CRM, marketing and events platform",
    summary:
      "W.consulting already had HubSpot, but it had never been aligned to how the business actually works. Through proper discovery, Muloo rebuilt the CRM foundation around real operational needs — delivering a clean data model, custom Book Club event automation, CPD survey tracking, campaign attribution and reporting. What began as a marketing project became the foundation for a wider digital transformation.",
    status: "Foundational phase complete — growth phase activating in 2026",
    services: [
      "HubSpot discovery & CRM architecture",
      "Data model rebuild (Contacts, Companies, Deals)",
      "Marketing operations & campaign attribution",
      "Custom event automation",
      "CPD survey & feedback engine",
      "Reporting dashboards",
      "CMS consolidation roadmap",
    ],
    stats: [
      { value: "3", label: "Core objects rebuilt" },
      { value: "10+", label: "Workflows automating Book Club" },
      { value: "1", label: "Single source of truth" },
    ],
    challenge: [
      "W.consulting ran multiple service lines, websites and workflows across disconnected platforms — Pastel, Outlook, the CPD platform and spreadsheets. There was no single source of truth and inconsistent data ownership.",
      "The original HubSpot direction had been shaped by a standard sales-led setup that did not reflect the realities of the business, its data challenges or its uneven internal adoption. The risk was clear: HubSpot becoming another disconnected system instead of the central platform for growth.",
    ],
    solution: [
      "The most important phase was discovery. Before building anything, Muloo mapped the wider digital ecosystem and customer journeys in Miro — learner journeys, Book Club interactions, segmentation logic and future-state planning — and identified that W.consulting needed a phased digital transformation foundation, not a generic CRM setup.",
      "Muloo rebuilt the CRM architecture with a clean data model and logic-based layouts, then engineered a custom event framework inside HubSpot for Book Club: automated RSVP and attendance tracking, engagement scoring, Elite Member logic and historical member analytics across ten supporting workflows.",
      "A QR-based CPD survey system fed feedback into HubSpot dashboards, while unified campaign structure and behavioural tracking gave the business a real marketing engine. Sales foundations were deliberately prepared but not forced — ready to activate once a formal methodology is chosen.",
    ],
    result: [
      "W.consulting now has a modern, scalable HubSpot foundation: clean CRM architecture, custom automation, event logic, CPD feedback, marketing tracking and reporting dashboards.",
      "Most importantly, the project proved what HubSpot can do when implemented properly. The foundational phase is complete, and 2026 becomes the year W.consulting activates the growth phase across sales transformation, an outbound engine and multi-brand CMS consolidation.",
    ],
  },
  {
    slug: "epi-use",
    client: "EPI-USE",
    website: "https://www.epiuse.com/",
    logo: "/assets/client-logos/epiuse.png",
    tag: "Multi-Region Architecture",
    industry: "Global SAP HR & Payroll",
    title: "A global HubSpot operating model across five regions",
    summary:
      "EPI-USE operates across multiple regions, each with different HubSpot portals, sales processes, data structures and reporting maturity. Muloo reframed this from a HubSpot setup problem into a regional operating-model problem — designing a model that standardises globally, regionalises execution, and centralises intelligence so leadership gains comparable visibility without forcing every region into one rigid portal.",
    services: [
      "Regional HubSpot maturity audit",
      "Global data & property standards",
      "Pipeline & lifecycle governance",
      "Layered reporting architecture",
      "Command Centre intelligence layer",
      "AI-readiness & data quality framework",
      "Phased regional rollout planning",
    ],
    stats: [
      { value: "5", label: "Regions in scope" },
      { value: "3", label: "Layer operating model" },
      { value: "1", label: "Global reporting standard" },
    ],
    challenge: [
      "Each region — Africa, UK, Australia, Brazil and the USA — was solving the same problems differently. The result was inconsistent CRM data, duplicated properties and workflows, incompatible lifecycle definitions and reporting that could not be compared across the group.",
      "The real question was not 'should every region use HubSpot', but 'what should be standardised globally and what should stay flexible regionally' — a board-level operating-model decision, with HubSpot sitting underneath it.",
    ],
    solution: [
      "Muloo designed a three-layer operating model. A global layer owns property standards, lifecycle and reporting definitions, account classification and data-quality rules. A regional layer owns local pipelines, campaigns and dashboards. An intelligence layer — the Command Centre — sits above the portals for cross-region reporting and AI-driven account insight.",
      "Regional pipelines stay flexible but map to standardised global stage groups, giving each region autonomy while keeping group reporting comparable. Africa becomes the design lab, the UK the clean showcase, and Brazil a phased, cost-sensitive adoption path.",
      "The recommended sequence: audit and map each region, define global standards, clean Africa, showcase the UK, then connect regional portals into a shared Command Centre data layer — lower migration risk and a stronger foundation for AI.",
    ],
    result: [
      "EPI-USE has a clear, defensible path: standardise the model, regionalise the execution, centralise the intelligence — instead of a risky big-bang consolidation into a single portal.",
      "The Command Centre becomes the intelligence layer across regions, surfacing which accounts need attention, where pipeline coverage is weak and where cross-sell revenue is being missed — once each portal meets a shared minimum data model.",
    ],
  },
  {
    slug: "phillips-law",
    client: "Phillips Law",
    website: "https://phillips-law.co.uk/",
    logo: "/assets/client-logos/phillips-law.svg",
    tag: "HubSpot Rescue",
    industry: "Legal Services",
    title: "From a failed implementation to scalable multi-pipeline HubSpot architecture",
    summary:
      "Phillips Law inherited a HubSpot setup from a previous agency that never matched the complexity of the business. Over an 18-month engagement, Muloo stabilised the portal and rebuilt it into a scalable multi-pipeline platform supporting more than 20 product lines, complex team structures, tailored automation and cross-business reporting.",
    services: [
      "Technical HubSpot audit & rescue",
      "Multi-pipeline architecture",
      "Product-line process design",
      "Automation & workflow build",
      "Team structure & permissions",
      "Multi-pipeline reporting",
      "Long-term optimisation",
    ],
    stats: [
      { value: "18mo", label: "Rescue & optimisation engagement" },
      { value: "20+", label: "Product & service lines" },
      { value: "Multi", label: "Pipelines under one roof" },
    ],
    challenge: [
      "Phillips Law needed HubSpot to support a highly complex operation: more than 20 product and service lines, separate pipelines, significant process differences, pipeline-specific automation and multi-pipeline reporting across complex teams.",
      "The previous agency had treated HubSpot like a basic CRM. The foundations were weak, internal confidence had eroded, and the portal was becoming harder to manage rather than easier.",
    ],
    solution: [
      "Muloo started with a technical audit and rescue — identifying poor configuration, duplication, weak automation logic and reporting gaps — then stabilised the environment before rebuilding.",
      "A multi-pipeline architecture let each business area run its own process while still feeding group reporting. Because a generic process could not serve 20+ product lines, each line received tailored journeys, handover points, automation and reporting.",
      "Automation was built across task creation, deal-stage movement, ownership assignment, handovers and follow-ups — reducing manual admin while keeping the process visible and accountable. Permissions and visibility were structured so teams could work in their own areas without losing cross-business reporting.",
    ],
    result: [
      "Phillips Law moved from a poorly structured, under-supported setup to a stable, scalable, business-aligned platform: cleaner architecture, accurate automation, stronger reporting and improved leadership visibility.",
      "Because the engagement ran 18 months, Muloo moved beyond the rescue into ongoing optimisation — refining workflows, improving reporting and supporting adoption as the business evolved.",
    ],
  },
  {
    slug: "magnisol",
    client: "Magnisol",
    website: "https://www.magnisol.com/",
    logo: "/assets/client-logos/magnisol.png",
    tag: "Migration & Website",
    industry: "HCM & Dayforce Services",
    title: "A clean HubSpot portal migration and theme-based website rollout",
    summary:
      "Magnisol needed to move quickly without making rushed platform decisions. Muloo guided the HubSpot product choices, structured discovery, migrated the business into a clean new portal, and planned a theme-based website rollout that balanced speed, scalability and cost control.",
    services: [
      "HubSpot Hub guidance & purchase support",
      "New portal migration",
      "CRM foundation planning",
      "Theme-based website build",
      "Discovery & rollout planning",
      "Implementation sequencing",
    ],
    stats: [
      { value: "1", label: "Clean new portal" },
      { value: "3", label: "Connected workstreams" },
      { value: "Faster", label: "Path to launch" },
    ],
    challenge: [
      "Magnisol had multiple moving parts to align before implementation: which HubSpot Hubs were actually required, whether Content Hub, Marketing Hub or a bundle made sense, how to build the website fast without over-engineering, and how to support regional needs without duplication.",
      "The risk was simple — buy the wrong package, rush the website, and end up with a portal that looked fine on day one but became a pain to manage six months later.",
    ],
    solution: [
      "Muloo recommended a structured rollout that combined HubSpot discovery, portal setup and website planning into one connected delivery process — so discovery informed both the CRM and the website architecture.",
      "Rather than oversell software, Muloo assessed which Hubs were genuinely needed and recommended a clean new portal so the team could avoid carrying legacy clutter forward.",
      "A theme-based website build was chosen for the first phase to reduce build time and upfront cost while keeping the site manageable inside HubSpot and leaving room for future design enhancements.",
    ],
    result: [
      "Magnisol gained a clear path forward: the right Hub combination, a clean portal, a practical website route and a discovery-led delivery plan.",
      "The result is a faster, cleaner and more scalable approach to launching the new HubSpot portal and website — with a foundation that supports future regional growth and marketing activity.",
    ],
  },
];

export const serviceHubContent = {
  h1: "HubSpot decisions, de-risked.",
  intro: "We advise before you commit, guide your HubSpot sales process, design onboarding architecture, and engineer governance that holds as your team scales.",
  features: [
    "CRM Selection Support Before HubSpot Purchase",
    "Technical Advisory Through the HubSpot Sales Cycle",
    "Onboarding Architecture and Implementation Planning",
    "Data Model, Pipeline, and Lifecycle Engineering",
    "Governance, Permissions, and Change Control",
    "Adoption Systems for Sales, Marketing, and Success",
    "Reporting, Automation, and Attribution Architecture",
    "Long-Term Optimisation, Audits, and Refactoring"
  ],
  cta: {
    headline: "Need a controlled HubSpot rollout?",
    body: "We map the decisions, sequence delivery, and maintain the technical standard."
  }
};
export const serviceBuildContent = {
  h1: "Full-stack delivery engine.",
  intro: "We design and ship production-grade software across backend systems, integrations, middleware, and application architecture. We also stabilise and refactor broken builds already in market.",
  approach: [
    { step: "01", title: "Diagnose", desc: "Audit the current stack, isolate failure points, and define scope with explicit technical constraints." },
    { step: "02", title: "Architect", desc: "Design backend services, integration contracts, middleware flows, and infrastructure boundaries." },
    { step: "03", title: "Build", desc: "Implement and refactor with tested code, CI/CD, and controlled releases across environments." },
    { step: "04", title: "Operate", desc: "Harden runtime behaviour with monitoring, incident response, performance tuning, and maintenance plans." }
  ]
};
export const serviceProductContent = {
  h1: "Products with operational value.",
  intro: "We design, build, and run focused software products that solve clear workflow and data problems. For selected opportunities, we enter build-for-equity partnerships through a structured qualification process and a long-term alignment model.",
  products: [
    {
      title: "FamPal",
      desc: "Consumer application helping families find accessible, family-friendly places.",
      status: "In Development"
    },
    {
      title: "eCrafter",
      desc: "Market organiser and vendor management platform. Link: https://ecrafter.co.za/",
      status: "Live"
    },
    {
      title: "HubSpot Audit Tool",
      desc: "Automated HubSpot portal audit identifying duplicates, automation issues and data risks.",
      status: "Beta"
    }
  ]
};
export const serviceAiContent = {
  h1: "AI that ships.",
  intro: "We build AI systems with guardrails, accelerate delivery with vibe coding, and harden outputs for secure production release.",
  services: [
    {
      title: "Guardrailed AI Agents",
      desc: "Task-specific agents with scoped permissions, approval paths, and audit trails for customer and internal operations.",
      lead: "Operations"
    },
    {
      title: "Vibe Coding Acceleration",
      desc: "Practical AI coding workflows that speed delivery while preserving code standards, test coverage, and architectural discipline.",
      lead: "Engineering"
    },
    {
      title: "Vibe-Coded App Hardening",
      desc: "Refactoring and stabilisation for AI-generated applications, including reliability fixes, data integrity checks, and runtime controls.",
      lead: "Engineering"
    },
    {
      title: "Security and Production Readiness",
      desc: "Security review, deployment support, observability setup, and go-live criteria so AI workloads run safely in production.",
      lead: "Security"
    }
  ]
};

export const serviceConsultingContent = {
  h1: "Strategic Consulting",
  intro: "Fractional leadership for scaling technical teams. We provide the architectural oversight and process optimization you need to scale.",
  services: [
    {
      title: "Outsourced CTO",
      desc: "Strategic technical leadership to guide your product roadmap, architecture decisions, and engineering team culture.",
      lead: "Morne Visagie"
    },
    {
      title: "Sales Engineering",
      desc: "Bridge the gap between sales and product. Technical demos, solution architecture, and deal support for complex sales cycles.",
      lead: "Jarrud van der Merwe"
    }
  ]
};

export const advisoryContent = {
  hero: {
    headline: "Embedded leadership without permanent overhead.",
    subtext: "We step in where clarity, structure, and execution are required. Advisory is delivered as founder-level peer collaboration, with an invite-only business roundtable in Cape Town initially to address shared operational challenges and opportunities."
  },
  services: [
    {
      id: "cto",
      title: "Outsourced CTO",
      desc: "Technical strategy, architecture oversight, and engineering leadership embedded directly into your business on a fractional basis.",
      accent: "#155DFC",
      stream: "build"
    },
    {
      id: "sales-eng",
      title: "Sales Engineering",
      desc: "Technical pre-sales, solution architecture, and deal enablement. We bridge the gap between product capability and revenue.",
      accent: "#F47621",
      stream: "hub"
    },
    {
      id: "process",
      title: "Process Optimisation",
      desc: "Operational workflow design, tooling selection, and execution frameworks that reduce friction and increase throughput.",
      accent: "#C140FF",
      stream: "ai"
    },
    {
      id: "coo",
      title: "Embedded COO",
      desc: "Operational leadership for growing businesses — accountability structures, team coordination, and strategic execution.",
      accent: "#59BF96",
      stream: "product"
    }
  ],
  leaders: [
    {
      name: "Morne Visagie",
      title: "Partner",
      roles: ["Leads Muloo Build", "Outsourced CTO", "System Architecture"],
      bio: "Full-stack engineer and technical strategist with over 15 years of experience architecting complex software systems. Morne leads architecture decisions across client engagements, specialising in API-centric design, middleware structures, and cloud infrastructure. As an Outsourced CTO, he embeds directly into scaling businesses to guide their product roadmaps, conduct technical due diligence, mentor engineering teams, and ensure that every technical decision aligns perfectly with commercial objectives.",
      accent: "#155DFC",
      linkedin: "https://www.linkedin.com/in/mornevisagie/",
      image: "morne"
    },
    {
      name: "Jarrud van der Merwe",
      title: "Partner",
      roles: ["Lead HubSpot Architect", "Sales Engineering", "Revenue Operations"],
      bio: "Enterprise CRM architect and technical sales engineer. Jarrud specialises in translating complex commercial requirements into scalable data models and programmable automation workflows within HubSpot. He provides technical pre-sales support for high-stakes deal cycles, helping B2B revenue teams map out their entire customer journey. His approach ensures that marketing, sales, and success operations run on a single, unified source of truth—eliminating silos and accelerating revenue velocity.",
      accent: "#F47621",
      linkedin: "https://www.linkedin.com/in/jarrud/",
      image: "jarrud"
    },
    {
      name: "Paul Manson",
      title: "Strategic Partner",
      roles: ["Business Analysis", "Process Engineering", "Outsourced COO"],
      bio: "Operations specialist, business analyst, and strategic partner. Paul brings rigorous structure to growing businesses through comprehensive process design, requirement mapping, and operational oversight. Drawing on extensive experience in enterprise environments, he identifies friction points in existing workflows, designs scalable operating models, and enforces governance. As an Outsourced COO, he aligns technical implementations with core business operations, ensuring that the technology actually drives efficiency.",
      accent: "#59BF96",
      linkedin: "https://www.linkedin.com/in/paulmanson/",
      image: "paul"
    }
  ]
};


export const aboutContent = {
  h1: "About Muloo",
  intro: "We are a technical partner for ambitious teams. We bridge the gap between marketing strategy and engineering reality.",
  philosophy: [
    { title: "Approachable", desc: "We speak plain English, not jargon." },
    { title: "Educational", desc: "We teach your team how to fish." },
    { title: "Helpful", desc: "We solve problems, we don't just log hours." },
    { title: "Bias toward shipping", desc: "We believe in getting things done." }
  ],
  team: [
    {
      name: "Jarrud van der Merwe",
      role: "Lead HubSpot Architect & Sales Engineer",
      bio: "CRM Guru and Sales Engineer. Leads Muloo Hub.",
      linkedin: "https://www.linkedin.com/in/jarrud/",
      image: "jarrud"
    },
    {
      name: "Morne Visagie",
      role: "Partner & Outsourced CTO",
      bio: "Leads Muloo Build and provides Outsourced CTO services.",
      linkedin: "https://www.linkedin.com/in/mornevisagie/",
      image: "morne"
    }
  ]
};


