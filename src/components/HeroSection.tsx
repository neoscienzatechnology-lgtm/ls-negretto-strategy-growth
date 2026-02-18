import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock } from "lucide-react";
import lucianeHero from "@/assets/luciane-hero.jpg";

const WA_URL = "https://wa.me/5500000000000?text=Olá! Quero saber mais sobre a Elas Mentoring.";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-champagne overflow-hidden pt-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, hsl(38 55% 75% / 0.4), transparent)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, hsl(38 55% 65% / 0.3), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="mb-5"
            >
              <div className="gold-line mb-4" />
              <span className="text-gold font-body text-xs tracking-[0.3em] uppercase font-semibold">
                Mentoria para empreendedoras
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl lg:text-[52px] font-heading text-foreground leading-[1.12] mb-5"
            >
              Mentoria para empreendedoras que querem crescer com{" "}
              <span className="text-gradient-gold italic">clareza, confiança e estratégia.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-foreground/60 text-lg md:text-xl font-body leading-relaxed mb-8 max-w-xl"
            >
              Apoio de perto para destravar decisões, posicionamento e execução — com método e direção.
            </motion.p>

            {/* Social proof pills */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-4 mb-10"
            >
              <div className="flex items-center gap-2 bg-white/80 border border-border rounded-full px-4 py-2 shadow-sm">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-foreground/70 font-body text-sm font-medium">+30 anos de mercado</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-border rounded-full px-4 py-2 shadow-sm">
                <Users className="w-4 h-4 text-gold" />
                <span className="text-foreground/70 font-body text-sm font-medium">Centenas de negócios apoiados</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-border rounded-full px-4 py-2 shadow-sm">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="text-foreground/70 font-body text-sm font-medium">Método exclusivo</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero-primary" size="xl" asChild>
                <a href="#aplicacao">Quero me candidatar</a>
              </Button>
              <Button variant="hero-secondary" size="xl" asChild>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={5}
              className="mt-4 text-foreground/40 font-body text-sm"
            >
              Vagas limitadas · Processo seletivo
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-3xl"
                style={{ background: "linear-gradient(135deg, hsl(38 55% 70% / 0.4), hsl(38 30% 90% / 0.2))" }} />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full blur-2xl opacity-40"
                style={{ background: "hsl(38 55% 65%)" }} />
              <img
                src={lucianeHero}
                alt="Luciane Segala Negretto – Mentora da Elas Mentoring"
                className="relative rounded-3xl w-full max-w-sm lg:max-w-md object-cover shadow-2xl"
                loading="eager"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-gold border border-border">
                <p className="font-heading text-gold text-lg font-semibold leading-none">+30</p>
                <p className="font-body text-foreground/60 text-xs mt-0.5">anos de mercado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
