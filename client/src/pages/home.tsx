import { Section } from "@/components/ui/section";
import { homeContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Cpu, Bot, Layout, ChevronRight, Server, Workflow, Check, TrendingUp, Zap } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

const rotatingPhrases = [
  "Technical Partner for HubSpot",
  "Systems & Integration Specialists",
  "AI Workflow & Agent Builders",
  "Embedded CTO & Sales Engineering",
];

const streamColors: Record<string, { accent: string; border: string; bg: string; text: string; glow: string }> = {
  hub: { accent: "bg-stream-hub", border: "border-stream-hub/30", bg: "bg-stream-hub/10", text: "text-stream-hub", glow: "group-hover:shadow-[0_0_40px_-8px_rgba(244,118,33,0.35)]" },
  build: { accent: "bg-stream-build", border: "border-stream-build/30", bg: "bg-stream-build/10", text: "text-stream-build", glow: "group-hover:shadow-[0_0_40px_-8px_rgba(21,93,252,0.35)]" },
  ai: { accent: "bg-stream-ai", border: "border-stream-ai/30", bg: "bg-stream-ai/10", text: "text-stream-ai", glow: "group-hover:shadow-[0_0_40px_-8px_rgba(193,64,255,0.35)]" },
  product: { accent: "bg-stream-product", border: "border-stream-product/30", bg: "bg-stream-product/10", text: "text-stream-product", glow: "group-hover:shadow-[0_0_40px_-8px_rgba(89,191,150,0.35)]" },
};

const painPoints = [
  "Your systems cost more to maintain than they return.",
  "Your data exists everywhere but nobody trusts the reports.",
  "Your automations break silently — and revenue leaks before anyone notices.",
  "Your AI spend is growing but measurable ROI isn't.",
];

const pillarIcons: Record<string, React.ReactNode> = {
  hub: <Database className="h-6 w-6" />,
  build: <Cpu className="h-6 w-6" />,
  ai: <Bot className="h-6 w-6" />,
  product: <Layout className="h-6 w-6" />,
};

const ecosystemLogos = {
  "Engineering Stack": ["Azure", "Google Cloud", "Microsoft", "SQL Server", "SAP"],
  "CRM & Sales Tools": ["HubSpot", "Apollo", "LinkedIn", "HubLink"],
  "Data & Infrastructure": ["Snowflake", "Azure Data", "BigQuery"],
};

const processSteps = [
  { step: "01", title: "Discover", desc: "Full audit of systems, data flows, and bottlenecks — delivered as a documented findings report within 10 business days." },
  { step: "02", title: "Architect", desc: "Technical blueprint with measurable KPIs, defined milestones, and cost estimates before any code is written." },
  { step: "03", title: "Ship", desc: "Iterative delivery with weekly demos and stakeholder sign-off — working software, not slide decks." },
  { step: "04", title: "Support", desc: "SLA-backed monitoring, quarterly reviews, and proactive recommendations as your business evolves." },
];

function RotatingBadge() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingPhrases.length);
        setIsVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-sm font-medium text-brand-teal mb-8 backdrop-blur-sm h-9 min-w-[280px]" data-testid="badge-hero">
      <span className="flex h-2 w-2 rounded-full bg-brand-teal mr-2 animate-pulse shrink-0" />
      <span
        className="transition-all duration-400"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-6px)",
        }}
      >
        {rotatingPhrases[index]}
      </span>
    </div>
  );
}

