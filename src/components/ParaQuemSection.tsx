import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const isFor = [
  "Você já empreende e quer crescer com mais consistência",
  "Precisa de direção clara para os próximos passos",
  "Quer estruturar sua gestão, narrativa e posicionamento",
  "Está sobrecarregada e quer organizar prioridades",
  "Busca crescer com estratégia, não no improviso",
  "Quer tomar decisões com mais segurança e clareza",
];

const isNotFor = [
  "Quem busca fórmula mágica ou resultado sem esforço",
  "Quem não tem disposição para executar e implementar",
  "Quem não tem compromisso com o próprio crescimento",
  "Quem está iniciando o negócio do zero (ainda sem estrutura)",
];

const ParaQuemSection = () => {
  return (
    <section id="para-quem" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="gold-line-center mb-5" />
          <h2 className="text-3xl md:text-4xl font-heading text-foreground leading-tight">
            Para quem é a{" "}
            <span className="text-gradient-gold italic">Elas Mentoring</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* É para */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-champagne rounded-3xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-foreground">É para você que...</h3>
            </div>
            <ul className="space-y-4">
              {isFor.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground/70 font-body text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Não é para */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-foreground/[0.03] rounded-3xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-foreground/50" />
              </div>
              <h3 className="font-heading text-xl text-foreground">Não é para você que...</h3>
            </div>
            <ul className="space-y-4">
              {isNotFor.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-foreground/30 shrink-0 mt-0.5" />
                  <span className="text-foreground/50 font-body text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParaQuemSection;
