import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/content";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "./Logo";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const meetingUrl = "/contact";
  const isMulooHubPath = location === "/muloo-hub" || location.startsWith("/muloo-hub/");

  const isLocationMatch = (href: string) => {
    const basePath = href.split("#")[0];
    if (!basePath || basePath.startsWith("http")) return false;
    if (basePath === "/") return location === "/";
    if (basePath === "/muloo-hub") return isMulooHubPath;
    return location === basePath || location.startsWith(`${basePath}/`);
  };

  const isSubItemActive = (sub: { href: string; links?: Array<{ href: string; external?: boolean }> }) => {
    if (sub.href === "/muloo-hub" && isMulooHubPath) return true;
    if (isLocationMatch(sub.href)) return true;
    return Boolean(sub.links?.some((nested) => !nested.external && isLocationMatch(nested.href)));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-white/5 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo className="text-2xl md:text-3xl" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            if (link.subItems) {
              const isDropdownActive = link.subItems.some((sub) =>
                isSubItemActive(sub as { href: string; links?: Array<{ href: string; external?: boolean }> })
              );

              return (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className={cn(
                    "flex items-center gap-1 text-[15px] font-medium hover:text-brand-teal transition-colors outline-none cursor-pointer group",
                    isDropdownActive ? "text-brand-teal" : "text-white/90"
                  )}>
                    {link.name} <ChevronDown className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-96 bg-[#0A0F1C]/95 backdrop-blur-2xl border-white/10 p-3 shadow-2xl rounded-xl">
                    {link.subItems.map((sub) => {
                      const nestedLinks = (sub as { links?: Array<{ name: string; href: string; external?: boolean }> }).links;
                      const hasNestedLinks = Array.isArray(nestedLinks) && nestedLinks.length > 0;
                      const isActive = isSubItemActive(sub as { href: string; links?: Array<{ href: string; external?: boolean }> });

                      if (!hasNestedLinks) {
                        return (
                          <DropdownMenuItem key={sub.name} asChild className="cursor-pointer focus:bg-white/5 rounded-lg my-1">
                            <Link href={sub.href} className="flex flex-col items-start gap-1 p-3 w-full group">
                              <span className={cn(
                                "font-semibold group-hover:text-brand-teal transition-colors flex items-center w-full justify-between",
                                isActive ? "text-brand-teal" : "text-white"
                              )}>
                                {sub.name}
                                <ArrowRight className={cn(
                                  "h-3 w-3 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-teal",
                                  isActive ? "opacity-100 translate-x-0" : "opacity-0 group-hover:opacity-100"
                                )} />
                              </span>
                              <span className="text-xs text-muted-foreground">{sub.desc}</span>
                            </Link>
                          </DropdownMenuItem>
                        );
                      }

                      return (
                        <div key={sub.name} className="rounded-lg my-1 p-3 hover:bg-white/5 transition-colors">
                          <Link href={sub.href} className="group">
                            <span className={cn(
                              "font-semibold group-hover:text-brand-teal transition-colors flex items-center w-full justify-between",
                              isActive ? "text-brand-teal" : "text-white"
                            )}>
                              {sub.name}
                              <ArrowRight className={cn(
                                "h-3 w-3 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-teal",
                                isActive ? "opacity-100 translate-x-0" : "opacity-0 group-hover:opacity-100"
                              )} />
                            </span>
                          </Link>
                          <p className="text-xs text-muted-foreground mt-1">{sub.desc}</p>

                          <div className="mt-3 pl-3 border-l border-white/10 flex flex-col gap-2">
                            {nestedLinks.map((nested) => {
                              const isNestedActive = !nested.external && isLocationMatch(nested.href);
                              return nested.external ? (
                                <a
                                  key={nested.name}
                                  href={nested.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-white/75 hover:text-brand-teal transition-colors"
                                >
                                  {nested.name}
                                </a>
                              ) : (
                                <Link
                                  key={nested.name}
                                  href={nested.href}
                                  className={cn(
                                    "text-xs hover:text-brand-teal transition-colors",
                                    isNestedActive ? "text-brand-teal" : "text-white/75"
                                  )}
                                >
                                  {nested.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link key={link.name} href={link.href} className={cn(
                "text-[15px] font-medium hover:text-brand-teal transition-colors cursor-pointer text-white/90",
                location === link.href ? "text-brand-teal" : ""
              )}>
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://deploy.wearemuloo.com/client/login" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 font-bold rounded-full px-6 transition-all text-sm">
              Client Login
            </Button>
          </a>
          <Link href={meetingUrl}>
            <Button className="bg-gradient-muloo border-none text-white hover:brightness-110 font-bold rounded-full px-6 glow-muloo-sm transition-all hover:scale-105 hover:-translate-y-0.5 text-sm">
              Let's Talk
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0A0F1C] border-l-white/10 w-full sm:w-[400px] p-6 overflow-y-auto">
            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            <div className="flex flex-col gap-8 mt-10">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  {link.subItems ? (
                    <div className="flex flex-col gap-4">
                      <span className="text-lg font-bold text-muted-foreground/50 border-b border-white/10 pb-2">{link.name}</span>
                      {link.subItems.map((sub) => {
                        const nestedLinks = (sub as { links?: Array<{ name: string; href: string; external?: boolean }> }).links;
                        const hasNestedLinks = Array.isArray(nestedLinks) && nestedLinks.length > 0;
                        const isActive = isSubItemActive(sub as { href: string; links?: Array<{ href: string; external?: boolean }> });

                        if (!hasNestedLinks) {
                          return (
                            <Link key={sub.name} href={sub.href} onClick={() => setIsMobileMenuOpen(false)} className={cn(
                              "text-xl font-medium pl-4 border-l-2 hover:border-brand-teal hover:text-brand-teal transition-all",
                              isActive ? "border-brand-teal text-brand-teal" : "border-transparent text-white"
                            )}>
                              {sub.name}
                            </Link>
                          );
                        }

                        return (
                          <div key={sub.name} className={cn(
                            "pl-4 border-l-2",
                            isActive ? "border-brand-teal" : "border-white/10"
                          )}>
                            <Link href={sub.href} onClick={() => setIsMobileMenuOpen(false)} className={cn(
                              "text-xl font-medium hover:text-brand-teal transition-all",
                              isActive ? "text-brand-teal" : "text-white"
                            )}>
                              {sub.name}
                            </Link>
                            <p className="text-xs text-muted-foreground mt-1 mb-2">{sub.desc}</p>
                            <div className="pl-3 border-l border-white/10 flex flex-col gap-2">
                              {nestedLinks.map((nested) => {
                                const isNestedActive = !nested.external && isLocationMatch(nested.href);
                                return nested.external ? (
                                  <a
                                    key={nested.name}
                                    href={nested.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm text-white/80 hover:text-brand-teal transition-colors"
                                  >
                                    {nested.name}
                                  </a>
                                ) : (
                                  <Link
                                    key={nested.name}
                                    href={nested.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                      "text-sm hover:text-brand-teal transition-colors",
                                      isNestedActive ? "text-brand-teal" : "text-white/80"
                                    )}
                                  >
                                    {nested.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold hover:text-brand-teal transition-colors text-white">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a href="https://deploy.wearemuloo.com/client/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-white border-white/20 bg-transparent hover:bg-white/10 font-bold h-12 rounded-xl">
                    Client Login
                  </Button>
                </a>
                <Link href={meetingUrl} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-muloo border-none text-white font-bold hover:brightness-110 h-12 rounded-xl">
                    Let's Talk
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
