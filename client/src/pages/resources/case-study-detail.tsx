import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SEO } from "@/components/layout/SEO";
import { caseStudies } from "@/lib/content";
import { cn } from "@/lib/utils";
import NotFound from "@/pages/not-found";
import { useState } from "react";

const streamChip: Record<string, string> = {
  hub: "text-stream-hub border-stream-hub/35 bg-stream-hub/10",
  build: "text-stream-build border-stream-build/35 bg-stream-build/10",
  ai: "text-stream-ai border-stream-ai/35 bg-stream-ai/10",
  product: "text-stream-product border-stream-product/35 bg-stream-product/10",
};

export function CaseStudyDetail() {
  const [, params] = useRoute("/case-studies/:id");
  const index = caseStudies.findIndex((c) => c.id === params?.id);
  const study = index >= 0 ? caseStudies[index] : undefined;

  if (!study) return <NotFound />;

  const sections = [
    { step: "01", heading: "The challenge", body: <p>{study.challenge}</p> },
    {
      step: "02",
      heading: "The approach",
      body: (
        <ul className="space-y-3.5">
          {study.approach.map((a, i) => (
            <li key={i} className="flex gap-3 text-[15.5px] leading-[1.7]">
              <Check className="h-[18px] w-[18px] text-brand-teal shrink-0 mt-1" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      step: "03",
      heading: "What we built",
      body: (
        <ul className="space-y-3.5">
          {study.built.map((b, i) => (
            <li key={i} className="flex gap-3 text-[15.5px] leading-[1.7]">
              <Check className="h-[18px] w-[18px] text-brand-teal shrink-0 mt-1" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ),
    },
    { step: "04", heading: study.status ? "Expected outcome" : "The outcome", body: <p>{study.outcome}</p> },
  ];

  return (
    <div className="flex flex-col">
      <SEO title={`${study.client} — ${study.tag} | Muloo`} description={study.summary} />

      <Section className="pt-20 pb-3 md:pt-24">
        <Link href="/case-studies">
          <button className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-brand-teal transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" /> Back to case studies
          </button>
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className={cn("inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider", streamChip[study.stream])}>
            {study.tag}
          </span>
          {study.status && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-wider text-stream-product">
              <span className="h-1.5 w-1.5 rounded-full bg-stream-product animate-pulse" /> {study.status}
            </span>
          )}
          <span className="font-mono text-xs text-muted-foreground tracking-wider">Case study {String(index + 1).padStart(2, "0")}</span>
        </div>

        <div className="mb-7">
          <ClientLogo text={study.logo.text} src={study.logo.src} />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-3xl mb-5">{study.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">{study.summary}</p>
      </Section>

      <Section className="py-10 md:py-12 border-t border-white/[0.06] mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <ProblemSolutionBlock title="The problem" items={study.problemBullets} />
          <ProblemSolutionBlock title="How we solved it" items={study.solutionBullets} />
        </div>
      </Section>

      {/* Metrics band */}
      <Section className="py-0 border-t border-b border-white/[0.06]">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {study.metrics.map((m, i) => (
            <div key={m.label} className={cn("py-7", i > 0 && "sm:border-l border-white/[0.06] sm:pl-8 max-sm:border-t")}>
              <div className="font-sans font-extrabold tracking-tight text-white text-[clamp(1.6rem,2.6vw,2.1rem)] leading-none">{m.value}</div>
              <div className="mt-3 font-mono text-[11.5px] uppercase tracking-wider text-muted-foreground leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Body + sticky facts */}
      <Section className="py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-14 items-start">
          <div className="space-y-11">
            {sections.map((s) => (
              <div key={s.step}>
                <h2 className="flex items-baseline gap-3 text-2xl font-bold tracking-tight mb-2">
                  <span className="font-mono text-[13px] font-medium text-brand-teal">{s.step}</span>
                  {s.heading}
                </h2>
                <div className="text-[16px] text-muted-foreground leading-[1.85]">{s.body}</div>
              </div>
            ))}

            {study.quote && (
              <blockquote className="rounded-2xl bg-brand-teal/5 border border-brand-teal/20 px-7 py-7 md:px-8">
                <p className="text-[19px] font-light leading-[1.6] text-white/90">"{study.quote.text}"</p>
                <footer className="mt-4 text-[13.5px] text-muted-foreground">
                  <b className="text-white font-semibold">{study.quote.name}</b>, {study.quote.role} · {study.quote.company}
                </footer>
              </blockquote>
            )}
          </div>

          <aside className="glass-card rounded-2xl p-6 lg:sticky lg:top-24">
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground mb-4">Project facts</h3>
            <dl className="divide-y divide-white/[0.06]">
              <FactRow label="Client" value={study.client} />
              <FactRow label="Client champion" value={study.champion.label} />
              {study.facts.industry && study.facts.industry !== "—" && <FactRow label="Industry" value={study.facts.industry} />}
              <FactRow label="Region" value={study.facts.region} />
              <FactRow label="Timeline" value={study.facts.timeline} />
              <FactRow label="Services" value={study.facts.services.join(", ")} />
              <div className="py-3.5">
                <dt className="font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground/70 mb-2">Stack</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {study.facts.stack.map((s) => (
                    <span key={s} className="font-mono text-[11px] text-muted-foreground rounded bg-white/[0.04] border border-white/[0.07] px-2 py-1">{s}</span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="mt-5 rounded-xl border border-brand-teal/15 bg-brand-teal/5 p-4">
              <div className="font-mono text-[10.5px] uppercase tracking-wider text-brand-teal mb-2">Champion note</div>
              <p className="text-[13.5px] leading-[1.65] text-white/75">{study.champion.detail}</p>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="py-16 md:py-20 border-t border-white/[0.06] text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Have a similar challenge?</h2>
        <Link href="/contact">
          <Button size="lg" className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold px-8 h-14 rounded-lg glow-muloo-sm">
            Start a conversation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

function ClientLogo({ text, src }: { text: string; src?: string }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="inline-flex h-14 min-w-[150px] items-center justify-center rounded-lg border border-white/[0.08] bg-white px-5">
      {src && !imageFailed ? (
        <img
          src={src}
          alt={`${text} logo`}
          loading="lazy"
          className="max-h-9 max-w-[180px] object-contain"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="font-sans text-[20px] md:text-[22px] font-black tracking-tight text-brand-navy">{text}</span>
      )}
    </div>
  );
}

function ProblemSolutionBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7">
      <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-teal mb-5">{title}</h2>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-muted-foreground">
            <Check className="h-[18px] w-[18px] text-brand-teal shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-3.5 first:pt-0">
      <dt className="font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground/70 mb-1.5">{label}</dt>
      <dd className="text-[14.5px] text-white leading-snug">{value}</dd>
    </div>
  );
}
