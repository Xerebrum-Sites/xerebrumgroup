import aiOrb from "@/assets/ai-orb.jpg";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { CtaButton } from "../CtaButton";

const points = [
  "Pilotos en producción en 4–8 semanas",
  "Integración con tu stack existente (CRM, ERP, datos propios)",
  "Guardarraíles de seguridad, evaluaciones y trazabilidad",
  "Modelos seleccionados según costo, latencia y precisión",
];

export const AiSpotlight = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Seamless ambient glow */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[140px]" aria-hidden />
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" aria-hidden />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="eyebrow mb-5">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Servicio destacado · Nuevo
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="text-gradient">Inteligencia que</span>{" "}
            <span className="text-gradient-accent">trabaja por vos</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Convertimos procesos repetitivos en operaciones inteligentes. Agentes conversacionales,
            copilotos internos y automatización de documentos, integrados de forma segura sobre tu
            operación actual.
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

        {/* Conceptual brain visual — seamlessly blended into background */}
        <motion.div
          style={{ y: yImg }}
          className="relative aspect-square max-w-xl mx-auto w-full will-change-transform"
        >
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" aria-hidden />
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-[90px] animate-float-slow" aria-hidden />
          <img
            src={aiOrb}
            alt="Mano humana conectando con inteligencia — Xerebrum IA"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative w-full h-full object-cover mask-fade-radial mix-blend-screen animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
};
