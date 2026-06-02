import { resolveMeetings } from "@/content/meetings";
import type { MeetingProfileContent } from "@shared/website-content";

export type PopupConfig = {
  key: string;
  type: "hubspot-meetings";
  title: string;
  dataSrc: string;
};

export const popups: PopupConfig[] = [
  {
    key: "meeting link popup jarrud",
    type: "hubspot-meetings",
    title: "Meet with Jarrud",
    dataSrc: "https://hub.wearemuloo.com/meetings/jarrud2/jarrud?embed=true",
  },
];

function getFirstName(name: string) {
  return name.split(" ")[0] ?? name;
}

export function getPopupByKey(key: string, meetings?: MeetingProfileContent[]) {
  const meetingPopup = resolveMeetings(meetings)
    .filter((meeting) => meeting.active)
    .find((meeting) => meeting.popupKey === key);

  if (meetingPopup) {
    return {
      key: meetingPopup.popupKey,
      type: "hubspot-meetings" as const,
      title: `Meet with ${getFirstName(meetingPopup.name)}`,
      dataSrc: meetingPopup.embedUrl,
    };
  }

  if (meetings) return undefined;

  return popups.find((popup) => popup.key === key);
}
