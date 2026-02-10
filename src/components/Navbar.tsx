import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Soluções", href: "#solucoes" },
    { label: "Sobre", href: "#sobre" },
    { label: "Mentoria", href: "#mentoria" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="font-heading text-xl text-primary-foreground tracking-wide">
          LS <span className="text-gold">Negretto</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-primary-foreground/70 hover:text-gold font-body text-sm tracking-wide transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" asChild>
            <a href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma conversa estratégica." target="_blank" rel="noopener noreferrer">
              Fale conosco
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary-foreground">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 pb-6 px-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-primary-foreground/70 hover:text-gold font-body text-sm tracking-wide transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="mt-3 w-full" asChild>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              Fale conosco
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
