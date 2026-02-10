import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappUrl = "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma conversa estratégica.";

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="gold-line mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground leading-tight mb-6">
            Crescer é uma decisão.{" "}
            <br />
            <span className="italic text-gold">Crescer com estratégia é uma escolha.</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto">
            Agende uma conversa estratégica e descubra como estruturar o crescimento do seu negócio com clareza, método e resultados reais.
          </p>
          <Button variant="hero-primary" size="xl" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar conversa estratégica agora
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
