import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service Pasadena TX | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in Pasadena, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/pasadena" },
};

const faqs = [
  {
    question: "How fast can you get to Pasadena?",
    answer:
      "We serve the Pasadena area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in Pasadena?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in Pasadena?",
    answer:
      "Full residential and commercial HVAC: AC repair, AC installation, heating repair, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in Pasadena?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function PasadenaPage() {
  return (
    <CityPageTemplate
      city="Pasadena"
      slug="pasadena"
      description="From Strawberry Park to Red Bluff, Allstar AC & Heating is your trusted HVAC partner in Pasadena. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["Deer Park", "La Porte", "South Houston", "Galena Park"]}
      faqs={faqs}
    />
  );
}
