import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Nome da Cliente", city: "Cidade, Estado", text: "Depoimento será inserido pela equipe. Resultado conquitado com a mentoria.", result: "Resultado: [PREENCHER]" },
  { name: "Nome da Cliente", city: "Cidade, Estado", text: "Depoimento será inserido pela equipe. Resultado conquitado com a mentoria.", result: "Resultado: [PREENCHER]" },
  { name: "Nome da Cliente", city: "Cidade, Estado", text: "Depoimento será inserido pela equipe. Resultado conquitado com a mentoria.", result: "Resultado: [PREENCHER]" },
  { name: "Nome da Cliente", city: "Cidade, Estado", text: "Depoimento será inserido pela equipe. Resultado conquitado com a mentoria.", result: "Resultado: [PREENCHER]" },
  { name: "Nome da Cliente", city: "Cidade, Estado", text: "Depoimento será inserido pela equipe. Resultado conquitado com a mentoria.", result: "Resultado: [PREENCHER]" },
  { name: "Nome da Cliente", city: "Cidade, Estado", text: "Depoimento será inserido pela equipe. Resultado conquitado com a mentoria.", result: "Resultado: [PREENCHER]" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="gold-line-center mb-5" />
          <span className="text-gold font-body text-xs tracking-[0.3em] uppercase font-semibold">
            Histórias reais
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground leading-tight mt-3">
            O que dizem quem{" "}
            <span className="text-gradient-gold italic">já transformou</span>
          </h2>
          <p className="text-foreground/40 font-body text-sm mt-3 italic">
            * Depoimentos serão inseridos pela equipe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-gradient-champagne rounded-3xl p-7 border border-border relative"
            >
              <Quote className="w-8 h-8 text-gold/20 absolute top-5 right-5" />
              <p className="text-foreground/55 font-body text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-gold font-body text-xs font-semibold uppercase tracking-wider">{t.result}</p>
                <p className="font-heading text-foreground text-sm mt-1">{t.name}</p>
                <p className="text-foreground/40 font-body text-xs">{t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
