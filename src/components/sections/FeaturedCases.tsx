import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { CtaButton } from "../CtaButton";
import sectionBg from "@/assets/section-bg-data.jpg";

export const FeaturedCases = () => {
  const featured = caseStudies.slice(0, 3);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Parallax conceptual background — seamlessly blended */}
      <motion.div
        style={{ y: yBg, backgroundImage: `url(${sectionBg})` }}
        className="absolute inset-0 -top-20 bg-cover bg-center opacity-25 will-change-transform"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" aria-hidden />

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">Casos de éxito</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
              Resultados medibles, no promesas.
            </h2>
          </div>
          <CtaButton asChild variant="outline" size="md">
            <Link to="/casos">Ver todos los casos <ArrowUpRight className="h-4 w-4" /></Link>
          </CtaButton>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group surface-card overflow-hidden hover:-translate-y-1 hover:border-primary/40 transition-smooth"
            >
              <Link to={`/casos/${c.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.client} — ${c.title}`}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-muted-foreground">
                    {c.industry}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold leading-tight mb-3 group-hover:text-accent-glow transition-smooth">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.summary}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-border">
                    {c.metrics.slice(0, 3).map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-lg font-semibold text-gradient-accent">{m.value}</div>
                        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
