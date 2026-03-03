import { Clock3, Globe2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePopup } from "@/components/popups/usePopup";
import { cn } from "@/lib/utils";
import type { MeetingProfile } from "@/content/meetings";

type BookingCardProps = {
  meeting: MeetingProfile;
  className?: string;
  compact?: boolean;
  ctaText?: string;
};

function getFirstName(fullName: string): string {
  return fullName.split(" ")[0] ?? fullName;
}

export function BookingCard({ meeting, className, compact = false, ctaText = "Book a meeting" }: BookingCardProps) {
  const { openPopup } = usePopup();
  const firstName = getFirstName(meeting.name);

  return (
    <div
      className={cn(
        "rounded-[20px] border border-white/15 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(92,198,255,0.18)_0%,transparent_55%),linear-gradient(145deg,#06122D_0%,#050D21_100%)] p-4 md:p-8 shadow-[0_35px_90px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden",
        className,
      )}
      data-testid={`booking-card-${meeting.slug}`}
    >
      <div className={cn("grid gap-6 md:gap-10", compact ? "grid-cols-1" : "md:grid-cols-[1.35fr_1fr]")}>
        <div className="min-w-0">
          <img
            src={meeting.imagePath}
            alt={meeting.name}
            className={cn("rounded-full border-2 border-white/35 object-cover mb-4", compact ? "h-20 w-20" : "h-24 w-24")}
            loading="lazy"
          />

          <h3 className={cn("text-white font-bold tracking-tight mb-2", compact ? "text-2xl" : "text-3xl md:text-5xl")}>
            Book with {firstName}
          </h3>
          <p className="text-muted-foreground mb-5">{meeting.roleLine}</p>

          <p className="text-xs uppercase tracking-[0.09em] text-white/80 mb-2">What we&apos;ll cover</p>
          <ul className="space-y-2">
            {(compact ? meeting.bullets.slice(0, 2) : meeting.bullets).map((bullet) => (
              <li key={bullet} className="relative pl-6 text-white/90 leading-relaxed">
                <span className="absolute left-0 top-[9px] h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#33d8c9] to-[#5cc6ff] shadow-[0_0_0_4px_rgba(92,198,255,0.12)]" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 flex flex-col justify-center gap-4">
          <div className="rounded-2xl border border-white/20 bg-white/[0.06] p-4 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-white/70 text-sm flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" /> Duration
              </span>
              <span className="text-white/95 text-sm">{meeting.duration}</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-white/70 text-sm flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> Location
              </span>
              <span className="text-white/95 text-sm">{meeting.location}</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-white/70 text-sm flex items-center gap-1.5">
                <Globe2 className="h-4 w-4" /> Timezone
              </span>
              <span className="text-white/95 text-sm text-right">{meeting.timezoneNote}</span>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-muloo border-none text-white font-bold h-11 rounded-xl transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
            onClick={() => openPopup(meeting.popupKey)}
            data-testid={`button-open-popup-${meeting.slug}`}
          >
            {ctaText}
          </Button>

          <p className="text-xs text-white/65">{meeting.smallNote}</p>
        </div>
      </div>
    </div>
  );
}
