import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { caseStudies } from "@/data/caseStudies";
import { ArrowUpRight } from "lucide-react";
import headerCases from "@/assets/header-cases.jpg";

const Cases = () => (
  <SiteLayout>
    <Seo
      title="Casos de éxito · Xerebrum"
      description="Transformaciones reales con resultados medibles. Conoce cómo empresas en LATAM aceleraron su crecimiento con Xerebrum."
    />
    <PageHeader
      eyebrow="Casos de éxito"
      title={<>Transformaciones que mueven la aguja del negocio.</>}
      description="Cada proyecto se mide contra objetivos de negocio claros. Estos son algunos resultados reales de los últimos 18 meses."
      image={headerCases}
      imageAlt="Profesionales analizando dashboards de crecimiento y KPIs"
    />

    <section className="py-20 space-y-6">
      <div className="container-x grid gap-6">
        {caseStudies.map((c, i) => (
          <Link
            key={c.slug}
            to={`/casos/${c.slug}`}
            className="group surface-card overflow-hidden hover:border-primary/40 transition-smooth grid md:grid-cols-[1.1fr_1fr]"
          >
            <div className={`relative aspect-[4/3] md:aspect-auto overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
              <img src={c.image} alt={c.client} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-smooth" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
                {c.industry} · {c.year}
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-4 group-hover:text-accent-glow transition-smooth">
                {c.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{c.summary}</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-xl font-semibold text-gradient-accent">{m.value}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm">
                Leer caso completo <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <CtaBanner />
  </SiteLayout>
);

export default Cases;
