import { Section } from "@/components/ui/section";
import { homeContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Cpu, Bot, Layout, ChevronRight, Server, Workflow, Check, TrendingUp, Zap, Award, Clock3, Layers3, Globe2, Terminal, BadgeCheck } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { BookingCard } from "@/components/meetings/BookingCard";
import { getMeetingBySlug } from "@/content/meetings";
import { cn } from "@/lib/utils";

const rotatingPhrases = [
  "Technical Partner for HubSpot",
  "Systems & Integration Specialists",
  "AI Workflow & Agent Builders",
  "Embedded CTO & Sales Engineering",
];

const hubspotSolutionsDirectoryUrl = "https://ecosystem.hubspot.com/marketplace/solutions/muloo-co-za";

type HeroStackItem = {
  name: string;
  src: string;
  iconClassName: string;
  labelClassName?: string;
  href?: string;
};

const heroStackItems: HeroStackItem[] = [
  { name: "HubSpot", src: "/assets/stack-logos/hubspot.svg", iconClassName: "h-5 w-5", href: hubspotSolutionsDirectoryUrl },
  { name: "SQL Server", src: "/assets/stack-logos/microsoftsqlserver.svg", iconClassName: "h-5 w-5" },
  { name: "Dynamics 365", src: "/assets/stack-logos/microsoft-icon.svg", iconClassName: "h-4 w-4" },
  { name: "Azure", src: "/assets/stack-logos/azure.svg", iconClassName: "h-5 w-5" },
  { name: "SAP", src: "/assets/stack-logos/sap.svg", iconClassName: "h-5 w-5" },
  { name: "xero", src: "/assets/stack-logos/xero.svg", iconClassName: "h-5 w-5", labelClassName: "lowercase" },
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

const platformLogos = [
  { name: "HubSpot",      src: "/assets/stack-logos/hubspot.svg", href: hubspotSolutionsDirectoryUrl },
  { name: "Azure",        src: "/assets/stack-logos/azure.svg" },
  { name: "Microsoft",    src: "/assets/stack-logos/microsoft-icon.svg" },
  { name: "SQL Server",   src: "/assets/stack-logos/microsoftsqlserver.svg" },
  { name: "SAP",          src: "/assets/stack-logos/sap.svg" },
  { name: "Xero",         src: "/assets/stack-logos/xero.svg" },
  { name: "Google Cloud", src: "/assets/stack-logos/googlecloud.svg" },
  { name: "Snowflake",    src: "/assets/stack-logos/snowflake.svg" },
  { name: "BigQuery",     src: "/assets/stack-logos/bigquery.svg" },
  { name: "Apollo",       src: "/assets/stack-logos/apollo.svg" },
];

const processSteps = [
  { step: "01", title: "Discover", desc: "Full audit of systems, data flows, and bottlenecks — delivered as a documented findings report within 10 business days." },
  { step: "02", title: "Architect", desc: "Technical blueprint with measurable KPIs, defined milestones, and cost estimates before any code is written." },
  { step: "03", title: "Ship", desc: "Iterative delivery with weekly demos and stakeholder sign-off — working software, not slide decks." },
  { step: "04", title: "Support", desc: "SLA-backed monitoring, quarterly reviews, and proactive recommendations as your business evolves." },
];

const heroSupportFacts = [
  { eyebrow: "Experience", icon: Clock3,  label: <><span className="text-brand-teal">10+ years</span> as a HubSpot partner</> },
  { eyebrow: "Discipline", icon: Layers3, label: <>CRM architecture specialists</> },
  { eyebrow: "Reach",      icon: Globe2,  label: <>Serving <span className="text-brand-teal">UK, AU &amp; US</span> companies</> },
];

function HubSpotMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.196 2.196 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 0 0-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033 1.978 1.978 0 0 0-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 1 0 4.782-11.134l-.036-.005Zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.206 3.206 0 0 1-3.207 3.207Z" />
    </svg>
  );
}

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

