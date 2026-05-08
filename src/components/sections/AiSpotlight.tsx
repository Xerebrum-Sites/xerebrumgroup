import aiOrb from "@/assets/ai-orb.jpg";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { CtaButton } from "../CtaButton";
import { MotionLayer } from "../MotionLayer";

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
      <MotionLayer variant="dots" />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="eyebrow mb-5">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Servicio destacado · Nuevo
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="text-gradient">Liberá a tu equipo de</span>{" "}
            <span className="text-gradient-accent">tareas repetitivas</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Automatizamos lo operativo para que tu gente se enfoque en lo que mueve el negocio.
            Agentes conversacionales, copilotos internos y procesamiento inteligente de documentos,
            integrados de forma segura sobre tu operación actual.
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

        {/* Real photo — person freed from repetitive tasks, focused on what matters */}
        <motion.div
          style={{ y: yImg }}
          className="relative aspect-square max-w-xl mx-auto w-full will-change-transform"
        >
          <div className="absolute -inset-10 rounded-[2rem] bg-primary/25 blur-[110px] animate-pulse-glow" aria-hidden />
          <div className="absolute -inset-6 rounded-[2rem] bg-accent/15 blur-[80px] animate-float-slow" aria-hidden />
          <div className="relative rounded-[2rem] overflow-hidden border border-border/40 shadow-elegant animate-float">
            <img
              src={aiOrb}
              alt="Profesional argentina enfocada en trabajo estratégico — Xerebrum IA"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" aria-hidden />
            <div className="absolute inset-0 stream-dots-v opacity-20 mix-blend-screen" aria-hidden />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
