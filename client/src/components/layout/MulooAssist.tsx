import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "27700000000"; // Replace with your WhatsApp number in international format (no +)
const WHATSAPP_MESSAGE = "Hi Muloo, I would like to chat about my project.";

function WhatsAppIcon({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M16.04 3C8.86 3 3 8.73 3 15.8c0 2.27.61 4.48 1.78 6.42L3 29l6.98-1.8a13.22 13.22 0 0 0 6.06 1.45c7.18 0 13.04-5.73 13.04-12.8S23.22 3 16.04 3Zm0 23.56c-1.9 0-3.76-.5-5.38-1.45l-.38-.22-4.14 1.06 1.1-4.02-.24-.4a10.48 10.48 0 0 1-1.62-5.73c0-5.9 4.78-10.71 10.66-10.71 5.88 0 10.66 4.8 10.66 10.71S21.92 26.56 16.04 26.56Zm5.86-8.04c-.32-.16-1.91-.93-2.21-1.04-.3-.1-.52-.16-.74.16-.22.31-.85 1.04-1.05 1.25-.19.2-.39.24-.71.08-.32-.16-1.35-.49-2.57-1.56-.95-.84-1.6-1.86-1.78-2.17-.19-.31-.02-.48.14-.64.14-.13.32-.35.48-.52.16-.18.22-.31.34-.52.11-.2.05-.39-.03-.55-.08-.16-.74-1.77-1.01-2.42-.27-.64-.55-.55-.74-.56h-.64c-.22 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.64 0 1.56 1.13 3.06 1.29 3.27.16.2 2.22 3.54 5.49 4.81.78.31 1.4.5 1.87.64.78.24 1.49.2 2.06.12.63-.09 1.91-.78 2.18-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.2-.61-.36Z" />
    </svg>
  );
}

export function MulooAssist() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const whatsappWebUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  const whatsappAppUrl = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

  const openWhatsApp = () => {
    const isMobileDevice = /Android|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(navigator.userAgent);

    if (isMobileDevice) {
      window.location.href = whatsappAppUrl;
      setTimeout(() => {
        if (document.visibilityState === "visible") {
          window.location.href = whatsappWebUrl;
        }
      }, 1200);
      return;
    }

    const width = 520;
    const height = 760;
    const left = Math.max(0, Math.floor((window.screen.width - width) / 2));
    const top = Math.max(0, Math.floor((window.screen.height - height) / 2));
    const popupFeatures = `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars`;

    const popup = window.open(whatsappWebUrl, "muloo-whatsapp-chat", popupFeatures);
    if (!popup) {
      window.open(whatsappWebUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        skipContactRedirect
        className="h-14 w-14 rounded-full bg-gradient-muloo text-white shadow-xl hover:brightness-110 hover:scale-105 transition-all duration-300 flex items-center justify-center group relative overflow-hidden glow-muloo-sm"
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
        data-testid="button-whatsapp-chat"
      >
        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
        <WhatsAppIcon className="h-9 w-9 relative z-10" />
      </Button>
      <div className="absolute bottom-full right-0 mb-4 bg-card border border-white/10 p-4 rounded-xl shadow-xl w-64 origin-bottom-right scale-0 opacity-0 transition-all pointer-events-none">
        <p className="text-sm font-medium mb-2">Muloo Assist</p>
        <p className="text-xs text-muted-foreground">Start a WhatsApp chat with our team.</p>
      </div>
    </div>
  );
}
