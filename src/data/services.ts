import { Bot, Code2, Compass, Megaphone, type LucideIcon } from "lucide-react";

export type ServiceSlug = "marketing-digital" | "desarrollo" | "consultoria-360" | "automatizacion-ia";

export interface Service {
  slug: ServiceSlug;
  name: string;
  short: string;
  long: string;
  icon: LucideIcon;
  highlight?: boolean;
  capabilities: string[];
  idealClient: string;
  deliverables: string[];
  outcomes: { label: string; value: string }[];
}

export const services: Service[] = [
  {
    slug: "marketing-digital",
    name: "Marketing Digital",
    short: "Estrategia y ejecución que generan demanda calificada de forma medible.",
    long: "Diseñamos y operamos motores de adquisición B2B: SEO técnico, performance media, contenidos y CRM. Cada campaña conecta directamente con un objetivo de negocio y un panel de métricas en tiempo real.",
    icon: Megaphone,
    capabilities: [
      "SEO técnico y de contenidos",
      "Performance Ads (Google, Meta, LinkedIn)",
      "Inbound y automatización de marketing",
      "Email marketing y nurturing",
      "Analítica avanzada y atribución",
    ],
    idealClient: "Empresas B2B que necesitan un pipeline predecible y dejar de depender solo de referidos.",
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
    slug: "desarrollo",
    name: "Desarrollo",
    short: "Sitios, PWAs, extranets y aplicaciones web hechas para escalar.",
    long: "Construimos productos digitales con arquitectura moderna —React, Next.js, Laravel— diseñados para velocidad, seguridad y mantenibilidad. Desde landing pages hasta plataformas internas críticas.",
    icon: Code2,
    capabilities: [
      "Diseño y desarrollo de sitios corporativos",
      "Aplicaciones web progresivas (PWA)",
      "Extranets y portales de cliente",
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
    slug: "consultoria-360",
    name: "Consultoría 360",
    short: "Acompañamiento integral en transformación digital de extremo a extremo.",
    long: "Auditamos personas, procesos y tecnología para diseñar una hoja de ruta accionable. Trabajamos al lado de los equipos directivos hasta ver los resultados en el P&L.",
    icon: Compass,
    capabilities: [
      "Diagnóstico de madurez digital",
      "Roadmaps de transformación",
      "Selección e implementación de tecnología",
      "Gestión del cambio y capacitación",
      "Gobernanza de datos",
    ],
    idealClient: "Compañías medianas y grandes que necesitan ordenar su transformación digital con criterio estratégico.",
    deliverables: [
      "Diagnóstico ejecutivo en 6 semanas",
      "Plan estratégico a 12-24 meses",
      "PMO y comités de seguimiento",
      "KPIs de adopción y retorno",
    ],
    outcomes: [
      { label: "Procesos automatizados", value: "+47" },
      { label: "Reducción de costos OPEX", value: "−24%" },
      { label: "Time-to-market", value: "−55%" },
    ],
  },
  {
    slug: "automatizacion-ia",
    name: "Automatización con IA",
    short: "Agentes y flujos inteligentes que liberan a tu equipo de tareas repetitivas.",
    long: "Implementamos soluciones de IA aplicadas: agentes conversacionales, RPA inteligente, copilotos internos y procesamiento documental. Cada proyecto se diseña con guardarraíles de seguridad y trazabilidad.",
    icon: Bot,
    highlight: true,
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
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
