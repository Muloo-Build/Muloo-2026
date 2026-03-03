import { useEffect } from "react";
import { createPortal } from "react-dom";
import { HubSpotMeetingsPopup } from "./HubSpotMeetingsPopup";
import { usePopup } from "./usePopup";
import { getPopupByKey } from "@/content/popups";

export function PopupRoot() {
  const { activePopupKey, closePopup } = usePopup();
  const popup = activePopupKey ? getPopupByKey(activePopupKey) : undefined;

  useEffect(() => {
    if (!popup) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyPaddingRight = document.body.style.paddingRight;
    const scrollbarCompensation = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (scrollbarCompensation > 0) {
      document.body.style.paddingRight = `${scrollbarCompensation}px`;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.paddingRight = originalBodyPaddingRight;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [popup, closePopup]);

  if (!popup) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-[#030918]/78 backdrop-blur-md p-3 md:p-6 flex items-center justify-center"
      onClick={closePopup}
      role="presentation"
      data-testid="popup-overlay"
    >
      <div
        className="relative w-full max-w-[1120px] rounded-[20px] border border-white/20 bg-[#06122D]/95 p-3 md:p-5 shadow-[0_35px_90px_rgba(0,0,0,0.5)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={popup.title}
      >
        <button
          type="button"
          className="absolute top-3 right-3 h-9 w-9 rounded-lg border border-white/25 bg-white/10 text-white text-2xl leading-none hover:bg-white/15"
          onClick={closePopup}
          aria-label="Close popup"
          data-testid="popup-close"
        >
          &times;
        </button>

        <h2 className="pr-10 mb-3 text-base md:text-lg text-white/90">{popup.title}</h2>

        {popup.type === "hubspot-meetings" ? (
          <HubSpotMeetingsPopup dataSrc={popup.dataSrc} />
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
