import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CtaButton } from "../CtaButton";

export const CtaBanner = () => (
  <section className="py-20">
    <div className="container-x">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary via-background to-background p-10 lg:p-16">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/30 blur-[120px]" aria-hidden />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/20 blur-[120px]" aria-hidden />
        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-gradient max-w-2xl">
              Contanos qué estás resolviendo.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl">
              Una conversación de 30 minutos para entender tu situación. Si podemos ayudar,
              te decimos cómo. Si no, también.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <CtaButton asChild variant="primary" size="lg">
              <Link to="/contacto">Agendar conversación <ArrowRight className="h-4 w-4" /></Link>
            </CtaButton>
            <CtaButton asChild variant="outline" size="lg">
              <Link to="/servicios">Ver servicios</Link>
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  </section>
);
