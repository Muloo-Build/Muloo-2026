import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Laptop, Rocket, BarChart3, Settings, Lightbulb, Users, CreditCard, Server, HeadphonesIcon, Activity, Star, Cloud } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceProductContent } from "@/lib/content";
import { BookingCard } from "@/components/meetings/BookingCard";
import { getMeetingBySlug } from "@/content/meetings";

const streamGreen = "#59BF96";
const meetingUrl = "/contact/book/morne";

export function ServicesProduct() {
  const jarrudMeeting = getMeetingBySlug("jarrud");

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient glow-product relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-16">
            <div className="max-w-xl flex-1">
              <Badge
                variant="outline"
                className="mb-6 border-[#59BF96]/30 text-[#59BF96] bg-[#59BF96]/5"
                data-testid="badge-product"
              >
                Muloo Product
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">
                {serviceProductContent.h1}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-[#59BF96] pl-6">
                {serviceProductContent.intro}
              </p>
            </div>

            <div className="hidden lg:block flex-1">
              <div className="relative w-full max-w-md mx-auto h-[320px]" data-testid="product-hero-visual">
                <div className="absolute inset-0 bg-[#59BF96] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

                {/* Main App Window */}
                <div className="absolute inset-4 glass-card rounded-xl border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-10 flex flex-col overflow-hidden animate-float-medium">
                  {/* App Header */}
                  <div className="h-8 border-b border-white/5 bg-white/[0.02] flex items-center px-3 gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/50" />
                    <div className="mx-auto h-3 w-24 bg-white/5 rounded-full" />
                  </div>
                  {/* App Body */}
                  <div className="flex-1 p-4 flex flex-col gap-4">
                    {/* Stats Row */}
                    <div className="flex gap-3">
                      <div className="flex-1 h-16 rounded-lg bg-white/5 border border-white/5 p-2.5 flex flex-col justify-between">
                        <div className="h-2 w-10 bg-white/20 rounded-full" />
                        <div className="flex items-end gap-2">
                          <span className="text-white text-lg font-bold leading-none">$12k</span>
                          <span className="text-green-400 text-[9px] font-mono leading-none">+14%</span>
                        </div>
                      </div>
                      <div className="flex-1 h-16 rounded-lg bg-white/5 border border-white/5 p-2.5 flex flex-col justify-between">
                        <div className="h-2 w-12 bg-white/20 rounded-full" />
                        <div className="flex items-end gap-2">
                          <span className="text-white text-lg font-bold leading-none">842</span>
                        </div>
                      </div>
                    </div>
                    {/* Chart Area */}
                    <div className="flex-1 rounded-lg bg-white/5 border border-white/5 p-3 flex flex-col justify-end gap-1 overflow-hidden relative">
                      <div className="flex items-end justify-between h-full px-2">
                        {[30, 45, 25, 60, 40, 70, 50, 85].map((h, i) => (
                          <div key={i} className="w-4 bg-[#59BF96]/40 rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Floating Feature Tag */}
                <div className="absolute top-12 -right-6 glass-card rounded-lg p-2.5 border-white/10 shadow-xl z-20 animate-float-slow flex items-center gap-2">
                  <Star className="h-3.5 w-3.5 text-yellow-400" />
                  <span className="text-[10px] font-semibold text-white">Version 2.0 Live</span>
                </div>

                {/* Floating Deploy Tag */}
                <div className="absolute bottom-16 -left-6 glass-card rounded-lg p-2.5 border-white/10 shadow-xl z-20 animate-float-fast flex items-center gap-2">
                  <Cloud className="h-3.5 w-3.5 text-[#59BF96]" />
                  <span className="text-[10px] font-semibold text-white">Edge Deployed</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Problem Framing */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-6 block">The challenge</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Ideas don't fail because of code. They fail because of execution.
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Most product builds stall between prototype and production. Requirements drift, shaky foundations, and missing operational thinking turn good ideas into expensive experiments. You need a team that ships production software and owns the boring parts too.
          </p>
        </div>
      </Section>

      {/* Abstract SaaS Visual */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">What ships</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Production software, not prototypes.</h2>
            <p className="text-muted-foreground leading-[1.8] mb-8 max-w-lg">
              We build products we can operate in the real world: authentication, environments, telemetry, and a roadmap you can actually ship against. If it can't run safely in production, it's not done.
            </p>
            <ul className="space-y-4">
              {[
                "Authentication and role-based access",
                "Billing readiness (when you need it)",
                "Usage telemetry and product analytics",
                "Operational dashboards and audit trails",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: streamGreen }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="mock-saas-visual">
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{ background: `radial-gradient(circle at top right, rgba(89, 191, 150, 0.04), transparent)` }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                <div className="h-2 w-2 rounded-full bg-green-500/40" />
                <span className="ml-3 text-[10px] font-mono text-white/20">product-dashboard.app</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: "MRR", value: "$48.2k", trend: "+12%" },
                  { label: "Active Users", value: "1,284", trend: "+8%" },
                  { label: "Churn", value: "2.1%", trend: "-0.4%" },
                ].map((m) => (
                  <div key={m.label} className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                    <span className="text-[9px] font-mono text-white/20 block mb-1">{m.label}</span>
                    <span className="text-sm font-mono font-medium" style={{ color: `rgba(89, 191, 150, 0.8)` }}>{m.value}</span>
                    <span className="text-[9px] font-mono text-green-400/50 ml-1.5">{m.trend}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-4">
                {[
                  { label: "Enterprise", w: "78%" },
                  { label: "Growth", w: "52%" },
                  { label: "Starter", w: "35%" },
                ].map((bar) => (
                  <div key={bar.label} className="flex items-center gap-3">
                    <span className="text-[9px] font-mono text-white/25 w-16">{bar.label}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/[0.04]">
                      <div className="h-full rounded-full" style={{ width: bar.w, backgroundColor: `rgba(89, 191, 150, 0.4)` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-lg flex items-center gap-3" style={{ backgroundColor: `rgba(89, 191, 150, 0.04)`, border: `1px solid rgba(89, 191, 150, 0.12)` }}>
                  <Activity className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(89, 191, 150, 0.5)` }} />
                  <div>
                    <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>API Health</span>
                    <span className="text-[9px] text-white/20 block font-mono">99.97% uptime</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg flex items-center gap-3" style={{ backgroundColor: `rgba(89, 191, 150, 0.04)`, border: `1px solid rgba(89, 191, 150, 0.12)` }}>
                  <Users className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(89, 191, 150, 0.5)` }} />
                  <div>
                    <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>Tenants</span>
                    <span className="text-[9px] text-white/20 block font-mono">47 active orgs</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] font-mono text-white/25">All systems operational</span>
                </div>
                <span className="text-[10px] font-mono text-white/20">v2.4.1</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Build */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">What we build</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Products we can take to market</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Wrench, title: "Internal Tools", desc: "Operational tools that remove manual work, reduce errors, and give teams one source of truth." },
            { icon: Laptop, title: "Commercial SaaS", desc: "Commercial software designed for multi-tenancy, security, and ongoing iteration from day one." },
            { icon: Rocket, title: "MVP Development", desc: "Rapid MVP delivery with tight scope, real-user feedback loops, and a clear path to production." },
            { icon: Settings, title: "Ongoing Product Engineering", desc: "Long-term engineering support: reliability, performance, security updates, and feature releases." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-2xl group hover:border-[#59BF96]/20 transition-all duration-300"
              data-testid={`card-service-${i}`}
            >
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0 bg-[#59BF96]/10">
                  <item.icon className="h-6 w-6 text-[#59BF96]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Product Lifecycle */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">Lifecycle</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">From idea to scale</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "01", title: "Ideate", desc: "Define the problem, validate the demand, and map the first version that delivers value." },
            { num: "02", title: "Prototype", desc: "Build a usable prototype to test the workflow, not just the UI." },
            { num: "03", title: "Launch", desc: "Ship to production with monitoring, onboarding, and an iteration plan." },
            { num: "04", title: "Scale", desc: "Improve reliability, performance, analytics, and product depth as traction grows." },
          ].map((step, i) => (
            <div
              key={i}
              data-testid={`card-lifecycle-${i}`}
              className="relative glass-card rounded-xl p-6 group hover:border-[#59BF96]/20 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-3 right-3 text-4xl font-extrabold text-white/[0.03] select-none">{step.num}</span>
              <div
                className="w-full h-0.5 mb-5 origin-left transition-all duration-500 group-hover:scale-x-100 scale-x-[0.3]"
                style={{ backgroundColor: `rgba(89, 191, 150, 0.3)` }}
              />
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SaaS Dashboard Mock */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">Production-ready</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built for commercial operation</h2>
            <p className="text-muted-foreground leading-[1.8] mb-8 max-w-lg">
              We ship with the operational foundations: telemetry, environments, access control, and release discipline. Billing and metering are added when the business case makes sense.
            </p>
            <ul className="space-y-4">
              {[
                "Multi-tenant architecture from day one",
                "Usage telemetry and product analytics",
                "Automated billing and subscription management",
                "Operational dashboards and audit trails",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: streamGreen }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="mock-dashboard">
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{ background: `radial-gradient(circle at top right, rgba(89, 191, 150, 0.04), transparent)` }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                <div className="h-2 w-2 rounded-full bg-green-500/40" />
                <span className="ml-3 text-[10px] font-mono text-white/20">saas-dashboard.app</span>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                  <span className="text-[9px] font-mono text-white/20 block mb-1">Active Users</span>
                  <span className="text-lg font-mono font-medium text-white/50">2,847</span>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                  <span className="text-[9px] font-mono text-white/20 block mb-1">MRR</span>
                  <span className="text-lg font-mono font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>$48.2K</span>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                  <span className="text-[9px] font-mono text-white/20 block mb-1">Uptime</span>
                  <span className="text-lg font-mono font-medium text-white/50">99.97%</span>
                </div>
              </div>

              {/* Usage chart */}
              <div className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-3 mb-4">
                <span className="text-[9px] font-mono text-white/20 block mb-3">Monthly Usage</span>
                <div className="h-20 flex items-end justify-between gap-1.5">
                  {[35, 42, 38, 55, 48, 62, 58, 70, 65, 78, 72, 85].map((h, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t-sm transition-colors"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i >= 10 ? `rgba(89, 191, 150, 0.5)` : `rgba(89, 191, 150, 0.2)`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Tenant / Subscription row */}
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="p-3 rounded-lg flex items-center gap-3"
                  style={{
                    backgroundColor: `rgba(89, 191, 150, 0.04)`,
                    border: `1px solid rgba(89, 191, 150, 0.12)`,
                  }}
                >
                  <Users className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(89, 191, 150, 0.5)` }} />
                  <div>
                    <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>Tenants</span>
                    <span className="text-[9px] text-white/20 block font-mono">34 active orgs</span>
                  </div>
                </div>
                <div
                  className="p-3 rounded-lg flex items-center gap-3"
                  style={{
                    backgroundColor: `rgba(89, 191, 150, 0.04)`,
                    border: `1px solid rgba(89, 191, 150, 0.12)`,
                  }}
                >
                  <CreditCard className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(89, 191, 150, 0.5)` }} />
                  <div>
                    <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>Subscriptions</span>
                    <span className="text-[9px] text-white/20 block font-mono">89% retention</span>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] font-mono text-white/25">All systems operational</span>
                </div>
                <span className="text-[10px] font-mono text-white/20">v2.4.1</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Commercialisation */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">Commercialisation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Beyond the build</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: CreditCard, title: "Pricing models", desc: "Tiered, usage-based, or flat-rate - we design the pricing logic and build the product to support it." },
            { icon: Server, title: "Infrastructure", desc: "Cloud architecture, CI/CD, monitoring, and scaling patterns we use in our own products too." },
            { icon: Users, title: "Customer onboarding", desc: "Signup flows, guided setup, and in-app onboarding that reduces time to value." },
            { icon: HeadphonesIcon, title: "Support model", desc: "Support workflows, ticketing integrations, and knowledge-base structure so support can scale." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 group hover:border-[#59BF96]/20 transition-all duration-300"
              data-testid={`card-commercial-${i}`}
            >
              <div className="h-10 w-10 rounded-lg bg-[#59BF96]/10 flex items-center justify-center mb-5">
                <item.icon className="h-5 w-5 text-[#59BF96]" />
              </div>
              <h3 className="text-base font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Designed for Scale */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">Standards</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built for longevity</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Multi-tenant architecture", desc: "Clear tenant boundaries and shared infrastructure when required." },
            { title: "Subscription-ready", desc: "Plan structure and billing readiness built to evolve with the business." },
            { title: "Secure authentication", desc: "Role-based access with sensible defaults, with SSO options when needed." },
            { title: "Infrastructure planning", desc: "Scaling and cost thinking before the first real customer arrives." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6"
              style={{ borderTop: `2px solid rgba(89, 191, 150, 0.3)` }}
              data-testid={`card-scale-${i}`}
            >
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Built for Commercial Reality */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">Commercial</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built to run in production</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Production hosting", desc: "Hosting designed for real usage, observability, and safe releases." },
            { title: "Subscription lifecycle", desc: "Trial, upgrades, downgrades, cancellations, and renewals designed when your model requires it." },
            { title: "Product analytics", desc: "Usage tracking and retention signals built in so decisions aren't guesses." },
            { title: "Customer support", desc: "Support tooling integrated so customer issues don't disappear into inboxes." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6"
              style={{ borderTop: `2px solid rgba(89, 191, 150, 0.3)` }}
              data-testid={`card-commercial-reality-${i}`}
            >
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Study */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div
          className="glass-card rounded-2xl p-10 md:p-14 max-w-3xl"
          style={{ borderLeft: `4px solid ${streamGreen}` }}
          data-testid="card-case-study"
        >
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-6 block">Case study</span>
          <blockquote className="text-lg md:text-xl text-white/90 leading-[1.8] mb-8">
            "Muloo delivered a custom operational platform that replaced fragmented tools and manual reconciliation. The system now runs with structured access control, telemetry, and a clear roadmap for iteration."
          </blockquote>
          <div>
            <p className="text-white font-bold">Ecommerce operations team</p>
            <p className="text-muted-foreground text-sm">Custom internal platform build</p>
          </div>
        </div>
      </Section>

      {/* Products We Are Building */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">In progress</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Products we are building</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "FamPal",
              desc: "A consumer app helping families discover, filter, and share real-world experiences with accessibility and operational intelligence.",
            },
            {
              title: "eCrafter",
              desc: "A market operations tool designed to simplify inventory, vendor workflows, and reporting for retail environments.",
            },
            {
              title: "HubSpot Audit",
              desc: "A structured CRM audit tool evolving into a deeper diagnostic product for CRM governance and architecture clarity.",
            },
            {
              title: "Selective Build-for-Equity",
              desc: "We occasionally partner on high-conviction ideas, investing build capability in exchange for structured equity participation.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8"
              style={{ borderTop: `2px solid rgba(89, 191, 150, 0.3)` }}
              data-testid={`card-products-building-${i}`}
            >
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {jarrudMeeting && (
        <Section className="py-12 md:py-16 border-t border-white/5">
          <div className="mb-6">
            <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-3 block">Need a plan?</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Talk directly with Jarrud</h2>
          </div>
          <BookingCard meeting={jarrudMeeting} />
        </Section>
      )}

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient glow-product border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to build your product?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            Bring the idea. We'll validate the scope, define the first shippable version, and map the build and launch steps.
          </p>
          <Link href={meetingUrl}>
            <Button
              size="lg"
              className="font-bold px-10 h-14 text-white"
              style={{ backgroundColor: streamGreen }}
              data-testid="button-discuss-roadmap"
            >
              Discuss Your Product Idea <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
