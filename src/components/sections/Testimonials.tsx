import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { MotionLayer } from "../MotionLayer";

const testimonials = [
  {
    quote:
      "Entendieron nuestro negocio antes de proponer nada. El plan que armaron lo pudimos ejecutar sin sentirnos abrumados.",
    name: "Lucía Fernández",
    role: "Directora de Operaciones",
    company: "Grupo Vendalia",
  },
  {
    quote:
      "Automatizamos procesos que nos llevaban días enteros. El equipo se dedica a lo que realmente importa y los errores bajaron casi a cero.",
    name: "Martín Casas",
    role: "Gerente General",
    company: "Distribuidora Norte",
  },
  {
    quote:
      "Trabajan como una extensión nuestra. Nos dan claridad cuando hay decisiones difíciles y siempre llegan con propuestas concretas.",
    name: "Carolina Méndez",
    role: "Head of Marketing",
    company: "Eolika",
  },
  {
    quote:
      "Rediseñaron nuestro sistema interno y la diferencia se notó desde el primer mes. Cero promesas exageradas, mucha ejecución.",
    name: "Diego Salinas",
    role: "CTO",
    company: "Lumera Studio",
  },
  {
    quote:
      "Lo que más valoramos es la honestidad. Nos dijeron qué tenía sentido hacer y qué no, antes de cobrarnos un peso de más.",
    name: "Sofía Aguirre",
    role: "Fundadora",
    company: "Casa Tinta",
  },
  {
    quote:
      "Es raro encontrar un equipo que combine criterio de negocio y capacidad técnica. Para nosotros se volvieron un partner clave.",
    name: "Ramiro Ledesma",
    role: "Director Comercial",
    company: "Andino Logística",
  },
];

export const Testimonials = () => (
  <section className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
    <MotionLayer variant="lines" />
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/10 blur-[140px]" aria-hidden />

    <div className="container-x relative">
      <div className="max-w-2xl mb-14">
        <span className="eyebrow mb-5">Lo que dicen quienes trabajan con nosotros</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient pb-1">
          Relaciones de largo plazo, no proyectos sueltos.
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Cada empresa con la que trabajamos tiene un contexto distinto. Estas son algunas
          palabras de quienes ya nos eligieron para acompañarlos.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="surface-card p-7 flex flex-col gap-5 hover:border-primary/40 transition-smooth"
          >
            <Quote className="h-5 w-5 text-primary/70 shrink-0" />
            <blockquote className="text-sm md:text-[15px] leading-relaxed text-foreground/90 flex-1">
              "{t.quote}"
            </blockquote>
            <figcaption className="pt-4 border-t border-border/60">
              <div className="font-medium text-sm text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {t.role} · <span className="text-foreground/80">{t.company}</span>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
