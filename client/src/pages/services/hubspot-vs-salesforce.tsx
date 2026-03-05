import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const strategyCallUrl = "/contact/book/jarrud";

const hubspotFit = [
  "Growing companies",
  "Marketing-led organisations",
  "Teams needing faster adoption",
  "Companies replacing legacy CRM complexity",
];

const salesforceFit = [
  "Highly complex enterprise environments",
  "Heavy custom application development",
  "Large internal admin teams",
  "Advanced industry-specific requirements",
];

const migrationConsiderations = [
  "Data mapping",
  "Workflow rebuild",
  "Pipeline redesign",
  "Reporting structure",
];

const decisionFactors = [
  {
    factor: "Implementation complexity",
    hubspot: "Generally faster for standard commercial models",
    salesforce: "Higher setup effort with deeper custom control",
  },
  {
    factor: "Cost of ownership",
    hubspot: "Lower admin overhead for many mid-size teams",
    salesforce: "Can be higher due to customisation and admin scope",
  },
  {
    factor: "User adoption",
    hubspot: "Often faster with modern default UX",
    salesforce: "Strong with training and governance investment",
  },
  {
    factor: "Reporting",
    hubspot: "Strong native reporting for unified GTM teams",
    salesforce: "Very powerful when modelled and maintained correctly",
  },
  {
    factor: "Automation",
    hubspot: "Effective native automation for common GTM processes",
    salesforce: "Advanced automation depth for complex enterprise logic",
  },
  {
    factor: "Integrations",
    hubspot: "Broad app ecosystem and straightforward connectors",
    salesforce: "Extensive enterprise ecosystem and platform tooling",
  },
];

export function ServicesHubspotVsSalesforce() {
  return (
    <div className="flex flex-col">
      <SEO
        title="HubSpot vs Salesforce | Muloo"
        description="Neutral expert comparison of HubSpot and Salesforce for organisations evaluating CRM fit, implementation complexity, and operational requirements."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/hubspot-vs-salesforce"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-brand-teal hover:text-brand-teal/80">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/muloo-hub" className="text-brand-teal hover:text-brand-teal/80">Muloo Hub</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">HubSpot vs Salesforce</span>
          </div>
          <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5">
            CRM Comparison
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
            HubSpot vs Salesforce.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] mb-6 max-w-3xl">
            Which CRM platform actually fits your organisation?
          </p>
          <p className="text-base md:text-lg text-white/80 leading-[1.8] max-w-3xl mb-10">
            Both HubSpot and Salesforce are powerful platforms. The right choice depends on complexity, team size and operational requirements.
          </p>
          <Link href={strategyCallUrl}>
            <Button size="lg" className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-8 h-14 rounded-lg">
              Book a CRM strategy call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Platform overview</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">HubSpot</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
              Modern CRM with built-in marketing, sales and service tools.
            </p>
          </div>
          <div className="glass-card rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Salesforce</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
              Enterprise CRM with deep customisation and ecosystem.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">When HubSpot is the better choice</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubspotFit.map((item) => (
            <div key={item} className="glass-card rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white leading-[1.4]">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">When Salesforce is the better choice</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {salesforceFit.map((item) => (
            <div key={item} className="glass-card rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white leading-[1.4]">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Migration reality</h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-[1.8]">
            <p>
              Salesforce to HubSpot migration often simplifies operations and adoption, but requires deliberate redesign of data models, automation and reporting.
            </p>
            <p>
              HubSpot to Salesforce migration can support deeper custom enterprise requirements, but increases technical and administrative complexity.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {migrationConsiderations.map((item) => (
            <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Decision factors</h2>
        </div>

        <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">Factor</th>
                  <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">HubSpot</th>
                  <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">Salesforce</th>
                </tr>
              </thead>
              <tbody>
                {decisionFactors.map((row) => (
                  <tr key={row.factor} className="border-b last:border-b-0 border-white/10">
                    <td className="p-4 text-sm md:text-base font-semibold text-white">{row.factor}</td>
                    <td className="p-4 text-sm md:text-base text-white/80 leading-[1.7]">{row.hubspot}</td>
                    <td className="p-4 text-sm md:text-base text-white/80 leading-[1.7]">{row.salesforce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Not sure which CRM fits your organisation?</h2>
          <Link href={strategyCallUrl}>
            <Button className="bg-gradient-muloo border-none text-white hover:brightness-110 h-14 px-8 font-bold">
              Book a CRM architecture review <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
