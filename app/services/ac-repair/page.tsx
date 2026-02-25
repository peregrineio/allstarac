import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProblems } from "@/components/services/ServiceProblems";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "AC Repair Houston | Fast, Fair Service | Allstar AC & Heating",
  description:
    "Emergency and scheduled AC repair in Houston TX. No hidden fees, same-day service available. Licensed TACLB23470E. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/services/ac-repair" },
};

const problems = [
  {
    icon: "Thermometer",
    name: "Not Cooling",
    description: "AC running but your home is still hot",
  },
  {
    icon: "Wind",
    name: "Blowing Warm Air",
    description: "Cool air should be cool — we'll find out why it's not",
  },
  {
    icon: "Volume2",
    name: "Strange Noises",
    description: "Grinding, squealing, or buzzing from your unit",
  },
  {
    icon: "Power",
    name: "Won't Turn On",
    description: "System isn't responding at all",
  },
  {
    icon: "Droplets",
    name: "Refrigerant Leak",
    description: "Low refrigerant means poor cooling and higher bills",
  },
  {
    icon: "Zap",
    name: "High Electric Bills",
    description: "Sudden spike in energy costs",
  },
  {
    icon: "Gauge",
    name: "Thermostat Issues",
    description: "Temperature doesn't match what you set",
  },
  {
    icon: "Snowflake",
    name: "Frozen Coils",
    description: "Ice buildup on your AC unit",
  },
];

const faqs = [
  {
    question: "How much does AC repair cost in Houston?",
    answer:
      "Repairs typically range from $150 to $700 depending on the issue. We always provide an upfront price before starting any work — no surprises.",
  },
  {
    question: "How fast can you get here?",
    answer:
      "We offer same-day service for most calls. For emergencies, call us directly at 713-943-7283 and we'll get there as quickly as possible.",
  },
  {
    question: "Do you charge for estimates?",
    answer:
      "We provide a diagnosis and upfront pricing. If you approve the repair, the diagnostic is included in the repair cost.",
  },
  {
    question: "What AC brands do you service?",
    answer:
      "We service all major brands including Carrier, Trane, Lennox, Goodman, Rheem, York, and more.",
  },
  {
    question: "Do you offer emergency AC repair?",
    answer:
      "Yes. We understand that AC emergencies in Houston heat can't wait. Call us anytime.",
  },
  {
    question: "What if my AC can't be repaired?",
    answer:
      "We'll give you an honest recommendation. If replacement makes more sense, we'll walk you through your options and financing.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Repair",
  provider: {
    "@type": "HVACBusiness",
    name: "Allstar AC & Heating",
    telephone: "713-943-7283",
  },
  areaServed: { "@type": "City", name: "Houston" },
  description:
    "Professional AC repair service in Houston TX with upfront pricing and same-day availability.",
};

export default function ACRepairPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServiceHero
        title="AC Repair in Houston — Fast, Fair, Guaranteed"
        subtitle="When your AC breaks down, you need help fast. We provide same-day service with upfront pricing — no hidden fees, no surprises."
      />

      <ServiceProblems title="Common AC Problems We Fix" problems={problems} />

      <ServiceProcess />

      <ServiceFAQ faqs={faqs} />

      <RelatedServices currentService="ac-repair" />

      <ServiceCTA variant="emergency" />
    </div>
  );
}
