import { useEffect, useRef } from "react";

declare global {
  interface Window {
    __mulooHubspotEmbedPromise?: Promise<void>;
  }
}

const EMBED_SCRIPT_SRC = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
const EMBED_SCRIPT_ID = "muloo-hubspot-meetings-embed-script";

function ensureHubSpotEmbedScript(): Promise<void> {
  if (window.__mulooHubspotEmbedPromise) {
    return window.__mulooHubspotEmbedPromise;
  }

  window.__mulooHubspotEmbedPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(EMBED_SCRIPT_ID) as HTMLScriptElement | null;

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        resolve();
        return;
      }

      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Failed to load HubSpot embed script")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = EMBED_SCRIPT_ID;
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load HubSpot embed script"));
    document.body.appendChild(script);
  });

  return window.__mulooHubspotEmbedPromise;
}

export function HubSpotMeetingsPopup({ dataSrc }: { dataSrc: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    mountNode.innerHTML = "";

    const container = document.createElement("div");
    container.className = "meetings-iframe-container";
    container.setAttribute("data-src", dataSrc);
    mountNode.appendChild(container);

    let isCancelled = false;
    let fallbackTimer: number | undefined;

    ensureHubSpotEmbedScript()
      .then(() => {
        fallbackTimer = window.setTimeout(() => {
          if (isCancelled || !mountNode) return;

          if (!mountNode.querySelector("iframe")) {
            const fallbackIframe = document.createElement("iframe");
            fallbackIframe.src = dataSrc;
            fallbackIframe.title = "Meeting scheduler";
            fallbackIframe.style.width = "100%";
            fallbackIframe.style.height = "100%";
            fallbackIframe.style.minHeight = "720px";
            fallbackIframe.style.border = "0";
            fallbackIframe.style.background = "#ffffff";
            fallbackIframe.style.borderRadius = "18px";
            container.replaceChildren(fallbackIframe);
          }
        }, 1000);
      })
      .catch(() => {
        const fallbackIframe = document.createElement("iframe");
        fallbackIframe.src = dataSrc;
        fallbackIframe.title = "Meeting scheduler";
        fallbackIframe.style.width = "100%";
        fallbackIframe.style.height = "100%";
        fallbackIframe.style.minHeight = "720px";
        fallbackIframe.style.border = "0";
        fallbackIframe.style.background = "#ffffff";
        fallbackIframe.style.borderRadius = "18px";
        container.replaceChildren(fallbackIframe);
      });

    return () => {
      isCancelled = true;
      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
      }
      mountNode.innerHTML = "";
    };
  }, [dataSrc]);

  return (
    <div className="rounded-2xl overflow-hidden bg-white min-h-[560px] md:min-h-[720px]">
      <div ref={mountRef} className="h-[88vh] min-h-[560px] md:min-h-[720px] bg-white" />
    </div>
  );
}
