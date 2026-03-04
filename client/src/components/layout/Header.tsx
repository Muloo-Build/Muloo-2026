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
              return (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-[15px] font-medium text-white/90 hover:text-brand-teal transition-colors outline-none cursor-pointer group">
                    {link.name} <ChevronDown className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 bg-[#0A0F1C]/95 backdrop-blur-2xl border-white/10 p-3 shadow-2xl rounded-xl">
                    {link.subItems.map((sub) => (
                      <DropdownMenuItem key={sub.name} asChild className="cursor-pointer focus:bg-white/5 rounded-lg my-1">
                        <Link href={sub.href} className="flex flex-col items-start gap-1 p-3 w-full group">
                          <span className="font-semibold text-white group-hover:text-brand-teal transition-colors flex items-center w-full justify-between">
                            {sub.name}
                            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-teal" />
                          </span>
                          <span className="text-xs text-muted-foreground">{sub.desc}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
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
                      {link.subItems.map(sub => (
                        <Link key={sub.name} href={sub.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium pl-4 border-l-2 border-transparent hover:border-brand-teal hover:text-brand-teal transition-all text-white">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold hover:text-brand-teal transition-colors text-white">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href={meetingUrl} onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-muloo border-none text-white font-bold hover:brightness-110 mt-4 h-12 rounded-xl">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
