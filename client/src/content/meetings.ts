import jarrudImg from "@assets/d1bde727-2cda-4a05-ad55-08a4eeb1c30f_1771492083207.png";
import morneImg from "@assets/Morne_1771492100987.png";
import { defaultMeetingProfiles, type MeetingProfileContent, type WebsiteContent } from "@shared/website-content";

const localImages: Record<string, string> = {
  jarrud: jarrudImg,
  morne: morneImg,
};

export type MeetingProfile = MeetingProfileContent & {
  imagePath: string;
  popupKey: string;
};

function normalizeSlug(slug?: string) {
  return slug?.toLowerCase().trim() ?? "";
}

function resolveImagePath(image?: string) {
  if (!image) return "";
  return localImages[image] ?? image;
}

export function resolveMeeting(profile: MeetingProfileContent): MeetingProfile {
  return {
    ...profile,
    slug: normalizeSlug(profile.slug),
    imagePath: resolveImagePath(profile.image),
    popupKey: `meeting link popup ${normalizeSlug(profile.slug)}`,
  };
}

export function resolveMeetings(source?: MeetingProfileContent[]): MeetingProfile[] {
  return (source ?? defaultMeetingProfiles).map(resolveMeeting);
}

export const meetings: MeetingProfile[] = resolveMeetings(defaultMeetingProfiles);

export function getActiveMeetings(content?: Pick<WebsiteContent, "meetings"> | null): MeetingProfile[] {
  return resolveMeetings(content?.meetings).filter((profile) => profile.active);
}

export function getMeetingBySlug(slug?: string, source?: MeetingProfileContent[]): MeetingProfile | undefined {
  const normalizedSlug = normalizeSlug(slug);
  if (!normalizedSlug) return undefined;
  return resolveMeetings(source).find((profile) => profile.slug === normalizedSlug && profile.active);
}
