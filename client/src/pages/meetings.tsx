import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const embedScriptSrc = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

function toEmbedSrc(src: string) {
  return src.includes("?") ? `${src}&embed=true` : `${src}?embed=true`;
}

function MeetingsEmbed({ src }: { src: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    mount.innerHTML = "";

    const container = document.createElement("div");
    container.className = "meetings-iframe-container";
    container.setAttribute("data-src", toEmbedSrc(src));
    mount.appendChild(container);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = embedScriptSrc;
    script.async = true;
    mount.appendChild(script);

    return () => {
      mount.innerHTML = "";
    };
  }, [src]);

  return <div ref={mountRef} className="min-h-[700px]" data-testid="meetings-embed-root" />;
}

function MeetingLayout({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) {
  return (
    <div className="flex flex-col">
      <Section className="pt-8 pb-6 md:pt-10 md:pb-8 bg-hero-gradient border-b border-white/5">
        <div className="max-w-4xl">
          <Link href="/contact">
            <Button
              variant="outline"
              size="sm"
              className="mb-5 border-white/15 text-white hover:bg-white/5"
              data-testid="button-back-contact"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Contact
            </Button>
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">{title}</h1>
          <p className="text-muted-foreground max-w-2xl">{description}</p>
        </div>
      </Section>

      <Section className="pt-6 pb-10 md:pt-8 md:pb-12">
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#060E2B] p-3 md:p-5">
          <MeetingsEmbed src={src} />
        </div>
      </Section>
    </div>
  );
}

export function MeetingJarrud() {
  return (
    <MeetingLayout
      title="Book with Jarrud"
      description="Schedule time with Jarrud van der Merwe to discuss CRM strategy, architecture, and growth systems."
      src="https://hub.wearemuloo.com/meetings/jarrud2/jarrud"
    />
  );
}

export function MeetingMorne() {
  return (
    <MeetingLayout
      title="Book with Morne"
      description="Schedule time with Morne Visagie to discuss technical architecture, integrations, and scale systems."
      src="https://meetings.hubspot.com/morne-visagie"
    />
  );
}
