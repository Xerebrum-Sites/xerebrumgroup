import { SiteLayout } from "@/components/SiteLayout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AiSpotlight } from "@/components/sections/AiSpotlight";
import { FeaturedCases } from "@/components/sections/FeaturedCases";
import { ClientsMarquee } from "@/components/sections/ClientsMarquee";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

const Index = () => (
  <SiteLayout>
    <Seo
      title="Xerebrum · Estrategia, desarrollo y automatización con IA"
      description="Ayudamos a empresas a crecer, ordenarse y modernizar procesos. Estrategia, plataformas digitales y automatización con criterio de negocio."
    />
    <Hero />
    <ServicesGrid />
    <AiSpotlight />
    <FeaturedCases />
    <ClientsMarquee />
    <DifferentiatorsSection />
    <ProcessSection />
    <Testimonials />
    <CtaBanner />
  </SiteLayout>
);

export default Index;
