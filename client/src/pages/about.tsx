import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Terminal, Linkedin } from "lucide-react";
import { aboutContent } from "@/lib/content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import jarrudImg from "@assets/d1bde727-2cda-4a05-ad55-08a4eeb1c30f_1771492083207.png";
import morneImg from "@assets/Morne_1771492100987.png";
import cultureImg from "@assets/happiness-at-workplace-GettyImages-1129332568_1771487221441.jpg";
import { getMeetingBySlug } from "@/content/meetings";
import { usePopup } from "@/components/popups/usePopup";

const getImage = (imageName: string) => {
    if (imageName.includes("jarrud")) return jarrudImg;
    if (imageName.includes("morne")) return morneImg;
    return "";
};

export function About() {
  const { openPopup } = usePopup();
  const jarrudMeeting = getMeetingBySlug("jarrud");
  const morneMeeting = getMeetingBySlug("morne");

  return (
    <div className="flex flex-col">
      <Section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-hero-cosmic">
        <div className="max-w-4xl">
           <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-orange mb-8 backdrop-blur-md">
            Who we are
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">{aboutContent.h1}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {aboutContent.intro}
          </p>
        </div>
      </Section>

      {/* Culture Image Section */}
      <div className="w-full h-96 relative overflow-hidden">
         <img src={cultureImg} alt="Muloo team culture" className="w-full h-full object-cover opacity-60" />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="container mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl drop-shadow-lg">
                  Remote-first, but connected by a shared obsession with quality.
               </h2>
            </div>
         </div>
      </div>

      <Section className="py-24 bg-section-soft">
         <div className="grid md:grid-cols-2 gap-16">
            <div>
               <h2 className="text-3xl font-bold mb-8 text-white">Our Philosophy</h2>
               <div className="space-y-8">
                  {aboutContent.philosophy.map((item, i) => (
                     <div key={i} className="pl-6 border-l-2 border-white/10 hover:border-brand-orange transition-colors group">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand-orange transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Terminal className="w-24 h-24 text-brand-orange" />
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white">Technical & Human</h3>
               <p className="text-muted-foreground leading-relaxed mb-6">
                  We built Muloo because we saw a gap. Agencies were great at creative, but bad at systems. Developers were great at code, but bad at strategy.
               </p>
               <p className="text-muted-foreground leading-relaxed">
                  We sit in the middle. We are engineers who understand revenue. We are consultants who write code.
               </p>
            </div>
         </div>
      </Section>

      <Section className="py-24">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Leadership</h2>
            <p className="text-muted-foreground">The people setting the technical standard.</p>
         </div>
         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aboutContent.team && aboutContent.team.map((member, i) => {
                const meeting =
                  member.name.includes("Jarrud")
                    ? jarrudMeeting
                    : member.name.includes("Morne")
                      ? morneMeeting
                      : undefined;

                return (
                <div key={i} className="glass-card p-8 rounded-xl flex flex-col items-center text-center gap-6 group">
                   <div className="h-32 w-32 rounded-full border-2 border-brand-teal/20 p-1 group-hover:border-brand-orange/50 transition-colors relative">
                       <Avatar className="h-full w-full">
                           <AvatarImage src={getImage(member.image)} alt={member.name} className="object-cover" />
                           <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                       </Avatar>
                       {/* Role Indicator Dot */}
                       <div className="absolute bottom-2 right-2 w-4 h-4 bg-brand-orange rounded-full border-2 border-card shadow-md" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">{member.name}</h3>
                      <div className="text-brand-teal font-mono text-sm mb-3 mt-1 h-10 flex items-center justify-center">{member.role}</div>
                      <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>
                      
                      <div className="flex items-center justify-center gap-2">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white hover:bg-white/5">
                              <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                          </Button>
                        </a>
                        {meeting && (
                          <Button
                            size="sm"
                            skipContactRedirect
                            className="bg-brand-orange text-white hover:bg-brand-orange/90"
                            onClick={() => openPopup(meeting.popupKey)}
                            data-testid={`button-book-meeting-${meeting.slug}`}
                          >
                            Book a meeting
                          </Button>
                        )}
                      </div>
                   </div>
                </div>
            )})}
         </div>
      </Section>
    </div>
  );
}
