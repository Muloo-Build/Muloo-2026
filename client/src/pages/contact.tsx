import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";
import { MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePopup } from "@/components/popups/usePopup";
import jarrudImg from "@assets/d1bde727-2cda-4a05-ad55-08a4eeb1c30f_1771492083207.png";
import morneImg from "@assets/Morne_1771492100987.png";

const bookingOptions = [
  {
    name: "Jarrud van der Merwe",
    title: "Lead HubSpot Architect & Sales Engineer",
    description: "CRM strategy, architecture, growth systems.",
    buttonLabel: "Book with Jarrud",
    popupKey: "meeting link popup jarrud",
    image: jarrudImg,
    accent: "rgba(244, 118, 33, 0.7)",
    testId: "booking-jarrud",
  },
  {
    name: "Morne Visagie",
    title: "Partner & Outsourced CTO",
    description: "Technical architecture, integrations, scale systems.",
    buttonLabel: "Book with Morne",
    popupKey: "meeting link popup morne",
    image: morneImg,
    accent: "rgba(21, 93, 252, 0.7)",
    testId: "booking-morne",
  },
];

export function Contact() {
  const { openPopup } = usePopup();

  return (
    <div className="flex flex-col">
      <Section className="pt-5 pb-6 md:pt-7 md:pb-8 text-center bg-hero-gradient border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Get in touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to streamline your systems? Book a call directly with leadership or send us a focused brief.
          </p>
        </div>
      </Section>

      <Section className="py-8 md:py-10 border-b border-white/5 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-10 h-44 w-[80%] -translate-x-1/2 rounded-full bg-brand-teal/5 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-xs md:text-sm font-mono text-brand-teal/75 uppercase tracking-widest text-center mb-3">
            Trusted by global teams across UK, US, AU and SA.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
            Speak to a Human. Not a Form.
          </h2>
          <p className="text-muted-foreground text-center mb-8 md:mb-9">
            Choose who you&apos;d like to connect with.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {bookingOptions.map((person) => (
              <div
                key={person.name}
                className="group relative rounded-2xl p-[1px] bg-white/10 transition-all duration-300"
                data-testid={person.testId}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(130deg, ${person.accent}, rgba(0, 196, 204, 0.35), rgba(255, 255, 255, 0.08))`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#060E2B] p-6 md:p-7 h-full">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-teal/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start gap-4 mb-5">
                    <Avatar className="h-16 w-16 border border-white/15">
                      <AvatarImage src={person.image} alt={person.name} className="object-cover" />
                      <AvatarFallback>{person.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">{person.name}</h3>
                      <p className="text-sm text-brand-teal/85 mt-1">{person.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{person.description}</p>
                  <Button
                    skipContactRedirect
                    className="w-full bg-gradient-muloo border-none text-white font-bold h-11 rounded-xl transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                    data-testid={`button-${person.testId}`}
                    onClick={() => openPopup(person.popupKey)}
                  >
                    {person.buttonLabel}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-8 md:py-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6 md:mb-7">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Or send us a message</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <ContactForm />
          <p className="text-xs text-muted-foreground text-center mt-4">
            Response time: within 1 business day.
          </p>
        </div>
      </Section>

      <Section className="pt-8 pb-12 md:pt-10 md:pb-14 border-t border-white/5 bg-[#030720]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Based in Cape Town. Working Globally.
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Built in South Africa. Delivered Worldwide.
          </p>

          <div className="relative mt-7 rounded-2xl border border-white/10 bg-[#040A22] p-6 md:p-8 overflow-hidden">
            <svg
              viewBox="0 0 720 260"
              className="absolute inset-0 h-full w-full opacity-[0.12] pointer-events-none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M40 210 L120 170 L180 182 L250 145 L315 152 L380 118 L460 136 L530 104 L620 128 L690 96" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-brand-teal" />
              <path d="M50 120 L120 95 L170 108 L235 82 L300 90 L360 70 L430 76 L500 58 L570 70 L650 52" stroke="currentColor" strokeWidth="1.1" fill="none" className="text-white/60" />
              <path d="M90 232 L154 201 L232 214 L306 189 L371 198 L440 178 L514 188 L588 168 L654 178" stroke="currentColor" strokeWidth="1.1" fill="none" className="text-white/50" />
              <circle cx="216" cy="196" r="4" className="fill-brand-teal" />
              <circle cx="216" cy="196" r="10" className="fill-brand-teal/35 animate-ping" />
            </svg>
            <div className="relative z-10 flex items-center gap-3 text-sm text-white/80">
              <MapPin className="h-4 w-4 text-brand-teal" />
              <span>Cape Town, South Africa</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
