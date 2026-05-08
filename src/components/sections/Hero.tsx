import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { CtaButton } from "../CtaButton";
import { MotionLayer } from "../MotionLayer";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yOrb1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background min-h-[95vh] flex items-center">
      {/* Parallax human background, masked to fade into black */}
      <motion.div
        style={{ y: yBg, scale: scaleBg, backgroundImage: `url(${heroBg})` }}
        className="absolute inset-0 -top-24 -bottom-24 bg-cover bg-right will-change-transform mask-fade-edges"
        aria-hidden
      />
      {/* Vignette + readability layers (left side darker for headline) */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" aria-hidden />
      <div className="absolute inset-0 bg-mesh opacity-50" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />
      <MotionLayer variant="mixed" />

      {/* Floating ambient orbs (parallax + drift) */}
      <motion.div
        style={{ y: yOrb1 }}
        className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[140px] animate-drift will-change-transform"
        aria-hidden
      />
      <motion.div
        style={{ y: yOrb2 }}
        className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[130px] animate-float-slow will-change-transform"
        aria-hidden
      />

      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="container-x relative pt-28 pb-24 lg:pt-36 lg:pb-32 will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="eyebrow mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Grupo de marketing y transformación digital
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-gradient inline-block"
            >
              Diseñamos el futuro digital
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="inline-block"
            >
              de empresas que <span className="text-gradient-accent">no se conforman</span>.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Estrategia, desarrollo, consultoría 360 e inteligencia artificial bajo un mismo grupo.
            Equipos especializados que ejecutan sin fricción para entregar resultados medibles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <CtaButton asChild variant="primary" size="lg">
              <Link to="/contacto">Iniciar un proyecto <ArrowRight className="h-4 w-4" /></Link>
            </CtaButton>
            <CtaButton asChild variant="outline" size="lg">
              <Link to="/casos">Ver casos de éxito</Link>
            </CtaButton>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
            {[
              { k: "+120", v: "Proyectos entregados" },
              { k: "12", v: "Países atendidos" },
              { k: "94%", v: "Retención de clientes" },
              { k: "6.2x", v: "ROI promedio" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
              >
                <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-accent">{s.k}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom seamless fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" aria-hidden />
    </section>
  );
};