function HeroStackStrip() {
  return (
    <div className="mt-12 md:mt-14">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-8">
        {heroStackItems.map((item) => {
          const className = "group inline-flex items-center gap-2.5 text-white/45 transition-colors duration-300";
          const testId = `hero-stack-logo-${item.name.toLowerCase().replace(/\s+/g, "-")}`;
          const content = (
            <>
              <img
                src={item.src}
                alt={`${item.name} logo`}
                loading="lazy"
                className={`${item.iconClassName} w-auto object-contain opacity-60 grayscale brightness-150 contrast-125 transition-all duration-300 group-hover:opacity-90`}
              />
              <span className={`text-sm md:text-[15px] font-semibold text-white/45 group-hover:text-white/70 transition-colors duration-300 ${item.labelClassName ?? ""}`}>
                {item.name}
              </span>
            </>
          );

          return item.href ? (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Muloo on the HubSpot Solutions Directory"
              className={className}
              data-testid={testId}
            >
              {content}
            </a>
          ) : (
            <div key={item.name} className={className} data-testid={testId}>
              {content}
            </div>
          );
        })}
      </div>
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
  { name: "Chat Inc.", href: "https://www.chatinc.com/" },
  { name: "Phillips Law", href: "https://phillips-law.co.uk/" },
  { name: "Group Elephant", href: "https://www.groupelephant.com/" },
  { name: "epi-use", href: "https://www.epiuse.com/" },
  { name: "WConsulting", href: "https://wconsulting.co.za/#home" },
  { name: "Deviare", href: "https://deviare.africa/the-company" },
  { name: "Magnisol", href: "https://www.magnisol.com/" },
  { name: "Reos Partners", href: "https://reospartners.com/" },
  { name: "Tusk", href: "https://tusk.agency/" },
  { name: "Virgin Active", href: "https://www.virginactive.co.za/" },
  { name: "SNG Grant Thornton", href: "https://www.grantthornton.co.za/" },
  { name: "Aerobotics", href: "https://aerobotics.com/" },
  { name: "Nubeva", href: "https://www.nubeva.com/" },
];

function ClientMarquee() {
  return (
    <Section className="py-[23px] md:py-[23px] border-t border-b border-white/5 bg-[#030614]/50 overflow-hidden relative">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all">
        <div className="flex gap-20 items-center px-10">
          {clientLogos.map((client, i) => (
            <a
              key={`logo1-${i}`}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-black tracking-tighter text-white/20 uppercase hover:text-white/50 transition-colors"
              style={{ fontFamily: "'Aileron', sans-serif" }}
            >
              {client.name}
            </a>
          ))}
        </div>
        <div className="flex gap-20 items-center px-10 pointer-events-none" aria-hidden="true">
          {clientLogos.map((client, i) => (
            <a
              key={`logo2-${i}`}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              className="text-xl md:text-2xl font-black tracking-tighter text-white/20 uppercase hover:text-white/50 transition-colors"
              style={{ fontFamily: "'Aileron', sans-serif" }}
            >
              {client.name}
            </a>
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
  const jarrudMeeting = getMeetingBySlug("jarrud");
  const morneMeeting = getMeetingBySlug("morne");

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
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-8 h-14 rounded-lg glow-muloo-sm hover:-translate-y-0.5 transition-all" data-testid="button-hero-cta">
                    {homeContent.hero.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="border-white/15 text-white hover:bg-white/5 hover:border-brand-teal/30 font-bold px-8 h-14 rounded-lg transition-all" data-testid="button-hero-secondary">
                    {homeContent.hero.secondaryCta} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <p className="text-sm font-mono text-muted-foreground/50 tracking-wider">
                Cape Town based. Globally delivered.
              </p>
            </div>

            <UICascade />
          </div>

          <HeroStackStrip />
        </div>
      </div>

      <HeroCredibilityStrip />

      <ProofStats />

      <HelpSegmentSection />

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

                  <h3 className="text-2xl font-bold mb-3 text-white transition-colors">{pillar.title}</h3>
                  <p className="text-base text-muted-foreground leading-[1.8] mb-8 flex-grow">{pillar.desc}</p>

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
      <FreeReviewCtaSection />

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

        <div className="flex flex-wrap items-center gap-3.5">
          {platformLogos.map((p) => {
            const className = "group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 hover:border-brand-teal/40 hover:-translate-y-0.5 hover:bg-white/[0.04] transition-all duration-300";
            const testId = `logo-${p.name.toLowerCase().replace(/\s/g,'-')}`;
            const content = (
              <>
                <img src={p.src} alt={p.name} className="h-[22px] w-auto opacity-55 grayscale brightness-150 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300" />
                <span className="font-sans text-[15px] font-semibold text-white/55 group-hover:text-white transition-colors">{p.name}</span>
              </>
            );

            return p.href ? (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Muloo on the HubSpot Solutions Directory"
                className={className}
                data-testid={testId}
              >
                {content}
              </a>
            ) : (
              <div key={p.name} className={className} data-testid={testId}>
                {content}
              </div>
            );
          })}
        </div>
      </Section>

      <CaseStudiesPreview />

      {/* ── 8. BOOK A QUICK CALL ── */}
      {jarrudMeeting && morneMeeting && (
        <Section className="py-14 md:py-16 border-t border-white/5">
          <div className="mb-8">
            <h2 className="text-sm font-mono text-gradient-muloo uppercase tracking-widest mb-4">Book a quick call</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Speak directly with Muloo leadership</h3>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="md:hidden overflow-x-auto">
              <div className="flex gap-4 snap-x snap-mandatory pb-2">
                <div className="snap-start min-w-[92%]">
                  <BookingCard meeting={jarrudMeeting} compact className="h-full" />
                </div>
                <div className="snap-start min-w-[92%]">
                  <BookingCard meeting={morneMeeting} compact className="h-full" />
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <BookingCard meeting={jarrudMeeting} compact className="h-full" />
            </div>
            <div className="hidden md:block">
              <BookingCard meeting={morneMeeting} compact className="h-full" />
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}

function HeroCredibilityStrip() {
  return (
    <Section className="py-7 md:py-8 border-t border-b border-white/5 bg-section-soft">
      <div className="grid gap-4 lg:grid-cols-[minmax(330px,0.92fr)_1.55fr]">
        {/* Featured — HubSpot Gold partner */}
        <a
          href={hubspotSolutionsDirectoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Muloo on the HubSpot Solutions Directory"
          data-testid="hero-hubspot-partner"
          className="group relative overflow-hidden glass-card rounded-xl p-6 flex flex-col gap-4 hover:border-brand-teal/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(120%_130%_at_100%_0%,rgba(255,122,89,0.10),transparent_55%)]" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-brand-teal whitespace-nowrap">// Accredited</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground">
              <BadgeCheck className="h-3.5 w-3.5 text-brand-teal" /> Verified
            </span>
          </div>
          <div className="relative z-10 flex items-center gap-4">
            <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-lg border border-[#FF7A59]/30 bg-[#FF7A59]/10 text-[#FF7A59]">
              <HubSpotMark className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              <div className="font-sans text-[19px] font-bold leading-tight tracking-tight text-white">HubSpot Solutions Partner</div>
              <div className="mt-0.5 text-[13.5px] leading-snug text-muted-foreground">Accredited &amp; audited implementation partner</div>
            </div>
          </div>
          <span className="relative z-10 inline-flex items-center gap-1.5 self-start rounded-full border border-[#E4B85A]/40 bg-gradient-to-br from-[#E4B85A]/20 to-[#B8863A]/10 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EBCB7C] shadow-[0_0_14px_-6px_rgba(228,184,90,0.5)]">
            <Award className="h-3 w-3" /> Gold tier
          </span>
        </a>

        {/* Supporting facts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 glass-card rounded-xl overflow-hidden hover:border-brand-teal/25 transition-colors duration-300">
          {heroSupportFacts.map((fact, i) => (
            <div key={fact.eyebrow} className={cn("group/f flex flex-col gap-3 p-5", i > 0 && "sm:border-l border-white/[0.06] max-sm:border-t")}>
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-brand-teal/20 bg-brand-teal/10 transition-colors group-hover/f:bg-brand-teal">
                <fact.icon className="h-[18px] w-[18px] text-brand-teal transition-colors group-hover/f:text-background" />
              </div>
              <div className="font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted-foreground">{fact.eyebrow}</div>
              <div className="font-sans text-[15px] font-semibold leading-snug text-white">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FreeReviewCtaSection() {
  return (
    <Section className="py-20 md:py-[120px] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 70% at 50% 45%, rgba(193,64,255,0.07), transparent)" }} />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="relative rounded-3xl p-[1px] bg-gradient-muloo">
          <div className="rounded-3xl bg-[#060E2B]/95 border border-white/10 px-8 py-10 md:px-12 md:py-12 text-center shadow-[0_30px_70px_-35px_rgba(193,64,255,0.45)]">
            <span className="inline-flex items-center rounded-full border border-brand-teal/25 bg-brand-teal/10 px-4 py-1 text-[11px] font-mono uppercase tracking-widest text-brand-teal mb-5">
              Free Resource
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Free CRM architecture review
            </h2>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-8 leading-[1.7]">
              Get a structured review of your CRM architecture, pipelines, and operational risks before your next platform decision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-9 text-xs font-mono uppercase tracking-wider">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">Architecture Findings</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">Priority Fixes</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">Roadmap Advice</span>
            </div>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-12 h-16 rounded-xl glow-muloo-sm text-lg"
                data-testid="button-free-crm-architecture-review"
              >
                Free CRM architecture review <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProofStats() {
  return (
    <Section className="py-12 border-b border-white/5">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {homeContent.stats.map((stat, i) => (
          <div key={stat.label} className={cn("px-7 py-1.5", i > 0 && "sm:border-l border-white/[0.07] max-sm:border-t max-sm:pt-5 max-sm:mt-2")}>
            <div className="text-gradient-muloo font-sans font-extrabold tracking-tight leading-none text-[clamp(2.4rem,4vw,3.1rem)]">{stat.value}</div>
            <div className="mt-3 font-mono text-[12.5px] uppercase tracking-[0.1em] text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const caseStudies = [
  { stream: "hub",   tag: "CRM Architecture",      num: "01", title: "Rescued and rebuilt for 20+ product lines",
    desc: "Phillips Law — an 18-month HubSpot rescue: stabilised a failed implementation and rebuilt it into a scalable multi-pipeline platform.",
    outcome: "18-month engagement", href: "/case-studies/phillips-law" },
  { stream: "ai",    tag: "Digital Transformation", num: "02", title: "An underused portal becomes a growth platform",
    desc: "W.consulting — rebuilt the CRM architecture, engineered custom Book Club automation, and centralised CPD feedback and reporting.",
    outcome: "Foundational phase complete", href: "/case-studies/wconsulting-crm" },
  { stream: "build", tag: "Portal Migration",       num: "03", title: "A clean portal and theme-based website",
    desc: "Magnisol — HubSpot Hub selection, migration to a clean new portal, and a fast theme-based website rollout, discovery-led.",
    outcome: "3 connected workstreams", href: "/case-studies/magnisol" },
];

const streamChip: Record<string, string> = {
  hub: "text-stream-hub border-stream-hub/35 bg-stream-hub/10",
  build: "text-stream-build border-stream-build/35 bg-stream-build/10",
  ai: "text-stream-ai border-stream-ai/35 bg-stream-ai/10",
  product: "text-stream-product border-stream-product/35 bg-stream-product/10",
};

function CaseStudiesPreview() {
  return (
    <Section className="py-20 md:py-[120px] border-t border-white/5">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-sm font-mono text-gradient-muloo uppercase tracking-widest mb-4">Selected work</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Proof, not promises.</h3>
        <p className="text-muted-foreground text-lg leading-[1.8]">Real engagements, documented end to end — the technical challenge, what we built, and the measurable outcome.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {caseStudies.map((c) => (
          <Link key={c.num} href={c.href} className="group glass-card rounded-2xl p-7 flex flex-col gap-3.5 hover:border-brand-teal/35 hover:-translate-y-1 transition-all duration-300" data-testid={`card-case-${c.num}`}>
            <div className="flex items-center justify-between">
              <span className={cn("inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap", streamChip[c.stream])}>{c.tag}</span>
              <span className="font-sans text-[28px] font-extrabold text-white/[0.09]">{c.num}</span>
            </div>
            <h4 className="font-sans text-[19px] font-bold leading-tight tracking-tight text-white">{c.title}</h4>
            <p className="text-sm text-muted-foreground leading-[1.7] flex-grow">{c.desc}</p>
            <div className="flex flex-col items-start gap-2.5 pt-4 border-t border-white/[0.06]">
              <span className="font-mono text-xs text-white/30">{c.outcome}</span>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-teal">Read case study <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /></span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function HelpSegmentSection() {
  return (
    <Section className="py-20 md:py-[110px] border-t border-white/5 bg-section-soft">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">How can we help?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 flex flex-col group hover:border-stream-hub/20 transition-all duration-300 relative overflow-hidden" data-testid="card-help-muloo-hub">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Layers3 className="w-32 h-32 text-stream-hub" />
          </div>
          <span className="text-sm font-mono text-stream-hub uppercase tracking-widest mb-4">Muloo Hub</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 z-10">HubSpot Architecture & RevOps</h3>
          <div className="space-y-2 text-base md:text-lg text-muted-foreground leading-[1.8] mb-8 z-10 flex-grow">
            <p>We need enterprise HubSpot architecture.</p>
            <p>Our revenue operations need aligning.</p>
            <p>Complex data migrations & guided deployments.</p>
          </div>

          <Link href="/muloo-hub" className="mt-auto z-10">
            <Button size="lg" className="w-full sm:w-auto bg-stream-hub/10 hover:bg-stream-hub/20 text-stream-hub border border-stream-hub/30 font-bold px-8 h-14 rounded-lg flex items-center justify-center">
              Explore Muloo Hub <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/10 flex flex-col group hover:border-stream-build/20 transition-all duration-300 relative overflow-hidden" data-testid="card-help-muloo-build">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Terminal className="w-32 h-32 text-stream-build" />
          </div>
          <span className="text-sm font-mono text-stream-build uppercase tracking-widest mb-4">Muloo Build</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 z-10">Custom Engineering & Integration</h3>
          <div className="space-y-2 text-base md:text-lg text-muted-foreground leading-[1.8] mb-8 z-10 flex-grow">
            <p>We need systems to talk to each other.</p>
            <p>We require bespoke middleware & APIs.</p>
            <p>Our backend architecture is scaling.</p>
          </div>

          <Link href="/services/build" className="mt-auto z-10">
            <Button size="lg" className="w-full sm:w-auto bg-stream-build/10 hover:bg-stream-build/20 text-stream-build border border-stream-build/30 font-bold px-8 h-14 rounded-lg flex items-center justify-center">
              Explore Muloo Build <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
