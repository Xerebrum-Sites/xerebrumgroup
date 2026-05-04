import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Seo } from "@/components/Seo";
import { CtaButton } from "@/components/CtaButton";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getService, services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug || "");
  if (!service) return <Navigate to="/servicios" replace />;
  const Icon = service.icon;
  const related = caseStudies.filter((c) => c.services.includes(service.slug)).slice(0, 3);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <SiteLayout>
      <Seo
        title={`${service.name} · Xerebrum`}
        description={service.short}
      />
      <section className="relative py-20 lg:py-28 bg-hero overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden />
        <div className="container-x relative grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <Link to="/servicios" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-smooth">
              ← Servicios
            </Link>
            <div className={`mt-6 h-14 w-14 rounded-xl flex items-center justify-center ${
              service.highlight
                ? "bg-gradient-to-br from-accent/30 to-accent/10 text-accent"
                : "bg-gradient-to-br from-primary/30 to-primary/10 text-primary-glow"
            }`}>
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl font-semibold tracking-tight text-gradient">
              {service.name}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{service.long}</p>
            <div className="mt-8 flex gap-3">
              <CtaButton asChild variant={service.highlight ? "accent" : "primary"} size="lg">
                <Link to={`/contacto?servicio=${service.slug}`}>Hablemos de tu proyecto <ArrowRight className="h-4 w-4" /></Link>
              </CtaButton>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 self-end">
            {service.outcomes.map((o) => (
              <div key={o.label} className="surface-card p-5 text-center">
                <div className="font-display text-2xl font-semibold text-gradient-accent">{o.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-2">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div>
            <span className="eyebrow mb-4">Capacidades</span>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Qué incluye</h2>
          </div>
          <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {service.capabilities.map((c) => (
              <li key={c} className="flex gap-3 surface-card p-5">
                <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${service.highlight ? "text-accent" : "text-primary-glow"}`} />
                <span className="text-sm">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div className="surface-card p-8">
            <span className="eyebrow mb-4">Cliente ideal</span>
            <p className="mt-4 text-lg leading-relaxed">{service.idealClient}</p>
          </div>
          <div className="surface-card p-8">
            <span className="eyebrow mb-4">Lo que entregamos</span>
            <ul className="mt-4 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-sm">
                  <span className="text-accent">→</span>
                  <span className="text-foreground/90">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="container-x">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-gradient">
                Trabajo entregado
              </h2>
              <Link to="/casos" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                Ver todos <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((c) => (
                <Link key={c.slug} to={`/casos/${c.slug}`} className="group surface-card overflow-hidden hover:-translate-y-1 hover:border-primary/40 transition-smooth">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={c.image} alt={c.client} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">{c.industry}</div>
                    <h3 className="font-display text-base font-semibold leading-snug">{c.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 border-t border-border">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold mb-8">Otras áreas del grupo</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((o) => {
              const OIcon = o.icon;
              return (
                <Link key={o.slug} to={`/servicios/${o.slug}`} className="surface-card p-6 hover:border-primary/40 transition-smooth">
                  <OIcon className={`h-6 w-6 mb-4 ${o.highlight ? "text-accent" : "text-primary-glow"}`} />
                  <div className="font-display text-lg font-semibold">{o.name}</div>
                  <p className="text-sm text-muted-foreground mt-2">{o.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
};

export default ServiceDetail;
