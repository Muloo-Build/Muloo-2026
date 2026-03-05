import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  GitBranch,
  ShieldCheck,
  Users2,
} from "lucide-react";
import { SEO } from "@/components/layout/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const meetingUrl = "/contact/book/jarrud";

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
  return (
    <div className="flex flex-col">
      <SEO
        title="Guided Deployment | Muloo"
        description="Structured delivery for HubSpot and connected systems, with clear governance, sprint based releases, and confident launches."
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-3xl">
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
            Muloo&apos;s Guided Deployment is how we deliver HubSpot and connected systems in a way that stays disciplined, but doesn&apos;t fall apart the moment priorities change. We align on outcomes, ship in practical launchable slices, and keep progress visible with clear governance and comms.
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

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Guided Deployment Framework</h2>
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
