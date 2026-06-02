import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Webhook, Code2, Shield, Zap, Database, Terminal, RefreshCw, Lock, Activity, Layers, Server, HardDrive } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceBuildContent } from "@/lib/content";
import { BookingCard } from "@/components/meetings/BookingCard";
import { getMeetingBySlug } from "@/content/meetings";
import { useWebsiteContent } from "@/hooks/use-website-content";
import { SEO } from "@/components/layout/SEO";

const streamBlue = "#155DFC";
const siteUrl = "https://www.wearemuloo.com";

const buildPlatformLogos = [
  { name: "HubSpot", src: "/assets/stack-logos/hubspot.svg" },
  { name: "Azure", src: "/assets/stack-logos/azure.svg" },
  { name: "SQL Server", src: "/assets/stack-logos/microsoftsqlserver.svg" },
  { name: "SAP", src: "/assets/stack-logos/sap.svg" },
  { name: "Google Cloud", src: "/assets/stack-logos/googlecloud.svg" },
  { name: "Snowflake", src: "/assets/stack-logos/snowflake.svg" },
];

const serviceBuildStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Muloo Build agentic full-stack builds",
  description: serviceBuildContent.intro,
  serviceType: "Agentic full-stack software development, API integration, platform engineering, and production hardening",
  provider: {
    "@type": "Organization",
    name: "Muloo",
    url: siteUrl,
  },
  areaServed: ["South Africa", "United Kingdom", "Australia", "United States"],
  url: `${siteUrl}/services/build`,
};

function getFirstName(name: string) {
  return name.split(" ")[0] ?? name;
}

