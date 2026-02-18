const Footer = () => {
  return (
    <footer className="py-10 bg-foreground border-t border-foreground/10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <span className="font-heading text-lg text-white">
              Elas <span className="text-gradient-gold italic">Mentoring</span>
            </span>
            <p className="text-white/40 font-body text-sm mt-1">
              por Luciane Segala Negretto · LS Negretto
            </p>
          </div>
          <div className="flex gap-6 text-white/40 font-body text-sm">
            <a href="#para-quem" className="hover:text-gold transition-colors">Para quem é</a>
            <a href="#metodologia" className="hover:text-gold transition-colors">Metodologia</a>
            <a href="#sobre" className="hover:text-gold transition-colors">Sobre a Lu</a>
            <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
          </div>
          <p className="text-white/25 font-body text-xs">
            © {new Date().getFullYear()} LS Negretto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
