import { Section } from "@/components/ui/section";
import { SEO } from "@/components/layout/SEO";

const sections = [
  {
    heading: "1. Agreement to terms",
    body: [
      "These Terms of Service govern your use of the Muloo website. By accessing or using the site, you agree to be bound by these terms. If you do not agree, please do not use the site.",
    ],
  },
  {
    heading: "2. Use of the website",
    body: [
      "You may use this website for lawful purposes only. You agree not to use it in any way that breaches applicable laws, infringes the rights of others, or interferes with the operation or security of the site.",
    ],
  },
  {
    heading: "3. Services",
    body: [
      "Content on this website describes our services for general information. It does not constitute a binding offer. Specific engagements are governed by a separate written agreement between Muloo and the client.",
    ],
  },
  {
    heading: "4. Intellectual property",
    body: [
      "All content on this website — including text, graphics, logos and design — is owned by or licensed to Muloo and is protected by intellectual property laws. Client and partner logos remain the property of their respective owners and are used with permission.",
    ],
  },
  {
    heading: "5. Third-party links",
    body: [
      "This website may link to third-party websites. We are not responsible for the content, policies or practices of any third-party sites.",
    ],
  },
  {
    heading: "6. Disclaimer & limitation of liability",
    body: [
      "This website is provided on an 'as is' and 'as available' basis without warranties of any kind. To the fullest extent permitted by law, Muloo will not be liable for any indirect or consequential loss arising from your use of the site.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about these terms can be sent to jarrud@muloo.co.",
    ],
  },
];

export function TermsOfService() {
  return (
    <div className="flex flex-col">
      <SEO title="Terms of Service | Muloo" description="The terms that govern your use of the Muloo website." />
      <Section className="pt-20 pb-10 md:pt-28 md:pb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated 30 May 2026</p>
      </Section>
      <Section className="pb-24">
        <div className="max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-white mb-4">{s.heading}</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
