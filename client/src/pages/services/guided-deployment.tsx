import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  GitBranch,
  ShieldCheck,
  Users2,
  Workflow,
} from "lucide-react";
import { SEO } from "@/components/layout/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const meetingUrl = "/contact/book/jarrud";
const relatedHubspotServices = [
  { title: "HubSpot Implementation", href: "/muloo-hub/hubspot-implementation" },
  { title: "HubSpot Migration", href: "/muloo-hub/hubspot-migration" },
  { title: "HubSpot Optimisation", href: "/muloo-hub/hubspot-optimisation" },
];

const structuredDeploymentPhases = [
  {
    number: "01",
    title: "Audit",
    description: "Review the existing CRM structure, pipelines, properties, workflows and reporting.",
    outcome: "Clear understanding of the current HubSpot architecture.",
    indicatorClass: "bg-stream-hub/15 text-stream-hub",
    ringClass: "ring-stream-hub/30",
  },
  {
    number: "02",
    title: "Design",
    description: "Define CRM architecture, pipeline structure, lifecycle stages and reporting model.",
    outcome: "Blueprint for the HubSpot system.",
    indicatorClass: "bg-stream-build/15 text-stream-build",
    ringClass: "ring-stream-build/30",
  },
  {
    number: "03",
    title: "Build",
    description: "Configure HubSpot pipelines, properties, automation and integrations.",
    outcome: "Working CRM aligned with business processes.",
    indicatorClass: "bg-stream-ai/15 text-stream-ai",
    ringClass: "ring-stream-ai/30",
  },
  {
    number: "04",
    title: "Launch",
    description: "Deploy the new structure, train users and validate reporting accuracy.",
    outcome: "Operational HubSpot system.",
    indicatorClass: "bg-stream-product/15 text-stream-product",
    ringClass: "ring-stream-product/30",
  },
  {
    number: "05",
    title: "Optimise",
    description: "Refine workflows, improve reporting and expand automation as the organisation grows.",
    outcome: "HubSpot that evolves with the business.",
    indicatorClass: "bg-brand-teal/15 text-brand-teal",
    ringClass: "ring-brand-teal/30",
  },
];

