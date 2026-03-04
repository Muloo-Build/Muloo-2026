import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const coreColors = [
  { name: "Navy", hex: "#050A30", className: "bg-brand-navy border border-white/10", textDark: false },
  { name: "Teal", hex: "#00C4CC", className: "bg-brand-teal", textDark: true },
  { name: "White", hex: "#FFFFFF", className: "bg-white", textDark: true },
  { name: "Soft Teal Tint", hex: "#E6FBFD", className: "bg-soft-teal", textDark: true },
];

const streamColors = [
  { name: "Muloo Hub", label: "Orange", hex: "#F47621", className: "bg-stream-hub" },
  { name: "Muloo Build", label: "Blue", hex: "#155DFC", className: "bg-stream-build" },
  { name: "Muloo AI", label: "Purple", hex: "#C140FF", className: "bg-stream-ai" },
  { name: "Muloo Product", label: "Green", hex: "#59BF96", className: "bg-stream-product" },
];

const glowEffects = [
  { name: "glow-teal-sm", className: "glow-teal-sm", color: "border-brand-teal" },
  { name: "glow-orange-sm", className: "glow-orange-sm", color: "border-stream-hub" },
  { name: "glow-blue-sm", className: "glow-blue-sm", color: "border-stream-build" },
  { name: "glow-purple-sm", className: "glow-purple-sm", color: "border-stream-ai" },
  { name: "glow-green-sm", className: "glow-green-sm", color: "border-stream-product" },
];

const accentUsageRules = [
  "Accent colour is reserved for stream identification.",
  "Never stack accent colours in a single component.",
  "Core navy and neutral surfaces must dominate each layout.",
];

const spacingRhythmRules = [
  {
    title: "Section padding scale",
    desc: "Use consistent vertical rhythm between page bands.",
    token: "py-20 md:py-[120px]"
  },
  {
    title: "Generous whitespace",
    desc: "Maintain clear separation between heading, copy, and content blocks.",
    token: "mb-6 / mb-8 / gap-6"
  },
  {
    title: "Mobile density control",
    desc: "Avoid compressed grids on mobile; step down to one or two columns before desktop.",
    token: "grid-cols-1 md:grid-cols-2"
  },
];

const typographyHierarchyRules = [
  "Apply heading levels in order with one clear H1 per page.",
  "Keep subheadings visually below section titles.",
  "Body copy must remain readable at all breakpoints with stable line length.",
];

const componentPatterns = [
  { name: "Hero", use: "Primary headline, concise intro, and one dominant CTA." },
  { name: "Stream Grid", use: "Service overview cards mapped to one accent per stream." },
  { name: "CTA Band", use: "Single decision-focused action with short support copy." },
  { name: "Card Grids", use: "Consistent card rhythm for capabilities, rules, and outcomes." },
];

const copyRules = [
  "Use direct language.",
  "Write with technical clarity.",
  "State scope and action clearly.",
  "Avoid hype and vague claims.",
];

const banList = ["unlock", "empower", "seamless", "transform", "next-level", "growth engine"];

const brandAssets = [
  { name: "Hero Background (PNG)", href: "/assets/hero-background.png" },
  { name: "Hero UI Cascade (PNG)", href: "/assets/hero-ui-cascade-clean.png" },
  { name: "Hero Column 2 Card (PNG)", href: "/assets/hero-column-2-flat.png" },
];

type SignatureProfile = {
  name: string;
  role: string;
  tagline: string;
  email: string;
  mobile: string;
  whatsapp: string;
  website: string;
  bookingUrl: string;
  ctaLabel: string;
};

