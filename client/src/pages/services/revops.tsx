import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const strategyCallUrl = "/contact/book/jarrud";

const revopsBenefits = [
  "One source of truth across marketing, sales and customer success",
  "Clear handovers between lifecycle stages",
  "More reliable forecasting and pipeline visibility",
  "Fewer operational bottlenecks and manual workarounds",
];

export function ServicesRevOps() {
  return (
    <div className="flex flex-col">
      <SEO
        title="RevOps with HubSpot | Muloo"
        description="How Revenue Operations works in HubSpot through structured funnel architecture, lifecycle design, and reporting governance."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/revops"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-brand-teal hover:text-brand-teal/80">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/muloo-hub" className="text-brand-teal hover:text-brand-teal/80">Muloo Hub</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">RevOps</span>
          </div>
          <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5">
            RevOps
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">Revenue Operations with HubSpot</h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] max-w-3xl">
            Align marketing, sales and service into one structured operating model built on HubSpot.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What RevOps means</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
            Revenue Operations is the system design layer that connects teams, data, processes and reporting across the full customer journey. In HubSpot, RevOps defines how contacts move, how handovers happen, and how leadership decisions are made from trusted data.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Revenue funnel architecture</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
            Funnel architecture maps demand generation, pipeline progression, customer onboarding, and retention into one consistent model. Each stage should have explicit entry criteria, ownership, and measurable conversion outcomes.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">HubSpot lifecycle structure</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
            Lifecycle stages must reflect your real operating motion, not generic defaults. HubSpot works best when lifecycle logic, deal pipelines, and ownership rules are engineered together so automation can run safely.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reporting and dashboards</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
            RevOps reporting should answer leadership questions without spreadsheet patchwork. HubSpot dashboards need governed properties, clear attribution logic, and standardised definitions for pipeline, velocity, win rate, and retention.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">RevOps benefits</h2>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 max-w-4xl">
          <ul className="space-y-4">
            {revopsBenefits.map((item) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to structure RevOps in HubSpot?</h2>
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
