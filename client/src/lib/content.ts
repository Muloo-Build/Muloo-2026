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
      desc: "Automated HubSpot portal audit identifying duplicates, automation issues and data risks. Link: https://audit.wearemuloo.com/",
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


