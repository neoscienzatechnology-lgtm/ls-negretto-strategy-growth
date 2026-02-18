import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, Monitor, MessageCircle, BookOpen, Gift } from "lucide-react";

const WA_URL = "https://wa.me/5500000000000?text=Olá! Quero detalhes sobre a Elas Mentoring.";

const details = [
  { icon: Monitor, label: "Formato", value: "[PREENCHER] — online / presencial / híbrido" },
  { icon: CalendarDays, label: "Duração", value: "[PREENCHER]" },
  { icon: CalendarDays, label: "Encontros", value: "[PREENCHER]" },
  { icon: MessageCircle, label: "Suporte entre encontros", value: "[PREENCHER]" },
  { icon: BookOpen, label: "Materiais", value: "[PREENCHER]" },
  { icon: Gift, label: "Bônus", value: "[PREENCHER]" },
];

const ComoFuncionaSection = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="gold-line-center mb-5" />
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase font-semibold">
              Estrutura prática
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground leading-tight mt-3">
              Como funciona a{" "}
              <span className="text-gradient-gold italic">mentoria</span>
            </h2>
            <p className="text-foreground/55 font-body text-base mt-4 leading-relaxed">
              Todos os detalhes práticos do programa serão apresentados na conversa de seleção. Abaixo, o que você pode esperar:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {details.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-4 bg-gradient-champagne rounded-2xl p-5 border border-border"
              >
                <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <d.icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-foreground/50 font-body text-xs uppercase tracking-wider mb-1">{d.label}</p>
                  <p className={`font-body text-sm font-medium ${d.value.includes("[PREENCHER]") ? "text-gold/70 italic" : "text-foreground"}`}>
                    {d.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Button variant="gold-outline" size="lg" asChild>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                Quero detalhes no WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
