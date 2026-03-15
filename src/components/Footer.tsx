import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logo.webp"
              alt="Mega Media Networks"
              className="mb-4 h-8 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Where Brands Scale. Where Markets Move. Premium digital marketing from San Diego to the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {["Services", "About", "Results", "FAQ", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {["SEO & Search", "Paid Media", "Social Media", "Content Strategy", "Web Development", "Analytics"].map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                San Diego, California, USA
              </li>
              <li>
                <a href="mailto:info@megamedianetworks.com" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                  info@megamedianetworks.com
                </a>
              </li>
              <li>
                <a href="tel:+16193249339" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                  +1 (619) 324-9339
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mega Media Networks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
