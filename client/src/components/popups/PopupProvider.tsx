import { createContext, useMemo, useState } from "react";

type PopupContextValue = {
  activePopupKey: string | null;
  openPopup: (key: string) => void;
  closePopup: () => void;
};

export const PopupContext = createContext<PopupContextValue | null>(null);

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [activePopupKey, setActivePopupKey] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      activePopupKey,
      openPopup: (key: string) => setActivePopupKey(key),
      closePopup: () => setActivePopupKey(null),
    }),
    [activePopupKey],
  );

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
}
