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
    short: "Comunicar mejor, llegar a quien tiene que llegar y generar oportunidades reales.",
    long: "Te ayudamos a ordenar tu marca, contar lo que hacés con claridad y construir una presencia digital consistente. Cada acción está pensada para sumar al negocio, no para llenar un calendario de publicaciones.",
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
      "Campañas de pauta digital (Google, Meta, LinkedIn)",
      "Estrategia de contenidos y SEO",
      "Gestión de redes sociales",
      "Métricas y seguimiento de resultados",
    ],
    idealClient: "Empresas que necesitan ordenar su comunicación y generar demanda de forma sostenida.",
    deliverables: [
      "Plan de comunicación trimestral",
      "Implementación de campañas y contenido",
      "Reportes claros de qué funciona y qué no",
      "Ajustes continuos en base a resultados",
    ],
    outcomes: [
      { label: "Reducción de costo por lead", value: "−38%" },
      { label: "Crecimiento en consultas", value: "+212%" },
      { label: "Retorno sobre la pauta", value: "5.4x" },
    ],
  },
  {
    slug: "plataformas-digitales",
    name: "Plataformas Digitales",
    short: "Sitios, sistemas y aplicaciones útiles, ordenadas y fáciles de usar.",
    long: "Diseñamos y desarrollamos las herramientas que tu empresa necesita para operar mejor. Pensadas para escalar, mantenerse en el tiempo y resolver problemas concretos del día a día.",
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
      "Aplicaciones web y SaaS",
      "Diseño de experiencia (UX/UI)",
      "Integraciones con sistemas existentes",
      "Mantenimiento y evolución continua",
    ],
    idealClient: "Empresas con procesos digitales propios que necesitan herramientas a medida y soporte de largo plazo.",
    deliverables: [
      "Definición de alcance y arquitectura",
      "Diseño y prototipo navegable",
      "Desarrollo, pruebas y puesta en producción",
      "Soporte y mejoras continuas",
    ],
    outcomes: [
      { label: "Performance Lighthouse", value: "98/100" },
      { label: "Tiempo de carga", value: "−61%" },
      { label: "Conversión post-rediseño", value: "+143%" },
    ],
  },
  {
    slug: "automatizacion-ia",
    name: "Automatización & IA",
    short: "Menos tareas repetitivas, mejores tiempos y procesos más simples.",
    long: "Identificamos tareas que pueden resolverse solas y las automatizamos con criterio. Usamos IA donde realmente aporta valor: agentes, integraciones y flujos que ahorran horas y reducen errores.",
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
      "Automatización de procesos internos",
      "Agentes y chatbots para atención y soporte",
      "Integraciones entre sistemas",
      "Flujos inteligentes con IA",
      "Procesamiento de documentos y datos",
    ],
    idealClient: "Equipos que pierden horas en tareas repetitivas y quieren ordenar su operación.",
    deliverables: [
      "Mapa de oportunidades de automatización",
      "Implementación en 4-8 semanas",
      "Conexión con tus sistemas actuales",
      "Seguimiento y mejoras continuas",
    ],
    outcomes: [
      { label: "Horas/mes ahorradas", value: "+1.800" },
      { label: "Precisión promedio", value: "94%" },
      { label: "Retorno primer año", value: "6.2x" },
    ],
  },
  {
    slug: "estrategia-digital",
    name: "Estrategia Digital",
    short: "Visión clara y un plan ordenado para crecer sin improvisar.",
    long: "Te ayudamos a entender dónde estás parado, qué priorizar y cómo avanzar. Trabajamos cerca del equipo directivo, traduciendo objetivos de negocio en decisiones concretas.",
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
      "Diagnóstico de situación actual",
      "Plan de evolución digital",
      "Datos y analítica para decidir mejor",
      "Selección e implementación de tecnología",
      "Acompañamiento al equipo en el cambio",
    ],
    idealClient: "Empresas que necesitan ordenar su crecimiento digital con criterio y un plan realista.",
    deliverables: [
      "Diagnóstico ejecutivo en 6 semanas",
      "Plan a 12-24 meses con prioridades claras",
      "Acompañamiento en la ejecución",
      "Indicadores de avance y resultados",
    ],
    outcomes: [
      { label: "Procesos optimizados", value: "+47" },
      { label: "Reducción de costos", value: "−24%" },
      { label: "Tiempo al mercado", value: "−55%" },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
