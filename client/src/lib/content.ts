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
  id: string;
  stream: "hub" | "build" | "ai" | "product";
  tag: string;
  client: string;
  logo: { text: string; src?: string; website?: string; surface?: "light" | "dark" };
  title: string;
  status?: string | null;
  summary: string;
  metrics: { value: string; label: string }[];
  facts: { industry: string; region: string; timeline: string; services: string[]; stack: string[] };
  champion: { label: string; detail: string };
  problemBullets: string[];
  solutionBullets: string[];
  challenge: string;
  approach: string[];
  built: string[];
  outcome: string;
  quote?: { text: string; name: string; role: string; company: string } | null;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "phillips-law",
    stream: "hub",
    tag: "CRM Architecture",
    client: "Phillips Law",
    logo: {
      text: "Phillips Law",
      src: "https://phillips-law.co.uk/wp-content/themes/phillips_solicitors/images/logo-new.svg",
      website: "https://phillips-law.co.uk/",
      surface: "dark",
    },
    title: "From a failed implementation to scalable multi-pipeline architecture",
    status: null,
    summary:
      "Phillips Law inherited a HubSpot portal from a previous agency that couldn't carry the complexity of the business. Over an 18-month engagement, Muloo stabilised the portal, rebuilt the underlying architecture, and turned it into a structured platform supporting more than 20 product lines.",
    metrics: [
      { value: "18 mo", label: "Rescue & optimisation engagement" },
      { value: "20+", label: "Product & service lines" },
      { value: "Multi-pipeline", label: "Architecture & reporting" },
    ],
    facts: {
      industry: "Legal services",
      region: "United Kingdom",
      timeline: "18 months (ongoing)",
      services: ["HubSpot Audit & Rescue", "Multi-pipeline Architecture", "Automation", "Reporting"],
      stack: ["HubSpot"],
    },
    champion: {
      label: "Phillips Law leadership and operations teams",
      detail:
        "The client-side champion group needed confidence that HubSpot could support more than 20 product and service lines without losing reporting visibility.",
    },
    problemBullets: [
      "A previous agency had implemented HubSpot as a basic CRM, not as a structured business platform.",
      "More than 20 product and service lines needed separate journeys, handovers, ownership rules and reporting.",
      "Poor configuration, duplication and weak automation logic had eroded internal trust in the portal.",
    ],
    solutionBullets: [
      "Stabilised the portal through a technical HubSpot audit and rescue phase.",
      "Rebuilt the account around multi-pipeline architecture, product-line process design and team visibility rules.",
      "Implemented automation and reporting across pipeline value, deal movement, product-line performance and management oversight.",
    ],
    challenge:
      "The previous agency treated HubSpot like a basic CRM. Phillips Law needed it to operate as a structured business platform — more than 20 product and service lines, separate pipelines per business area, significant process differences between them, pipeline-specific automation, complex team structures, and multi-pipeline reporting. Poor foundations had eroded internal confidence in the system.",
    approach: [
      "Technical audit & rescue — reviewed the existing implementation, found poor configuration, duplication and weak automation logic, then stabilised the environment so it stopped getting harder to manage.",
      "Multi-pipeline architecture — designed a separate pipeline per business area, each able to run its own process while still feeding broader management reporting.",
      "Product-line process design — with 20+ lines, a generic process wouldn't work; each got a tailored journey, handover points and automation rather than one rigid structure.",
    ],
    built: [
      "Automation across task creation, deal-stage movement, internal notifications, ownership assignment, handovers and pipeline-specific rules — reducing manual admin while keeping the process visible and accountable.",
      "Team-structure support — permissions, ownership and visibility so teams work in their own area without losing the ability to report across the wider business.",
      "Multi-pipeline reporting — pipeline value, deal movement, product-line and team performance, conversion points, process bottlenecks and management oversight.",
    ],
    outcome:
      "Phillips Law moved from a poorly structured, under-supported setup to a stable, scalable, business-aligned platform: a cleaner architecture, accurate automation, stronger cross-business reporting, better team alignment, and renewed confidence in HubSpot. Because the engagement ran 18 months, the work moved beyond rescue into ongoing optimisation.",
    quote: null,
  },
  {
    id: "wconsulting-crm",
    stream: "ai",
    tag: "Digital Transformation",
    client: "W.consulting",
    logo: {
      text: "W.consulting",
      src: "https://wconsulting.co.za/assets/img/wconsulting_logo.png",
      website: "https://wconsulting.co.za/",
    },
    title: "Turning an underused HubSpot portal into a growth platform",
    status: null,
    summary:
      "W.consulting already had HubSpot, but it had been shaped by a generic sales process rather than how the business actually operated. Through proper discovery, Muloo rebuilt the CRM architecture and repositioned the portal as the core operating layer for marketing, events, CPD and future sales.",
    metrics: [
      { value: "3", label: "Core objects re-architected" },
      { value: "10", label: "Book Club workflows engineered" },
      { value: "QR-based", label: "CPD feedback engine" },
    ],
    facts: {
      industry: "Professional services & CPD training",
      region: "South Africa",
      timeline: "Foundational phase complete",
      services: ["HubSpot Discovery", "CRM Architecture", "Marketing Operations", "Event Automation", "Reporting"],
      stack: ["HubSpot", "Miro", "Custom code"],
    },
    champion: {
      label: "W.consulting leadership, marketing and CPD teams",
      detail:
        "The client champions helped turn HubSpot from a marketing tool into a shared operating layer across CRM, events, CPD feedback and future sales activation.",
    },
    problemBullets: [
      "Customer and company data was fragmented across Pastel, Outlook, CPD systems, websites and spreadsheets.",
      "Internal adoption varied by department, and there was no formal sales methodology to safely configure around.",
      "Events, CPD feedback, campaign tracking and reporting were disconnected from the CRM.",
    ],
    solutionBullets: [
      "Ran discovery in Miro to map journeys, service lines, behavioural flows, risks and the future-state ecosystem.",
      "Rebuilt Contacts, Companies and Deals with logic-based layouts, segmentation and campaign structure.",
      "Engineered Book Club automation, QR-based CPD feedback and reporting dashboards inside HubSpot.",
    ],
    challenge:
      "Data lived across Pastel, Outlook, the CPD platform and spreadsheets — no single source of truth and inconsistent ownership. Adoption was uneven across departments, there was no formal sales methodology, websites and front ends were separate, and there was no centralised event or CPD feedback system. The real risk: HubSpot becoming another expensive, disconnected contact list.",
    approach: [
      "Discovery first — mapped the wider digital ecosystem and customer journeys in a strategic Miro framework (lead pathways, CPD learner journeys, Book Club interactions, segmentation, future-state planning).",
      "Re-architected the CRM — a clean data model across Contacts, Companies and Deals, with logic-based layouts so the right fields appear at the right time.",
      "Phased, not big-bang — focused first on the areas where HubSpot could deliver immediate value, given uneven internal readiness.",
    ],
    built: [
      "End-to-end Book Club automation — a custom-coded event framework HubSpot doesn't support natively: RSVP and attendance tracking, engagement scoring, custom event summaries, Elite Member logic and ten supporting workflows.",
      "CPD Sorted survey engine — QR-based feedback captured across sessions flowing into HubSpot dashboards, with sentiment, satisfaction and training-performance reporting.",
      "Marketing operations — unified campaign structure, behavioural tracking across W.consulting and CPD, and early nurture and segmentation pathways.",
      "Sales foundation prepared — deal object, target-account structures and qualification fields readied to activate once a methodology is chosen, without forcing a half-baked process.",
      "Reporting dashboards across marketing, sales, events, CPD and CRM, plus the architecture for future HubSpot CMS consolidation.",
    ],
    outcome:
      "What began as a marketing activation became a digital-transformation foundation. W.consulting now runs a clean CRM, a working Book Club engine, centralised CPD feedback, campaign attribution and reporting dashboards — with a clear roadmap to consolidate websites into HubSpot CMS and activate sales. The handover marks the foundational phase complete; 2026 becomes the activation year.",
    quote: null,
  },
  {
    id: "magnisol",
    stream: "build",
    tag: "Portal Migration",
    client: "Magnisol",
    logo: {
      text: "Magnisol",
      src: "https://cdn.prod.website-files.com/673c4060b0dc76d703651043/67516c630d6e34fe6e0f8101_Magnisol_LogoRGB.png",
      website: "https://www.magnisol.com/",
    },
    title: "A clean HubSpot portal and theme-based website, decided properly",
    status: null,
    summary:
      "Magnisol needed to move quickly without making platform decisions it would regret. Muloo guided the HubSpot Hub selection, migrated the business into a clean new portal, and planned a theme-based website rollout that balanced speed, scalability and cost.",
    metrics: [
      { value: "New", label: "Clean HubSpot portal" },
      { value: "Theme-based", label: "Faster website rollout" },
      { value: "3", label: "Connected workstreams" },
    ],
    facts: {
      industry: "—",
      region: "Multi-region",
      timeline: "Phased rollout",
      services: ["HubSpot Advisory", "Portal Migration", "Website Strategy", "Discovery"],
      stack: ["HubSpot Content Hub", "HubSpot Marketing Hub"],
    },
    champion: {
      label: "Magnisol project stakeholders",
      detail:
        "The client-side champions needed a practical decision framework for HubSpot Hubs, portal setup, regional needs and website rollout before implementation moved too far.",
    },
    problemBullets: [
      "The HubSpot and website scope was still evolving while product, regional and subscription decisions needed to be made.",
      "The team needed a clean portal rather than layering new work into a messy environment.",
      "A rushed website build risked overengineering the first version and creating avoidable maintenance pain.",
    ],
    solutionBullets: [
      "Guided HubSpot Hub selection around actual requirements rather than licence-led assumptions.",
      "Recommended a clean new portal with CRM foundations, marketing structure, reporting and website readiness.",
      "Planned a theme-based website rollout to balance speed, cost control, content ownership and future scalability.",
    ],
    challenge:
      "Evolving scope. Magnisol needed clarity on which HubSpot Hubs were actually required, whether Content Hub, Marketing Hub or a bundle made sense, how to stand up a clean portal rather than layer onto a messy one, and how to ship a website quickly without over-engineering v1 — all while supporting regional requirements. Buy the wrong package or rush the build, and the portal looks fine on day one but becomes a pain six months later.",
    approach: [
      "Hub guidance & purchase support — matched HubSpot products to real requirements rather than guesswork, leaving room to grow without paying for unused tools.",
      "Migration to a clean new portal — built around actual business process and regional needs instead of carrying over legacy structure.",
      "Theme-based website for speed — proven page and module foundations, lower upfront cost, manageable inside HubSpot, with room for future design overlays.",
      "Discovery-led rollout — one connected plan across HubSpot setup, website structure and delivery, so CRM and website weren't built in isolation.",
    ],
    built: [
      "Workstream 1 — HubSpot & website discovery: business, regional structure, content, CRM and HubSpot product requirements, output as a clear implementation plan.",
      "Workstream 2 — foundational HubSpot setup: high-value foundations first, scoped carefully to avoid overbuilding too early.",
      "Workstream 3 — theme-based website setup & rollout: structure, content, design alignment, QA and handover.",
    ],
    outcome:
      "Magnisol gained a clear path forward: the right HubSpot package and Hub combination, a clean new portal, a practical theme-based website route, and a discovery-led delivery process — a faster, cleaner and more scalable launch with a foundation that supports future regional growth and marketing.",
    quote: null,
  },
  {
    id: "wconsulting-website",
    stream: "product",
    tag: "Website Platform",
    client: "W.consulting",
    logo: {
      text: "W.consulting",
      src: "https://wconsulting.co.za/assets/img/wconsulting_logo.png",
      website: "https://wconsulting.co.za/",
    },
    title: "A scalable HubSpot website, built agentically",
    status: "In delivery",
    summary:
      "W.consulting needed a scalable digital foundation, not just a redesign. Muloo is delivering a HubSpot website platform through an agentic build model — human-led architecture with AI-assisted design and development — connected directly into CRM and marketing.",
    metrics: [
      { value: "4", label: "Core delivery areas" },
      { value: "2", label: "Onsite discovery days" },
      { value: "Agentic", label: "AI-assisted build model" },
    ],
    facts: {
      industry: "Consulting",
      region: "South Africa",
      timeline: "In delivery",
      services: ["HubSpot Architecture", "Discovery", "Design System", "AI-assisted Design", "Theme Build", "QA Handover"],
      stack: ["HubSpot", "Claude", "Gemini AI Studio"],
    },
    champion: {
      label: "W.consulting leadership and internal development team",
      detail:
        "The client champions are shaping the website goals, service architecture and handover requirements so the final HubSpot theme can be managed internally after launch.",
    },
    problemBullets: [
      "W.consulting needed a website platform, not only a redesign.",
      "The platform needed to connect directly into HubSpot CRM and marketing while avoiding unnecessary lock-in.",
      "The delivery model had to move faster than a traditional custom build without sacrificing governance, security or maintainability.",
    ],
    solutionBullets: [
      "Structured the project around architecture, onsite discovery, sitemap planning, content needs and HubSpot alignment.",
      "Used AI-assisted design exploration as a controlled acceleration layer, followed by refinement with Sol Design.",
      "Planned a reusable HubSpot theme system with design tokens, modules, QA, security review and handover readiness.",
    ],
    challenge:
      "More than a nice-looking website: W.consulting needed a platform that supports clearer positioning, connects directly into HubSpot CRM and marketing, avoids platform lock-in, gives the internal team control after launch, supports governance, security and QA, moves faster than a traditional custom build, and creates reusable design and code foundations. The balance to strike: flexibility, speed, governance and long-term maintainability.",
    approach: [
      "1 · Architecture — product and website discovery, sitemap and structure, HubSpot alignment, governance and handover planning, anchored by two onsite discovery days with the W.consulting team.",
      "2 · Design & build — AI-assisted exploration (Claude, Gemini AI Studio) for early direction, refinement with Sol Design, then design tokens, components and a properly governed HubSpot theme via the Muloo HubSpot Build Agent.",
      "3 · Security & QA — internal dev-team review, security checks, template, module and browser testing, and handover readiness.",
      "4 · Page build & content — page production, navigation, forms, content and launch prep, driven in collaboration with the W.consulting team.",
    ],
    built: [
      "A controlled acceleration model — AI supports speed, ideation and build efficiency, but architecture, governance and final delivery stay human-led.",
      "A reusable build system — design tokens, component structures, layout logic, design documentation and a structured HubSpot theme rather than one-off pages.",
      "Governance and lock-in mitigation — modular theme architecture, documented templates, exported assets, version-controlled code and a clean handover to the internal team.",
    ],
    outcome:
      "Expected: a modern, governed HubSpot website platform — a reusable theme foundation, a documented design and component system, stronger CRM and website alignment, better internal content control, and a safer long-term platform for marketing and sales. Build the system properly first, then accelerate delivery.",
    quote: null,
  },
  {
    id: "epi-use-regional-hubspot",
    stream: "hub",
    tag: "Operating Model",
    client: "EPI-USE",
    logo: {
      text: "EPI-USE",
      src: "https://8124098.fs1.hubspotusercontent-na1.net/hub/8124098/hubfs/EU%20Theme/EPI-USE-logo.png?width=854&height=221&name=EPI-USE-logo.png",
      website: "https://www.epiuse.com/",
    },
    title: "Designing a regional HubSpot operating model for global visibility",
    status: "Strategic roadmap",
    summary:
      "EPI-USE was operating across multiple regions with different HubSpot portals, sales processes, marketing maturity levels and reporting expectations. Muloo reframed the challenge as a global operating model problem, with HubSpot governance and a Command Centre intelligence layer sitting underneath it.",
    metrics: [
      { value: "5", label: "Regions mapped" },
      { value: "3", label: "Reporting layers" },
      { value: "Multi-portal", label: "Governance model" },
    ],
    facts: {
      industry: "Enterprise services and technology",
      region: "Africa, UK, Australia, Brazil, USA",
      timeline: "Roadmap and advisory phase",
      services: ["HubSpot Operating Model", "Regional Audit", "Data Governance", "Reporting Architecture", "AI Readiness"],
      stack: ["HubSpot", "Command Centre", "AI agents"],
    },
    champion: {
      label: "Jac and regional EPI-USE stakeholders",
      detail:
        "The client-side champion needed a mature recommendation that balanced regional independence, global standards and leadership visibility without forcing a premature single-portal decision.",
    },
    problemBullets: [
      "Each region had different HubSpot maturity, portal structure, sales process, marketing setup and reporting needs.",
      "Global leadership needed visibility without flattening regional operating realities into one rigid CRM model.",
      "AI and Command Centre use cases would only work if the underlying data model, lifecycle definitions and reporting rules were standardised.",
    ],
    solutionBullets: [
      "Separated the future state into global standards, regional execution and a central intelligence layer.",
      "Recommended a staged roadmap: audit regions, define global standards, clean Africa, showcase the UK, then connect portals.",
      "Positioned the Command Centre above regional portals as the cross-portal reporting and AI-readiness layer.",
    ],
    challenge:
      "EPI-USE was not facing one simple HubSpot setup issue. The business needed a regional operating model that could support Africa, the UK, Australia, Brazil and the USA, each with different levels of CRM maturity, sales motion, marketing activity and reporting expectations. The main risk was building too much before account planning, pipelines, lifecycle stages, ownership and global reporting definitions were clearly agreed.",
    approach: [
      "Regional breakdown — mapped the current reality across Africa, the UK, Australia, Brazil and the USA, including portal maturity, risks, campaign readiness and leadership reporting needs.",
      "Global vs regional model — defined which properties, lifecycle definitions, reporting rules, account classifications and data quality requirements should be global, while leaving room for local pipelines, campaigns and service naming.",
      "Reporting architecture — separated reporting into regional operational dashboards, regional leadership reporting and global intelligence for EPI-USE group leadership.",
      "AI readiness — positioned clean, consistent data as the condition for useful account insights, stuck-deal detection, cross-sell recommendations and data-quality monitoring.",
    ],
    built: [
      "A recommended global HubSpot operating model with central standards, regional execution and an intelligence layer.",
      "A five-phase roadmap: regional audit, global standards, Africa clean-up, UK showcase and multi-portal Command Centre connection.",
      "Pipeline governance guidance that allows regional stages while mapping them into shared global reporting groups.",
      "A Command Centre role definition focused on account insights, portfolio recommendations, cross-portal reporting, AI agents and global performance dashboards.",
    ],
    outcome:
      "Muloo recommended avoiding a rushed move into one global HubSpot portal. The better first move is to define the global EPI-USE operating model, prove it through Africa and the UK, and use the Command Centre as the intelligence layer across regions. Once the data and reporting model is proven, EPI-USE can make a more informed long-term consolidation decision.",
    quote: null,
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
  h1: "Agentic full-stack builds.",
  intro: "We use human-led, AI-assisted delivery to design, build, harden, and ship production software across apps, APIs, integrations, data layers, and operational workflows.",
  approach: [
    { step: "01", title: "Frame", desc: "Map the product goal, user workflow, data boundaries, and technical constraints before code generation starts." },
    { step: "02", title: "Architect", desc: "Design the application, integration contracts, data model, and release path with human review at every decision point." },
    { step: "03", title: "Build", desc: "Use agentic delivery to accelerate implementation while keeping code standards, QA, and deployment control in place." },
    { step: "04", title: "Harden", desc: "Stabilise runtime behaviour with monitoring, security checks, rollback paths, and production support plans." }
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
  h1: "AI that ships inside real systems.",
  intro: "We design agent workflows, AI-assisted build processes, and production guardrails that support full-stack delivery instead of staying trapped in demo mode.",
  services: [
    {
      title: "Guardrailed AI Agents",
      desc: "Task-specific agents with scoped permissions, approval paths, tool boundaries, and audit trails for real operational workflows.",
      lead: "Operations"
    },
    {
      title: "Agentic Build Acceleration",
      desc: "AI-assisted engineering workflows that speed delivery while preserving architecture, code standards, review discipline, and deployment control.",
      lead: "Engineering"
    },
    {
      title: "AI-Built App Hardening",
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