export function ServicesBuild() {
  const { data: websiteContent } = useWebsiteContent();
  const planningMeeting = getMeetingBySlug("morne", websiteContent?.meetings) ?? getMeetingBySlug("jarrud", websiteContent?.meetings);
  const meetingUrl = planningMeeting ? `/contact/book/${planningMeeting.slug}` : "/contact";

  return (
    <div className="flex flex-col">
      <SEO
        title="Muloo Build | Agentic Full-Stack Builds"
        description="Muloo Build uses human-led, AI-assisted delivery to design, build, harden, and ship full-stack software, APIs, integrations, data layers, and operational workflows."
        canonicalUrl={`${siteUrl}/services/build`}
        structuredData={serviceBuildStructuredData}
      />

      {/* Hero */}
      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient glow-build relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-16">
            <div className="max-w-xl flex-1">
              <Badge
                variant="outline"
                className="mb-6 border-[#155DFC]/30 text-[#155DFC] bg-[#155DFC]/5"
                data-testid="badge-build"
              >
                Muloo Build
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">
                {serviceBuildContent.h1}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-[#155DFC] pl-6">
                {serviceBuildContent.intro}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href={meetingUrl}>
                  <Button
                    size="lg"
                    className="font-bold h-12 px-7 text-white rounded-lg"
                    style={{ backgroundColor: streamBlue }}
                    data-testid="button-scope-agentic-build"
                  >
                    Scope an Agentic Build <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a
                  href="#build-capabilities"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/15 px-7 text-sm font-bold text-white/80 transition-colors hover:border-[#155DFC]/40 hover:text-white"
                  data-testid="link-build-capabilities"
                >
                  See What We Build
                </a>
              </div>
            </div>

            <div className="hidden lg:block flex-1">
              <div className="relative w-full max-w-lg mx-auto" data-testid="build-hero-visual">
                <div className="absolute inset-0 bg-[#155DFC] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

                <img
                  src="/assets/hero-ui-cascade-clean.png"
                  alt="Agentic build dashboard showing a deployed coding agent, revenue analytics, and data sync status"
                  className="relative z-10 w-full rounded-2xl border border-white/10 shadow-[0_35px_90px_rgba(0,0,0,0.45)]"
                  loading="eager"
                />

                <div className="absolute -top-5 right-5 z-20 w-56 glass-card rounded-xl border-white/10 p-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] animate-float-medium">
                  <div className="mb-2 flex items-center gap-2 text-white">
                    <Shield className="h-4 w-4 text-[#155DFC]" />
                    <span className="text-xs font-semibold">Human Review Gate</span>
                  </div>
                  <p className="text-[10px] leading-relaxed text-white/50">AI-generated work is checked against scope, architecture, and release standards.</p>
                </div>

                <div className="absolute -bottom-5 left-8 z-20 w-52 glass-card rounded-xl border-white/10 p-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] animate-float-slow">
                  <div className="mb-2 flex items-center gap-2 text-white">
                    <Terminal className="h-4 w-4 text-[#155DFC]" />
                    <span className="text-xs font-semibold">Full-Stack Sprint</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-[#155DFC]" />
                  </div>
                  <p className="mt-2 text-[10px] text-white/45">Design - build - harden - ship</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Problem Framing */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-2xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-6 block">The challenge</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Agentic delivery belongs at the centre of the build.
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            AI can accelerate delivery, but only when the product goal, architecture, data model, and release controls are clear. We use agentic workflows to move faster without losing the engineering discipline required for production software.
          </p>
        </div>
      </Section>

      {/* Architecture Visual Block */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">How data moves through your stack</h2>
            <p className="text-muted-foreground leading-[1.8] mb-8 max-w-lg">
              We design and build the layer between systems: APIs, middleware, event queues, and data pipelines. It handles failure gracefully, logs consistently, and scales as volume grows. Every boundary is validated, tested, and monitored.
            </p>
            <ul className="space-y-4">
              {[
                "Retry logic with exponential backoff",
                "Structured logging at every pipeline stage",
                "Schema validation before data enters any system",
                "Graceful degradation when downstream services fail",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: streamBlue }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="diagram-architecture">
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{
                background: `radial-gradient(circle at top right, rgba(21, 93, 252, 0.05), transparent)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                <div className="h-2 w-2 rounded-full bg-green-500/40" />
                <span className="ml-3 text-[10px] font-mono text-white/20">system-architecture.diagram</span>
              </div>

              <div className="flex flex-col gap-3">
                {/* Source Layer */}
                <div>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] mb-2 block">Source Systems</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "CRM", icon: <Layers className="h-3.5 w-3.5" /> },
                      { label: "ERP", icon: <Server className="h-3.5 w-3.5" /> },
                      { label: "External Services", icon: <Zap className="h-3.5 w-3.5" /> },
                    ].map((s) => (
                      <div key={s.label} className="px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                        <span className="text-white/20">{s.icon}</span>
                        <span className="text-[11px] font-mono text-white/40">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center py-0.5">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(21, 93, 252, 0.2)` }} />
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: `rgba(21, 93, 252, 0.4)` }} />
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(21, 93, 252, 0.2)` }} />
                  </div>
                </div>

                {/* API Gateway */}
                <div
                  className="p-3.5 rounded-xl flex items-center gap-3"
                  style={{
                    backgroundColor: `rgba(21, 93, 252, 0.04)`,
                    border: `1px solid rgba(21, 93, 252, 0.15)`,
                  }}
                >
                  <Shield className="h-4 w-4 shrink-0" style={{ color: `rgba(21, 93, 252, 0.6)` }} />
                  <div>
                    <span className="font-mono text-xs font-medium" style={{ color: `rgba(21, 93, 252, 0.8)` }}>API Gateway</span>
                    <span className="text-[9px] text-white/20 block font-mono mt-0.5">Auth - Rate Limit - Validate</span>
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center py-0.5">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(21, 93, 252, 0.2)` }} />
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: `rgba(21, 93, 252, 0.5)` }} />
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(21, 93, 252, 0.2)` }} />
                  </div>
                </div>

                {/* Middleware + Event Queue row */}
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="p-3.5 rounded-xl flex items-center gap-3"
                    style={{
                      backgroundColor: `rgba(21, 93, 252, 0.06)`,
                      border: `1px solid rgba(21, 93, 252, 0.25)`,
                      boxShadow: `0 0 20px -8px rgba(21, 93, 252, 0.15)`,
                    }}
                  >
                    <Terminal className="h-4 w-4 shrink-0" style={{ color: streamBlue }} />
                    <div>
                      <span className="font-mono text-xs font-medium" style={{ color: streamBlue }}>Middleware</span>
                      <span className="text-[9px] text-white/20 block font-mono mt-0.5">Transform - Route</span>
                    </div>
                  </div>
                  <div
                    className="p-3.5 rounded-xl flex items-center gap-3"
                    style={{
                      backgroundColor: `rgba(21, 93, 252, 0.04)`,
                      border: `1px solid rgba(21, 93, 252, 0.15)`,
                    }}
                  >
                    <Activity className="h-4 w-4 shrink-0" style={{ color: `rgba(21, 93, 252, 0.6)` }} />
                    <div>
                      <span className="font-mono text-xs font-medium" style={{ color: `rgba(21, 93, 252, 0.8)` }}>Event Queue</span>
                      <span className="text-[9px] text-white/20 block font-mono mt-0.5">Async - Retry</span>
                    </div>
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center py-0.5">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(21, 93, 252, 0.2)` }} />
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: `rgba(21, 93, 252, 0.4)` }} />
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(21, 93, 252, 0.2)` }} />
                  </div>
                </div>

                {/* Target Layer */}
                <div>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] mb-2 block">Target Systems</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Data Warehouse", icon: <HardDrive className="h-3.5 w-3.5" /> },
                      { label: "CRM", icon: <Layers className="h-3.5 w-3.5" /> },
                      { label: "Webhooks", icon: <Webhook className="h-3.5 w-3.5" /> },
                    ].map((t) => (
                      <div key={t.label} className="px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                        <span className="text-white/20">{t.icon}</span>
                        <span className="text-[11px] font-mono text-white/40">{t.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] font-mono text-white/25">Pipeline healthy</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-white/20">42ms avg</span>
                  <span className="text-[10px] font-mono text-white/20">99.98% uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Build */}
      <Section id="build-capabilities" className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">What we build</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Full-stack systems that ship</h2>
          <p className="mt-5 text-muted-foreground leading-[1.8]">
            We build the product surface, backend logic, integrations, data flows, and production controls together so the final system behaves like one product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Code2, title: "Full-Stack Applications", desc: "Production web apps, internal tools, and workflow products with usable interfaces, backend services, and clean release paths." },
            { icon: Webhook, title: "APIs & Integration Layers", desc: "Typed APIs, middleware, webhooks, and platform connections that move data reliably between business systems." },
            { icon: Zap, title: "Agentic Build Workflows", desc: "AI-assisted delivery loops for scaffolding, implementation, QA support, and documentation with human review gates." },
            { icon: Lock, title: "Client & Internal Portals", desc: "Secure portals with role-based access, audit trails, data views, and self-service workflows for teams or customers." },
            { icon: Database, title: "Data Systems & Reporting", desc: "Schema mapping, validation, sync logic, and reporting foundations so teams can trust operational data." },
            { icon: RefreshCw, title: "Production Hardening", desc: "Refactoring, observability, deployment support, and runtime controls for builds that need to survive real usage." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group hover:border-[#155DFC]/20 transition-all duration-300"
              data-testid={`card-capability-${i}`}
            >
              <div
                className="h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors"
                style={{ backgroundColor: `rgba(21, 93, 252, 0.1)` }}
              >
                <item.icon className="h-6 w-6" style={{ color: streamBlue }} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Platforms we engineer across</h2>
          <p className="mt-5 text-muted-foreground leading-[1.8]">
            We connect into the systems that already run the business, then build the custom product and automation layer around them.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {buildPlatformLogos.map((platform) => (
            <div
              key={platform.name}
              className="glass-card rounded-xl border-white/10 p-5 flex flex-col items-center justify-center gap-3 min-h-28"
              data-testid={`logo-platform-${platform.name.toLowerCase().replace(/\s/g, '-')}`}
            >
              <div className="h-12 w-12 rounded-lg bg-white p-2 flex items-center justify-center">
                <img src={platform.src} alt={platform.name} className="h-full w-full object-contain" loading="lazy" />
              </div>
              <span className="text-xs font-mono text-white/55 text-center">{platform.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Approach */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">Our approach</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Structured delivery, no surprises</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {serviceBuildContent.approach.map((item, i) => (
            <div key={i} className="relative group" data-testid={`step-${item.step}`}>
              <div className="text-6xl font-black text-white/[0.04] mb-4 group-hover:text-[#155DFC]/10 transition-colors select-none">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
              <div
                className="w-12 h-0.5 mt-6 opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: streamBlue }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Engineering standards */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">Standards</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Engineering standards</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Idempotent APIs", desc: "Every request produces the same result, no matter how many times it's sent." },
            { title: "Event-driven architecture", desc: "Systems react to changes in real time instead of polling for updates." },
            { title: "Data integrity first", desc: "Validation at every boundary - nothing enters a system unchecked." },
            { title: "Observable systems", desc: "Structured logging, tracing, and alerting from day one." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6"
              style={{ borderTop: `2px solid rgba(21, 93, 252, 0.3)` }}
              data-testid={`card-principle-${i}`}
            >
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Not Just Integration */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-2xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Not Just Integration. System Design.</h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Connecting two systems is easy. Engineering a stack that scales, keeps data clean under load, and reduces technical debt with every release is the real work. We build APIs, middleware, and pipelines your team can extend without needing us for every change.
          </p>
        </div>
      </Section>

      {/* How We Engage */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">Delivery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">How we engage</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Project-Based Builds",
              desc: "Scoped architecture and engineering engagements with defined deliverables, timelines, and handover documentation.",
            },
            {
              title: "Embedded Engineering",
              desc: "Our engineers integrate directly into your team - attending standups, shipping code, and owning outcomes alongside your people.",
            },
            {
              title: "Optimisation Retainers",
              desc: "Ongoing monitoring, performance tuning, and incremental improvements to keep your systems stable and evolving.",
            },
          ].map((model, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group hover:border-[#155DFC]/15 transition-all duration-300"
              data-testid={`card-engagement-${i}`}
            >
              <h3 className="text-lg font-bold mb-3 text-white">{model.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{model.desc}</p>
              <div
                className="w-10 h-0.5 mt-6 opacity-40 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: streamBlue }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">Outcomes</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">What changes after we deliver</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Zero manual syncs", desc: "Data flows automatically between systems with retry logic and structured error handling." },
            { title: "Type-safe pipelines", desc: "Every integration is typed end-to-end. Errors caught at build time, not discovered in production." },
            { title: "Production confidence", desc: "Monitoring, alerting, and graceful degradation built into every deployment." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8"
              style={{ borderTop: `3px solid ${streamBlue}` }}
              data-testid={`card-outcome-${i}`}
            >
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mini Case Example */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div
          className="glass-card rounded-2xl p-10 md:p-14 max-w-3xl"
          style={{ borderLeft: `4px solid ${streamBlue}` }}
          data-testid="card-case-example"
        >
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-6 block">Case study</span>
          <h3 className="text-2xl font-bold text-white mb-6">Systems integration & backend architecture</h3>
          <p className="text-muted-foreground leading-[1.8]">
            An international B2B organisation consolidated disconnected systems into a unified backend architecture with controlled integrations and versioned deployment workflows.
          </p>
        </div>
      </Section>

      {planningMeeting && (
        <Section className="py-12 md:py-16 border-t border-white/5">
          <div className="mb-6">
            <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-3 block">Need a plan?</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Talk directly with {getFirstName(planningMeeting.name)}</h2>
          </div>
          <BookingCard meeting={planningMeeting} />
        </Section>
      )}

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient glow-build border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to ship an agentic full-stack build?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            We'll map the product, architecture, data flows, and release path before the first sprint starts.
          </p>
          <Link href={meetingUrl}>
            <Button
              size="lg"
              className="font-bold px-10 h-14 text-white rounded-lg"
              style={{ backgroundColor: streamBlue }}
              data-testid="button-book-architecture-call"
            >
              Book a Build Scoping Session <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