const guidedDeploymentTrustConfig = {
  showCredibilityStrip: true,
  credibilityItems: [
    {
      id: "hubspot-solutions-partner-badge",
      type: "badge",
      label: "HubSpot Solutions Partner",
      src: "/assets/badges/hubspot-solutions-partner.png",
      alt: "HubSpot Solutions Partner badge",
      maxHeightClass: "h-8 md:h-10",
    },
    {
      id: "hubspot-tenure",
      type: "text",
      icon: Clock3,
      label: "10+ years HubSpot partner",
    },
    {
      id: "governance-discipline",
      type: "text",
      icon: ShieldCheck,
      label: "CRM governance + delivery discipline",
    },
    {
      id: "global-delivery",
      type: "text",
      icon: GitBranch,
      label: "Cape Town, serving UK AU US",
    },
    {
      id: "service-coverage",
      type: "text",
      icon: Users2,
      label: "HubSpot onboarding, migrations, CMS, integrations",
      optional: true,
    },
  ],
  showWhoSection: true,
  whoItsFor: {
    heading: "Who it's for and who it isn't",
    forYouTitle: "Who it's for",
    forYouItems: [
      "Teams that need to launch confidently without losing control of scope or quality.",
      "Organisations balancing delivery pace with governance, risk controls, and clear ownership.",
      "Leaders who want technical progress that is visible, measurable, and decision ready.",
    ],
    notForYouTitle: "Not for you",
    notForYouItems: [
      "If you want unstructured delivery with no acceptance criteria or release gates.",
      "If every in flight sprint must absorb ad hoc changes without trade off decisions.",
      "If there is no stakeholder capacity for weekly decisions, demos, and sign off.",
    ],
  },
  showDeliverablesSection: true,
  deliverablesHeading: "What you'll walk away with",
  deliverables: [
    "Outcome roadmap and sprint plan.",
    "QA checklist and release gates.",
    "Data model and property map.",
    "Integration spec and validation rules.",
    "Handover pack and admin runbook.",
    "Training plan (role based).",
  ],
  showCadenceSection: true,
  cadenceHeading: "Sample cadence",
  cadence: [
    {
      phase: "Week 0",
      title: "Alignment and scope framing",
      detail: "Confirm outcomes, priorities, constraints, success criteria, and sprint boundaries.",
    },
    {
      phase: "Week 1",
      title: "Sprint one build and demo",
      detail: "Deliver the first controlled slice, run QA checks, and gather stakeholder feedback.",
    },
    {
      phase: "Week 2",
      title: "Sprint two build and validation",
      detail: "Implement agreed changes between sprints and validate against acceptance criteria.",
    },
    {
      phase: "Week 3",
      title: "Launch and stabilisation",
      detail: "Go live with release gates, monitor outcomes, and close operational risks.",
    },
    {
      phase: "Post launch",
      title: "Review and reprioritisation",
      detail: "Capture learnings, update the roadmap, and plan the next release cadence.",
    },
  ],
  showCredentialsSection: true,
  credentialsHeading: "Credentials and proof",
  credentialsSubcopy:
    "Partner and certification signals are included below. Update asset paths as badges and accreditations evolve.",
  credentialBadges: [
    {
      id: "cred-hubspot-partner",
      label: "HubSpot Solutions Partner badge",
      src: "/assets/badges/hubspot-solutions-partner.png",
      alt: "HubSpot Solutions Partner badge",
      maxHeightClass: "h-8 md:h-10",
    },
    {
      id: "cred-hubspot-academy-admin",
      label: "HubSpot Academy certification badge",
      src: "/assets/badges/hubspot-academy-admin.png",
      alt: "HubSpot Academy certification badge",
      maxHeightClass: "h-8 md:h-10",
    },
    {
      id: "cred-hubspot-academy-integration",
      label: "HubSpot Academy integration certification badge",
      src: "/assets/badges/hubspot-academy-integration.png",
      alt: "HubSpot Academy integration certification badge",
      maxHeightClass: "h-8 md:h-10",
    },
  ],
  caseStudySnapshots: [
    {
      client: "Client name",
      delivered: "What we delivered",
      timeframe: "Timeframe",
      href: "",
    },
    {
      client: "Client name",
      delivered: "What we delivered",
      timeframe: "Timeframe",
      href: "",
    },
    {
      client: "Client name",
      delivered: "What we delivered",
      timeframe: "Timeframe",
      href: "",
    },
  ],
};

const frameworkSteps = [
  {
    step: "01",
    title: "Align and prioritise",
    bullets: [
      "Confirm outcomes and success definition",
      "Assess current setup, data, constraints",
      "Shared roadmap and acceptance criteria",
    ],
  },
  {
    step: "02",
    title: "Build in sprints with clear touchpoints",
    bullets: [
      "Short controlled delivery cycles",
      "Weekly check ins and meaningful demos",
      "Change happens between sprints, not mid flight",
    ],
  },
  {
    step: "03",
    title: "Launch, stabilise, measure",
    bullets: [
      "Release a usable slice",
      "Stabilise and validate against outcomes",
      "Documentation and handover",
    ],
  },
  {
    step: "04",
    title: "Re prioritise and continue",
    bullets: [
      "Review what we learned",
      "Re order the roadmap",
      "Deliver next slice or move to optimisation cadence",
    ],
  },
];

const ownershipColumns = [
  {
    title: "You own",
    icon: Users2,
    bullets: [
      "Priorities, outcomes, definition of done",
      "Final sign off on releases",
    ],
  },
  {
    title: "We own",
    icon: ShieldCheck,
    bullets: [
      "Delivery method and technical standards",
      "Data hygiene, security, safe cutover controls",
    ],
  },
  {
    title: "Together",
    icon: GitBranch,
    bullets: [
      "Adjust direction between sprints",
      "Transparent impact on timeline and scope",
    ],
  },
];

