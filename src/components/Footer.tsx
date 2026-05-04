import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { services } from "@/data/services";
import { Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-background mt-24">
    <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
      <div className="lg:col-span-2 space-y-5 max-w-md">
        <Logo />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Xerebrum es un grupo de marketing y transformación digital. Diseñamos y operamos
          soluciones que generan resultados medibles para empresas B2B en LATAM.
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <a href="mailto:hola@xerebrum.com" className="flex items-center gap-2 hover:text-foreground transition-smooth">
            <Mail className="h-4 w-4" /> hola@xerebrum.com
          </a>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> LATAM · Operación remota</div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-4">Servicios</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {services.map((s) => (
            <li key={s.slug}>
              <Link to={`/servicios/${s.slug}`} className="hover:text-foreground transition-smooth">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-4">Compañía</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><Link to="/nosotros" className="hover:text-foreground transition-smooth">Nosotros</Link></li>
          <li><Link to="/casos" className="hover:text-foreground transition-smooth">Casos de éxito</Link></li>
          <li><Link to="/contacto" className="hover:text-foreground transition-smooth">Contacto</Link></li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground transition-smooth">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container-x py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Xerebrum Group. Todos los derechos reservados.</p>
        <p>Diseñado para construir lo que sigue.</p>
      </div>
    </div>
  </footer>
);
