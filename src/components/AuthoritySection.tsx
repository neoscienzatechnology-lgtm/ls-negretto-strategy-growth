import { motion } from "framer-motion";

const brands = [
  "Magrass Franchising",
  "Rede Lypedepyl",
  "Young.Me Brasil",
  "Sorriso & Vida",
  "BOV Pilates",
  "Fast Escova",
  "Top Pilates",
  "Rede Sorriso e Vida",
];

const AuthoritySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground leading-tight mb-4">
            Marcas que confiam no{" "}
            <span className="italic text-gold">nosso trabalho</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Resultados construídos ao lado de redes consolidadas e em expansão.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center justify-center p-6 rounded-xl border border-border bg-card hover:border-gold/30 transition-colors min-h-[80px]"
            >
              <span className="font-body text-sm font-medium text-foreground/70 text-center">{brand}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
