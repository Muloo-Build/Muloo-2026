import { Header } from "./Header";
import { Footer } from "./Footer";
import { MulooAssist } from "./MulooAssist";
import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const isMulooHubPage = location === "/muloo-hub" || location.startsWith("/muloo-hub/");

  const hubspotResources = [
    {
      title: "HubSpot Architecture",
      href: "/muloo-hub/hubspot-architecture",
    },
    {
      title: "HubSpot Migration",
      href: "/muloo-hub/hubspot-migration",
    },
    {
      title: "HubSpot Optimisation",
      href: "/muloo-hub/hubspot-optimisation",
    },
    {
      title: "HubSpot Audit",
      href: "/muloo-hub/hubspot-audit",
    },
    {
      title: "HubSpot vs Salesforce",
      href: "/muloo-hub/hubspot-vs-salesforce",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-brand-teal selection:text-brand-navy">
      <Header />
      <main className="flex-grow pt-24">
        {children}
      </main>
      {isMulooHubPage && (
        <section className="py-16 md:py-20 border-t border-white/5 bg-section-soft">
          <div className="container mx-auto px-6">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Explore more HubSpot resources</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hubspotResources.map((item) => (
                <Link key={item.title} href={item.href} className="block h-full">
                  <div className="glass-card rounded-xl p-6 border border-white/10 h-full hover:border-brand-teal/25 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                    <span className="text-sm font-semibold text-brand-teal inline-flex items-center">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
      <MulooAssist />
    </div>
  );
}
