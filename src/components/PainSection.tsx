import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, BarChart3, Users, Target } from "lucide-react";

const painPoints = [
  { icon: TrendingDown, text: "Crescimento desorganizado que consome energia e gera retrabalho" },
  { icon: AlertTriangle, text: "Falta de estrutura para escalar o negócio com segurança" },
  { icon: BarChart3, text: "Decisões sem clareza financeira que comprometem resultados" },
  { icon: Users, text: "Franquias sem padronização e com operação inconsistente" },
  { icon: Target, text: "Resultados que oscilam sem previsibilidade" },
];

const PainSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground leading-tight mb-6">
            Você reconhece algum desses <span className="italic text-gold">sinais?</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          {painPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-gold/30 transition-colors"
            >
              <item.icon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <p className="text-foreground/80 font-body text-base leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-heading italic text-foreground max-w-2xl mx-auto">
            "Crescer não é só vender mais.{" "}
            <span className="text-gold">É sustentar o crescimento.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSection;
