import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceAreasPreview } from "@/components/sections/ServiceAreasPreview";
import { FinancingTeaser } from "@/components/sections/FinancingTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { OrganizationSchema } from "@/components/schema/OrganizationSchema";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LocalBusinessSchema />
      <OrganizationSchema />
      <Hero />
      <ServiceCards />
      <WhyChooseUs />
      <ServiceAreasPreview />
      <FinancingTeaser />
      <Testimonials />
      <EmergencyCTA />
    </div>
  );
}
