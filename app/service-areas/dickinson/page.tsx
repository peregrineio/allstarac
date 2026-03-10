import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service Dickinson TX | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in Dickinson, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/dickinson" },
};

const faqs = [
  {
    question: "How fast can you get to Dickinson?",
    answer:
      "We serve the Dickinson area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in Dickinson?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in Dickinson?",
    answer:
      "Full residential and commercial HVAC: AC repair, AC installation, heating repair, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in Dickinson?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function DickinsonPage() {
  return (
    <CityPageTemplate
      city="Dickinson"
      slug="dickinson"
      description="From FM 517 to Dickinson Bayou, Allstar AC & Heating is your trusted HVAC partner in Dickinson. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["League City", "Texas City", "La Marque", "Santa Fe"]}
      faqs={faqs}
    />
  );
}
