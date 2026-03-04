import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, LineChart, Settings } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceConsultingContent } from "@/lib/content";

export function ServicesConsulting() {
  return (
    <div className="flex flex-col">
      <Section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-hero-cosmic">
        <div className="max-w-4xl">
          <Badge variant="outline" className="mb-6 border-brand-orange/20 text-brand-orange bg-brand-orange/5">Advisory</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">{serviceConsultingContent.h1}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-brand-orange pl-6">
            {serviceConsultingContent.intro}
          </p>
        </div>
      </Section>

      <Section className="bg-section-soft py-24">
        <div className="grid md:grid-cols-3 gap-8">
            {serviceConsultingContent.services.map((service, i) => (
               <div key={i} className="glass-card p-8 rounded-2xl flex flex-col items-start group shadow-lg">
                  <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-orange/10 transition-colors">
                      {i === 0 ? <BrainCircuit className="h-6 w-6 text-brand-orange" /> : i === 1 ? <Settings className="h-6 w-6 text-brand-orange" /> : <LineChart className="h-6 w-6 text-brand-orange" />}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-orange transition-colors">{service.title}</h3>
                  <div className="text-sm font-mono text-muted-foreground mb-4 border-b border-white/10 pb-2 w-full">Lead: {service.lead}</div>
                  <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">{service.desc}</p>
                  
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 hover:text-brand-orange group-hover:border-brand-orange/30">
                       Enquire <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
               </div>
            ))}
        </div>
      </Section>

      {/* Case Study */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div
          className="glass-card rounded-2xl p-10 md:p-14 max-w-3xl"
          style={{ borderLeft: "4px solid hsl(24,90%,54%)" }}
          data-testid="card-case-study"
        >
          <span className="text-sm font-mono text-brand-orange uppercase tracking-widest mb-6 block">Case study</span>
          <blockquote className="text-lg md:text-xl text-white/90 leading-[1.8] mb-8">
            "Strategic advisory engagement focused on CRM architecture, reporting governance, and executive visibility alignment."
          </blockquote>
          <div>
            <p className="text-white font-bold">South African founder-led business</p>
            <p className="text-muted-foreground text-sm">Systems and governance advisory</p>
          </div>
        </div>
      </Section>

      <Section className="py-32 text-center bg-[#050A15] border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Need senior support without the overhead?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Bring us in to diagnose, prioritise, and guide delivery with clear decisions.</p>
        <Link href="/contact/book/morne">
          <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-10 h-14 rounded-full shadow-[0_0_30px_-5px_hsl(24,90%,54%,0.4)]">
            Book an Advisory Call <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}
