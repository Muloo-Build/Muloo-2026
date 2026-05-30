import { Section } from "@/components/ui/section";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/layout/SEO";
import { caseStudies } from "@/lib/content";
import { cn } from "@/lib/utils";

const streamChip: Record<string, string> = {
  hub: "text-stream-hub border-stream-hub/35 bg-stream-hub/10",
  build: "text-stream-build border-stream-build/35 bg-stream-build/10",
  ai: "text-stream-ai border-stream-ai/35 bg-stream-ai/10",
  product: "text-stream-product border-stream-product/35 bg-stream-product/10",
};

export function CaseStudies() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Case Studies | Muloo"
        description="Real engagements, documented end to end — HubSpot architecture, rescue, automation and platform builds."
      />
      <Section className="pt-20 pb-2 md:pt-28">
        <span className="text-sm font-mono text-gradient-muloo uppercase tracking-widest">// Selected work</span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-4 mb-5">Case studies.</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Real engagements, documented end to end — the technical challenge, what we built, and the outcome. HubSpot architecture, rescue, automation and platform builds.
        </p>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((c) => (
            <Link key={c.id} href={`/case-studies/${c.id}`}>
              <div
                className="group h-full glass-card rounded-2xl p-7 md:p-8 flex flex-col gap-3.5 cursor-pointer hover:border-brand-teal/40 hover:-translate-y-1 transition-all duration-300"
                data-testid={`card-case-study-${c.id}`}
              >
                <div className="flex items-center gap-3">
                  <span className={cn("inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap", streamChip[c.stream])}>
                    {c.tag}
                  </span>
                  {c.status && (
                    <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-wider text-stream-product">
                      <span className="h-1.5 w-1.5 rounded-full bg-stream-product animate-pulse" /> {c.status}
                    </span>
                  )}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{c.client}</div>
                <h3 className="text-[22px] font-bold leading-snug tracking-tight text-white group-hover:text-brand-teal transition-colors">{c.title}</h3>
                <p className="text-[14.5px] text-muted-foreground leading-[1.7] flex-grow">{c.summary}</p>
                <span className="inline-flex items-center gap-2 pt-1.5 text-[13px] font-semibold text-brand-teal">
                  Read case study <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
