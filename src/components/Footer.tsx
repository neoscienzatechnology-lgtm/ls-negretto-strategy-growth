const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-heading text-xl text-foreground">LS Negretto</span>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Consultoria Empresarial & Franchising
            </p>
          </div>
          <div className="flex gap-8 text-muted-foreground font-body text-sm">
            <a href="#solucoes" className="hover:text-gold transition-colors">Soluções</a>
            <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
            <a href="#mentoria" className="hover:text-gold transition-colors">Mentoria</a>
          </div>
          <p className="text-muted-foreground/60 font-body text-xs">
            © {new Date().getFullYear()} LS Negretto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
