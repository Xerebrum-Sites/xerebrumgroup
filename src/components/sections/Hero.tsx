import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { CtaButton } from "../CtaButton";

export const Hero = () => (
  <section className="relative overflow-hidden bg-hero">
    <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
    <div className="absolute inset-0 bg-mesh opacity-80" aria-hidden />
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/20 blur-[120px]" aria-hidden />

    <div className="container-x relative pt-28 pb-24 lg:pt-36 lg:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl"
      >
        <div className="eyebrow mb-6">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Grupo de marketing y transformación digital
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
          <span className="text-gradient">Diseñamos el futuro digital</span>
          <br />
          de empresas que <span className="text-gradient-accent">no se conforman</span>.
        </h1>

        <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Estrategia, desarrollo, consultoría 360 e inteligencia artificial bajo un mismo grupo.
          Equipos especializados que ejecutan sin fricción para entregar resultados medibles.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <CtaButton asChild variant="primary" size="lg">
            <Link to="/contacto">Iniciar un proyecto <ArrowRight className="h-4 w-4" /></Link>
          </CtaButton>
          <CtaButton asChild variant="outline" size="lg">
            <Link to="/casos">Ver casos de éxito</Link>
          </CtaButton>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
          {[
            { k: "+120", v: "Proyectos entregados" },
            { k: "12", v: "Países atendidos" },
            { k: "94%", v: "Retención de clientes" },
            { k: "6.2x", v: "ROI promedio" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-accent">{s.k}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
