import { useMemo } from "react";
import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { getMeetingBySlug } from "@/content/meetings";
import NotFound from "@/pages/not-found";
import { BookingCard } from "@/components/meetings/BookingCard";

export function MeetingBookingPage() {
  const [, contactParams] = useRoute("/contact/book/:person");
  const [, legacyParams] = useRoute("/meetings/:person");
  const slug = useMemo(
    () => (contactParams?.person ?? legacyParams?.person ?? "").toLowerCase(),
    [contactParams?.person, legacyParams?.person],
  );
  const meetingProfile = getMeetingBySlug(slug);

  if (!meetingProfile) {
    return <NotFound />;
  }

  const heading = `Book with ${meetingProfile.name.split(" ")[0] ?? meetingProfile.name}`;

  return (
    <div className="flex flex-col">
      <Section className="pt-8 pb-6 md:pt-10 md:pb-8 bg-hero-gradient border-b border-white/5">
        <div className="max-w-4xl">
          <Link href="/contact">
            <Button
              variant="outline"
              size="sm"
              className="mb-5 border-white/15 text-white hover:bg-white/5"
              data-testid="button-back-contact"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Contact
            </Button>
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">{heading}</h1>
          <p className="text-muted-foreground max-w-2xl">{meetingProfile.summary}</p>
        </div>
      </Section>

      <Section className="pt-6 pb-10 md:pt-8 md:pb-12">
        <BookingCard meeting={meetingProfile} />
      </Section>
    </div>
  );
}
