import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProblems } from "@/components/services/ServiceProblems";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Heating Repair Houston | Furnace & Heat Pump Service | Allstar AC & Heating",
  description:
    "Houston heating repair for furnaces and heat pumps. Same-day service, upfront pricing. Licensed TACLB23470E. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/services/heating-repair" },
};

const problems = [
  {
    icon: "Thermometer",
    name: "Not Heating",
    description: "Furnace running but your home is still cold",
  },
  {
    icon: "Flame",
    name: "Pilot Light Issues",
    description: "Pilot won't stay lit or won't ignite",
  },
  {
    icon: "Zap",
    name: "Heat Pump Problems",
    description: "Heat pump not switching modes or blowing cold",
  },
  {
    icon: "AlertTriangle",
    name: "Strange Smells",
    description: "Burning, rotten egg, or musty odors from your heater",
  },
  {
    icon: "Volume2",
    name: "Unusual Noises",
    description: "Banging, rattling, or squealing from your furnace",
  },
  {
    icon: "Thermometer",
    name: "Uneven Heating",
    description: "Some rooms warm, others freezing",
  },
  {
    icon: "TrendingUp",
    name: "High Gas Bills",
    description: "Sudden spike in heating costs",
  },
  {
    icon: "RefreshCw",
    name: "Short Cycling",
    description: "Heater turns on and off frequently",
  },
];

const faqs = [
  {
    question: "How much does heating repair cost?",
    answer:
      "Most heating repairs range from $150 to $600. We always provide upfront pricing before starting work.",
  },
  {
    question: "Do you repair all furnace brands?",
    answer: "Yes, we service all major furnace and heat pump brands.",
  },
  {
    question: "Is my heater dangerous if it smells like gas?",
    answer:
      "If you smell gas, leave your home immediately and call 911. Then call us — we can inspect your system once it's safe.",
  },
  {
    question: "Should I repair or replace my heater?",
    answer:
      "If your system is under 10 years old and the repair is less than 50% of replacement cost, repair usually makes sense. We'll give you an honest recommendation.",
  },
  {
    question: "Do you offer emergency heating repair?",
    answer:
      "Yes, we understand that cold nights in Houston are no joke. Call us for same-day heating service.",
  },
  {
    question: "What's included in a heating diagnostic?",
    answer:
      "We inspect all components, test safety controls, check gas connections, and provide a full assessment with upfront pricing for any needed repairs.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Heating Repair",
  provider: {
    "@type": "HVACBusiness",
    name: "Allstar AC & Heating",
    telephone: "713-943-7283",
  },
  areaServed: { "@type": "City", name: "Houston" },
  description:
    "Professional heating repair service in Houston TX for furnaces and heat pumps with same-day availability.",
};

export default function HeatingRepairPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServiceHero
        title="Heating Repair Houston — Keep Your Family Warm"
        subtitle="Don't let a cold front catch you off guard. We diagnose and fix all furnace and heat pump issues."
      />

      <ServiceProblems title="Common Heating Problems We Fix" problems={problems} />

      <ServiceProcess />

      <ServiceFAQ faqs={faqs} />

      <RelatedServices currentService="heating-repair" />

      <ServiceCTA
        variant="emergency"
        title="Heating Emergency? We're Here to Help."
        subtitle="Don't freeze — call Allstar for fast, reliable heating repair."
      />
    </div>
  );
}
