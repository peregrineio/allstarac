import type { Metadata } from "next";
import { GetStartedPopupWrapper } from "@/components/get-started/GetStartedPopupWrapper";
import { GetStartedHero } from "@/components/get-started/GetStartedHero";
import { EstimateForm } from "@/components/get-started/EstimateForm";
import { WhyAllstar } from "@/components/get-started/WhyAllstar";
import { HowItWorks } from "@/components/get-started/HowItWorks";
import { TestimonialsSection } from "@/components/get-started/TestimonialsSection";
import { ServiceAreasStrip } from "@/components/get-started/ServiceAreasStrip";
import { FinalCTA } from "@/components/get-started/FinalCTA";
import { MobileStickyBar } from "@/components/get-started/MobileStickyBar";

export const metadata: Metadata = {
  title: "Get a Free HVAC Estimate | Allstar AC & Heating",
  description:
    "Request your free AC or heating estimate from Houston's trusted family-owned HVAC company. Same-day service, upfront pricing, no surprises. Call 713-943-7283.",
  robots: "noindex, nofollow",
};

export default function GetStartedPage() {
  return (
    <main className="pb-16 md:pb-0">
      <GetStartedPopupWrapper />
      <GetStartedHero />

      <EstimateForm />

      <WhyAllstar />

      <HowItWorks />

      <TestimonialsSection />

      <ServiceAreasStrip />

      <FinalCTA />

      <MobileStickyBar />
    </main>
  );
}
