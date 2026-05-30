import { Link } from "wouter";
import { Logo } from "./Logo";
import hubspotBadge from "@assets/gold-badge-color_1771487221441.png";
import googleBadge from "@assets/google-partner-logo_1771487221441.png";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#030720] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 mb-16 md:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_0.9fr_0.9fr_3.1fr]">
          <div>
            <Link href="/" className="block mb-6 hover:opacity-90">
              <Logo className="text-xl md:text-2xl" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based in Cape Town. <br />
              Built for global teams.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-sm">Expertise</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/muloo-hub" className="hover:text-stream-hub transition-colors">Muloo Hub</Link></li>
              <li><Link href="/services/build" className="hover:text-stream-build transition-colors">Muloo Build</Link></li>
              <li><Link href="/services/ai" className="hover:text-stream-ai transition-colors">Muloo AI</Link></li>
              <li><Link href="/services/product" className="hover:text-stream-product transition-colors">Muloo Product</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/advisory" className="hover:text-brand-teal transition-colors">Advisory</Link></li>
              <li><Link href="/about" className="hover:text-brand-teal transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-brand-teal transition-colors">Contact</Link></li>
              <li><Link href="/case-studies" className="hover:text-brand-teal transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-brand-teal transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-sm">Connect</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="tel:+27686343652" className="hover:text-brand-teal transition-colors">
                  +27 68 634 3652
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27686343652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-teal transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/muloo-za/" className="hover:text-brand-teal transition-colors" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:text-right">
            <h4 className="font-bold mb-6 text-white text-sm">Accreditations & Awards</h4>
            <div className="flex flex-wrap items-center gap-5 lg:justify-end">
              <img src={hubspotBadge} alt="HubSpot Gold Partner" className="h-20 w-auto drop-shadow-lg" data-testid="footer-hubspot-badge" />
              <img src={googleBadge} alt="Google Partner" className="h-14 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" data-testid="footer-google-badge" />
              <a
                href="https://50pros.com/agency/muloo"
                target="_blank"
                rel="nofollow sponsored noopener"
                aria-label="Muloo on 50Pros"
                className="inline-flex transition-opacity hover:opacity-90"
                data-testid="footer-50pros-award"
              >
                <img
                  src="https://50pros.com/api/award/top-sales-consulting-q2-2026/muloo?size=md"
                  alt="Muloo on 50Pros"
                  width={250}
                  height={80}
                  className="h-20 w-auto max-w-full"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muloo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
