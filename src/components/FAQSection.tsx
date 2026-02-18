import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Para quem é a Elas Mentoring?",
    a: "Para empreendedoras e empresárias que já têm negócio rodando e querem crescer com mais estratégia, clareza e estrutura. Se você está sobrecarregada, tomando decisões no achismo ou sem direção clara para os próximos passos, é para você.",
  },
  {
    q: "Preciso ter o negócio rodando para participar?",
    a: "Sim. A mentoria é voltada para quem já empreende e quer evoluir. Para quem está começando do zero, há outros formatos mais adequados.",
  },
  {
    q: "Como é o processo de seleção?",
    a: "Você preenche o formulário de aplicação abaixo. Em seguida, nossa equipe avalia e entra em contato para uma conversa de alinhamento. A seleção garante que a mentoria seja realmente adequada ao seu momento.",
  },
  {
    q: "Como são os encontros?",
    a: "Formato, frequência e duração dos encontros serão detalhados na conversa de seleção. [PREENCHER]",
  },
  {
    q: "Tem suporte entre os encontros?",
    a: "[PREENCHER] — Detalhes do suporte entre encontros serão apresentados na conversa.",
  },
  {
    q: "O que preciso para aproveitar ao máximo?",
    a: "Compromisso com a execução, abertura para novos olhares e disposição para implementar. A mentoria entrega direção — você precisa caminhar.",
  },
  {
    q: "Há garantia ou política de reembolso?",
    a: "[PREENCHER] — Nossa política será apresentada na conversa de alinhamento.",
  },
  {
    q: "Como faço para entrar na mentoria?",
    a: "Preencha o formulário de aplicação nesta página. Nossa equipe entrará em contato em até 48h úteis para os próximos passos.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-gradient-cream-section">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="gold-line-center mb-5" />
          <h2 className="text-3xl md:text-4xl font-heading text-foreground leading-tight">
            Perguntas{" "}
            <span className="text-gradient-gold italic">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-border rounded-2xl px-6 data-[state=open]:shadow-gold"
              >
                <AccordionTrigger className="font-heading text-base text-foreground text-left hover:no-underline hover:text-gold py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-foreground/60 text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
