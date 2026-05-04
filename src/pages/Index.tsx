import { SiteLayout } from "@/components/SiteLayout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AiSpotlight } from "@/components/sections/AiSpotlight";
import { FeaturedCases } from "@/components/sections/FeaturedCases";
import { ClientsMarquee } from "@/components/sections/ClientsMarquee";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

const Index = () => (
  <SiteLayout>
    <Seo
      title="Xerebrum · Marketing y Transformación Digital con IA"
      description="Grupo digital que combina marketing, desarrollo, consultoría 360 y automatización con IA para acelerar el crecimiento de empresas B2B en LATAM."
    />
    <Hero />
    <ServicesGrid />
    <AiSpotlight />
    <FeaturedCases />
    <ClientsMarquee />
    <DifferentiatorsSection />
    <ProcessSection />
    <CtaBanner />
  </SiteLayout>
);

export default Index;
