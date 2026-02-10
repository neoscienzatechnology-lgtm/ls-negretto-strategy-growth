import { motion } from "framer-motion";
import lucianeAbout from "@/assets/luciane-about.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gold/10 rounded-2xl blur-xl" />
              <img
                src={lucianeAbout}
                alt="Luciane Segala Negretto - Fundadora da LS Negretto"
                className="relative rounded-2xl w-full max-w-md object-cover shadow-xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-6" />
            <span className="text-gold font-body text-sm tracking-[0.25em] uppercase font-medium">
              Sobre a fundadora
            </span>

            <h2 className="text-3xl md:text-4xl font-heading text-foreground leading-tight mt-4 mb-6">
              Luciane Segala{" "}
              <span className="italic text-gold">Negretto</span>
            </h2>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Com mais de <strong className="text-foreground">23 anos de experiência</strong> em gestão de negócios e franquias, Luciane é especialista em gestão, franchising e neurogestão.
              </p>
              <p>
                Sua trajetória inclui atuação como franqueada, gestora, diretora de treinamento, consultora empresarial e professora universitária por 15 anos.
              </p>
              <p>
                Fundadora da <strong className="text-foreground">LS Negretto</strong> e do <strong className="text-foreground">Ellas Business</strong> — clube de negócios que reúne mais de 250 empresárias ativas — Luciane une prática, estratégia e sensibilidade humana em cada projeto.
              </p>
            </div>

            <div className="mt-8 flex gap-8">
              <div>
                <span className="text-2xl font-heading text-gold font-bold">23+</span>
                <p className="text-muted-foreground text-sm font-body">anos de experiência</p>
              </div>
              <div>
                <span className="text-2xl font-heading text-gold font-bold">250+</span>
                <p className="text-muted-foreground text-sm font-body">empresárias no Ellas</p>
              </div>
              <div>
                <span className="text-2xl font-heading text-gold font-bold">15</span>
                <p className="text-muted-foreground text-sm font-body">anos como docente</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