function UICascade() {
  return (
    <div className="relative w-full max-w-md mx-auto hidden lg:block h-[340px]" data-testid="hero-ui-cascade">
      <div className="absolute inset-0 bg-gradient-muloo opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      {/* 1. Analytics / Revenue (Top Left) */}
      <div className="absolute top-4 -left-3 w-56 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-10 animate-float-slow">
        <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
          <div className="p-2 rounded-lg bg-white/5 text-stream-product">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Revenue Velocity</div>
            <div className="text-[10px] text-muted-foreground font-mono">+24.5% MoM</div>
          </div>
        </div>
        <div className="flex items-end gap-1 h-12">
          {[3, 5, 4, 7, 6, 9, 8, 12, 10, 14].map((h, i) => (
            <div key={i} className={`flex-1 rounded-[2px] ${i >= 8 ? 'bg-gradient-muloo' : 'bg-white/10'}`} style={{ height: `${h * 10}%` }} />
          ))}
        </div>
      </div>

      {/* 2. Middleware / Data Hub (Middle Right) */}
      <div className="absolute top-24 -right-6 w-60 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-20 animate-float-medium">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-stream-hub/20 flex items-center justify-center text-stream-hub">
              <Database className="h-3 w-3" />
            </div>
            <div className="h-px w-4 bg-white/20" />
            <div className="p-1 rounded bg-white/5 border border-white/10 text-white/60">
              <Workflow className="h-3 w-3" />
            </div>
            <div className="h-px w-4 bg-white/20" />
            <div className="h-6 w-6 rounded bg-stream-build/20 flex items-center justify-center text-stream-build">
              <Server className="h-3 w-3" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#59BF96] animate-pulse" />
            <span className="text-[10px] text-muted-foreground font-mono">Syncing</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-muloo w-3/4 rounded-full" />
          </div>
          <div className="flex justify-between text-[10px] text-muted-foreground">
            <span>Processing 1.2M rows</span>
            <span>2ms lat</span>
          </div>
        </div>
      </div>

      {/* 3. AI Agent (Bottom Center) */}
      <div className="absolute bottom-6 left-6 w-56 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-30 animate-float-fast">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-stream-ai/20 text-stream-ai shrink-0 mt-0.5">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white mb-1.5">Codex Agent Deployed</div>
            <div className="text-[11px] text-white/70 leading-relaxed mb-3 italic">
              "Analyzed Q3 pipeline. Created 14 missing deal associations."
            </div>
            <div className="flex gap-2">
              <div className="h-6 rounded bg-white/5 border border-white/10 px-3 flex items-center justify-center text-[10px] text-muted-foreground font-mono hover:bg-white/10 cursor-pointer transition-colors">
                Review
              </div>
              <div className="h-6 w-8 rounded bg-gradient-muloo flex items-center justify-center text-white glow-muloo-sm cursor-pointer hover:brightness-110 transition-all">
                <Check className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const clientLogos = [
  "Chat Inc.", "Phillips Law", "Group Elephant", "EPI-USE", "WConsulting",
  "Eviare", "Virgin Active", "SNG Grant Thornton", "Aerobotics", "Nubeva"
];

function ClientMarquee() {
  return (
    <Section className="py-[15px] border-t border-b border-white/5 bg-[#030614]/50 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050A30] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050A30] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all">
        <div className="flex gap-20 items-center px-10">
          {clientLogos.map((client, i) => (
            <span key={`logo1-${i}`} className="text-xl md:text-2xl font-black tracking-tighter text-white/20 uppercase hover:text-white/40 transition-colors cursor-default" style={{ fontFamily: "'Aileron', sans-serif" }}>
              {client}
            </span>
          ))}
        </div>
        <div className="flex gap-20 items-center px-10" aria-hidden="true">
          {clientLogos.map((client, i) => (
            <span key={`logo2-${i}`} className="text-xl md:text-2xl font-black tracking-tighter text-white/20 uppercase hover:text-white/40 transition-colors cursor-default" style={{ fontFamily: "'Aileron', sans-serif" }}>
              {client}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

function DashboardMock() {
  return (
    <div className="relative w-full max-w-md mx-auto" data-testid="dashboard-mock">
      <div className="absolute -inset-8 bg-brand-teal/[0.03] blur-3xl rounded-full pointer-events-none" />
      <div className="relative space-y-4">
        <div className="glass-card rounded-xl p-5 border-white/[0.06]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Revenue Velocity</span>
            <TrendingUp className="h-4 w-4 text-brand-teal/60" />
          </div>
          <div className="flex items-end gap-1 h-16">
            {[35, 42, 38, 55, 48, 62, 58, 72, 68, 80, 75, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-brand-teal/20 hover:bg-brand-teal/30 transition-colors"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-[10px] text-muted-foreground/40 font-mono">Jan</span>
            <span className="text-[10px] text-muted-foreground/40 font-mono">Dec</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card rounded-xl p-5 border-white/[0.06]">
            <span className="text-xs font-mono text-muted-foreground/60 block mb-2">Pipeline</span>
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-white/[0.03] overflow-hidden">
                <div className="h-full rounded-full bg-brand-teal/40 w-[72%]" />
              </div>
              <div className="h-2 rounded-full bg-white/[0.03] overflow-hidden">
                <div className="h-full rounded-full bg-brand-teal/25 w-[48%]" />
              </div>
              <div className="h-2 rounded-full bg-white/[0.03] overflow-hidden">
                <div className="h-full rounded-full bg-brand-teal/15 w-[31%]" />
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground/40 font-mono mt-3 block">3 stages active</span>
          </div>

          <div className="glass-card rounded-xl p-5 border-white/[0.06]">
            <span className="text-xs font-mono text-muted-foreground/60 block mb-3">Automations</span>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-brand-teal/50" />
              <span className="text-xs text-white/60">12 active</span>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="h-1.5 w-1.5 rounded-full bg-brand-teal/30" />
              ))}
              <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
            </div>
            <span className="text-[10px] text-muted-foreground/40 font-mono mt-3 block">Workflows synced</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Home() {
  const meetingUrl = "/meetings/jarrud";

  return (
    <div className="flex flex-col">
      {/* ── HERO ── */}
      <div className="relative pt-20 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-16">
            <div className="max-w-3xl flex-1">
              <RotatingBadge />

              <h1 className="text-4xl md:text-[3.5rem] lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
                {homeContent.hero.headline.split("revenue.")[0]}
                <span className="text-gradient-muloo">revenue.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-light">
                {homeContent.hero.subhead}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href={meetingUrl}>
                  <Button size="lg" className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-8 h-14 rounded-lg glow-muloo-sm hover:-translate-y-0.5 transition-all" data-testid="button-hero-cta">
                    {homeContent.hero.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="border-white/15 text-white hover:bg-white/5 px-8 h-14 rounded-lg" data-testid="button-hero-secondary">
                    {homeContent.hero.secondaryCta}
                  </Button>
                </Link>
              </div>

              <p className="text-sm font-mono text-muted-foreground/50 tracking-wider">
                Cape Town based. Globally delivered.
              </p>
            </div>

            <UICascade />
          </div>
        </div>
      </div>

      <ClientMarquee />

      {/* ── 2. FOUR STREAMS ── */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-gradient-muloo uppercase tracking-widest mb-4">What we do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">Four streams. One technical partner.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeContent.pillars.map((pillar) => {
            const colors = streamColors[pillar.id];
            return (
              <Link
                key={pillar.id}
                href={pillar.href}
              >
                <div className={`group glass-card h-full p-8 rounded-2xl flex flex-col cursor-pointer hover:-translate-y-1 transition-all duration-300 ${colors.glow}`} data-testid={`card-service-${pillar.id}`}>
                  <div className={`mb-6 p-3 rounded-xl w-fit ${colors.bg} ${colors.text}`}>
                    {pillarIcons[pillar.id]}
                  </div>

                  <h4 className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">{pillar.subtitle}</h4>
                  <h3 className="text-2xl font-bold mb-3 text-white transition-colors">
                    muloo <span className={colors.text}>{pillar.title.replace("Muloo ", "")}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-[1.8] mb-6 flex-grow">{pillar.desc}</p>

                  <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    {pillar.features.slice(0, 3).map(feat => (
                      <li key={feat} className="flex items-center text-xs text-white/50">
                        <span className={`h-1.5 w-1.5 rounded-full mr-2 ${colors.accent}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex items-center text-sm font-semibold ${colors.text} mt-auto`}>
                    Explore <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ── 3. PAIN POINTS ── */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-10 leading-tight">
              Busy isn't the same as effective.
            </h2>

            <p className="text-lg text-muted-foreground leading-[1.8] mb-12">
              The tools are in place. The team is working. But the numbers don't move.
            </p>

            <ul className="space-y-5">
              {painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4" data-testid={`card-pain-${i}`}>
                  <span className="mt-0.5 shrink-0 h-6 w-6 rounded-full bg-brand-teal/10 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-brand-teal" />
                  </span>
                  <span className="text-[15px] text-white/80 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <DashboardMock />
        </div>
      </Section>

      {/* ── 4. OUTCOMES ── */}
      <LeadMagnetSection />

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-gradient-muloo uppercase tracking-widest mb-4">How we work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Structured. Iterative. Transparent.</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <div key={i} className="relative group" data-testid={`step-${step.title.toLowerCase()}`}>
              <div className="text-6xl font-black text-white/[0.04] mb-4 group-hover:text-brand-teal/10 transition-colors select-none">{step.step}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.8]">{step.desc}</p>
              <div className="w-10 h-0.5 bg-brand-teal/30 mt-6 group-hover:w-full group-hover:bg-brand-teal transition-all duration-500" />
            </div>
          ))}
        </div>
      </Section>

      {/* ── 5. RESOURCES PREVIEW ── */}
      <Section className="py-20 md:py-[120px] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-30" />
        <div className="relative z-10">
          <div className="mb-16">
            <h2 className="text-sm font-mono text-gradient-muloo uppercase tracking-widest mb-4">Knowledge</h2>
            <p className="text-sm text-muted-foreground mb-4 max-w-xl leading-[1.8]">Written by the team that builds these systems — not a content department.</p>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">How modern revenue systems are built.</h3>
            <p className="text-muted-foreground max-w-xl text-lg leading-[1.8]">Practical notes on HubSpot, integrations, AI workflows, and system design.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                badge: "HubSpot Foundations",
                title: "Why portal audits should come before automation",
                desc: "Most teams jump to workflows before fixing the data model. Here's why sequencing matters.",
                href: "/blog",
              },
              {
                badge: "Integration Patterns",
                title: "The hidden cost of point-to-point integrations",
                desc: "When every tool connects directly to every other tool, maintenance costs compound fast.",
                href: "/blog",
              },
              {
                badge: "AI Workflows",
                title: "Where AI agents add value vs. where they don't",
                desc: "Not everything needs an agent. A framework for deciding where automation truly helps.",
                href: "/blog",
              },
            ].map((card, i) => (
              <Link key={i} href={card.href} className="group block h-full glass-card rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:border-brand-teal/15 transition-all duration-300" data-testid={`card-insight-${i}`}>
                <span className="inline-flex self-start items-center rounded-full bg-brand-teal/5 border border-brand-teal/10 px-3 py-1 text-[11px] font-mono text-brand-teal/70 uppercase tracking-wider mb-5">
                  {card.badge}
                </span>
                <h4 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-brand-teal transition-colors">{card.title}</h4>
                <p className="text-sm text-muted-foreground leading-[1.8] mb-6 flex-grow">{card.desc}</p>
                <span className="text-sm font-semibold text-brand-teal/70 group-hover:text-brand-teal flex items-center transition-colors">
                  Read more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/resources">
              <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 hover:border-brand-teal/20 px-8 h-12 rounded-lg" data-testid="button-explore-insights">
                Explore all insights <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* ── 6. TRUSTED ECOSYSTEM ── */}
      <Section className="py-16 md:py-24 border-t border-white/5">
        <div className="mb-10">
          <h2 className="text-sm font-mono text-gradient-muloo uppercase tracking-widest mb-4">Trusted Ecosystem</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Built on platforms that power global businesses.</h3>
          <p className="text-sm text-muted-foreground leading-[1.8] max-w-xl">We architect on proven infrastructure — not trends.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl">
          {Object.entries(ecosystemLogos).map(([category, logos]) => (
            <div key={category}>
              <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-5 border-b border-white/5 pb-3">{category}</h4>
              <div className="flex flex-wrap gap-3">
                {logos.map(logo => (
                  <span
                    key={logo}
                    className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-white/40 hover:text-brand-teal hover:border-brand-teal/20 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_-4px_rgba(0,196,204,0.2)] transition-all duration-300 cursor-default"
                    data-testid={`logo-${logo.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 7. TESTIMONIALS ── */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-gradient-muloo uppercase tracking-widest mb-4">What clients say</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Trusted by teams who build seriously</h3>
        </div>

        <div className="space-y-14 max-w-4xl">
          {[
            {
              quote: "Muloo brought clarity to a HubSpot instance that had become unmanageable. Within weeks, our reporting made sense and the sales team actually trusted the data again.",
              name: "Sarah Mitchell",
              title: "VP of Revenue Operations",
              company: "TechScale Group",
            },
            {
              quote: "We needed middleware that connected our ERP to HubSpot without breaking every time something changed. Muloo built it properly — and it's been running for over a year without a single issue.",
              name: "James van der Berg",
              title: "Head of Digital",
              company: "Meridian Financial Services",
            },
          ].map((testimonial, i) => (
            <div key={i} className="grid md:grid-cols-[80px_1fr] gap-8 md:gap-12" data-testid={`testimonial-${i}`}>
              <div className="hidden md:block">
                <svg viewBox="0 0 40 40" className="w-14 h-14 text-brand-teal/15" fill="currentColor">
                  <path d="M0 25.6c0-6.4 4.48-12.16 11.2-16L13.12 12.8C9.6 15.36 7.68 18.56 7.04 22.4H11.2c2.24 0 4 1.76 4 4v9.6c0 2.24-1.76 4-4 4H4c-2.24 0-4-1.76-4-4V25.6zm21.6 0c0-6.4 4.48-12.16 11.2-16l1.92 3.2c-3.52 2.56-5.44 5.76-6.08 9.6h4.16c2.24 0 4 1.76 4 4v9.6c0 2.24-1.76 4-4 4h-7.2c-2.24 0-4-1.76-4-4V25.6z" />
                </svg>
              </div>
              <div>
                <p className="text-lg md:text-xl text-white/80 leading-[1.8] mb-8 font-light">{testimonial.quote}</p>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 8. FINAL CTA ── */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to build <span className="text-gradient-muloo">properly</span>?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            Let's talk about your systems, your data, and what needs to change.
          </p>
          <Link href={meetingUrl}>
            <Button size="lg" className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-10 h-14 rounded-lg glow-muloo-sm" data-testid="button-cta-final">
              Start a Conversation <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

function LeadMagnetSection() {
  return (
    <Section className="py-20 md:py-[120px] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(193,64,255,0.04), transparent)" }} />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-sm font-mono text-gradient-muloo uppercase tracking-widest mb-4">Free Resource</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Free HubSpot & Systems Health Check</h3>
        <p className="text-muted-foreground mb-10 leading-[1.8]">
          Get the 10-point checklist we use to stabilise CRM, integrations, and reporting foundations.
        </p>
        <a href="https://audit.wearemuloo.com/" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-10 h-14 rounded-lg glow-muloo-sm"
            data-testid="button-lead-magnet"
          >
            Go to the Audit Tool <ArrowRight className="ml-2" />
          </Button>
        </a>
      </div>
    </Section>
  );
}
