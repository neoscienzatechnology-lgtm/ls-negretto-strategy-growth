import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-dark-section relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(38 55% 65%) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(38 55% 65%)" }} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="gold-line-center mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white leading-tight mb-5">
            Pronta para ter{" "}
            <span className="text-gradient-gold italic">direção</span>{" "}
            e crescer com estratégia?
          </h2>
          <p className="text-white/50 font-body text-lg mb-10 leading-relaxed">
            Vagas limitadas e processo seletivo. Candidate-se agora e dê o primeiro passo com clareza.
          </p>
          <Button variant="hero-primary" size="xl" asChild>
            <a href="#aplicacao">Quero me candidatar</a>
          </Button>
          <p className="mt-4 text-white/30 font-body text-sm">
            Preencha o formulário abaixo · Sem compromisso
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
