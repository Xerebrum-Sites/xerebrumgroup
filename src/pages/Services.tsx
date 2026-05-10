import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/data/services";
import headerServices from "@/assets/header-services.jpg";

const ServicesPage = () => (
  <SiteLayout>
    <Seo
      title="Servicios · Xerebrum"
      description="Crecimiento digital, plataformas, automatización con IA y estrategia. Cuatro frentes para resolver problemas reales del negocio."
    />
    <PageHeader
      eyebrow="Servicios"
      title={<>Cuatro frentes,<br />una forma de trabajar.</>}
      description="Crecimiento, plataformas digitales, automatización con IA y estrategia. Cada uno se puede contratar por separado o combinarse cuando el proyecto lo pide."
      image={headerServices}
      imageAlt="Equipo argentino colaborando con dashboards y diagramas de flujo"
    />

    <section className="py-20 lg:py-28">
      <div className="container-x grid gap-6 md:grid-cols-2">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.slug}
              to={`/servicios/${s.slug}`}
              className="group surface-card p-8 hover:-translate-y-1 hover:border-primary/40 transition-smooth"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className={`h-14 w-14 rounded-xl flex items-center justify-center ${
                  s.highlight
                    ? "bg-gradient-to-br from-accent/30 to-accent/10 text-accent"
                    : "bg-gradient-to-br from-primary/30 to-primary/10 text-primary-glow"
                }`}>
                  <Icon className="h-7 w-7" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </div>
              <h2 className="font-display text-2xl font-semibold mb-3">{s.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.long}</p>
              <div className="flex flex-wrap gap-2">
                {s.subservices.slice(0, 6).map((sub) => (
                  <span key={sub} className={`text-xs px-3 py-1.5 rounded-full border ${
                    s.highlight
                      ? "border-accent/30 bg-accent/5 text-accent/90"
                      : "border-border bg-secondary/60 text-muted-foreground"
                  }`}>
                    {sub}
                  </span>
                ))}
                {s.subservices.length > 6 && (
                  <span className="text-xs px-3 py-1.5 rounded-full text-muted-foreground">
                    +{s.subservices.length - 6} más
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>

    <CtaBanner />
  </SiteLayout>
);

export default ServicesPage;
