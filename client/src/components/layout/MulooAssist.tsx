import { MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "27700000000"; // Replace with your WhatsApp number in international format (no +)
const WHATSAPP_MESSAGE = "Hi Muloo, I would like to chat about my project.";

export function MulooAssist() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        asChild
        skipContactRedirect
        className="h-14 w-14 rounded-full bg-brand-teal text-background hover:bg-brand-teal/90 shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          data-testid="button-whatsapp-chat"
        >
          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          <MessageSquareText className="h-6 w-6 relative z-10" />
        </a>
      </Button>
      <div className="absolute bottom-full right-0 mb-4 bg-card border border-white/10 p-4 rounded-xl shadow-xl w-64 origin-bottom-right scale-0 opacity-0 transition-all pointer-events-none">
        <p className="text-sm font-medium mb-2">Muloo Assist</p>
        <p className="text-xs text-muted-foreground">Start a WhatsApp chat with our team.</p>
      </div>
    </div>
  );
}
