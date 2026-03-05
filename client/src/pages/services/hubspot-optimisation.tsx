import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, GitBranch, Workflow, Database, BarChart3, Users2, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const strategyCallUrl = "/contact/book/jarrud";

const commonProblems = [
  "Overcomplicated pipelines",
  "Broken workflows",
  "Duplicate properties",
  "Reporting confusion",
];

const optimisationItems = [
  { title: "Pipelines", icon: GitBranch },
  { title: "Automation", icon: Workflow },
  { title: "Data structure", icon: Database },
  { title: "Dashboards", icon: BarChart3 },
  { title: "User experience", icon: Users2 },
];

const results = [
  "Clear reporting",
  "Faster pipelines",
  "Cleaner automation",
  "Lower admin overhead",
];

export function ServicesHubspotOptimisation() {
  return (
    <div className="flex flex-col">
      <SEO
        title="HubSpot Optimisation | Muloo"
        description="Fix messy pipelines, broken automation, and unreliable reporting with a structured HubSpot optimisation approach."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/hubspot-optimisation"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-brand-teal hover:text-brand-teal/80">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/muloo-hub" className="text-brand-teal hover:text-brand-teal/80">Muloo Hub</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">HubSpot Optimisation</span>
          </div>
          <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5">
            HubSpot Optimisation
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
            HubSpot optimisation.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] max-w-3xl">
            Fix messy pipelines, broken automation and unreliable reporting.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Common problems we fix</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commonProblems.map((problem) => (
            <div key={problem} className="glass-card rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white leading-[1.4]">{problem}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we optimise</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {optimisationItems.map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-7 border border-white/10">
              <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Results</h2>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <ul className="space-y-4">
            {results.map((item) => (
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
              Optimise your HubSpot <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
