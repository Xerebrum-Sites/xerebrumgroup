import { SiteLayout } from "@/components/SiteLayout";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ClientsMarquee } from "@/components/sections/ClientsMarquee";
import headerAbout from "@/assets/header-about.jpg";

const values = [
  { t: "Resultados sobre vanidad", d: "Métricas de negocio antes que likes." },
  { t: "Una sola conversación", d: "Un equipo, un backlog, un responsable." },
  { t: "Ingeniería del cambio", d: "Diseñamos personas, procesos y tecnología juntos." },
  { t: "IA con criterio", d: "Sin hype: aplicamos IA donde produce ROI real." },
];

const About = () => (
  <SiteLayout>
    <Seo
      title="Nosotros · Xerebrum"
      description="Equipos especializados en estrategia, desarrollo, marketing y automatización con IA, trabajando como una sola conversación."
    />
    <PageHeader
      eyebrow="Nosotros"
      title={<>Construidos para la era de la IA.</>}
      description="Nacimos para resolver un problema claro: la transformación digital se rompe cuando marketing, tecnología y consultoría no hablan el mismo idioma. Operamos como un equipo único, con áreas especializadas que comparten método, datos y objetivos."
      image={headerAbout}
      imageAlt="Equipo argentino conversando alrededor de una laptop"
    />

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
