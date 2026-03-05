import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, ArrowDown, Database, GitBranch, Workflow, BarChart3, CheckCircle2, Link2 } from "lucide-react";
import { Link } from "wouter";

const strategyCallUrl = "/contact/book/jarrud";

const architectureAssurances = [
  "clean pipelines",
  "consistent lifecycle stages",
  "accurate reporting",
  "automation that scales with the business",
];

const architectureLayers = [
  {
    title: "Data model",
    icon: Database,
    items: ["Contacts", "Companies", "Deals", "Tickets", "Custom objects"],
  },
  {
    title: "Lifecycle architecture",
    icon: CheckCircle2,
    items: ["Lead stages", "Lifecycle stages", "Customer journey tracking"],
  },
  {
    title: "Pipeline architecture",
    icon: GitBranch,
    items: ["Sales pipelines", "Customer onboarding pipelines", "Renewal pipelines"],
  },
  {
    title: "Automation layer",
    icon: Workflow,
    items: ["Workflows", "Notifications", "Task automation"],
  },
  {
    title: "Reporting layer",
    icon: BarChart3,
    items: ["Dashboards", "Attribution", "Revenue tracking"],
  },
];

const architectureDiagram = [
  {
    title: "Marketing",
    items: ["Lead capture"],
    accent: "text-stream-ai",
    badgeBg: "bg-stream-ai/10",
    border: "border-stream-ai/25",
  },
  {
    title: "CRM",
    items: ["Contacts", "Companies", "Deals"],
    accent: "text-stream-hub",
    badgeBg: "bg-stream-hub/10",
    border: "border-stream-hub/25",
  },
  {
    title: "Sales pipelines",
    items: ["New business", "Expansion", "Renewals"],
    accent: "text-stream-build",
    badgeBg: "bg-stream-build/10",
    border: "border-stream-build/25",
  },
  {
    title: "Customer success",
    items: ["Onboarding", "Support tickets"],
    accent: "text-stream-product",
    badgeBg: "bg-stream-product/10",
    border: "border-stream-product/25",
  },
  {
    title: "Reporting",
    items: ["Dashboards", "Revenue analytics"],
    accent: "text-brand-teal",
    badgeBg: "bg-brand-teal/10",
    border: "border-brand-teal/25",
  },
];

const architectureProblems = [
  "Duplicate lifecycle stages",
  "Overlapping pipelines",
  "Broken automation",
  "Disconnected reporting",
];

const architectureSteps = [
  {
    title: "Discovery workshop",
    desc: "Understand the business model and sales process.",
  },
  {
    title: "Data architecture design",
    desc: "Define object relationships and properties.",
  },
  {
    title: "Pipeline architecture",
    desc: "Build pipelines aligned to revenue stages.",
  },
  {
    title: "Automation architecture",
    desc: "Define workflows that support the process.",
  },
  {
    title: "Reporting design",
    desc: "Ensure leadership reporting is reliable.",
  },
];

const scenarioItems = [
  "Lead generation through marketing campaigns",
  "Sales pipeline for new business",
  "Customer onboarding pipeline",
  "Renewal pipeline",
];

export function ServicesHubspotArchitecture() {
  return (
    <div className="flex flex-col">
      <SEO
        title="HubSpot architecture and CRM system design"
        description="Technical CRM architecture consultancy for organisations implementing or scaling HubSpot, with structured data, pipelines, automation, and reporting."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/hubspot-architecture"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-brand-teal hover:text-brand-teal/80">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/muloo-hub" className="text-brand-teal hover:text-brand-teal/80">Muloo Hub</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">HubSpot Architecture</span>
          </div>
          <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5">
            HubSpot Architecture
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
            HubSpot architecture for scalable CRM systems
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] max-w-3xl mb-8">
            Design HubSpot correctly from the beginning to support sales, marketing, service and reporting across your organisation.
          </p>
          <Link href={strategyCallUrl}>
            <Button size="lg" className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-8 h-14 rounded-lg">
              Book a CRM architecture review <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-4xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why architecture matters</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8] mb-8">
            Many CRM implementations fail because they focus on tools instead of structure.
          </p>
          <p className="text-base md:text-lg text-white/80 leading-[1.8] mb-5">
            A well-designed HubSpot architecture ensures:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl">
          {architectureAssurances.map((item) => (
            <div key={item} className="glass-card rounded-xl p-6 border border-white/10">
              <p className="text-base md:text-lg text-white/85">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Architecture diagram</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10">
            {architectureDiagram.map((layer, index) => (
              <div key={layer.title}>
                <div className={`rounded-xl border ${layer.border} bg-white/[0.02] p-5 md:p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{layer.title}</h3>
                    <span className={`text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded-full ${layer.badgeBg} ${layer.accent}`}>
                      Layer {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-2.5">
                    {layer.items.map((item) => (
                      <div key={item} className="rounded-lg border border-white/10 bg-[#0A1131] px-3 py-2.5 text-sm text-white/85">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {index < architectureDiagram.length - 1 && (
                  <div className="flex justify-center py-3 md:py-4">
                    <div className="h-9 w-9 rounded-full border border-white/10 bg-[#0A1131] flex items-center justify-center">
                      <ArrowDown className="h-4 w-4 text-brand-teal" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Core architecture layers</h2>
        </div>

        <div className="max-w-5xl space-y-4">
          {architectureLayers.map((layer, index) => (
            <div key={layer.title} className="glass-card rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center shrink-0">
                  <layer.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-brand-teal mb-1">
                    Layer {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3">{layer.title}</h3>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-base text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Typical architecture problems</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureProblems.map((problem) => (
            <div key={problem} className="glass-card rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white leading-[1.4]">{problem}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How Muloo designs CRM architecture</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {architectureSteps.map((step, index) => (
            <div key={step.title} className="glass-card rounded-xl border border-white/10 p-6">
              <p className="text-5xl font-black text-white/[0.06] mb-3">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="text-lg font-bold text-white mb-2 leading-[1.4]">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.8]">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Example architecture scenario</h2>
        </div>

        <div className="max-w-4xl glass-card rounded-2xl p-8 md:p-10 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">B2B SaaS company</h3>
          <ul className="space-y-4 mb-6">
            {scenarioItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
                <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
            All tracked inside HubSpot with structured reporting.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Need help designing your HubSpot architecture?</h2>
          <Link href={strategyCallUrl}>
            <Button className="bg-gradient-muloo border-none text-white hover:brightness-110 h-14 px-8 font-bold">
              Book a CRM architecture consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
