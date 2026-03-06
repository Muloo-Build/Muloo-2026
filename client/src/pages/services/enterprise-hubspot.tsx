import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, CheckCircle2, ShieldCheck, Workflow, Link2, BarChart3 } from "lucide-react";
import { Link } from "wouter";

const strategyCallUrl = "/contact/book/jarrud";

const enterpriseUseCases = [
  "Multi-region CRM",
  "Global sales teams",
  "Complex reporting",
  "System integrations",
];

const enterpriseChallenges = [
  "Data governance",
  "Permission management",
  "Pipeline consistency",
  "Automation risk",
];

const mulooSupport = [
  "Architecture design",
  "Portal governance",
  "Integration engineering",
  "Reporting frameworks",
];

const governanceLayerItems = [
  "Role-based permissions",
  "Data integrity rules",
  "Structured automation",
  "Integration monitoring",
];

export function ServicesEnterpriseHubspot() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Enterprise HubSpot | Muloo"
        description="Enterprise HubSpot architecture for growing and global organisations, including governance, integrations, and reporting frameworks."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/enterprise-hubspot"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-brand-teal hover:text-brand-teal/80">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/muloo-hub" className="text-brand-teal hover:text-brand-teal/80">Muloo Hub</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Enterprise HubSpot</span>
          </div>
          <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5">
            Enterprise HubSpot
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
            Enterprise HubSpot.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] mb-6 max-w-3xl">
            HubSpot architecture for growing and global organisations.
          </p>
          <p className="text-base md:text-lg text-white/80 leading-[1.8] max-w-3xl">
            HubSpot can scale far beyond simple CRM setups when structured correctly.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Enterprise use cases</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {enterpriseUseCases.map((item) => (
            <div key={item} className="glass-card rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white leading-[1.4]">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Enterprise challenges</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {enterpriseChallenges.map((item) => (
            <div key={item} className="glass-card rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white leading-[1.4]">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Muloo enterprise architecture</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mulooSupport.map((item) => (
            <div key={item} className="glass-card rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white leading-[1.4]">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Example deployments</h2>
        </div>
        <div className="max-w-4xl glass-card rounded-2xl p-8 md:p-10 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Global services firm</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
              <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
              <span>HubSpot deployed across multiple regions</span>
            </li>
            <li className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
              <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
              <span>Unified lifecycle stages</span>
            </li>
            <li className="flex items-start gap-3 text-base md:text-lg text-white/85 leading-[1.8]">
              <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
              <span>Executive reporting dashboards</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Governance</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8] max-w-3xl">
            Enterprise HubSpot delivery needs a formal governance layer to keep data, automation, and integrations stable as complexity grows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {governanceLayerItems.map((item, index) => (
            <div key={item} className="glass-card rounded-xl p-6 border border-white/10">
              <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
                {index % 3 === 0 ? <ShieldCheck className="h-5 w-5" /> : index % 3 === 1 ? <Workflow className="h-5 w-5" /> : index % 3 === 2 ? <Link2 className="h-5 w-5" /> : <BarChart3 className="h-5 w-5" />}
              </div>
              <h3 className="text-lg font-bold text-white leading-[1.4]">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Planning an enterprise HubSpot rollout?</h2>
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
