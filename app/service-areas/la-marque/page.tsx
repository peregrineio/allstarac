import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service La Marque TX | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in La Marque, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/la-marque" },
};

const faqs = [
  {
    question: "How fast can you get to La Marque?",
    answer:
      "We serve the La Marque area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in La Marque?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in La Marque?",
    answer:
      "Full residential and commercial HVAC: AC repair, AC installation, heating repair, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in La Marque?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function LaMarquePage() {
  return (
    <CityPageTemplate
      city="La Marque"
      slug="la-marque"
      description="From Gulf Freeway to Highland Bayou, Allstar AC & Heating is your trusted HVAC partner in La Marque. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["Texas City", "Dickinson", "Hitchcock", "Santa Fe"]}
      faqs={faqs}
    />
  );
}
