import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import sectionBg from "@/assets/section-bg-data.jpg";

const items = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos tu negocio, equipos y datos. Identificamos las palancas de mayor impacto." },
  { n: "02", title: "Diseño", desc: "Diseñamos la solución integrando estrategia, marca, tecnología y métricas." },
  { n: "03", title: "Construcción", desc: "Equipos especializados ejecutan en sprints cortos con entregables visibles cada semana." },
  { n: "04", title: "Operación y mejora", desc: "Operamos, medimos y optimizamos. La transformación es un proceso, no un proyecto." },
];

export const ProcessSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <motion.div
        style={{ y: yBg, scale, backgroundImage: `url(${sectionBg})` }}
        className="absolute inset-0 -top-20 -bottom-20 bg-cover bg-center opacity-20 will-change-transform mask-fade-edges"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" aria-hidden />

      <div className="container-x relative">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow mb-5">Cómo trabajamos</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Un método claro, sin sorpresas.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i, idx) => (
            <motion.div
              key={i.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="surface-card p-7 hover:border-primary/40 hover:-translate-y-1 transition-smooth"
            >
              <div className="font-display text-sm text-accent mb-4">{i.n}</div>
              <h3 className="font-display text-xl font-semibold mb-3">{i.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
