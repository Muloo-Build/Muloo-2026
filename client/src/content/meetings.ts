import jarrudImg from "@assets/d1bde727-2cda-4a05-ad55-08a4eeb1c30f_1771492083207.png";
import morneImg from "@assets/Morne_1771492100987.png";

export type MeetingProfile = {
  slug: string;
  name: string;
  roleLine: string;
  imagePath: string;
  popupKey: string;
  meetingUrl: string;
  duration: string;
  location: string;
  timezoneNote: string;
  bullets: string[];
  summary: string;
  smallNote: string;
};

export const meetings: MeetingProfile[] = [
  {
    slug: "jarrud",
    name: "Jarrud van der Merwe",
    roleLine: "Lead HubSpot Architect and Sales Engineer",
    imagePath: jarrudImg,
    popupKey: "meeting link popup jarrud",
    meetingUrl: "https://www.wearemuloo.com/meetings/jarrud2/jarrud",
    duration: "45 minutes",
    location: "Google Meet",
    timezoneNote: "Automatically detects your timezone",
    bullets: [
      "Your current HubSpot setup and growth priorities",
      "Where your revenue operations are losing momentum",
      "A practical next step your team can execute quickly",
    ],
    summary: "Schedule time to discuss CRM strategy, architecture, and practical growth systems.",
    smallNote: "No hard pitch. Just focused technical and strategic direction.",
  },
  {
    slug: "morne",
    name: "Morne Visagie",
    roleLine: "Partner and Outsourced CTO",
    imagePath: morneImg,
    popupKey: "meeting link popup morne",
    meetingUrl: "https://meetings.hubspot.com/morne-visagie",
    duration: "45 minutes",
    location: "Google Meet",
    timezoneNote: "Automatically detects your timezone",
    bullets: [
      "Technical architecture and integration constraints",
      "How to reduce friction between systems and teams",
      "A practical implementation path for scale",
    ],
    summary: "Schedule time to discuss technical architecture, integrations, and scalable systems.",
    smallNote: "Bring your constraints. We will map options clearly.",
  },
];

export function getMeetingBySlug(slug?: string): MeetingProfile | undefined {
  if (!slug) return undefined;
  const normalizedSlug = slug.toLowerCase();
  return meetings.find((profile) => profile.slug === normalizedSlug);
}
