import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Linkedin, Shield, TrendingUp, Settings, Cog, Calendar, Network, Search, Briefcase } from "lucide-react";
import { advisoryContent } from "@/lib/content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import jarrudImg from "@assets/d1bde727-2cda-4a05-ad55-08a4eeb1c30f_1771492083207.png";
import morneImg from "@assets/Morne_1771492100987.png";
import paulImg from "@assets/e03647df-fb65-4c59-b350-b505eb0fd17b_1771492117754.png";

const getImage = (imageName: string) => {
  if (imageName.includes("jarrud")) return jarrudImg;
  if (imageName.includes("morne")) return morneImg;
  if (imageName.includes("paul")) return paulImg;
  return "";
};

const serviceIcons: Record<string, React.ReactNode> = {
  cto: <Shield className="h-6 w-6" />,
  "sales-eng": <TrendingUp className="h-6 w-6" />,
  process: <Cog className="h-6 w-6" />,
  coo: <Settings className="h-6 w-6" />,
};

export function Advisory() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="pt-20 pb-20 md:pt-32 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="max-w-3xl flex-1">
              <div className="inline-flex items-center rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-sm font-medium text-brand-teal mb-8 backdrop-blur-sm" data-testid="badge-advisory">
                <span className="flex h-2 w-2 rounded-full bg-brand-teal mr-2" />
                Advisory
              </div>
              <h1 className="text-4xl md:text-[3.5rem] lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-white" data-testid="text-advisory-headline">
                {advisoryContent.hero.headline.endsWith("overhead.") ? (
                  <>
                    {advisoryContent.hero.headline.slice(0, -"overhead.".length)}
                    <span className="text-gradient-muloo">overhead.</span>
                  </>
                ) : (
                  advisoryContent.hero.headline
                )}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                {advisoryContent.hero.subtext}
              </p>
              <p className="text-sm text-white/40 font-mono mt-6">For businesses between growth and complexity.</p>
            </div>

            <div className="hidden lg:block flex-1 w-full relative">
              <div className="relative w-full max-w-md mx-auto h-[320px]" data-testid="advisory-hero-visual">
                <div className="absolute inset-0 bg-brand-teal opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

                {/* Top Card: Strategy */}
                <div className="absolute top-4 right-0 w-56 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-20 animate-float-medium">
                  <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                    <div className="flex items-center gap-2 text-white">
                      <Network className="h-4 w-4 text-brand-teal" />
                      <span className="text-xs font-semibold">Organisational Structure</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 pt-1 pb-1">
                    <div className="h-4 w-24 bg-white/10 rounded-sm"></div>
                    <div className="w-px h-3 bg-white/10"></div>
                    <div className="w-32 h-px bg-white/10"></div>
                    <div className="flex gap-4">
                      <div className="h-3 w-10 bg-white/10 rounded-sm"></div>
                      <div className="h-3 w-10 bg-brand-teal/40 rounded-sm border border-brand-teal/50 shadow-[0_0_10px_rgba(0,196,204,0.3)]"></div>
                      <div className="h-3 w-10 bg-white/10 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Middle Left: Due Diligence */}
                <div className="absolute top-24 -left-6 w-52 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-10 animate-float-slow">
                  <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                    <div className="flex items-center gap-2 text-white">
                      <Search className="h-4 w-4 text-[#F47621]" />
                      <span className="text-xs font-semibold">Due Diligence Audit</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400/50" />
                      <span className="text-[10px] text-white/60">Architecture Review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400/50" />
                      <span className="text-[10px] text-white/60">Compliance & Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-yellow-400/50" />
                      <span className="text-[10px] text-white/60">Tech Debt Analysis</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Right: Fractional Leadership */}
                <div className="absolute bottom-6 right-8 w-56 glass-card rounded-xl p-3 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-30 animate-float-fast">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#155DFC]/10 flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-[#155DFC]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">Fractional Board Seat</div>
                      <div className="text-[9px] text-muted-foreground">Active Engagement</div>
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
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-6 block">The gap</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            You need senior capability now — not after the next funding round.
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            The distance between where you are and where the board expects you to be requires operators who've done it before. Not more junior hires. Not another agency. Embedded leadership that owns decisions, presents to the board, and ships alongside your team.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4 block">Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Advisory Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {advisoryContent.services.map((service) => (
            <div
              key={service.id}
              className="glass-card p-8 rounded-2xl group hover:border-white/10 transition-all duration-300"
              data-testid={`card-advisory-${service.id}`}
            >
              <div className="flex items-start gap-6">
                <div
                  className="p-3 rounded-xl shrink-0"
                  style={{ backgroundColor: `${service.accent}15`, color: service.accent }}
                >
                  {serviceIcons[service.id]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-[1.8] text-sm">{service.desc}</p>
                  <div
                    className="w-10 h-0.5 mt-6 opacity-40 group-hover:w-full group-hover:opacity-100 transition-all duration-500"
                    style={{ backgroundColor: service.accent }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-xl">
          <Link href="/advisory/operator-circle" data-testid="link-operator-circle">
            <div className="glass-card rounded-xl p-6 border border-brand-orange/20 hover:border-brand-orange/35 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between mb-3 gap-3">
                <h3 className="text-lg font-bold text-white">Operator Circle</h3>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded border border-brand-orange/30 text-brand-orange bg-brand-orange/10">
                  Coming soon
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-[1.8]">
                A private forum in development for founders and operators working through systems, scale, and AI decisions.
              </p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Leadership Grid */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4 block">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The people behind the advisory.</h2>
          <p className="text-muted-foreground leading-[1.8]">Operators who've led teams, reported to boards, and passed technology due diligence — not consultants who disappear after a slide deck.</p>
        </div>

        <div className="flex flex-col gap-10 w-full max-w-6xl">
          {advisoryContent.leaders.map((leader, i) => (
            <div key={i} className="glass-card p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-8 group" data-testid={`card-leader-${i}`}>
              <div className="shrink-0 relative">
                <div
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full p-[3px] transition-all duration-300 shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${leader.accent}50, transparent 70%)`,
                  }}
                >
                  <div className="h-full w-full rounded-full overflow-hidden border-2 border-[#030614]">
                    <Avatar className="h-full w-full">
                      <AvatarImage src={getImage(leader.image)} alt={leader.name} className="object-cover" />
                      <AvatarFallback className="text-2xl font-bold">{leader.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-sm font-mono mb-4" style={{ color: leader.accent }}>{leader.title}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {leader.roles.map((role, ri) => (
                    <span
                      key={ri}
                      className="text-[12px] px-2.5 py-1 rounded border font-mono"
                      style={{
                        borderColor: `${leader.accent}20`,
                        backgroundColor: `${leader.accent}08`,
                        color: `${leader.accent}99`,
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>

                <p className="text-base text-muted-foreground leading-[1.8] mb-8 lg:pr-6">{leader.bio}</p>

                <div className="flex flex-wrap gap-3">
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" data-testid={`link-linkedin-${i}`}>
                    <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10 hover:text-white transition-colors border">
                      <Linkedin className="h-4 w-4 mr-2" style={{ color: leader.accent }} /> View Profile
                    </Button>
                  </a>
                  <Link
                    href={
                      leader.name.toLowerCase().includes("jarrud")
                        ? "/contact/book/jarrud"
                        : leader.name.toLowerCase().includes("morne")
                          ? "/contact/book/morne"
                          : "/contact"
                    }
                    data-testid={`link-meeting-${i}`}
                  >
                    <Button size="sm" className="text-white hover:opacity-90 font-bold transition-opacity" style={{ backgroundColor: leader.accent }}>
                      <Calendar className="h-4 w-4 mr-2" /> Book an Advisory Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Engagement Model */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4 block">Engagement</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">How we engage</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Fractional",
              desc: "Ongoing part-time leadership embedded in your team — attending standups, presenting to the board, and driving measurable outcomes on a retained basis.",
            },
            {
              title: "Interim",
              desc: "Full-time senior leadership for a defined period — managing a transition, preparing for due diligence, or stabilising before a permanent hire.",
            },
            {
              title: "Project-Led",
              desc: "Scoped strategic engagements with clear deliverables — technical audits, architecture reviews, team assessments, or board-ready transformation programmes.",
            },
          ].map((model, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-8 group hover:border-brand-teal/15 transition-all duration-300"
              data-testid={`card-engagement-${i}`}
            >
              <h3 className="text-lg font-bold mb-3 text-white">{model.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{model.desc}</p>
              <div className="w-10 h-0.5 mt-6 bg-brand-teal opacity-40 group-hover:opacity-100 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4 block">Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What changes after we're involved</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Board-ready reporting", desc: "Technical progress, risk posture, and roadmap status presented in language the board understands." },
            { title: "Team acceleration", desc: "Your existing team levels up through embedded mentorship, code review, and knowledge transfer." },
            { title: "Due diligence readiness", desc: "Architecture documentation, security posture, and technical debt assessment prepared for investor scrutiny." },
          ].map((outcome, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-xl border-t-2 border-brand-teal"
              data-testid={`card-outcome-${i}`}
            >
              <h3 className="text-lg font-bold text-white mb-3">{outcome.title}</h3>
              <p className="text-muted-foreground leading-[1.8] text-sm">{outcome.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* When to Bring Us In */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4 block">Timing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">When to Bring Us In</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Scaling too fast", desc: "Growth is outpacing your team's ability to maintain quality, stability, and board-level reporting." },
            { title: "Preparing for investment", desc: "You need technical due diligence readiness — architecture documentation, security posture, and a credible roadmap." },
            { title: "CRM rebuild required", desc: "Systems have drifted beyond incremental fixes. You need someone who's restructured portals before." },
            { title: "Technology debt accumulating", desc: "Shortcuts are compounding across every sprint and the team can't course-correct alone." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6"
              style={{ borderTop: `2px solid rgba(0, 196, 204, 0.3)` }}
              data-testid={`card-timing-${i}`}
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
          className="glass-card rounded-2xl p-10 md:p-14 max-w-3xl border-l-4 border-brand-teal"
          data-testid="card-case-study"
        >
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-6 block">Case study</span>
          <blockquote className="text-lg md:text-xl text-white/90 leading-[1.8] mb-8">
            "Having Muloo as our fractional CTO gave us the technical leadership we needed during a critical growth phase. They didn't just advise — they embedded and shipped alongside our team."
          </blockquote>
          <div>
            <p className="text-white font-bold">Michael Torres</p>
            <p className="text-muted-foreground text-sm">CEO — Elevate Digital</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="text-advisory-cta">
            Need senior capability without the commitment?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            Let's discuss how embedded leadership can accelerate your business.
          </p>
          <Link href="/contact/book/morne">
            <Button size="lg" className="bg-brand-teal text-white hover:bg-brand-teal/90 font-bold px-10 h-14 rounded-lg" data-testid="button-advisory-cta">
              Book an Advisory Call <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
