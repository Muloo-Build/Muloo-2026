import { Section } from "@/components/ui/section";
import { SEO } from "@/components/layout/SEO";

const sections = [
  {
    heading: "1. Who we are",
    body: [
      "Muloo is a technical partner for HubSpot, custom engineering and AI, based in Cape Town and serving global teams. This website and our services are operated by Muloo (Pty) Ltd (\"Muloo\", \"we\", \"us\", \"our\"), a company registered in South Africa (registration number 2020/546441/07).",
      "For the personal information we process, Muloo (Pty) Ltd is the responsible party under the Protection of Personal Information Act, 2013 (POPIA), and the data controller under the EU/UK GDPR where it applies. This policy explains what personal information we collect, how we use it, and the choices you have.",
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
    heading: "5. International transfers",
    body: [
      "Some of our service providers (for example, HubSpot and analytics providers) may process data outside South Africa or the EEA. Where they do, we rely on lawful transfer mechanisms — such as adequacy decisions or Standard Contractual Clauses — and on the conditions for trans-border information flows under section 72 of POPIA.",
    ],
  },
  {
    heading: "6. Data retention & security",
    body: [
      "We keep personal information only for as long as necessary for the purposes set out in this policy, and apply appropriate technical and organisational measures to protect it — including encrypted transport (TLS), least-privilege access, and access controls.",
    ],
  },
  {
    heading: "7. Your rights",
    body: [
      "Depending on your location, you may have the right to access, correct, delete, restrict or object to our processing of your personal information, to data portability, and to withdraw consent. To exercise any right, contact jarrud@muloo.co.",
      "You may also lodge a complaint with the Information Regulator (South Africa) under POPIA, or with your local supervisory authority under the GDPR.",
    ],
  },
  {
    heading: "8. Muloo Hub reporting platform",
    body: [
      "The Muloo Hub reporting platform is governed by a separate, platform-specific privacy policy. It covers the data we access from the platforms you connect (such as HubSpot, Google Analytics, Google Ads and LinkedIn) to produce reporting, and the sub-processors involved.",
      "See the Muloo Hub Privacy Policy at https://reporting.wearemuloo.com/platform/privacy.html.",
    ],
  },
  {
    heading: "9. Changes to this policy",
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
        <p className="text-muted-foreground">Last updated 2 July 2026</p>
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