const defaultSignatureProfiles: SignatureProfile[] = [
  {
    name: "Jarrud van der Merwe",
    role: "Lead HubSpot Architect & Sales Engineer",
    tagline: "CRM strategy, architecture, growth systems.",
    email: "jarrud@wearemuloo.com",
    mobile: "+27 68 634 3652",
    whatsapp: "+27 68 634 3652",
    website: "https://www.wearemuloo.com",
    bookingUrl: "https://www.wearemuloo.com/contact",
    ctaLabel: "Book with Jarrud",
  },
  {
    name: "Morne Visagie",
    role: "Partner & Outsourced CTO",
    tagline: "Technical architecture, integrations, scale systems.",
    email: "morne@wearemuloo.com",
    mobile: "+27 68 634 3652",
    whatsapp: "+27 68 634 3652",
    website: "https://www.wearemuloo.com",
    bookingUrl: "https://www.wearemuloo.com/contact",
    ctaLabel: "Book with Morne",
  },
];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function buildSignatureHtml(profile: SignatureProfile) {
  const safe = {
    name: escapeHtml(profile.name),
    role: escapeHtml(profile.role),
    tagline: escapeHtml(profile.tagline),
    email: escapeHtml(profile.email),
    mobile: escapeHtml(profile.mobile),
    whatsapp: escapeHtml(profile.whatsapp),
    website: escapeHtml(profile.website),
    bookingUrl: escapeHtml(profile.bookingUrl),
    ctaLabel: escapeHtml(profile.ctaLabel),
  };

  const websiteHref = profile.website.startsWith("http") ? profile.website : `https://${profile.website}`;
  const mobileHref = `tel:${digitsOnly(profile.mobile)}`;
  const whatsappHref = `https://wa.me/${digitsOnly(profile.whatsapp)}`;
  const emailHref = `mailto:${profile.email}`;
  const initials = profile.name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${safe.name} Email Signature</title>
</head>
<body style="margin:0;padding:20px;background:#050A30;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="680" style="max-width:680px;width:100%;background:#060E2B;border:1px solid rgba(255,255,255,0.12);border-radius:14px;">
    <tr>
      <td style="padding:22px 24px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td valign="top" width="72" style="padding-right:16px;">
              <div style="height:56px;width:56px;border-radius:999px;background:#0F1D55;border:1px solid rgba(255,255,255,0.12);color:#00C4CC;font-size:20px;line-height:56px;text-align:center;font-weight:700;">
                ${initials}
              </div>
            </td>
            <td valign="top">
              <div style="font-size:34px;line-height:1.1;font-weight:800;color:#FFFFFF;font-family:Montserrat,Arial,Helvetica,sans-serif;margin-bottom:4px;">${safe.name}</div>
              <div style="font-size:16px;line-height:1.4;color:#00C4CC;font-weight:600;margin-bottom:10px;">${safe.role}</div>
              <div style="font-size:14px;line-height:1.5;color:#9FB1D2;margin-bottom:14px;">${safe.tagline}</div>
              <div style="font-size:13px;line-height:1.7;color:#DDE8FF;">
                <div><span style="color:#00C4CC;font-weight:600;">WhatsApp:</span> <a href="${whatsappHref}" style="color:#DDE8FF;text-decoration:none;">${safe.whatsapp}</a></div>
                <div><span style="color:#00C4CC;font-weight:600;">Mobile:</span> <a href="${mobileHref}" style="color:#DDE8FF;text-decoration:none;">${safe.mobile}</a></div>
                <div><span style="color:#00C4CC;font-weight:600;">Email:</span> <a href="${emailHref}" style="color:#DDE8FF;text-decoration:none;">${safe.email}</a></div>
                <div><span style="color:#00C4CC;font-weight:600;">Website:</span> <a href="${websiteHref}" style="color:#DDE8FF;text-decoration:none;">${safe.website}</a></div>
              </div>
              <div style="margin-top:16px;">
                <a href="${safe.bookingUrl}" style="display:inline-block;padding:10px 20px;border-radius:10px;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;background:#F47621;background-image:linear-gradient(135deg,#00C4CC 0%,#C140FF 50%,#F47621 100%);">
                  ${safe.ctaLabel}
                </a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function downloadSignatureHtml(profile: SignatureProfile) {
  const html = buildSignatureHtml(profile);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${profile.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-signature.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function Styleguide() {
  const [signatureProfiles, setSignatureProfiles] = useState<SignatureProfile[]>(defaultSignatureProfiles);

  const updateSignatureProfile = (
    index: number,
    key: keyof SignatureProfile,
    value: string,
  ) => {
    setSignatureProfiles((prev) =>
      prev.map((profile, i) => (i === index ? { ...profile, [key]: value } : profile)),
    );
  };

  return (
    <div className="flex flex-col" data-testid="styleguide-page">
      {/* Hero */}
      <Section className="bg-hero-gradient pt-32" data-testid="styleguide-hero">
        <Badge variant="teal" className="mb-4" data-testid="badge-design-system">Design System</Badge>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4" data-testid="text-styleguide-title">Muloo Styleguide</h1>
        <p className="text-xl text-muted-foreground max-w-2xl" data-testid="text-styleguide-subtitle">
          Reference for visual rules, spacing rhythm, component patterns, and copy standards.
        </p>
      </Section>

      {/* Color Tokens */}
      <Section className="bg-section-soft" data-testid="section-color-tokens">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-colors">Color Tokens</h2>
        <p className="text-muted-foreground mb-8">Core Brand Foundation</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-testid="grid-core-colors">
          {coreColors.map((c) => (
            <div key={c.hex} className="space-y-2" data-testid={`swatch-${c.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className={`h-24 w-full rounded-lg ${c.className}`} />
              <p className="font-semibold text-sm">{c.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{c.hex}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stream Accent Colors */}
      <Section data-testid="section-stream-colors">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-streams">Stream Accent Colors</h2>
        <p className="text-muted-foreground mb-8">Each Muloo stream has one accent color</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-testid="grid-stream-colors">
          {streamColors.map((c) => (
            <div key={c.hex} className="space-y-2" data-testid={`swatch-stream-${c.label.toLowerCase()}`}>
              <div className="h-24 w-full rounded-lg" style={{ backgroundColor: c.hex }} />
              <p className="font-semibold text-sm">{c.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{c.label} - {c.hex}</p>
            </div>
          ))}
        </div>

        <div className="mt-10" data-testid="section-accent-usage-rules">
          <h3 className="text-2xl font-bold mb-3">Accent Usage Rules</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accentUsageRules.map((rule, i) => (
              <Card key={i} className="glass-card border-white/10">
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{rule}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Gradient Tokens */}
      <Section className="bg-section-soft" data-testid="section-gradients">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-gradients">Gradient Tokens</h2>
        <p className="text-muted-foreground mb-8">Background gradients and text gradients</p>

        <div className="space-y-8">
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-3">.bg-hero-gradient</p>
            <div className="bg-hero-gradient h-32 rounded-lg border border-white/10" data-testid="gradient-hero" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "glow-hub", className: "glow-hub" },
              { name: "glow-build", className: "glow-build" },
              { name: "glow-ai", className: "glow-ai" },
              { name: "glow-product", className: "glow-product" },
            ].map((g) => (
              <div key={g.name} data-testid={`gradient-${g.name}`}>
                <div className={`${g.className} h-24 rounded-lg border border-white/10`} />
                <p className="font-mono text-xs text-muted-foreground mt-2">.{g.name}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="font-mono text-sm text-muted-foreground mb-3">.bg-section-soft</p>
            <div className="bg-section-soft h-24 rounded-lg border border-white/10" data-testid="gradient-section-soft" />
          </div>

          <div className="space-y-4">
            <p className="font-mono text-sm text-muted-foreground">Text Gradients</p>
            <div className="flex flex-wrap gap-8 items-center">
              <div data-testid="gradient-text-teal">
                <span className="text-gradient-teal text-3xl font-bold">text-gradient-teal</span>
              </div>
              <div data-testid="gradient-text-orange">
                <span className="text-gradient-orange text-3xl font-bold">text-gradient-orange</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Spacing Rhythm Rules */}
      <Section data-testid="section-spacing-rhythm">
        <h2 className="text-3xl font-bold mb-2">Spacing Rhythm Rules</h2>
        <p className="text-muted-foreground mb-8">Consistent section rhythm with generous whitespace</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spacingRhythmRules.map((rule) => (
            <Card key={rule.title} className="glass-card border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{rule.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground leading-relaxed">{rule.desc}</p>
                <p className="font-mono text-xs text-brand-teal">{rule.token}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section data-testid="section-typography">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-typography">Typography</h2>
        <p className="text-muted-foreground mb-8">Montserrat for headings. Aileron for body copy. JetBrains Mono for code.</p>

        <div className="mb-10" data-testid="section-typography-hierarchy">
          <h3 className="text-2xl font-bold mb-3">Typography Hierarchy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {typographyHierarchyRules.map((rule, i) => (
              <Card key={i} className="glass-card border-white/10">
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{rule}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div data-testid="typography-h1">
            <h1 className="text-6xl font-extrabold">Heading 1 - Extra Bold</h1>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-sans - text-6xl - font-extrabold</p>
          </div>
          <div data-testid="typography-h2">
            <h2 className="text-5xl font-bold">Heading 2 - Bold</h2>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-sans - text-5xl - font-bold</p>
          </div>
          <div data-testid="typography-h3">
            <h3 className="text-3xl font-semibold">Heading 3 - SemiBold</h3>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-sans - text-3xl - font-semibold</p>
          </div>
          <div data-testid="typography-subtitle">
            <p className="text-xl font-light">Subtitle - Light</p>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-sans - text-xl - font-light</p>
          </div>
          <div data-testid="typography-body">
            <p className="leading-relaxed max-w-2xl">
              Body text sample. Keep sentence structure simple, describe technical scope clearly,
              and keep line length readable across breakpoints.
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-sans - text-base - font-normal</p>
          </div>
          <div data-testid="typography-mono">
            <p className="font-mono text-sm">const stream = "JetBrains Mono for inline code";</p>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-mono - text-sm</p>
          </div>
        </div>
      </Section>

      {/* Component Patterns */}
      <Section className="bg-section-soft" data-testid="section-component-patterns">
        <h2 className="text-3xl font-bold mb-2">Component Patterns</h2>
        <p className="text-muted-foreground mb-8">Reusable composition patterns</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {componentPatterns.map((pattern) => (
            <Card key={pattern.name} className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">{pattern.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{pattern.use}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Button Styles */}
      <Section className="bg-section-soft" data-testid="section-buttons">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-buttons">Button Styles</h2>
        <p className="text-muted-foreground mb-8">Primary, CTA, outline, ghost, and stream-colored variants</p>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-semibold" data-testid="button-primary">
              Primary (Teal)
            </Button>
            <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-semibold" data-testid="button-orange-cta">
              Orange CTA
            </Button>
            <Button size="lg" variant="outline" data-testid="button-outline">
              Outline
            </Button>
            <Button size="lg" variant="ghost" data-testid="button-ghost">
              Ghost
            </Button>
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground mb-3">Stream-colored buttons</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#F47621" }} data-testid="button-stream-hub">
                Hub
              </Button>
              <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#155DFC" }} data-testid="button-stream-build">
                Build
              </Button>
              <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#C140FF" }} data-testid="button-stream-ai">
                AI
              </Button>
              <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#59BF96" }} data-testid="button-stream-product">
                Product
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Card Styles */}
      <Section data-testid="section-cards">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-cards">Card Styles</h2>
        <p className="text-muted-foreground mb-8">Glass cards with stream accent hover colors</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {streamColors.map((stream) => (
            <Card
              key={stream.hex}
              className="glass-card rounded-xl hover:border-white/20 transition-all duration-300 group"
              style={{ ["--hover-color" as string]: stream.hex }}
              data-testid={`card-stream-${stream.label.toLowerCase()}`}
            >
              <CardHeader>
                <div className="h-1 w-12 rounded-full mb-2" style={{ backgroundColor: stream.hex }} />
                <CardTitle className="text-lg">{stream.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Glass card with <span className="font-mono" style={{ color: stream.hex }}>{stream.label.toLowerCase()}</span> accent.
                  Hover to see the glow effect.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Glow Examples */}
      <Section className="bg-section-soft" data-testid="section-glows">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-glows">Glow Effects</h2>
        <p className="text-muted-foreground mb-8">Small box-shadow glows for accent highlights</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {glowEffects.map((g) => (
            <div
              key={g.name}
              className={`${g.className} rounded-xl p-6 border border-white/10 bg-white/[0.03] flex flex-col items-center justify-center gap-2`}
              data-testid={`glow-${g.name}`}
            >
              <div className={`w-4 h-4 rounded-full ${g.color} border-2`} />
              <p className="font-mono text-xs text-muted-foreground text-center">.{g.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Code Block */}
      <Section data-testid="section-code-block">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-code">Code Block</h2>
        <p className="text-muted-foreground mb-8">The <code className="font-mono text-brand-teal">.code-block</code> utility class</p>

        <div className="max-w-2xl">
          <pre className="code-block" data-testid="code-block-example">
{`// Muloo Design System - Tailwind config tokens
const colors = {
  brand: {
    navy:   "#050A30",
    teal:   "#00C4CC",
    orange: "#F47621",
  },
  stream: {
    hub:     "#F47621",
    build:   "#155DFC",
    ai:      "#C140FF",
    product: "#59BF96",
  },
  soft: {
    teal: "#E6FBFD",
  },
};`}
          </pre>
        </div>
      </Section>

      {/* Forms */}
      <Section className="bg-section-soft" data-testid="section-forms">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-forms">Form Inputs</h2>
        <p className="text-muted-foreground mb-8">Input states and badges</p>

        <div className="max-w-md space-y-4 mb-8">
          <Input placeholder="Default input" data-testid="input-default" />
          <Input placeholder="Focused / active input" className="border-brand-teal" data-testid="input-active" />
          <Input placeholder="Disabled input" disabled data-testid="input-disabled" />
        </div>

        <div>
          <p className="font-mono text-xs text-muted-foreground mb-3">Badges</p>
          <div className="flex flex-wrap gap-3">
            <Badge data-testid="badge-default">Default</Badge>
            <Badge variant="teal" data-testid="badge-teal">Teal</Badge>
            <Badge variant="secondary" data-testid="badge-secondary">Secondary</Badge>
            <Badge variant="outline" data-testid="badge-outline">Outline</Badge>
            <Badge variant="navy" data-testid="badge-navy">Navy</Badge>
          </div>
        </div>
      </Section>

      {/* Brand Assets */}
      <Section data-testid="section-brand-assets">
        <h2 className="text-3xl font-bold mb-2">Brand Assets</h2>
        <p className="text-muted-foreground mb-8">
          Canonical visual assets used across hero sections and marketing material.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandAssets.map((asset) => (
            <Card key={asset.href} className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">{asset.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg overflow-hidden border border-white/10 bg-[#050A30]">
                  <img src={asset.href} alt={asset.name} className="w-full h-32 object-cover" />
                </div>
                <div className="flex gap-3">
                  <a href={asset.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">Preview</Button>
                  </a>
                  <a href={asset.href} download>
                    <Button size="sm" className="bg-gradient-muloo text-white border-none">Download</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* HTML Email Signatures */}
      <Section className="bg-section-soft" data-testid="section-email-signatures">
        <h2 className="text-3xl font-bold mb-2">HTML Email Signatures</h2>
        <p className="text-muted-foreground mb-8">
          Update contact fields and download a ready-to-use HTML signature file.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {signatureProfiles.map((profile, index) => (
            <Card key={profile.name} className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">{profile.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Name</p>
                    <Input
                      value={profile.name}
                      onChange={(e) => updateSignatureProfile(index, "name", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Role</p>
                    <Input
                      value={profile.role}
                      onChange={(e) => updateSignatureProfile(index, "role", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Tagline</p>
                    <Input
                      value={profile.tagline}
                      onChange={(e) => updateSignatureProfile(index, "tagline", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">WhatsApp</p>
                    <Input
                      value={profile.whatsapp}
                      onChange={(e) => updateSignatureProfile(index, "whatsapp", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Mobile</p>
                    <Input
                      value={profile.mobile}
                      onChange={(e) => updateSignatureProfile(index, "mobile", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</p>
                    <Input
                      value={profile.email}
                      onChange={(e) => updateSignatureProfile(index, "email", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Website</p>
                    <Input
                      value={profile.website}
                      onChange={(e) => updateSignatureProfile(index, "website", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">CTA Label</p>
                    <Input
                      value={profile.ctaLabel}
                      onChange={(e) => updateSignatureProfile(index, "ctaLabel", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">CTA URL</p>
                    <Input
                      value={profile.bookingUrl}
                      onChange={(e) => updateSignatureProfile(index, "bookingUrl", e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    className="bg-gradient-muloo text-white border-none"
                    onClick={() => downloadSignatureHtml(profile)}
                  >
                    Download HTML
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Copy Rules */}
      <Section data-testid="section-copy-rules">
        <h2 className="text-3xl font-bold mb-2">Copy Rules</h2>
        <p className="text-muted-foreground mb-8">Direct, technical, controlled language</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-lg">Writing Standard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {copyRules.map((rule) => (
                  <p key={rule} className="text-sm text-muted-foreground">{rule}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10" data-testid="section-ban-list">
            <CardHeader>
              <CardTitle className="text-lg">Ban List</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {banList.map((term) => (
                  <Badge key={term} variant="outline">{term}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
