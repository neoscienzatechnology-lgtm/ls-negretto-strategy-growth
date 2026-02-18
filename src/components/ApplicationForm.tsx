import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

const WA_URL = "https://wa.me/5500000000000?text=Olá! Acabei de enviar minha aplicação para a Elas Mentoring.";

const schema = z.object({
  nome: z.string().trim().min(2, "Nome obrigatório").max(100),
  whatsapp: z.string().trim().min(10, "WhatsApp obrigatório").max(20),
  instagram: z.string().trim().max(60).optional(),
  cidadeEstado: z.string().trim().min(2, "Cidade/Estado obrigatório").max(100),
  segmento: z.string().trim().min(2, "Segmento obrigatório").max(100),
  faturamento: z.string().min(1, "Selecione uma faixa"),
  desafio: z.string().trim().min(10, "Descreva seu principal desafio").max(600),
  objetivo90: z.string().trim().min(10, "Descreva seu objetivo").max(600),
});

type FormData = z.infer<typeof schema>;

const faturamentoOpcoes = [
  "Até R$ 5.000/mês",
  "R$ 5.001 a R$ 15.000/mês",
  "R$ 15.001 a R$ 30.000/mês",
  "R$ 30.001 a R$ 60.000/mês",
  "Acima de R$ 60.000/mês",
  "[PREENCHER] — outra faixa",
];

const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    // Track lead event
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  return (
    <section id="aplicacao" className="py-20 lg:py-28 bg-white">
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
            Processo seletivo
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground leading-tight mt-3">
            Formulário de{" "}
            <span className="text-gradient-gold italic">aplicação</span>
          </h2>
          <p className="text-foreground/55 font-body text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Preencha com atenção. Nossa equipe analisará e entrará em contato em até 48h úteis.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-champagne rounded-3xl p-10 border border-border text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3">Aplicação enviada!</h3>
              <p className="text-foreground/60 font-body text-base leading-relaxed mb-7">
                Obrigada por se candidatar à Elas Mentoring. Analisaremos sua aplicação e entraremos em contato em até 48h úteis.
              </p>
              <Button variant="gold" size="lg" asChild>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gradient-champagne rounded-3xl p-8 lg:p-10 border border-border space-y-6"
            >
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="font-body text-sm text-foreground/80">Nome completo *</Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome"
                    {...register("nome")}
                    className="bg-white border-border focus:border-gold rounded-xl"
                  />
                  {errors.nome && <p className="text-destructive text-xs">{errors.nome.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="font-body text-sm text-foreground/80">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    placeholder="(00) 00000-0000"
                    {...register("whatsapp")}
                    className="bg-white border-border focus:border-gold rounded-xl"
                  />
                  {errors.whatsapp && <p className="text-destructive text-xs">{errors.whatsapp.message}</p>}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="instagram" className="font-body text-sm text-foreground/80">Instagram</Label>
                  <Input
                    id="instagram"
                    placeholder="@seu.instagram"
                    {...register("instagram")}
                    className="bg-white border-border focus:border-gold rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cidadeEstado" className="font-body text-sm text-foreground/80">Cidade / Estado *</Label>
                  <Input
                    id="cidadeEstado"
                    placeholder="Ex: São Paulo, SP"
                    {...register("cidadeEstado")}
                    className="bg-white border-border focus:border-gold rounded-xl"
                  />
                  {errors.cidadeEstado && <p className="text-destructive text-xs">{errors.cidadeEstado.message}</p>}
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="segmento" className="font-body text-sm text-foreground/80">Segmento do negócio *</Label>
                  <Input
                    id="segmento"
                    placeholder="Ex: Moda, Saúde, Serviços..."
                    {...register("segmento")}
                    className="bg-white border-border focus:border-gold rounded-xl"
                  />
                  {errors.segmento && <p className="text-destructive text-xs">{errors.segmento.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="faturamento" className="font-body text-sm text-foreground/80">Faturamento mensal *</Label>
                  <select
                    id="faturamento"
                    {...register("faturamento")}
                    className="flex h-10 w-full rounded-xl border border-border bg-white px-3 py-2 text-sm font-body text-foreground/80 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                  >
                    <option value="">Selecione uma faixa</option>
                    {faturamentoOpcoes.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  {errors.faturamento && <p className="text-destructive text-xs">{errors.faturamento.message}</p>}
                </div>
              </div>

              {/* Desafio */}
              <div className="space-y-2">
                <Label htmlFor="desafio" className="font-body text-sm text-foreground/80">
                  Qual seu principal desafio hoje? *
                </Label>
                <Textarea
                  id="desafio"
                  placeholder="Descreva com honestidade o que mais te trava no momento..."
                  rows={3}
                  {...register("desafio")}
                  className="bg-white border-border focus:border-gold rounded-xl resize-none"
                />
                {errors.desafio && <p className="text-destructive text-xs">{errors.desafio.message}</p>}
              </div>

              {/* Objetivo 90 dias */}
              <div className="space-y-2">
                <Label htmlFor="objetivo90" className="font-body text-sm text-foreground/80">
                  Qual seu objetivo nos próximos 90 dias? *
                </Label>
                <Textarea
                  id="objetivo90"
                  placeholder="Seja específica. Qual resultado você quer ver no seu negócio?"
                  rows={3}
                  {...register("objetivo90")}
                  className="bg-white border-border focus:border-gold rounded-xl resize-none"
                />
                {errors.objetivo90 && <p className="text-destructive text-xs">{errors.objetivo90.message}</p>}
              </div>

              <Button
                type="submit"
                variant="gold"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar aplicação"}
              </Button>

              <p className="text-center text-foreground/40 font-body text-xs">
                Suas informações são confidenciais e não serão compartilhadas.
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
