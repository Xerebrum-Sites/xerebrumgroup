import { Bot, Code2, Compass, Megaphone, type LucideIcon } from "lucide-react";

export type ServiceSlug =
  | "crecimiento-digital"
  | "plataformas-digitales"
  | "automatizacion-ia"
  | "estrategia-digital";

export interface Service {
  slug: ServiceSlug;
  name: string;
  short: string;
  long: string;
  icon: LucideIcon;
  highlight?: boolean;
  subservices: string[];
  capabilities: string[];
  idealClient: string;
  deliverables: string[];
  outcomes: { label: string; value: string }[];
}

export const services: Service[] = [
  {
    slug: "crecimiento-digital",
    name: "Crecimiento Digital",
    short: "Estrategia, comunicación y marketing orientados a generar crecimiento medible.",
    long: "Diseñamos motores de adquisición y marca que conectan estrategia, contenido y medios. Cada acción está conectada a un objetivo de negocio y a un panel de métricas en tiempo real.",
    icon: Megaphone,
    subservices: [
      "Branding",
      "Marketing Digital",
      "Social Ads",
      "Redes Sociales",
      "Estrategia de Comunicación",
      "Performance",
      "Contenido",
    ],
    capabilities: [
      "Branding y posicionamiento",
      "Performance Ads (Google, Meta, LinkedIn)",
      "Estrategia de contenidos y SEO",
      "Gestión integral de redes sociales",
      "Analítica avanzada y atribución",
    ],
    idealClient: "Empresas que necesitan ordenar su marca y construir un motor de demanda predecible.",
    deliverables: [
      "Estrategia trimestral con OKRs",
      "Implementación full-funnel",
      "Dashboards de performance en vivo",
      "Optimización continua basada en datos",
    ],
    outcomes: [
      { label: "Reducción de CAC", value: "−38%" },
      { label: "Crecimiento MQL", value: "+212%" },
      { label: "ROAS promedio", value: "5.4x" },
    ],
  },
  {
    slug: "plataformas-digitales",
    name: "Plataformas Digitales",
    short: "Diseñamos y desarrollamos plataformas digitales preparadas para escalar.",
    long: "Construimos productos digitales con arquitectura moderna —React, Next.js, Laravel— diseñados para velocidad, seguridad y mantenibilidad. Desde sitios institucionales hasta SaaS y extranets críticas.",
    icon: Code2,
    subservices: [
      "Sitios Web",
      "Sistemas Web",
      "PWAs",
      "SaaS",
      "Aplicaciones",
      "UX/UI",
      "Desarrollo a medida",
      "Extranets",
    ],
    capabilities: [
      "Sitios y sistemas web a medida",
      "Aplicaciones web progresivas (PWA) y SaaS",
      "Diseño UX/UI orientado a producto",
      "Integraciones con ERP / CRM / pasarelas",
      "Headless CMS y arquitecturas API-first",
    ],
    idealClient: "Empresas con procesos digitales complejos que requieren un partner técnico de largo plazo.",
    deliverables: [
      "Discovery y arquitectura de solución",
      "Diseño UX/UI y prototipo navegable",
      "Desarrollo full-stack y QA",
      "Despliegue, monitoreo y soporte",
    ],
    outcomes: [
      { label: "Mejora Lighthouse", value: "98/100" },
      { label: "Tiempo de carga", value: "−61%" },
      { label: "Conversión post-rediseño", value: "+143%" },
    ],
  },
  {
    slug: "automatizacion-ia",
    name: "Automatización & IA",
    short: "Automatizamos procesos y aplicamos IA para aumentar eficiencia y productividad.",
    long: "Implementamos soluciones de IA aplicadas al negocio: agentes conversacionales, copilotos internos, flujos inteligentes e integraciones. Cada proyecto se diseña con guardarraíles de seguridad y trazabilidad.",
    icon: Bot,
    highlight: true,
    subservices: [
      "Automatización de procesos",
      "Agentes IA",
      "Integraciones",
      "Chatbots",
      "Flujos inteligentes",
      "IA aplicada al negocio",
      "Optimización operativa",
    ],
    capabilities: [
      "Agentes conversacionales (voz y texto)",
      "Automatización de procesos con LLMs",
      "Copilotos internos sobre tu data",
      "Procesamiento inteligente de documentos",
      "Integración con sistemas existentes",
    ],
    idealClient: "Equipos que pierden horas en tareas repetitivas y quieren capturar el valor de la IA con seguridad.",
    deliverables: [
      "Mapa de oportunidades de IA",
      "Pilotos productivos en 4-8 semanas",
      "Integración con stack existente",
      "Monitoreo, evaluaciones y mejora continua",
    ],
    outcomes: [
      { label: "Horas/mes liberadas", value: "+1,800" },
      { label: "Precisión promedio", value: "94%" },
      { label: "ROI primer año", value: "6.2x" },
    ],
  },
  {
    slug: "estrategia-digital",
    name: "Estrategia Digital",
    short: "Acompañamos la evolución digital de empresas con visión estratégica e integral.",
    long: "Auditamos personas, procesos y tecnología para diseñar una hoja de ruta accionable. Trabajamos al lado del comité directivo hasta ver el retorno reflejado en el P&L.",
    icon: Compass,
    subservices: [
      "Consultoría 360",
      "Transformación Digital",
      "Data & Analytics",
      "Auditorías",
      "Optimización de procesos",
      "Roadmaps tecnológicos",
      "Escalabilidad",
    ],
    capabilities: [
      "Diagnóstico de madurez digital",
      "Roadmaps de transformación",
      "Data & Analytics y gobernanza",
      "Selección e implementación tecnológica",
      "Gestión del cambio y capacitación",
    ],
    idealClient: "Compañías medianas y grandes que necesitan ordenar su evolución digital con criterio estratégico.",
    deliverables: [
      "Diagnóstico ejecutivo en 6 semanas",
      "Plan estratégico a 12-24 meses",
      "PMO y comités de seguimiento",
      "KPIs de adopción y retorno",
    ],
    outcomes: [
      { label: "Procesos automatizados", value: "+47" },
      { label: "Reducción OPEX", value: "−24%" },
      { label: "Time-to-market", value: "−55%" },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
