import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, Database, GitBranch, Workflow, BarChart3, Link2, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const requestAuditUrl = "https://audit.wearemuloo.com/";

const analysisCards = [
  {
    title: "Data structure",
    desc: "Properties, lifecycle stages and field hygiene.",
    icon: Database,
  },
  {
    title: "Pipelines",
    desc: "Deal stages, reporting visibility and sales workflows.",
    icon: GitBranch,
  },
  {
    title: "Automation",
    desc: "Workflows, triggers and operational risk.",
    icon: Workflow,
  },
  {
    title: "Reporting",
    desc: "Executive dashboards and pipeline visibility.",
    icon: BarChart3,
  },
  {
    title: "Integrations",
    desc: "External systems and data integrity.",
    icon: Link2,
  },
];

const receiveItems = [
  "Audit summary report",
  "Portal architecture findings",
  "Priority fixes",
  "Recommended roadmap",
];

const audienceItems = [
  "Companies already using HubSpot",
  "Teams struggling with messy pipelines",
  "Businesses migrating CRM systems",
  "Leaders needing better reporting",
];

const outcomeItems = [
  "Clean reporting",
  "Simplified automation",
  "Improved pipeline visibility",
  "Stronger CRM governance",
];

export function ServicesHubspotAudit() {
  return (
    <div className="flex flex-col">
      <SEO
        title="HubSpot Audit | Muloo"
        description="Find out exactly why your HubSpot portal is not delivering the results it should, and get a clear roadmap for improvement."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/hubspot-audit"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-3xl">
          <Link href="/muloo-hub" className="inline-flex items-center text-sm text-brand-teal hover:text-brand-teal/80 mb-4">
            Muloo Hub <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5">
            HubSpot Audit
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
            HubSpot audit.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] max-w-3xl">
            Find out exactly why your HubSpot portal isn&apos;t delivering the results it should.
          </p>

          <div className="mt-10">
            <a href={requestAuditUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-8 h-14 rounded-lg">
                Run your free HubSpot audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we analyse</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {analysisCards.map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-7 border border-white/10">
              <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What you receive</h2>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <ul className="space-y-4">
            {receiveItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
                <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Who this is for</h2>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <ul className="space-y-4">
            {audienceItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand-teal shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Audit outcome</h2>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <h3 className="text-2xl font-bold text-white mb-6">Example result</h3>
          <ul className="space-y-4">
            {outcomeItems.map((item) => (
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
          <a href={requestAuditUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-muloo border-none text-white hover:brightness-110 h-14 px-8 font-bold">
              Run your free HubSpot audit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </Section>
    </div>
  );
}
