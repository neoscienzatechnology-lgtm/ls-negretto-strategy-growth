import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import lucianeHero from "@/assets/luciane-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma conversa estratégica.";

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-dark overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(43 72% 52%) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container mx-auto px-6 lg:px-16 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="mb-6"
            >
              <div className="gold-line mb-6" />
              <span className="text-gold font-body text-sm tracking-[0.25em] uppercase font-medium">
                Consultoria Empresarial & Franchising
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight mb-6"
            >
              Estratégia, gestão e pessoas para marcas que querem{" "}
              <span className="text-gradient-gold italic">crescer com solidez.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-foreground/60 text-lg md:text-xl font-body leading-relaxed mb-8 max-w-xl"
            >
              Consultoria estratégica para empresários, franqueadoras e líderes que buscam crescimento sustentável, estruturado e lucrativo.
            </motion.p>

            {/* Social proof */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex gap-10 mb-10"
            >
              <div>
                <span className="text-3xl md:text-4xl font-heading text-gold font-bold">+7.000</span>
                <p className="text-foreground/40 text-sm font-body mt-1">horas de consultoria</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-heading text-gold font-bold">+400</span>
                <p className="text-foreground/40 text-sm font-body mt-1">empresas impactadas</p>
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
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Agendar conversa estratégica
                </a>
              </Button>
              <Button variant="hero-secondary" size="xl" asChild>
                <a href="#solucoes">Conhecer soluções</a>
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 rounded-2xl blur-2xl" />
              <img
                src={lucianeHero}
                alt="Luciane Segala Negretto - Consultora Empresarial e Especialista em Franchising"
                className="relative rounded-2xl w-full max-w-md lg:max-w-lg object-cover shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
