import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Seo } from "@/components/Seo";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/data/services";

const ServicesPage = () => (
  <SiteLayout>
    <Seo
      title="Servicios · Xerebrum"
      description="Marketing digital, desarrollo, consultoría 360 y automatización con IA. Áreas especializadas dentro de un mismo grupo."
    />
    <section className="relative py-20 lg:py-28 bg-hero overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden />
      <div className="container-x relative max-w-3xl">
        <span className="eyebrow mb-5">Servicios</span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-gradient pb-2">
          Cuatro pilares, un solo equipo.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Crecimiento, plataformas, automatización con IA y estrategia. Pilares complementarios
          que pueden contratarse de forma independiente o como una transformación integral.
        </p>
      </div>
    </section>

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
                {s.capabilities.slice(0, 3).map((c) => (
                  <span key={c} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground">
                    {c}
                  </span>
                ))}
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
