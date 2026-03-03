import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Code2,
  ShieldCheck,
  Zap,
  Brain,
  Workflow,
  BarChart3,
  Activity,
  Share2,
} from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceAiContent } from "@/lib/content";

const streamPurple = "#C140FF";
const meetingUrl = "/meetings/jarrud";

const serviceIcons = [Bot, Code2, Workflow, ShieldCheck];

export function ServicesAi() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient glow-ai relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-16">
            <div className="max-w-xl flex-1">
              <Badge
                variant="outline"
                className="mb-6 border-[#C140FF]/30 text-[#C140FF] bg-[#C140FF]/5"
                data-testid="badge-ai"
              >
                Muloo AI
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">
                {serviceAiContent.h1}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-[#C140FF] pl-6">
                {serviceAiContent.intro}
              </p>
              <p className="text-sm text-white/40 font-mono mt-6">We ship AI inside defined boundaries: guardrails, observability, rollback.</p>
            </div>

            <div className="hidden lg:block flex-1">
              <div className="relative w-full max-w-md mx-auto h-[320px]" data-testid="ai-hero-visual">
                <div className="absolute inset-0 bg-[#C140FF] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

                {/* Top Right: Agent Context */}
                <div className="absolute top-4 right-0 w-52 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-20 animate-float-slow">
                  <div className="flex items-center gap-3 mb-3 border-b border-white/5 pb-2">
                    <div className="p-1.5 rounded-md bg-[#C140FF]/10 text-[#C140FF]">
                      <Brain className="h-3.5 w-3.5" />
                    </div>
                    <div className="text-xs font-semibold text-white">Active Reasoning Loop</div>
                  </div>
                  <div className="space-y-1.5 font-mono text-[8px] text-white/50">
                    <div className="flex gap-2"><span className="text-[#C140FF]">&gt;</span> Parsing knowledge base...</div>
                    <div className="flex gap-2"><span className="text-[#C140FF]">&gt;</span> Selecting tool: <code>sql_query</code></div>
                    <div className="flex gap-2"><span className="text-green-400">OK</span> Action generated</div>
                  </div>
                </div>

                {/* Middle Left: Vector Embedding */}
                <div className="absolute top-24 -left-6 w-52 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-10 animate-float-medium">
                  <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                    <div className="flex items-center gap-2">
                      <Share2 className="h-4 w-4 text-[#C140FF]" />
                      <span className="text-xs font-medium text-white">Vector Search</span>
                    </div>
                    <span className="text-[9px] text-white/40">k=5</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
                      <div className="bg-[#C140FF] h-full w-[35%] opacity-40"></div>
                      <div className="bg-[#C140FF] h-full w-[15%] opacity-80"></div>
                      <div className="bg-[#C140FF] h-full w-[25%] opacity-60"></div>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
                      <div className="bg-[#C140FF] h-full w-[10%] opacity-30"></div>
                      <div className="bg-[#C140FF] h-full w-[60%] opacity-50"></div>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
                      <div className="bg-[#C140FF] h-full w-[45%] opacity-70"></div>
                      <div className="bg-[#C140FF] h-full w-[20%] opacity-90"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Right: Output */}
                <div className="absolute bottom-6 right-6 w-52 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-30 animate-float-fast">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Zap className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">Task Completed</div>
                      <div className="text-[9px] text-muted-foreground">0.8s execution time</div>
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
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-6 block">The problem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Most AI projects never leave the demo.
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Most AI projects are demos. Some are fragile agents. Others are vibe-coded prototypes that never survive production. AI only creates value when it runs inside real workflows with guardrails, monitoring, and measurable outcomes.
          </p>
        </div>
      </Section>

      {/* What We Deploy */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4 block">What we deploy</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Four Production AI Patterns</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceAiContent.services.map((service, i) => {
            const IconComponent = serviceIcons[i];
            return (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl group hover:border-[#C140FF]/20 transition-all duration-300"
                data-testid={`card-service-${i}`}
              >
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0 bg-[#C140FF]/10">
                    <IconComponent className="h-6 w-6 text-[#C140FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-[1.8]">{service.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Workflow Visual */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4 block">How it works</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Agent Workflow Loop</h2>
            <p className="text-muted-foreground leading-[1.8] mb-8 max-w-lg">
              Every agent follows a disciplined loop: a trigger fires, the agent reasons and acts, results are logged, and performance is reviewed. No black boxes.
            </p>
            <ul className="space-y-4">
              {[
                "Deterministic triggers — no ambiguous activation",
                "Structured reasoning with guardrails",
                "Actions logged and auditable",
                "Continuous feedback improves accuracy over time",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: streamPurple }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="diagram-ai-workflow">
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{ background: `radial-gradient(circle at top right, rgba(193, 64, 255, 0.04), transparent)` }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                <div className="h-2 w-2 rounded-full bg-green-500/40" />
                <span className="ml-3 text-[10px] font-mono text-white/20">agent-workflow.loop</span>
              </div>

              <div className="flex flex-col gap-3">
                {/* Trigger */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{
                    backgroundColor: `rgba(193, 64, 255, 0.03)`,
                    border: `1px solid rgba(193, 64, 255, 0.1)`,
                  }}
                >
                  <Zap className="h-5 w-5 shrink-0" style={{ color: `rgba(193, 64, 255, 0.5)` }} />
                  <div>
                    <span className="font-mono text-xs font-medium" style={{ color: `rgba(193, 64, 255, 0.7)` }}>Trigger</span>
                    <span className="text-[9px] text-white/20 block font-mono mt-0.5">Webhook · Schedule · Event</span>
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center py-0.5">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: `rgba(193, 64, 255, 0.4)` }} />
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                  </div>
                </div>

                {/* Agent */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{
                    backgroundColor: `rgba(193, 64, 255, 0.06)`,
                    border: `1px solid rgba(193, 64, 255, 0.25)`,
                    boxShadow: `0 0 20px -8px rgba(193, 64, 255, 0.15)`,
                  }}
                >
                  <Brain className="h-5 w-5 shrink-0" style={{ color: streamPurple }} />
                  <div>
                    <span className="font-mono text-xs font-medium" style={{ color: streamPurple }}>Agent</span>
                    <span className="text-[9px] text-white/20 block font-mono mt-0.5">Reason · Decide · Guardrails</span>
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center py-0.5">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: `rgba(193, 64, 255, 0.4)` }} />
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                  </div>
                </div>

                {/* Action */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{
                    backgroundColor: `rgba(193, 64, 255, 0.03)`,
                    border: `1px solid rgba(193, 64, 255, 0.1)`,
                  }}
                >
                  <Activity className="h-5 w-5 shrink-0" style={{ color: `rgba(193, 64, 255, 0.5)` }} />
                  <div>
                    <span className="font-mono text-xs font-medium" style={{ color: `rgba(193, 64, 255, 0.7)` }}>Action</span>
                    <span className="text-[9px] text-white/20 block font-mono mt-0.5">Execute · Log · Notify</span>
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center py-0.5">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: `rgba(193, 64, 255, 0.4)` }} />
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                  </div>
                </div>

                {/* Reporting Loop */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{
                    backgroundColor: `rgba(193, 64, 255, 0.04)`,
                    border: `1px solid rgba(193, 64, 255, 0.15)`,
                  }}
                >
                  <BarChart3 className="h-5 w-5 shrink-0" style={{ color: `rgba(193, 64, 255, 0.6)` }} />
                  <div>
                    <span className="font-mono text-xs font-medium" style={{ color: `rgba(193, 64, 255, 0.8)` }}>Reporting Loop</span>
                    <span className="text-[9px] text-white/20 block font-mono mt-0.5">Measure · Learn · Improve</span>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] font-mono text-white/25">Agent active</span>
                </div>
                <span className="text-[10px] font-mono text-white/20">Loop: continuous</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* AI With Guardrails */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4 block">Standards</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">AI With Guardrails</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Controlled deployment", desc: "Staged rollouts with kill switches — no agent goes live without validation." },
            { title: "Data boundary protection", desc: "Strict controls on what data agents can access, process, and store." },
            { title: "Audit logging", desc: "Every agent decision, action, and outcome is logged and traceable." },
            { title: "Performance monitoring", desc: "Accuracy, latency, and cost tracked continuously across every interaction." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6"
              style={{ borderTop: `2px solid rgba(193, 64, 255, 0.3)` }}
              data-testid={`card-guardrail-${i}`}
            >
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* AI Should Reduce Risk */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-2xl">
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4 block">Assurance</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AI Should Reduce Risk, Not Add It.</h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Every AI deployment we deliver is scoped, tested, and monitored before it touches production data. We don't experiment on your business. Agents are validated against real scenarios, shipped with rollback capability, and owned with clear success criteria so leadership can approve with confidence.
          </p>
        </div>
      </Section>

      {/* Engagement Model */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4 block">Engagement</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">How we engage</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "01", title: "Pilot", desc: "Identify the highest-value use case, build a scoped pilot, and measure impact." },
            { num: "02", title: "Deploy", desc: "Production deployment with workflow integration, monitoring, guardrails, and human escalation paths." },
            { num: "03", title: "Monitor", desc: "Track accuracy, latency, cost, and user satisfaction across every agent interaction." },
            { num: "04", title: "Optimise", desc: "Prompt refinement, model updates, and workflow adjustments based on real usage data." },
          ].map((step, i) => (
            <div
              key={i}
              data-testid={`card-engagement-${i}`}
              className="relative glass-card rounded-xl p-6 group hover:border-[#C140FF]/20 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-3 right-3 text-4xl font-extrabold text-white/[0.03] select-none">{step.num}</span>
              <div
                className="w-full h-0.5 mb-5 origin-left transition-all duration-500 group-hover:scale-x-100 scale-x-[0.3]"
                style={{ backgroundColor: `rgba(193, 64, 255, 0.3)` }}
              />
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Study */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div
          className="glass-card rounded-2xl p-10 md:p-14 max-w-3xl"
          style={{ borderLeft: `4px solid ${streamPurple}` }}
          data-testid="card-case-study"
        >
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-6 block">Case study</span>
          <blockquote className="text-lg md:text-xl text-white/90 leading-[1.8] mb-8">
            "Muloo hardened an experimental AI workflow into a production-ready service with logging, validation layers, and deployment controls."
          </blockquote>
          <div>
            <p className="text-white font-bold">Mid-market product team</p>
            <p className="text-muted-foreground text-sm">AI workflow production hardening</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient glow-ai border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to deploy applied AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            We'll identify one workflow worth automating, ship a scoped pilot, and measure impact with clear guardrails.
          </p>
          <Link href={meetingUrl}>
            <Button
              size="lg"
              className="font-bold px-10 h-14 text-white"
              style={{ backgroundColor: streamPurple }}
              data-testid="button-explore-ai"
            >
              Ship an AI Pilot <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
