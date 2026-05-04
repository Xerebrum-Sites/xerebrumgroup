import { SiteLayout } from "@/components/SiteLayout";
import { Seo } from "@/components/Seo";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ClientsMarquee } from "@/components/sections/ClientsMarquee";

const values = [
  { t: "Resultados sobre vanidad", d: "Métricas de negocio antes que likes." },
  { t: "Una sola conversación", d: "Un solo equipo, un solo backlog, un solo responsable." },
  { t: "Ingeniería del cambio", d: "Diseñamos personas, procesos y tecnología juntos." },
  { t: "IA con criterio", d: "Sin hype: aplicamos IA donde produce ROI real." },
];

const About = () => (
  <SiteLayout>
    <Seo
      title="Nosotros · Xerebrum"
      description="Somos un grupo digital con equipos especializados en marketing, desarrollo, consultoría y automatización con IA."
    />
    <section className="relative py-20 lg:py-28 bg-hero overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden />
      <div className="container-x relative max-w-3xl">
        <span className="eyebrow mb-5">Nosotros</span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-gradient">
          Un grupo construido para la era de la IA.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Xerebrum nació para resolver un problema claro: la transformación digital se rompe cuando
          marketing, tecnología y consultoría no hablan el mismo idioma. Operamos como un solo
          grupo, con áreas especializadas que comparten método, datos y objetivos.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <span className="eyebrow mb-4">Nuestros valores</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-gradient mt-3">
            Lo que sostiene cada decisión.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {values.map((v) => (
            <div key={v.t} className="surface-card p-6">
              <h3 className="font-display text-lg font-semibold mb-2">{v.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ClientsMarquee />
    <CtaBanner />
  </SiteLayout>
);

export default About;
