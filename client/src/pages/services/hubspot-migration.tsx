import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, Database, GitBranch, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const strategyCallUrl = "/contact/book/jarrud";

const migrationPlatforms = ["Salesforce", "Pipedrive", "Zoho", "Dynamics", "Custom CRMs"];

const migrationSteps = [
  "Audit existing CRM",
  "Map fields and data",
  "Clean and transform records",
  "Import into HubSpot",
  "Validate reporting",
];

const migrationOutcomes = [
  "Simpler reporting",
  "Cleaner pipelines",
  "Reliable automation",
  "Better adoption",
];

export function ServicesHubspotMigration() {
  return (
    <div className="flex flex-col">
      <SEO
        title="HubSpot Migration | Muloo"
        description="Move from Salesforce, Pipedrive, Zoho, Dynamics or custom CRM platforms into HubSpot safely with clean data and structured pipelines."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/hubspot-migration"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-brand-teal hover:text-brand-teal/80">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/muloo-hub" className="text-brand-teal hover:text-brand-teal/80">Muloo Hub</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">HubSpot Migration</span>
          </div>
          <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5">
            HubSpot Migration
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
            HubSpot migration.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] max-w-3xl">
            Move to HubSpot safely with clean data and structured pipelines.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Platforms we migrate</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {migrationPlatforms.map((platform) => (
            <div key={platform} className="glass-card rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white">{platform}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Migration steps</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {migrationSteps.map((step, index) => (
            <div key={step} className="glass-card rounded-xl border border-white/10 p-6">
              <p className="text-5xl font-black text-white/[0.06] mb-3">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="text-lg font-bold text-white leading-[1.4]">{step}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What improves after migration</h2>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <ul className="space-y-4">
            {migrationOutcomes.map((item) => (
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
              Plan your migration <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
