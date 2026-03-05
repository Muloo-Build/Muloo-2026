import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, Database, GitBranch, Workflow, BarChart3, Link2, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const strategyCallUrl = "/contact/book/jarrud";

const implementationItems = [
  { title: "CRM architecture", icon: Database },
  { title: "Sales pipelines", icon: GitBranch },
  { title: "Automation workflows", icon: Workflow },
  { title: "Reporting dashboards", icon: BarChart3 },
  { title: "Integrations", icon: Link2 },
];

const phases = ["Audit", "Design", "Build", "Train", "Launch"];

const governanceItems = [
  "Role permissions",
  "Structured properties",
  "Data integrity",
  "Reporting standards",
];

const resultItems = [
  "Clean pipelines",
  "Reliable reporting",
  "Sales adoption",
  "Executive visibility",
];

export function ServicesHubspotImplementation() {
  return (
    <div className="flex flex-col">
      <SEO
        title="HubSpot Implementation | Muloo"
        description="Deploy HubSpot properly from day one with structured implementation, governance controls, and clear delivery phases."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/hubspot-implementation"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-brand-teal hover:text-brand-teal/80">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/muloo-hub" className="text-brand-teal hover:text-brand-teal/80">Muloo Hub</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">HubSpot Implementation</span>
          </div>
          <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5">
            HubSpot Implementation
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
            HubSpot implementation.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] max-w-3xl">
            Deploy HubSpot properly from day one.
          </p>
          <div className="mt-10">
            <Link href={strategyCallUrl}>
              <Button size="lg" className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-8 h-14 rounded-lg">
                Book a HubSpot strategy call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we implement</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {implementationItems.map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-7 border border-white/10">
              <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Implementation phases</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {phases.map((phase, index) => (
            <div key={phase} className="glass-card rounded-xl border border-white/10 p-6">
              <p className="text-5xl font-black text-white/[0.06] mb-3">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="text-xl font-bold text-white">{phase}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Governance built in</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {governanceItems.map((item) => (
            <div key={item} className="glass-card rounded-xl p-6 border border-white/10">
              <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Results</h2>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <ul className="space-y-4">
            {resultItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
                <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link href={strategyCallUrl}>
            <Button className="bg-gradient-muloo border-none text-white hover:brightness-110 h-14 px-8 font-bold">
              Start your HubSpot implementation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
