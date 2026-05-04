const items = [
  {
    title: "Un grupo, no un marketplace de freelancers",
    desc: "Equipos internos, multidisciplinarios y con metodología compartida. Cada proyecto tiene un solo responsable de cuenta.",
  },
  {
    title: "Estrategia + ejecución bajo el mismo techo",
    desc: "No entregamos PowerPoints. Lo que diseñamos, lo construimos y lo operamos hasta que produce resultados.",
  },
  {
    title: "IA aplicada con criterio de negocio",
    desc: "No vendemos hype. Implementamos IA donde mueve la aguja, con guardarraíles de seguridad y métricas claras.",
  },
  {
    title: "Transparencia operativa total",
    desc: "Dashboards en vivo, comités quincenales y acceso a nuestros backlogs. Sabes exactamente en qué estamos.",
  },
];

export const DifferentiatorsSection = () => (
  <section className="py-24 lg:py-32 border-t border-border">
    <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
      <div>
        <span className="eyebrow mb-5">Por qué Xerebrum</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
          Lo que nos hace distintos en la región.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Operamos como un solo equipo. Sin egos entre áreas, sin pelotas que se caen entre el
          marketing y el desarrollo. La transformación digital sucede cuando todo conversa.
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
