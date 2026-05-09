const items = [
  {
    title: "Pensamos antes de proponer",
    desc: "Antes de tirar ideas, entendemos el negocio, el contexto y las prioridades. Las propuestas llegan con criterio, no con un menú genérico.",
  },
  {
    title: "Hacemos lo que decimos",
    desc: "No entregamos presentaciones lindas y desaparecemos. Acompañamos la ejecución hasta que las cosas funcionan en el día a día.",
  },
  {
    title: "Tecnología con sentido",
    desc: "Usamos IA y automatización donde realmente aporta. Si una herramienta más simple resuelve mejor el problema, la elegimos.",
  },
  {
    title: "Conversaciones claras",
    desc: "Decimos lo que pensamos y explicamos por qué. Reportes simples, decisiones argumentadas y nada de jerga innecesaria.",
  },
];

export const DifferentiatorsSection = () => (
  <section className="py-24 lg:py-32 border-t border-border">
    <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
      <div>
        <span className="eyebrow mb-5">Cómo trabajamos</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
          Cerca, claros y con criterio.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Trabajamos como una extensión de tu equipo. Sin intermediarios, sin promesas
          exageradas y con foco en que las cosas pasen.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((i) => (
          <div key={i.title} className="surface-card p-6 hover:border-accent/40 transition-smooth">
            <h3 className="font-display text-lg font-semibold mb-3">{i.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
