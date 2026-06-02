import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, BarChart3, CheckCircle2, ClipboardCheck, Database, GitBranch, Link2, Search, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "wouter";

const requestAuditUrl = "https://audit.wearemuloo.com/";

const analysisCards = [
  {
    title: "Data architecture & hygiene",
    desc: "We audit custom properties, object associations, lifecycle stages, and historical data hygiene to ensure your database is fundamentally built for scale—not just quick fixes.",
    icon: Database,
  },
  {
    title: "Pipeline engineering",
    desc: "We dissect deal stages, required fields, and sales workflows to eliminate friction for reps while guaranteeing accurate, predictable revenue forecasting for leadership.",
    icon: GitBranch,
  },
  {
    title: "Programmable automation",
    desc: "We untangle complex workflows, identify redundant triggers, and highlight silent operational risks that cause data overrides or broken customer experiences.",
    icon: Workflow,
  },
  {
    title: "Attribution & reporting",
    desc: "We evaluate your executive dashboards, custom report builders, and revenue attribution models to ensure absolute confidence in your go-to-market metrics.",
    icon: BarChart3,
  },
  {
    title: "System integrations",
    desc: "We inspect API connections, native HubSpot integrations, and sync errors that threaten data integrity across your broader tech stack.",
    icon: Link2,
  },
];

const receiveItems = [
  "Comprehensive technical summary report detailing portal health.",
  "Deep-dive portal architecture findings and structural vulnerabilities.",
  "Critical priority fixes to instantly stabilize broken workflows.",
  "A pragmatic, phased roadmap for long-term HubSpot optimization.",
];

const audienceItems = [
  "Scaling companies whose HubSpot portal has become overly complex and unmanageable.",
  "Revenue operations teams struggling with messy pipelines and unreliable data.",
  "Businesses preparing to scale or migrate systems that need a clean foundation.",
  "Executive leaders demanding accurate reporting and transparent ROI from their CRM.",
];

const outcomeItems = [
  "A single source of truth with clean, reliable executive reporting.",
  "Simplified, guardrailed automation that runs without manual babysitting.",
  "Unprecedented pipeline visibility and predictable sales velocity.",
  "Stronger CRM governance, user permissions, and clear change-control processes.",
];

const auditStats = [
  { value: "5", label: "audit layers" },
  { value: "48h", label: "initial signal map" },
  { value: "30d", label: "priority roadmap" },
];

const auditSteps = [
  { label: "Scan", desc: "Portal structure, objects, pipelines, reports, and workflow dependencies." },
  { label: "Score", desc: "Risk ranked by revenue impact, data quality, and operational fragility." },
  { label: "Stabilise", desc: "Clear fixes your team can execute before deeper optimisation starts." },
];

function AuditSignalPanel() {
  const rows = [
    { label: "Data hygiene", value: "62%", color: "bg-stream-hub" },
    { label: "Pipeline control", value: "48%", color: "bg-brand-teal" },
    { label: "Workflow risk", value: "71%", color: "bg-stream-ai" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 rounded-[28px] bg-stream-hub/10 blur-3xl" />
      <div className="relative glass-card rounded-[24px] border border-white/10 p-5 md:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-stream-hub">Portal health</p>
            <h2 className="mt-1 text-2xl font-bold text-white">Audit signal map</h2>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-stream-hub/30 bg-stream-hub/10 text-stream-hub">
            <Search className="h-6 w-6" />
          </div>
        </div>

        <div className="space-y-4">
          {rows.map((row) => (
            <div key={row.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-white/75">{row.label}</span>
                <span className="font-mono text-white/45">{row.value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className={`h-full rounded-full ${row.color}`} style={{ width: row.value }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {auditStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="text-xl font-extrabold text-gradient-muloo">{stat.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesHubspotAudit() {
  return (
    <div className="flex flex-col">
      <SEO
        title="HubSpot Audit | Muloo"
        description="Stop guessing why your CRM feels broken. We diagnose structural flaws and tangled automations to give you a clear roadmap for technical recovery."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub/hubspot-audit"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl">
            <Link href="/muloo-hub" className="inline-flex items-center text-sm text-brand-teal hover:text-brand-teal/80 mb-4">
              Muloo Hub <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5">
              HubSpot Audit
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
              Find the real reason your HubSpot portal feels broken.
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] max-w-3xl">
              We diagnose structural flaws, data silos, tangled automations, and reporting gaps, then turn the mess into a clear recovery roadmap.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={requestAuditUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-8 h-14 rounded-lg">
                  Run your free HubSpot audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white/15 text-white hover:bg-white/5 h-14 rounded-lg">
                  See proof <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <AuditSignalPanel />
        </div>
      </Section>

      <Section className="py-20 md:py-[110px] border-t border-white/5">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-gradient-muloo">Diagnostic scope</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">What we analyse</h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-[1.8]">
            The audit looks at how your portal actually behaves, not only how it was meant to be configured.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {analysisCards.map((item) => (
            <div key={item.title} className="group glass-card rounded-2xl p-7 border border-white/10 hover:border-stream-hub/35 hover:-translate-y-1 transition-all duration-300">
              <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[110px] bg-section-soft border-t border-white/5">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-teal/25 bg-brand-teal/10 text-brand-teal">
                <ClipboardCheck className="h-5 w-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">What you receive</h2>
            </div>
            <ul className="space-y-4">
              {receiveItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-white/85 leading-[1.8]">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-stream-hub/25 bg-stream-hub/10 text-stream-hub">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Who this is for</h2>
            </div>
            <ul className="space-y-4">
              {audienceItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-white/85 leading-[1.8]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-stream-hub shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-[110px] border-t border-white/5">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-gradient-muloo">Audit outcome</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">A practical recovery plan, not another vague report.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {auditSteps.map((step, index) => (
            <div key={step.label} className="glass-card rounded-2xl border border-white/10 p-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-2xl font-extrabold text-white/10">0{index + 1}</span>
                <span className="rounded-full border border-brand-teal/20 bg-brand-teal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-brand-teal">{step.label}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-[1.8]">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 glass-card rounded-2xl p-8 md:p-10 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Example result</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {outcomeItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/85 leading-[1.8]">
                <CheckCircle2 className="h-5 w-5 text-brand-teal mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-gradient-muloo">Start with clarity</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Know what to fix before you rebuild.</h2>
          <p className="text-muted-foreground text-lg leading-[1.8] mb-9">
            Run the free audit, then decide whether you need a light cleanup, a portal rescue, or a deeper architecture rebuild.
          </p>
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
