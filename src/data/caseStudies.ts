import ecommerce from "@/assets/case-ecommerce.jpg";
import finance from "@/assets/case-finance.jpg";
import industry from "@/assets/case-industry.jpg";
import health from "@/assets/case-health.jpg";
import realestate from "@/assets/case-realestate.jpg";
import type { ServiceSlug } from "./services";

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  services: ServiceSlug[];
  image: string;
  metrics: { label: string; value: string }[];
  duration: string;
  year: number;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "retail-omnicanal",
    client: "Cumbre Retail",
    industry: "Retail · Omnicanal",
    title: "De catálogo estático a comercio omnicanal con +312% en ventas online",
    summary:
      "Rediseñamos la experiencia de compra y conectamos tienda física, e-commerce y CRM en una sola operación.",
    challenge:
      "La marca operaba con un sitio lento, inventario desconectado y campañas que no se podían atribuir. Las ventas digitales representaban menos del 6% del total.",
    solution:
      "Construimos una PWA headless conectada al ERP, lanzamos campañas full-funnel con atribución unificada y desplegamos un copiloto de IA para atención al cliente 24/7.",
    services: ["plataformas-digitales", "crecimiento-digital", "automatizacion-ia"],
    image: ecommerce,
    metrics: [
      { label: "Ventas online", value: "+312%" },
      { label: "Ticket promedio", value: "+41%" },
      { label: "CAC", value: "−38%" },
    ],
    duration: "9 meses",
    year: 2025,
  },
  {
    slug: "fintech-crecimiento",
    client: "Norvex Capital",
    industry: "Fintech · Servicios Financieros",
    title: "Pipeline B2B predecible para una fintech en expansión regional",
    summary:
      "Creamos el motor de demanda y la plataforma de onboarding que sostuvieron la expansión a 4 países.",
    challenge:
      "Crecimiento dependiente de referidos, sin canal digital propio y con un onboarding manual que tomaba 11 días.",
    solution:
      "Estrategia de inbound + ABM en LinkedIn, rediseño del sitio con Next.js y un flujo de onboarding automatizado con verificación documental por IA.",
    services: ["crecimiento-digital", "estrategia-digital", "automatizacion-ia"],
    image: finance,
    metrics: [
      { label: "MQLs/mes", value: "12 → 380" },
      { label: "Onboarding", value: "11d → 38min" },
      { label: "ROAS", value: "7.1x" },
    ],
    duration: "12 meses",
    year: 2024,
  },
  {
    slug: "industria-automatizacion",
    client: "Helmet Industrias",
    industry: "Manufactura · B2B",
    title: "Automatización de operaciones que liberó 1,800 horas mensuales",
    summary:
      "Diagnóstico 360, automatización de procesos críticos y un portal de clientes a medida.",
    challenge:
      "Procesos clave (cotizaciones, seguimiento de pedidos, reclamos) se gestionaban en email y Excel. Tiempos de respuesta de hasta 6 días.",
    solution:
      "Mapeo de procesos, extranet con Laravel + React para clientes y distribuidores, y agentes IA que generan cotizaciones a partir de specs técnicas.",
    services: ["estrategia-digital", "plataformas-digitales", "automatizacion-ia"],
    image: industry,
    metrics: [
      { label: "Horas/mes liberadas", value: "1,800" },
      { label: "Tiempo de cotización", value: "−92%" },
      { label: "NPS distribuidores", value: "+47 pts" },
    ],
    duration: "10 meses",
    year: 2025,
  },
  {
    slug: "salud-plataforma",
    client: "Vital Salud",
    industry: "Salud · HealthTech",
    title: "Plataforma multi-dispositivo para 240,000 pacientes activos",
    summary:
      "Una experiencia digital unificada para pacientes, médicos y administradores, con cumplimiento normativo.",
    challenge:
      "Múltiples sistemas inconexos, agendamiento telefónico saturado y experiencia móvil deficiente.",
    solution:
      "Diseño UX centrado en pacientes, PWA con agendamiento inteligente, integración con HIS y dashboards de adopción para directores médicos.",
    services: ["plataformas-digitales", "estrategia-digital"],
    image: health,
    metrics: [
      { label: "Citas digitales", value: "8% → 71%" },
      { label: "NPS pacientes", value: "+38 pts" },
      { label: "Llamadas al call center", value: "−54%" },
    ],
    duration: "14 meses",
    year: 2024,
  },
  {
    slug: "real-estate-leads",
    client: "Aurora Bienes Raíces",
    industry: "Real Estate · Lujo",
    title: "Estrategia digital que multiplicó por 4 los leads calificados",
    summary:
      "Posicionamiento premium, sitio inmersivo y nutrición automatizada de prospectos high-value.",
    challenge:
      "Marca posicionada offline pero invisible en buscadores. Leads dispersos sin seguimiento estructurado.",
    solution:
      "Rediseño de marca digital, sitio con tours inmersivos, SEO local agresivo y agente IA que califica y agenda visitas automáticamente.",
    services: ["crecimiento-digital", "plataformas-digitales", "automatizacion-ia"],
    image: realestate,
    metrics: [
      { label: "Leads calificados", value: "+304%" },
      { label: "Tiempo de respuesta", value: "8h → 2min" },
      { label: "Cierre/lead", value: "+62%" },
    ],
    duration: "8 meses",
    year: 2025,
  },
];

export const getCase = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const clients = [
  "Cumbre Retail", "Norvex Capital", "Helmet Industrias", "Vital Salud",
  "Aurora Bienes Raíces", "Solaris Energía", "Talenta HR", "Mercado Andino",
  "Bricks & Co.", "Lumen Legal", "Vértice Logística", "Northway Foods",
];
