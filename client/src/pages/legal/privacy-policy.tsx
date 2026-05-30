import { Section } from "@/components/ui/section";
import { SEO } from "@/components/layout/SEO";

const sections = [
  {
    heading: "1. Who we are",
    body: [
      "Muloo is a technical partner for HubSpot, custom engineering and AI, based in Cape Town and serving global teams. This policy explains what personal information we collect, how we use it, and the choices you have.",
      "For any privacy question, contact us at jarrud@muloo.co.",
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "Information you provide directly — such as your name, email, phone number, company and message — when you complete a contact form, book a meeting, or otherwise communicate with us.",
      "Information collected automatically — such as IP address, device and browser data, and usage analytics — through cookies and similar technologies when you visit our website.",
    ],
  },
  {
    heading: "3. How we use your information",
    body: [
      "To respond to enquiries, schedule meetings and deliver our services; to operate, secure and improve our website; to send relevant communications where you have asked us to; and to comply with our legal obligations.",
    ],
  },
  {
    heading: "4. How we share information",
    body: [
      "We do not sell your personal information. We share it only with trusted service providers who help us operate our business (for example, HubSpot for CRM and communications, and analytics providers), and where required by law.",
    ],
  },
  {
    heading: "5. Data retention & security",
    body: [
      "We keep personal information only for as long as necessary for the purposes set out in this policy, and apply appropriate technical and organisational measures to protect it.",
    ],
  },
  {
    heading: "6. Your rights",
    body: [
      "Depending on your location, you may have the right to access, correct, delete or restrict the use of your personal information, and to withdraw consent. To exercise any right, contact jarrud@muloo.co.",
    ],
  },
  {
    heading: "7. Changes to this policy",
    body: [
      "We may update this policy from time to time. Material changes will be reflected on this page with a revised effective date.",
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <div className="flex flex-col">
      <SEO title="Privacy Policy | Muloo" description="How Muloo collects, uses and protects your personal information." />
      <Section className="pt-20 pb-10 md:pt-28 md:pb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Privacy Policy</h1>
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
