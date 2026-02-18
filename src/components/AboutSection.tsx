import { motion } from "framer-motion";
import lucianeAbout from "@/assets/luciane-about.jpg";

const stats = [
  { value: "+30", label: "anos de mercado" },
  { value: "100s", label: "negócios apoiados" },
  { value: "15", label: "anos como docente" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-gradient-cream-section">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl"
                style={{ background: "linear-gradient(135deg, hsl(38 55% 70% / 0.3), transparent)" }} />
              <img
                src={lucianeAbout}
                alt="Luciane Segala Negretto – Mentora da Elas Mentoring"
                className="relative rounded-3xl w-full max-w-sm object-cover shadow-xl"
                loading="lazy"
              />
              {/* Credential badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-gold border border-border">
                <p className="font-body text-xs text-foreground/50 uppercase tracking-wider">Especialista em</p>
                <p className="font-heading text-sm text-foreground mt-0.5">Gestão · Franchising · Neurogestão</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-5" />
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase font-semibold">
              Sobre a mentora
            </span>

            <h2 className="text-3xl md:text-4xl font-heading text-foreground leading-tight mt-4 mb-6">
              Sou a Lu{" "}
              <span className="text-gradient-gold italic">— e essa é minha história.</span>
            </h2>

            <div className="space-y-4 font-body text-foreground/60 leading-relaxed text-base">
              <p>
                Casada, mãe da Duda, 47 anos. Tenho{" "}
                <strong className="text-foreground font-semibold">mais de 30 anos no mercado</strong>{" "}
                e uma trajetória que mistura academia, banco, franquia e consultoria.
              </p>
              <p>
                Fui professora universitária por 15 anos, trabalhei no Banco do Brasil, empreendi por 10 anos no universo de franquias e depois passei a{" "}
                <strong className="text-foreground font-semibold">apoiar centenas de unidades e negócios no Brasil</strong>.
              </p>
              <p>
                Fundei a <strong className="text-foreground font-semibold">LS Negretto</strong> e o{" "}
                <strong className="text-foreground font-semibold">Ellas Business</strong> para levar método, clareza e presença humana a cada empreendedora que atendo.
              </p>
              <p>
                Minha atuação é prática, estratégica e próxima — sem discurso motivacional vazio, com resultado real.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              {stats.map((s, i) => (
                <div key={i}>
                  <span className="text-2xl font-heading text-gold font-bold">{s.value}</span>
                  <p className="text-foreground/50 text-sm font-body mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
