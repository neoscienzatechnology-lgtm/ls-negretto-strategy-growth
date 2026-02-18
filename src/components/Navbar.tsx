import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const WA_URL = "https://wa.me/5500000000000?text=Olá! Quero saber mais sobre a Elas Mentoring.";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Para quem é", href: "#para-quem" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "Sobre a Lu", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
        : "bg-background/80 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-16 lg:h-18">
        <a href="#" className="font-heading text-lg text-foreground tracking-wide">
          Elas <span className="text-gradient-gold italic">Mentoring</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/60 hover:text-gold font-body text-sm tracking-wide transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" asChild>
            <a href="#aplicacao">Quero me candidatar</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border pb-6 px-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-foreground/60 hover:text-gold font-body text-sm tracking-wide transition-colors border-b border-border/50 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="gold" size="sm" className="w-full" asChild>
              <a href="#aplicacao" onClick={() => setMobileOpen(false)}>
                Quero me candidatar
              </a>
            </Button>
            <Button variant="gold-outline" size="sm" className="w-full" asChild>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
