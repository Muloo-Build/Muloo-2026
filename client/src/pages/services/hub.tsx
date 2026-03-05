import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { ArrowRight, ShieldCheck, Workflow, BarChart3, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const hubServiceCards = [
  {
    id: "hubspot-audit",
    title: "HubSpot Audit",
    desc: "Rapid technical audit to expose data, automation, and reporting risks.",
    href: "/muloo-hub/hubspot-audit",
  },
  {
    id: "guided-deployment",
    title: "Guided Deployment",
    desc: "Structured sprint delivery with governance and release discipline.",
    href: "/muloo-hub/guided-deployment",
  },
  {
    id: "hubspot-implementation",
    title: "HubSpot Implementation",
    desc: "End-to-end HubSpot setup built for adoption, scale, and operational clarity.",
    href: "/muloo-hub/hubspot-implementation",
  },
  {
    id: "hubspot-migration",
    title: "HubSpot Migration",
    desc: "Controlled migration from legacy CRM to a clean, governed HubSpot instance.",
    href: "/muloo-hub/hubspot-migration",
  },
  {
    id: "hubspot-optimisation",
    title: "HubSpot Optimisation",
    desc: "Continuous improvement of workflows, data quality, and reporting confidence.",
    href: "/muloo-hub/hubspot-optimisation",
  },
];

const deploymentMethod = [
  {
    step: "01",
    title: "Audit",
    desc: "Assess architecture, data quality, workflow health, and reporting trust.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Define data model, lifecycle rules, governance controls, and rollout sequence.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Implement in controlled slices with QA checks and release readiness criteria.",
  },
  {
    step: "04",
    title: "Train",
    desc: "Enable teams with role-based training, runbooks, and admin ownership.",
  },
  {
    step: "05",
    title: "Optimise",
    desc: "Refine delivery using real usage signals, decision logs, and measurable outcomes.",
  },
];

const governanceItems = [
  {
    title: "Role-based access",
    desc: "Permissions aligned to team responsibilities and operational boundaries.",
    icon: ShieldCheck,
  },
  {
    title: "Vendor-controlled workflows",
    desc: "Automation managed through controlled change practices and clear ownership.",
    icon: Workflow,
  },
  {
    title: "Structured property design",
    desc: "Property standards that reduce duplication, naming drift, and logic breakage.",
    icon: CheckCircle2,
  },
  {
    title: "Executive reporting clarity",
    desc: "Leadership dashboards built on governed data that can be trusted.",
    icon: BarChart3,
  },
];

function ServiceCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="block h-full">
      <div
        className="glass-card rounded-xl p-7 border border-white/10 h-full hover:border-brand-teal/20 transition-all duration-300"
        data-testid={`card-hub-service-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-base text-muted-foreground leading-[1.8] mb-6">{desc}</p>
        <span className="text-sm font-semibold text-brand-teal inline-flex items-center">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function ServicesHub() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Muloo Hub | Enterprise HubSpot Architecture"
        description="Muloo Hub designs, deploys and governs enterprise HubSpot environments, from first implementations to complex global rollouts."
        canonicalUrl="https://www.wearemuloo.com/muloo-hub"
      />

      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="max-w-3xl">
          <Badge variant="outline" className="mb-6 border-stream-hub/30 text-stream-hub bg-stream-hub/5" data-testid="badge-muloo-hub">
            Muloo Hub
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] text-white mb-8">
            Enterprise HubSpot architecture.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-[1.8] max-w-3xl">
            Muloo Hub designs, deploys and governs enterprise HubSpot environments from first implementations to complex global rollouts.
          </p>
          <p className="text-base md:text-lg text-white/80 leading-[1.8] max-w-3xl mt-5">
            All HubSpot projects are delivered using the Muloo Method, our structured approach to CRM architecture and deployment.
          </p>

          <div className="mt-10">
            <Link href="/contact/book/jarrud">
              <Button
                size="lg"
                className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-8 h-14 rounded-lg"
                data-testid="button-hub-hero-book-call"
              >
                Book a HubSpot strategy call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">HubSpot Services Grid</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubServiceCards.map((service) => (
            <ServiceCard key={service.id} title={service.title} desc={service.desc} href={service.href} />
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Deployment Method</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {deploymentMethod.map((item) => (
            <div
              key={item.step}
              className="glass-card rounded-xl border border-white/10 p-6"
              data-testid={`card-hub-method-${item.step}`}
            >
              <p className="text-5xl font-black text-white/[0.06] mb-3">{item.step}</p>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Governance Built In</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {governanceItems.map((item, index) => (
            <div key={item.title} className="glass-card rounded-xl border border-white/10 p-6" data-testid={`card-hub-governance-${index + 1}`}>
              <div className="h-10 w-10 rounded-lg bg-stream-hub/10 text-stream-hub flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="glass-card rounded-2xl border border-white/10 p-8 md:p-10 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-widest text-brand-teal mb-4">HubSpot Audit Lead Magnet</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get the 10 point HubSpot health check</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8] mb-8 max-w-3xl">
            Run the audit to identify architecture debt, data quality issues, and workflow risks before rollout decisions are made.
          </p>
          <Link href="/muloo-hub/hubspot-audit">
            <Button className="bg-gradient-muloo border-none text-white hover:brightness-110 h-12 px-7" data-testid="button-hub-audit-lead-magnet">
              Open HubSpot Audit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Case Example</h2>
        </div>

        <div className="max-w-4xl">
          <div className="glass-card rounded-xl border border-white/10 p-8 md:p-10" data-testid="card-hub-case-example">
            <h3 className="text-2xl font-bold text-white mb-6">Multi-region HubSpot rollout</h3>
            <ul className="space-y-3">
              <li className="text-base text-muted-foreground leading-[1.8]">Pipelines rebuilt</li>
              <li className="text-base text-muted-foreground leading-[1.8]">Lifecycle stages aligned</li>
              <li className="text-base text-muted-foreground leading-[1.8]">Leadership reporting implemented</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready for a structured HubSpot?</h2>
          <Link href="/contact/book/jarrud">
            <Button className="bg-gradient-muloo border-none text-white hover:brightness-110 h-14 px-8 font-bold" data-testid="button-hub-final-book-call">
              Book a HubSpot strategy call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
