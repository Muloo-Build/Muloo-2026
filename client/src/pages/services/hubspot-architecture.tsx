import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, Database, GitBranch, Workflow, BarChart3, CheckCircle2 } from "lucide-react";
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

const architectureProblems = [
  "Duplicate lifecycle stages",
  "Overlapping pipelines",
  "Broken automation",
  "Disconnected reporting",
];

const architecturePrinciples = [
  "Structure before automation",
  "Design for reporting clarity",
  "Build for team adoption",
  "Enforce governance from day one",
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
        description="How Muloo designs scalable HubSpot CRM systems with structured data, pipeline architecture, automation logic, and reliable reporting."
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why CRM architecture matters</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">Architecture layers</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">Common architecture mistakes</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">Muloo architecture principles</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {architecturePrinciples.map((principle) => (
            <div key={principle} className="glass-card rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white leading-[1.4]">{principle}</h3>
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
