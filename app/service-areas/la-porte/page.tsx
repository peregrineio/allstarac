import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service La Porte TX | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in La Porte, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/la-porte" },
};

const faqs = [
  {
    question: "How fast can you get to La Porte?",
    answer:
      "We serve the La Porte area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in La Porte?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in La Porte?",
    answer:
      "Full residential and commercial HVAC: AC repair, AC installation, heating repair, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in La Porte?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function LaPortePage() {
  return (
    <CityPageTemplate
      city="La Porte"
      slug="la-porte"
      description="From Sylvan Beach to Fairmont Parkway, Allstar AC & Heating is your trusted HVAC partner in La Porte. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["Deer Park", "Pasadena", "Seabrook", "Morgan's Point"]}
      faqs={faqs}
    />
  );
}
