import aiOrb from "@/assets/ai-orb.jpg";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { CtaButton } from "../CtaButton";
import { MotionLayer } from "../MotionLayer";

const points = [
  "Resultados visibles en 4 a 8 semanas",
  "Se integra con los sistemas que ya usás",
  "Procesos seguros, ordenados y trazables",
  "Tu equipo deja de hacer tareas repetitivas",
];

export const AiSpotlight = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background photo, fully blended into the page */}
      <motion.div
        style={{ y: yBg, scale: scaleBg, backgroundImage: `url(${aiOrb})` }}
        className="absolute inset-0 -top-24 -bottom-24 bg-cover bg-center will-change-transform mask-fade-edges"
        aria-hidden
      />
      {/* Readability layers — left side darker */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" aria-hidden />
      <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[140px]" aria-hidden />
      <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" aria-hidden />
      <MotionLayer variant="dots" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <div className="eyebrow mb-5">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Automatización & IA aplicada
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] pb-1">
            <span className="text-gradient">Menos tareas repetitivas,</span>{" "}
            <span className="text-gradient-accent">más tiempo para lo importante</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Identificamos lo que se puede resolver solo y lo automatizamos con criterio.
            Agentes, integraciones y flujos que ahorran horas, reducen errores y dejan
            al equipo libre para decidir y crecer.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <CtaButton asChild variant="accent" size="lg">
              <Link to="/servicios/automatizacion-ia">Explorar capacidades</Link>
            </CtaButton>
            <CtaButton asChild variant="outline" size="lg">
              <Link to="/contacto?servicio=ia">Agendar diagnóstico</Link>
            </CtaButton>
          </div>
        </div>
      </div>

      {/* Bottom seamless fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" aria-hidden />
    </section>
  );
};
