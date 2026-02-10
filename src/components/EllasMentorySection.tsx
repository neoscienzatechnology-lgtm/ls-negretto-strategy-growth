import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Target, TrendingUp, Clock, Users, Sparkles } from "lucide-react";
import lucianeMentory from "@/assets/luciane-mentory.jpg";
import ellasLogo from "@/assets/ellas-business-logo.png";

const pillars = [
  { icon: Brain, text: "Psicodinâmica aplicada aos negócios" },
  { icon: Target, text: "Decisões mais assertivas e conscientes" },
  { icon: TrendingUp, text: "Vendas com consistência e sustentabilidade" },
  { icon: Sparkles, text: "Integra mente, estratégia e performance" },
];

const EllasMentorySection = () => {
  return (
    <section id="mentoria" className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={ellasLogo} alt="Ellas Business" className="h-12 mb-6 brightness-0 invert opacity-80" />
            <div className="gold-line mb-6" />

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary-foreground leading-tight mb-4">
              Ellas <span className="text-gradient-gold italic">Mentory</span>
            </h2>
            <p className="text-xl font-heading italic text-gold/80 mb-6">
              Psicodinâmica que Vende e Sustenta Resultados
            </p>

            <p className="text-primary-foreground/60 font-body text-base leading-relaxed mb-8">
              O método que integra mente, estratégia e performance para empresárias reais que desejam dominar suas decisões e multiplicar seus resultados.
            </p>

            <div className="space-y-4 mb-8">
              {pillars.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-primary-foreground/70 font-body">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="flex gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                <span className="text-primary-foreground/80 font-body text-sm font-medium">15h de imersão</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-primary-foreground/80 font-body text-sm font-medium">Encontros presenciais</span>
              </div>
            </div>

            <Button variant="gold" size="xl" asChild>
              <a href="https://wa.me/5500000000000?text=Olá! Quero conhecer a mentoria Ellas Mentory." target="_blank" rel="noopener noreferrer">
                Quero conhecer a mentoria
              </a>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 rounded-2xl blur-2xl" />
              <img
                src={lucianeMentory}
                alt="Luciane Segala Negretto - Ellas Mentory"
                className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EllasMentorySection;
