import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, ShieldCheck, Database, Workflow, BarChart3, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const strategyCallUrl = "/contact/book/jarrud";

const permissions = [
  "Role-based access by team and function",
  "Restricted edit permissions for critical properties",
  "Controlled admin privileges and change approvals",
];

const dataRules = [
  "Standardised naming conventions and property design",
  "Validation rules for key lifecycle and pipeline fields",
  "Duplicate prevention and record quality checks",
];

const workflowOwnership = [
  "Named owners for each workflow and automation domain",
  "Documented change control and release history",
  "Review cadence to retire outdated workflow logic",
];

const reportingStandards = [
  "Unified KPI definitions across teams",
  "Governed dashboard structure for leadership visibility",
  "Source-of-truth reporting built on trusted data",
];

export function ServicesHubspotGovernance() {
  return (
    <div className="flex flex-col">
      <SEO
        title="HubSpot Governance | Muloo"
        description="How organisations control and manage HubSpot with permission governance, data integrity rules, workflow ownership, and reporting standards."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/hubspot-governance"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-brand-teal hover:text-brand-teal/80">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/muloo-hub" className="text-brand-teal hover:text-brand-teal/80">Muloo Hub</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">HubSpot Governance</span>
          </div>
          <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5">
            HubSpot Governance
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
            HubSpot governance.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] max-w-3xl">
            Build control, consistency and accountability into your HubSpot environment as teams and complexity grow.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why governance matters</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
            Without governance, HubSpot portals accumulate inconsistent properties, fragile automations, and conflicting reports. Governance provides the controls that keep architecture stable and operational decisions trustworthy.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Permission management</h2>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <ul className="space-y-4">
            {permissions.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
                <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Data integrity rules</h2>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
            <Database className="h-5 w-5" />
          </div>
          <ul className="space-y-4">
            {dataRules.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
                <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Workflow ownership</h2>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
            <Workflow className="h-5 w-5" />
          </div>
          <ul className="space-y-4">
            {workflowOwnership.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
                <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Reporting standards</h2>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
            <BarChart3 className="h-5 w-5" />
          </div>
          <ul className="space-y-4">
            {reportingStandards.map((item) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Need governance that holds as HubSpot scales?</h2>
          <Link href={strategyCallUrl}>
            <Button className="bg-gradient-muloo border-none text-white hover:brightness-110 h-14 px-8 font-bold">
              Book a strategy call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
