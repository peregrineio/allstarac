import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service Seabrook TX | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in Seabrook, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/seabrook" },
};

const faqs = [
  {
    question: "How fast can you get to Seabrook?",
    answer:
      "We serve the Seabrook area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in Seabrook?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in Seabrook?",
    answer:
      "Full residential and commercial HVAC: AC repair, AC installation, heating repair, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in Seabrook?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function SeabrookPage() {
  return (
    <CityPageTemplate
      city="Seabrook"
      slug="seabrook"
      description="From the Kemah Boardwalk to NASA Road 1, Allstar AC & Heating is your trusted HVAC partner in Seabrook. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["Clear Lake", "Kemah", "La Porte", "Nassau Bay"]}
      faqs={faqs}
    />
  );
}
