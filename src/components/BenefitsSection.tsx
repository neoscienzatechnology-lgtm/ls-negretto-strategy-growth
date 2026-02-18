import { motion } from "framer-motion";
import { Compass, Megaphone, ShieldCheck, Flame, Users2 } from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "Clareza de estratégia e próximos passos",
    desc: "Sair do turbilhão de tarefas urgentes para ver o caminho real do seu negócio com nitidez.",
  },
  {
    icon: Megaphone,
    title: "Posicionamento e comunicação que conecta",
    desc: "Construir uma narrativa autêntica que atrai as pessoas certas e diferencia sua marca.",
  },
  {
    icon: ShieldCheck,
    title: "Decisões com mais segurança",
    desc: "Trocar o 'achismo' por critérios, dados e método para decidir com confiança.",
  },
  {
    icon: Flame,
    title: "Rotina de execução e foco",
    desc: "Criar um ritmo de trabalho sustentável, com prioridades alinhadas ao que realmente importa.",
  },
  {
    icon: Users2,
    title: "Liderança e alinhamento de time",
    desc: "Desenvolver a gestão de pessoas para que seu time execute bem mesmo sem você em tudo.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-cream-section">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="gold-line-center mb-5" />
          <span className="text-gold font-body text-xs tracking-[0.3em] uppercase font-semibold">
            Transformações reais
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground leading-tight mt-3">
            O que você vai{" "}
            <span className="text-gradient-gold italic">conquistar</span>
          </h2>
          <p className="text-foreground/55 font-body text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            A mentoria não entrega teoria — entrega transformação com execução guiada e apoio próximo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`bg-white rounded-3xl p-7 border border-border shadow-sm hover:shadow-gold transition-all duration-300 ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2 leading-snug">{b.title}</h3>
              <p className="text-foreground/55 font-body text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