const includedItems = [
  "Outcome alignment: roadmap, acceptance criteria, definition of done",
  "Delivery: HubSpot build, integrations, testing, go live support",
  "Governance: change control, risk tracking, decision log, release gates",
  "Communication: weekly cadence, clear updates, visible progress",
  "Enablement: role based training, admin handover, documentation, runbooks",
  "Transition: post launch review and next phase plan",
];

const launchableOutcomes = [
  {
    title: "HubSpot implementation",
    first: "Sales Hub live with clean pipelines and reporting.",
    next: "Then marketing automation, then advanced workflows and integrations.",
  },
  {
    title: "Website on HubSpot",
    first: "Core pages, conversion paths, analytics and governance live.",
    next: "Then resource library, regional localisation, advanced components.",
  },
  {
    title: "Integrations",
    first: "Contacts and companies sync with dedupe and validation first.",
    next: "Then deals and lifecycle logic, then automation and reconciliation.",
  },
  {
    title: "AI assisted ops",
    first: "Start with one high impact workflow.",
    next: "Then expand into repeatable agents once governance is proven.",
  },
];

const packageCards = [
  {
    title: "Discovery Sprint",
    desc: "Fixed scope engagement to confirm outcomes, map constraints, and produce a decision ready plan.",
    timeline: "2 to 3 weeks",
    price: "From R XX,XXX",
    cta: "Book a scoping call",
    href: meetingUrl,
    highlighted: false,
  },
  {
    title: "Guided Deployment",
    desc: "Deliver the first measurable outcome, then sequence the next slices.",
    timeline: "4 to 8 weeks to first meaningful release",
    price: "From R XX,XXX",
    cta: "Book a scoping call",
    href: meetingUrl,
    highlighted: true,
  },
  {
    title: "Support and Optimisation",
    desc: "Reliable momentum without spinning up a new project every month.",
    timeline: "active within 3 to 5 days",
    price: "From R X,XXX per month",
    cta: "Talk to us",
    href: "/contact",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Can we change scope mid project?",
    a: "Yes. We change scope between sprints, with clear impact on timeline, cost, and delivery sequence before anything is approved.",
  },
  {
    q: "How often will we hear from you?",
    a: "Weekly check ins are standard, with progress updates, demos, risks, and decisions captured in a clear operating cadence.",
  },
  {
    q: "Do you do data migration and integrations?",
    a: "Yes. Data migration, integration design, implementation, and validation are part of delivery where required.",
  },
  {
    q: "What happens after the first launch?",
    a: "We stabilise, measure outcomes, review what changed, then re prioritise and move into the next release or optimisation cadence.",
  },
  {
    q: "What do you guarantee?",
    a: "We guarantee disciplined delivery governance, clear communication, and transparent change control. We do not promise outcomes we cannot technically evidence.",
  },
];

