import { SEO } from "@/components/layout/SEO";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function OperatorCircle() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Operator Circle | Muloo Advisory"
        description="A private circle for operators shaping how modern revenue, delivery, and AI-assisted systems get built, facilitated by Muloo."
      />
      {/* Hero */}
      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-6 border-brand-orange/30 text-brand-orange bg-brand-orange/5"
              data-testid="badge-operator-circle-status"
            >
              Coming soon
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Operator Circle</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-brand-orange pl-6 mb-6">
              A paid operators club we’re incubating. Content, live sessions, templates, and optional delivery support.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-[1.8] max-w-2xl">
              Operator Circle is being designed as a practical environment for founders and operators making decisions
              around systems, scale, and AI adoption.
            </p>
          </div>
        </div>
      </Section>

      {/* Concept */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-3xl">
          <span className="text-sm font-mono text-brand-orange uppercase tracking-widest mb-6 block">Concept</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What it may include</h2>
          <ul className="space-y-4">
            {[
              "Monthly operator sessions (RevOps, systems, AI)",
              "Playbooks + templates (HubSpot governance, workflows, reporting packs)",
              "Office hours + implementation add-ons",
              "Community channel and peer reviews",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-brand-orange" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Status */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="max-w-3xl">
          <span className="text-sm font-mono text-brand-orange uppercase tracking-widest mb-6 block">Status</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Current status</h2>
          <p className="text-lg text-muted-foreground leading-[1.8] mb-6">
            We’re validating demand. If you want early access, contact us.
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8] mb-6">
            We are designing the format now, including hybrid delivery options.
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Membership and support options are being shaped to align with advisory and delivery capability.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Interested in shaping it?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            If this is relevant to your stage, register interest and we&apos;ll keep you informed as the model is
            defined.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-10 h-14 rounded-lg"
              data-testid="button-register-interest"
            >
              Register interest <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
