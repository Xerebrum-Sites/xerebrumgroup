import { clients } from "@/data/caseStudies";

export const ClientsMarquee = () => {
  const loop = [...clients, ...clients];
  return (
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container-x mb-10 text-center">
        <span className="eyebrow">Confían en Xerebrum</span>
        <h2 className="mt-4 font-display text-2xl md:text-3xl font-semibold text-gradient">
          Empresas líderes en LATAM ya construyen con nosotros
        </h2>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-3 animate-marquee w-max">
          {loop.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="shrink-0 px-7 py-4 rounded-full border border-border bg-card/40 backdrop-blur-sm font-display text-base text-muted-foreground hover:text-foreground transition-smooth"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
