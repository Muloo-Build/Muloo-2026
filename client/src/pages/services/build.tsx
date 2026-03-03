import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Webhook, Code2, Shield, Zap, Database, Terminal, RefreshCw, Lock, Activity, Layers, Server, HardDrive, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceBuildContent } from "@/lib/content";

const streamBlue = "#155DFC";
const meetingUrl = "/contact/book/morne";

export function ServicesBuild() {
  return (
    <div className="flex flex-col">
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
            </div>

            <div className="hidden lg:block flex-1">
              <div className="relative w-full max-w-md mx-auto h-[320px]" data-testid="build-hero-visual">
                <div className="absolute inset-0 bg-[#155DFC] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

                {/* Top Card: API Gateway */}
                <div className="absolute top-4 right-0 w-56 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-20 animate-float-medium">
                  <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                    <div className="flex items-center gap-2 text-white">
                      <Shield className="h-4 w-4 text-[#155DFC]" />
                      <span className="text-xs font-semibold">API Gateway</span>
                    </div>
                    <span className="text-[10px] text-green-400 font-mono bg-green-400/10 px-1.5 py-0.5 rounded">200 OK</span>
                  </div>
                  <div className="space-y-1 font-mono text-[8px] text-muted-foreground bg-black/40 p-1.5 rounded border border-white/5">
                    <div><span className="text-purple-400">POST</span> /api/v2/webhooks/stripe</div>
                    <div><span className="text-blue-400">Authorization:</span> Bearer token_***</div>
                    <div><span className="text-orange-400">Content-Type:</span> application/json</div>
                  </div>
                </div>

                {/* Middle Left: Data Pipeline */}
                <div className="absolute top-24 -left-6 w-52 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-10 animate-float-slow">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-[#155DFC]" />
                        <span className="text-xs font-medium text-white">Data Pipeline</span>
                      </div>
                      <div className="flex gap-1 items-end h-4">
                        {[40, 70, 45, 90, 60].map((h, i) => (
                          <div key={i} className="w-1 bg-[#155DFC]/60 rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[10px] text-white/50 flex justify-between">
                        <span>Transforming Payload</span>
                        <span>42ms</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#155DFC] rounded-full w-[65%] animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Right: Middleware Success */}
                <div className="absolute bottom-6 right-8 w-52 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-30 animate-float-fast">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">ERP Sync Complete</div>
                      <div className="text-[9px] text-muted-foreground">1,204 records updated</div>
                    </div>
                  </div>
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
            Disconnected systems quietly erode performance.
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            APIs exist. Tools exist. Data exists. But when architecture is fragmented, reporting breaks, automations misfire, and change becomes expensive. Modern businesses don’t need more tools. They need systems that are designed to work together.
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
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">What we build</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Engineering that ships</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Code2, title: "API Development", desc: "Production APIs with typed contracts, versioning, observability, and documentation your team can actually use." },
            { icon: Webhook, title: "Middleware Architecture", desc: "Reliable integration layers that sync, transform, and route data with retries, dead-letter handling, and clear error reporting." },
            { icon: Lock, title: "Client Portals", desc: "Secure customer and internal portals with role-based access, audit trails, and clean UX for self-service." },
            { icon: Zap, title: "Event-Based Integrations", desc: "Event-driven systems using webhooks, queues, and background workers to react in real time without breaking under load." },
            { icon: Database, title: "Data Sync & Governance", desc: "Schema mapping, validation, deduplication, and incremental sync so data stays consistent across every platform." },
            { icon: RefreshCw, title: "Platform Connectivity", desc: "Connect CRMs, ERPs, payments, shipping, and internal tools — including legacy systems and custom APIs." },
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
        </div>

        <div className="flex flex-wrap gap-3 max-w-3xl">
          {[
            "Microsoft Azure",
            "Google Cloud",
            "SAP",
            "SQL Server",
            "Snowflake",
            "HubSpot",
            "Salesforce",
            "Custom APIs",
          ].map((platform) => (
            <span
              key={platform}
              className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm font-mono text-white/50 hover:text-[#155DFC] hover:border-[#155DFC]/20 transition-all duration-300"
              data-testid={`tag-platform-${platform.toLowerCase().replace(/\s/g, '-')}`}
            >
              {platform}
            </span>
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
            { title: "Data integrity first", desc: "Validation at every boundary â€” nothing enters a system unchecked." },
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
              desc: "Our engineers integrate directly into your team â€” attending standups, shipping code, and owning outcomes alongside your people.",
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

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient glow-build border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to stabilise your architecture?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            We’ll map the current stack, identify breakpoints, and ship a clear build plan.
          </p>
          <Link href={meetingUrl}>
            <Button
              size="lg"
              className="font-bold px-10 h-14 text-white rounded-lg"
              style={{ backgroundColor: streamBlue }}
              data-testid="button-book-architecture-call"
            >
              Book a Technical Scoping Session <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}


