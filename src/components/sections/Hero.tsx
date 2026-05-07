import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { CtaButton } from "../CtaButton";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background min-h-[92vh] flex items-center">
      {/* Parallax background image */}
      <motion.div
        style={{ y: yBg, backgroundImage: `url(${heroBg})` }}
        className="absolute inset-0 -top-20 bg-cover bg-center will-change-transform"
        aria-hidden
      />
      {/* Multi-layer fade for seamless blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" aria-hidden />
      <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <motion.div
        style={{ opacity }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/25 blur-[120px]"
        aria-hidden
      />

      <motion.div style={{ y: yContent }} className="container-x relative pt-28 pb-24 lg:pt-36 lg:pb-32 will-change-transform">
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
      </motion.div>

      {/* Bottom seamless fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" aria-hidden />
    </section>
  );
};
