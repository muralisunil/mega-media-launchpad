import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  toggleTheme: () => void;
  theme: "light" | "dark";
}

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar with phone */}
      <div className="fixed top-0 z-50 w-full gradient-primary">
        <div className="container mx-auto flex items-center justify-center gap-2 px-4 py-2 sm:justify-between">
          <a
            href="tel:+16193249339"
            className="flex items-center gap-2 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            +1 (619) 324-9339
          </a>
          <a
            href="mailto:info@megamedianetworks.com"
            className="hidden text-sm text-primary-foreground/80 sm:block"
          >
            info@megamedianetworks.com
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="fixed top-[40px] z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/logo.webp"
              alt="Mega Media Networks"
              className="h-8 w-auto"
            />
            <span className="font-heading text-base font-bold text-foreground hidden sm:block">
              Mega Media Networks
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <a
              href="#contact"
              className="gradient-primary rounded-lg px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <button onClick={() => setOpen(!open)} className="text-foreground" aria-label="Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background px-4 pb-6 pt-4 lg:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="gradient-primary mt-3 inline-block rounded-lg px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Start a Project
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
