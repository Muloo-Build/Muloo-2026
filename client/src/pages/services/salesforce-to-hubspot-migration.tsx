import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

const strategyCallUrl = "/contact/book/jarrud";

const moveReasons = [
  "High platform overhead for teams that need faster execution",
  "Complex admin dependency for day-to-day changes",
  "Fragmented reporting across commercial functions",
  "Need for a simpler, governed operating model",
];

const migrationScope = [
  "Account, contact and company data",
  "Deal and pipeline history",
  "Lifecycle stages and ownership rules",
  "Workflows, automations and task logic",
  "Reporting structure and dashboard definitions",
];

const migrationProcess = [
  "Audit current Salesforce setup and dependencies",
  "Map objects, fields, and relationships into HubSpot",
  "Clean and transform records before import",
  "Rebuild pipelines, automation and lifecycle logic",
  "Validate reporting and operational handovers",
];

const migrationRisks = [
  "Data mapping gaps between objects",
  "Workflow logic loss during rebuild",
  "Pipeline stage misalignment with sales operations",
  "Broken reporting due to ungoverned property design",
];

const timeline = [
  { label: "Week 1", title: "Discovery and architecture mapping" },
  { label: "Week 2", title: "Data model and migration planning" },
  { label: "Week 3", title: "Build, import and workflow setup" },
  { label: "Week 4", title: "Validation, enablement and go-live" },
];

export function ServicesSalesforceToHubspotMigration() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Salesforce to HubSpot Migration | Muloo"
        description="Structured Salesforce to HubSpot migration services with data mapping, workflow rebuild, pipeline redesign, and reliable reporting rollout."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/salesforce-to-hubspot-migration"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-brand-teal hover:text-brand-teal/80">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/muloo-hub" className="text-brand-teal hover:text-brand-teal/80">Muloo Hub</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Salesforce to HubSpot Migration</span>
          </div>
          <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5">
            Salesforce to HubSpot Migration
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
            Salesforce to HubSpot migration.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] max-w-3xl">
            Structured migration for teams moving from Salesforce to a cleaner, scalable HubSpot operating model.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why companies move from Salesforce</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moveReasons.map((item) => (
            <div key={item} className="glass-card rounded-xl p-6 border border-white/10">
              <p className="text-base text-white/85 leading-[1.8]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What must be migrated</h2>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <ul className="space-y-4">
            {migrationScope.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
                <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Migration process</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {migrationProcess.map((step, index) => (
            <div key={step} className="glass-card rounded-xl border border-white/10 p-6">
              <p className="text-5xl font-black text-white/[0.06] mb-3">{String(index + 1).padStart(2, "0")}</p>
              <p className="text-sm text-white/85 leading-[1.7]">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Common migration risks</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {migrationRisks.map((risk) => (
            <div key={risk} className="glass-card rounded-xl p-6 border border-white/10">
              <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <p className="text-base text-white/85 leading-[1.8]">{risk}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Example outcome</h2>
        </div>
        <div className="max-w-4xl glass-card rounded-2xl p-8 md:p-10 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Global services group</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
              <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
              <span>Salesforce data model migrated and rationalised in HubSpot.</span>
            </li>
            <li className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
              <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
              <span>Pipelines rebuilt with lifecycle governance and role ownership.</span>
            </li>
            <li className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
              <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
              <span>Executive reporting launched with clean, trusted metrics.</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Timeline</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((item) => (
            <div key={item.label} className="glass-card rounded-xl border border-white/10 p-6">
              <p className="text-xs font-mono uppercase tracking-widest text-brand-teal mb-2">{item.label}</p>
              <h3 className="text-lg font-bold text-white leading-[1.5]">{item.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Planning a Salesforce to HubSpot migration?</h2>
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
