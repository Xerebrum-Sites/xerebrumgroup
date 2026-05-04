const items = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendemos tu negocio, equipos y datos. Identificamos las palancas de mayor impacto.",
  },
  {
    n: "02",
    title: "Diseño",
    desc: "Diseñamos la solución integrando estrategia, marca, tecnología y métricas.",
  },
  {
    n: "03",
    title: "Construcción",
    desc: "Equipos especializados ejecutan en sprints cortos con entregables visibles cada semana.",
  },
  {
    n: "04",
    title: "Operación y mejora",
    desc: "Operamos, medimos y optimizamos. La transformación es un proceso, no un proyecto.",
  },
];

export const ProcessSection = () => (
  <section className="py-24 lg:py-32 border-t border-border">
    <div className="container-x">
      <div className="max-w-2xl mb-14">
        <span className="eyebrow mb-5">Cómo trabajamos</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
          Un método claro, sin sorpresas.
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.n} className="surface-card p-7 hover:border-primary/40 transition-smooth">
            <div className="font-display text-sm text-accent mb-4">{i.n}</div>
            <h3 className="font-display text-xl font-semibold mb-3">{i.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
