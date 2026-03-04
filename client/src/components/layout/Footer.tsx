import { Link } from "wouter";
import { Logo } from "./Logo";
import hubspotBadge from "@assets/gold-badge-color_1771487221441.png";
import googleBadge from "@assets/google-partner-logo_1771487221441.png";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#030720] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
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
              <li><Link href="/services/hub" className="hover:text-stream-hub transition-colors">Muloo Hub</Link></li>
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
              <li><span>LinkedIn</span></li>
              <li><span>GitHub</span></li>
              <li><Link href="/styleguide" className="hover:text-brand-teal transition-colors">Styleguide</Link></li>
            </ul>
          </div>

          <div className="md:text-right">
            <h4 className="font-bold mb-6 text-white text-sm">Accreditations</h4>
            <div className="flex flex-col gap-5 items-start md:items-end">
              <img src={hubspotBadge} alt="HubSpot Gold Partner" className="h-16 w-auto drop-shadow-lg" data-testid="footer-hubspot-badge" />
              <img src={googleBadge} alt="Google Partner" className="h-8 w-auto opacity-50 grayscale hover:grayscale-0 transition-all duration-300" data-testid="footer-google-badge" />
              <span className="text-[10px] text-muted-foreground/30 font-mono mt-1">More coming soon</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muloo. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
