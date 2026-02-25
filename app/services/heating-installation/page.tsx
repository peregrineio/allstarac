import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProblems } from "@/components/services/ServiceProblems";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Heating Installation Houston | Furnaces & Heat Pumps | Allstar AC & Heating",
  description:
    "Professional furnace and heat pump installation in Houston. Financing available. Licensed TACLB23470E. Free estimates. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/services/heating-installation" },
};

const signs = [
  {
    icon: "Calendar",
    name: "System is 15+ Years Old",
    description: "Furnaces and heat pumps lose efficiency over time",
  },
  {
    icon: "Wrench",
    name: "Frequent Breakdowns",
    description: "If repairs are becoming a yearly event, consider replacement",
  },
  {
    icon: "TrendingUp",
    name: "Rising Heating Bills",
    description: "Older systems work harder and cost more to operate",
  },
  {
    icon: "Thermometer",
    name: "Inconsistent Temperatures",
    description: "Your system can't keep up with demand anymore",
  },
  {
    icon: "Volume2",
    name: "Excessive Noise",
    description: "Loud operation means components are wearing out",
  },
  {
    icon: "AlertTriangle",
    name: "Safety Concerns",
    description: "Cracks in heat exchangers or carbon monoxide risks",
  },
];

const faqs = [
  {
    question: "How much does a new furnace cost in Houston?",
    answer:
      "Furnace installation typically ranges from $3,500 to $8,000+ depending on size and efficiency. Heat pump systems may range from $4,500 to $10,000+.",
  },
  {
    question: "Furnace or heat pump — which is better for Houston?",
    answer:
      "Houston's mild winters make heat pumps an excellent choice for most homes. They provide both heating and cooling. We'll assess your home and recommend the best option.",
  },
  {
    question: "How long does heating installation take?",
    answer: "Most installations are completed in one day.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes, through Synchrony Bank and FTL Financing with flexible payment terms.",
  },
  {
    question: "What warranties do you offer?",
    answer:
      "All installations include manufacturer warranty plus our workmanship guarantee.",
  },
  {
    question: "Do you handle permits?",
    answer: "Yes, we handle all required permits and inspections.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Heating Installation",
  provider: {
    "@type": "HVACBusiness",
    name: "Allstar AC & Heating",
    telephone: "713-943-7283",
  },
  areaServed: { "@type": "City", name: "Houston" },
  description:
    "Professional furnace and heat pump installation in Houston TX with financing options.",
};

export default function HeatingInstallationPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServiceHero
        title="Heating Installation Houston — Expert Furnace & Heat Pump Setup"
        subtitle="Professional installation with options for every home and budget. Financing available."
      />

      <ServiceProblems
        title="Signs You Need a New Heating System"
        problems={signs}
      />

      <ServiceProcess />

      <ServiceFAQ faqs={faqs} />

      <RelatedServices currentService="heating-installation" />

      <ServiceCTA
        variant="estimate"
        title="Get a Free Heating Estimate"
        subtitle="Let us help you choose the right heating system for your Houston home. Financing available."
      />
    </div>
  );
}
