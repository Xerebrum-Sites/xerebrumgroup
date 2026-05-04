import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export const ServicesGrid = () => (
  <section id="servicios" className="relative py-24 lg:py-32">
    <div className="container-x">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <span className="eyebrow mb-5">Áreas especializadas</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Cuatro disciplinas, una sola ejecución.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          No somos varias agencias unidas. Somos un grupo con equipos especializados que trabajan
          coordinados sobre el mismo objetivo de negocio.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/servicios/${s.slug}`}
                className={cn(
                  "group relative block h-full surface-card p-7 transition-smooth hover:-translate-y-1 hover:border-primary/40",
                  s.highlight && "border-accent/40"
                )}
              >
                {s.highlight && (
                  <span className="absolute top-5 right-5 text-[10px] uppercase tracking-widest text-accent font-medium px-2 py-1 rounded-full border border-accent/40 bg-accent/10">
                    Nuevo
                  </span>
                )}
                <div className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center mb-6 transition-smooth",
                  s.highlight
                    ? "bg-gradient-to-br from-accent/30 to-accent/10 text-accent group-hover:glow-accent"
                    : "bg-gradient-to-br from-primary/30 to-primary/10 text-primary-glow group-hover:glow-primary"
                )}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.short}</p>
                <span className="inline-flex items-center gap-1 text-sm text-foreground">
                  Conocer más
                  <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
