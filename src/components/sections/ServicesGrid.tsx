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
          <span className="eyebrow mb-5">Lo que hacemos</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient pb-1">
            Cuatro frentes, una forma de trabajar.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          Crecimiento, plataformas, automatización y estrategia. Cada uno se puede contratar
          por separado o combinarse cuando hace falta una mirada completa.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
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
                  "group relative flex h-full flex-col surface-card p-8 transition-smooth hover:-translate-y-1 hover:border-primary/40",
                  s.highlight && "border-accent/40"
                )}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={cn(
                    "h-12 w-12 rounded-xl flex items-center justify-center transition-smooth",
                    s.highlight
                      ? "bg-gradient-to-br from-accent/30 to-accent/10 text-accent group-hover:glow-accent"
                      : "bg-gradient-to-br from-primary/30 to-primary/10 text-primary-glow group-hover:glow-primary"
                  )}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold mb-3 leading-tight pb-0.5">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.short}</p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.subservices.map((sub) => (
                      <span
                        key={sub}
                        className={cn(
                          "text-[11px] px-2.5 py-1 rounded-full border transition-smooth",
                          s.highlight
                            ? "border-accent/30 bg-accent/5 text-accent/90 group-hover:border-accent/60"
                            : "border-border bg-secondary/40 text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground"
                        )}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-foreground">
                    Conocer más
                    <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