export function ServicesGuidedDeployment() {
  const [hiddenBadgeIds, setHiddenBadgeIds] = useState<Record<string, boolean>>({});

  const onBadgeError = (id: string) => {
    setHiddenBadgeIds((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="flex flex-col">
      <SEO
        title="Guided Deployment | Muloo"
        description="Structured delivery for HubSpot and connected systems, with clear governance, sprint based releases, and confident launches."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/guided-deployment"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-brand-teal hover:text-brand-teal/80">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/muloo-hub" className="text-brand-teal hover:text-brand-teal/80">Muloo Hub</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Guided Deployment</span>
          </div>
          <Badge
            variant="outline"
            className="mb-6 border-brand-teal/30 text-brand-teal bg-brand-teal/5"
            data-testid="badge-guided-deployment"
          >
            Guided Deployment
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
            Launch with confidence. Adapt without chaos.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] max-w-3xl">
            Muloo Structured Deployment is how we deliver HubSpot and connected systems in a way that stays disciplined, but doesn&apos;t fall apart the moment priorities change. We align on outcomes, ship in practical launchable slices, and keep progress visible with clear governance and comms.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href={meetingUrl}>
              <Button
                size="lg"
                className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-8 h-14 rounded-lg glow-muloo-sm"
                data-testid="button-guided-deployment-primary-cta"
              >
                Book a scoping call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#whats-included">
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 text-white hover:bg-white/5 h-14 px-8 rounded-lg"
                data-testid="button-guided-deployment-secondary-cta"
              >
                See what&apos;s included
              </Button>
            </a>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5 bg-section-soft">
        <div className="mb-12 max-w-4xl">
          <Badge
            variant="outline"
            className="mb-5 inline-flex items-center gap-2 border-brand-teal/30 text-brand-teal bg-brand-teal/10 uppercase text-[11px] tracking-wider"
            data-testid="badge-muloo-method"
          >
            <Workflow className="h-3.5 w-3.5" />
            Muloo Method
          </Badge>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8] mb-6">
            The Muloo Method is our structured approach to designing and deploying HubSpot environments. It ensures CRM architecture, automation and reporting are implemented in the right order.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Muloo Structured Deployment Model</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
          {structuredDeploymentPhases.map((phase, index) => (
            <div key={phase.number} className={`relative glass-card rounded-xl p-6 border border-white/10 ring-1 ${phase.ringClass}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`h-10 w-10 rounded-full ${phase.indicatorClass} flex items-center justify-center border border-current/30`}>
                  <span className="text-sm font-bold">{phase.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
              </div>

              <p className="text-base text-muted-foreground leading-[1.8] mb-4">{phase.description}</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-mono uppercase tracking-wider text-brand-teal mb-2">Outcome</p>
                <p className="text-sm text-white/80 leading-[1.7]">{phase.outcome}</p>
              </div>

              {index < structuredDeploymentPhases.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-8 -right-6 w-6 h-px bg-white/15" />
                  <div className="lg:hidden absolute left-8 -bottom-8 h-8 w-px bg-white/15" />
                </>
              )}
            </div>
          ))}
        </div>

        <p className="text-base md:text-lg text-muted-foreground leading-[1.8] mt-10 max-w-4xl">
          Muloo Structured Deployment ensures HubSpot is implemented with the right architecture, governance and reporting foundations from the beginning.
        </p>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why we use a structured deployment model</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8] mb-6">
            Most CRM projects fail because they jump straight into configuration without designing the system first.
          </p>
          <p className="text-base md:text-lg text-white/80 leading-[1.8] mb-6">
            Muloo Structured Deployment ensures:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Clear CRM architecture",
              "Reliable reporting",
              "Structured pipelines",
              "Controlled automation",
              "Strong user adoption",
            ].map((item) => (
              <div key={item} className="glass-card rounded-xl p-5 border border-white/10">
                <p className="text-base text-white/85 leading-[1.7]">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
            The goal is to implement HubSpot as a business system, not just a collection of tools.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Structured HubSpot delivery.</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8] mb-8">
            Muloo Structured Deployment is the delivery method Muloo uses to implement and scale HubSpot environments safely and predictably.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {relatedHubspotServices.map((service) => (
              <Link key={service.href} href={service.href}>
                <Button variant="outline" className="border-white/15 text-white hover:bg-white/5 h-11 px-6">
                  {service.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {guidedDeploymentTrustConfig.showCredibilityStrip && (
        <Section className="py-6 md:py-8 bg-section-soft border-t border-b border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            {guidedDeploymentTrustConfig.credibilityItems.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 flex items-center gap-3 min-h-14"
                data-testid={`credibility-item-${item.id}`}
              >
                {item.type === "badge" ? (
                  item.src && !hiddenBadgeIds[item.id] ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`${item.maxHeightClass} w-auto object-contain`}
                      loading="lazy"
                      onError={() => onBadgeError(item.id)}
                    />
                  ) : (
                    <Badge variant="outline" className="border-brand-teal/30 text-brand-teal bg-brand-teal/5 text-xs">
                      {item.label}
                    </Badge>
                  )
                ) : (
                  <>
                    {item.icon && <item.icon className="h-4 w-4 text-brand-teal shrink-0" />}
                    <span className="text-sm text-white/75 leading-[1.4]">{item.label}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Projects fail for two opposite reasons</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          <div className="glass-card rounded-xl p-7 border border-white/10" data-testid="card-problem-rigid">
            <h3 className="text-xl font-bold text-white mb-2">Too rigid</h3>
            <p className="text-muted-foreground text-base leading-[1.8]">
              It can&apos;t absorb what you learn once users touch the system.
            </p>
          </div>
          <div className="glass-card rounded-xl p-7 border border-white/10" data-testid="card-problem-vague">
            <h3 className="text-xl font-bold text-white mb-2">Too vague</h3>
            <p className="text-muted-foreground text-base leading-[1.8]">
              Everything becomes urgent, scope drifts, and nothing ships.
            </p>
          </div>
        </div>

        <p className="text-lg text-white/80 leading-[1.8] mt-8 max-w-4xl">
          You need a delivery approach that protects quality and timelines, but still lets you change direction when the evidence says you should.
        </p>
      </Section>

      {guidedDeploymentTrustConfig.showWhoSection && (
        <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
          <div className="mb-14 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {guidedDeploymentTrustConfig.whoItsFor.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-7 border border-white/10" data-testid="card-who-its-for">
              <h3 className="text-2xl font-bold text-white mb-4">{guidedDeploymentTrustConfig.whoItsFor.forYouTitle}</h3>
              <ul className="space-y-3">
                {guidedDeploymentTrustConfig.whoItsFor.forYouItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base text-muted-foreground leading-[1.7]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-xl p-7 border border-white/10" data-testid="card-not-for-you">
              <h3 className="text-2xl font-bold text-white mb-4">{guidedDeploymentTrustConfig.whoItsFor.notForYouTitle}</h3>
              <ul className="space-y-3">
                {guidedDeploymentTrustConfig.whoItsFor.notForYouItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base text-muted-foreground leading-[1.7]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      )}

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Muloo Structured Deployment</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {frameworkSteps.map((item) => (
            <div
              key={item.step}
              className="glass-card rounded-xl p-7 border border-white/10"
              data-testid={`card-framework-${item.step}`}
            >
              <div className="text-5xl font-black text-white/[0.05] mb-3">{item.step}</div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <ul className="space-y-2.5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-base text-muted-foreground leading-[1.7]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {guidedDeploymentTrustConfig.showDeliverablesSection && (
        <Section className="py-20 md:py-[120px] border-t border-white/5">
          <div className="mb-14 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {guidedDeploymentTrustConfig.deliverablesHeading}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guidedDeploymentTrustConfig.deliverables.map((item, index) => (
              <div
                key={item}
                className="glass-card rounded-xl p-6 border border-white/10"
                data-testid={`card-deliverable-${index + 1}`}
              >
                <div className="h-9 w-9 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-4 w-4 text-brand-teal" />
                </div>
                <p className="text-base text-white/85 leading-[1.8]">{item}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {guidedDeploymentTrustConfig.showCadenceSection && (
        <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
          <div className="mb-14 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {guidedDeploymentTrustConfig.cadenceHeading}
            </h2>
          </div>

          <div className="max-w-4xl pl-4 md:pl-6 border-l border-white/10 space-y-6">
            {guidedDeploymentTrustConfig.cadence.map((item) => (
              <div key={item.phase} className="relative glass-card rounded-xl border border-white/10 p-6">
                <span className="absolute -left-[31px] md:-left-[39px] top-7 h-3 w-3 rounded-full bg-brand-teal" />
                <p className="text-sm font-mono uppercase tracking-wider text-brand-teal mb-2">{item.phase}</p>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-[1.8]">{item.detail}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Where you have a say (and where you don&apos;t)</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ownershipColumns.map((column) => (
            <div key={column.title} className="glass-card rounded-xl p-7 border border-white/10" data-testid={`card-ownership-${column.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="h-11 w-11 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-4">
                <column.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-base text-muted-foreground leading-[1.7]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="whats-included" className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What&apos;s included</h2>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-5xl">
          <ul className="space-y-4">
            {includedItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
                <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Examples of launchable outcomes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {launchableOutcomes.map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-7 border border-white/10" data-testid={`card-outcome-${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-base text-white/80 leading-[1.8] mb-3">{item.first}</p>
              <p className="text-base text-muted-foreground leading-[1.8]">{item.next}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Simple engagement options</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packageCards.map((pkg) => (
            <div
              key={pkg.title}
              className={`glass-card rounded-xl p-7 border ${pkg.highlighted ? "border-brand-teal/35 shadow-[0_0_30px_-10px_rgba(0,196,204,0.25)]" : "border-white/10"}`}
              data-testid={`card-package-${pkg.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <h3 className="text-xl font-bold text-white mb-3">{pkg.title}</h3>
              <p className="text-base text-muted-foreground leading-[1.8] mb-5">{pkg.desc}</p>

              <div className="flex items-center gap-2 text-white/75 mb-2">
                <Clock3 className="h-4 w-4 text-brand-teal" />
                <span className="text-sm">{pkg.timeline}</span>
              </div>

              <div className="text-lg font-bold text-white mb-6">{pkg.price}</div>

              <Link href={pkg.href}>
                <Button
                  className={pkg.highlighted ? "w-full bg-gradient-muloo border-none text-white hover:brightness-110 h-11" : "w-full h-11 bg-white/5 border border-white/15 text-white hover:bg-white/10"}
                  data-testid={`button-package-${pkg.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {pkg.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {guidedDeploymentTrustConfig.showCredentialsSection && (
        <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
          <div className="mb-14 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {guidedDeploymentTrustConfig.credentialsHeading}
            </h2>
            <p className="text-base text-muted-foreground leading-[1.8] mt-4">
              {guidedDeploymentTrustConfig.credentialsSubcopy}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {guidedDeploymentTrustConfig.credentialBadges.map((badge) => (
              <div key={badge.id} className="rounded-lg border border-white/10 bg-white/[0.02] p-4 flex items-center gap-3 min-h-16" data-testid={`credential-badge-${badge.id}`}>
                {badge.src && !hiddenBadgeIds[badge.id] ? (
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className={`${badge.maxHeightClass} w-auto object-contain`}
                    loading="lazy"
                    onError={() => onBadgeError(badge.id)}
                  />
                ) : (
                  <Badge variant="outline" className="border-brand-teal/30 text-brand-teal bg-brand-teal/5 text-xs">
                    {badge.label}
                  </Badge>
                )}
                <span className="text-sm text-white/70">{badge.label}</span>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Case study snapshots</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {guidedDeploymentTrustConfig.caseStudySnapshots.map((snapshot, index) => (
                <div
                  key={`${snapshot.client}-${index}`}
                  className="glass-card rounded-xl p-6 border border-white/10"
                  data-testid={`card-snapshot-${index + 1}`}
                >
                  <p className="text-xs font-mono uppercase tracking-wider text-brand-teal mb-3">
                    {snapshot.client}
                  </p>
                  <h4 className="text-lg font-bold text-white mb-2">{snapshot.delivered}</h4>
                  <p className="text-sm text-muted-foreground mb-5">{snapshot.timeframe}</p>
                  {snapshot.href ? (
                    <Link href={snapshot.href}>
                      <Button variant="outline" className="h-9 text-sm border-white/15 text-white hover:bg-white/5">
                        View snapshot <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <span className="text-sm text-white/40">Link to be added</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">FAQs</h2>
        </div>

        <div className="max-w-4xl glass-card rounded-xl border border-white/10 px-6 md:px-8">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`} className="border-white/10">
                <AccordionTrigger className="text-base md:text-lg text-white hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-[1.8]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to ship something real, without chaos?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-[1.8]">
            Book a scoping call and we&apos;ll map the first launchable slice, the risks, and the fastest path to value.
          </p>
          <Link href={meetingUrl}>
            <Button
              size="lg"
              className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-8 h-14 rounded-lg glow-muloo-sm"
              data-testid="button-guided-deployment-final-cta"
            >
              Book a scoping call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
