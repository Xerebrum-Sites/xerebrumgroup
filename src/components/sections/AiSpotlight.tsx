import aiOrb from "@/assets/ai-orb.jpg";
import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles } from "lucide-react";
import { CtaButton } from "../CtaButton";

const points = [
  "Pilotos en producción en 4–8 semanas",
  "Integración con tu stack existente (CRM, ERP, datos propios)",
  "Guardarraíles de seguridad, evaluaciones y trazabilidad",
  "Modelos seleccionados según costo, latencia y precisión",
];

export const AiSpotlight = () => (
  <section className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
    <div className="absolute top-1/2 -translate-y-1/2 -left-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" aria-hidden />
    <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <div className="eyebrow mb-5">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Servicio destacado · Nuevo
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          <span className="text-gradient">Automatización con</span>{" "}
          <span className="text-gradient-accent">Inteligencia Artificial</span>
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

      <div className="relative aspect-square max-w-md mx-auto w-full">
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
        <img
          src={aiOrb}
          alt="Representación visual de inteligencia artificial Xerebrum"
          loading="lazy"
          width={1024}
          height={1024}
          className="relative w-full h-full object-contain"
        />
      </div>
    </div>
  </section>
);
