import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Seo } from "@/components/Seo";
import { CtaButton } from "@/components/CtaButton";
import { getCase, caseStudies } from "@/data/caseStudies";
import { getService } from "@/data/services";

const CaseDetail = () => {
  const { slug } = useParams();
  const c = getCase(slug || "");
  if (!c) return <Navigate to="/casos" replace />;
  const others = caseStudies.filter((x) => x.slug !== c.slug).slice(0, 2);

  return (
    <SiteLayout>
      <Seo title={`${c.client} · Caso de éxito · Xerebrum`} description={c.summary} />
      <section className="relative py-20 lg:py-28 bg-hero overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden />
        <div className="container-x relative max-w-4xl">
          <Link to="/casos" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-smooth">
            ← Casos de éxito
          </Link>
          <div className="mt-6 text-[11px] uppercase tracking-widest text-accent">
            {c.industry} · {c.year} · {c.duration}
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
            {c.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">{c.summary}</p>
        </div>
      </section>

      <section className="container-x">
        <div className="surface-card overflow-hidden -mt-10 relative aspect-[16/9]">
          <img src={c.image} alt={c.client} className="h-full w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-4 md:grid-cols-3">
          {c.metrics.map((m) => (
            <div key={m.label} className="surface-card p-8 text-center">
              <div className="font-display text-4xl font-semibold text-gradient-accent">{m.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow mb-4">El reto</span>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">{c.challenge}</p>
          </div>
          <div>
            <span className="eyebrow mb-4">Nuestra solución</span>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">{c.solution}</p>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="container-x">
          <span className="eyebrow mb-4">Áreas involucradas</span>
          <div className="mt-5 grid sm:grid-cols-3 gap-4">
            {c.services.map((sl) => {
              const s = getService(sl);
              if (!s) return null;
              const Icon = s.icon;
              return (
                <Link key={sl} to={`/servicios/${sl}`} className="surface-card p-6 hover:border-primary/40 transition-smooth">
                  <Icon className={`h-6 w-6 mb-4 ${s.highlight ? "text-accent" : "text-primary-glow"}`} />
                  <div className="font-display text-lg font-semibold">{s.name}</div>
                  <p className="text-sm text-muted-foreground mt-2">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-x">
          <div className="surface-card p-10 lg:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-gradient max-w-2xl mx-auto">
              ¿Tu empresa enfrenta un reto similar?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Conversemos cómo podríamos abordarlo y qué resultados esperar.
            </p>
            <CtaButton asChild variant="primary" size="lg" className="mt-8">
              <Link to="/contacto">Iniciar conversación <ArrowRight className="h-4 w-4" /></Link>
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold mb-8">Otros casos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((o) => (
              <Link key={o.slug} to={`/casos/${o.slug}`} className="group surface-card overflow-hidden hover:border-primary/40 transition-smooth">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={o.image} alt={o.client} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
                </div>
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">{o.industry}</div>
                  <h3 className="font-display text-lg font-semibold">{o.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default CaseDetail;
