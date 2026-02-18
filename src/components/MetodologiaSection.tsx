import { motion } from "framer-motion";
import { Sparkles, Zap, Trophy } from "lucide-react";

const phases = [
  {
    icon: Sparkles,
    number: "01",
    title: "Clareza e Diagnóstico",
    desc: "Entendemos onde você está, o que te trava e qual é o próximo passo real para o seu negócio. Diagnóstico aprofundado de gestão, posicionamento e decisões.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Transformação e Execução",
    desc: "Com o mapa definido, você executa com suporte próximo. Cada semana com foco, prioridade e implementação real — não só planejamento.",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Consolidação e Continuidade",
    desc: "Internalizamos o método para que você continue crescendo com autonomia. Plano de continuidade e rituais de gestão que sustentam o resultado.",
  },
];

const MetodologiaSection = () => {
  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-gradient-dark-section relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(38 55% 65%)" }} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="gold-line-center mb-5" />
          <span className="text-gold font-body text-xs tracking-[0.3em] uppercase font-semibold">
            A jornada da mentoria
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-white leading-tight mt-3">
            Metodologia baseada em{" "}
            <span className="text-gradient-gold italic">neuromarketing e storytelling</span>
          </h2>
          <p className="text-white/50 font-body text-base mt-5 max-w-2xl mx-auto leading-relaxed">
            Histórias criam conexão, atenção e persuasão. Usamos os princípios de espelhamento, dopamina e memória emocional para que as transformações sejam duradouras — não só aprendizados pontuais.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="relative"
            >
              {/* Connector line */}
              {i < phases.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gold/40 to-transparent z-0" />
              )}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-7 text-center hover:bg-white/8 transition-colors">
                <div className="text-gold/30 font-heading text-5xl font-bold mb-4 leading-none">{phase.number}</div>
                <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center mb-4 mx-auto">
                  <phase.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-lg text-white mb-3 leading-snug">{phase.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/30 font-body text-xs mt-10 max-w-xl mx-auto"
        >
          * Os pilares acima representam a essência da jornada na mentoria. Detalhes específicos do programa serão compartilhados na conversa de seleção.
        </motion.p>
      </div>
    </section>
  );
};

export default MetodologiaSection;
