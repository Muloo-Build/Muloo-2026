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
  {
    key: "meeting link popup morne",
    type: "hubspot-meetings",
    title: "Meet with Morn\u00e9",
    dataSrc: "https://meetings.hubspot.com/morne-visagie?embed=true",
  },
];

export function getPopupByKey(key: string) {
  return popups.find((popup) => popup.key === key);
}
