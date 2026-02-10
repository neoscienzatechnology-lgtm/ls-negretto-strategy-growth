import { motion } from "framer-motion";
import {
  Briefcase, Network, Building2, FileText,
  Calculator, TrendingUp, BookOpen, GraduationCap, HeadphonesIcon
} from "lucide-react";

const solutions = [
  { icon: Briefcase, title: "Consultoria Empresarial", desc: "Diagnóstico, planejamento e acompanhamento estratégico personalizado." },
  { icon: Network, title: "Formatação de Franquias", desc: "Estruturação completa para transformar seu negócio em franquia." },
  { icon: Building2, title: "Estruturação de Negócios", desc: "Organização de processos, operações e gestão para escalar." },
  { icon: FileText, title: "Planos de Negócios", desc: "Documentação estratégica para captação e tomada de decisão." },
  { icon: Calculator, title: "Ponto de Equilíbrio e ROI", desc: "Análise financeira clara para decisões seguras." },
  { icon: TrendingUp, title: "Análise de Investimentos", desc: "Viabilidade econômica e avaliação de oportunidades." },
  { icon: BookOpen, title: "Elaboração de Manuais", desc: "Padronização operacional para redes e franquias." },
  { icon: GraduationCap, title: "Treinamento de Lideranças", desc: "Desenvolvimento de líderes e equipes de alta performance." },
  { icon: HeadphonesIcon, title: "Suporte ao Franqueado", desc: "Acompanhamento contínuo para resultados consistentes." },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-24 lg:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary-foreground leading-tight mb-4">
            Soluções que geram{" "}
            <span className="text-gradient-gold italic">resultados reais</span>
          </h2>
          <p className="text-primary-foreground/60 font-body text-lg max-w-2xl mx-auto">
            Método, clareza e sustentabilidade para cada etapa do crescimento do seu negócio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group p-6 rounded-xl border border-primary-foreground/10 hover:border-gold/30 bg-primary-foreground/5 hover:bg-primary-foreground/8 transition-all duration-300"
            >
              <item.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-heading text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-primary-foreground/50 font-body text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
