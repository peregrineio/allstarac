import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service Hitchcock TX | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in Hitchcock, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/hitchcock" },
};

const faqs = [
  {
    question: "How fast can you get to Hitchcock?",
    answer:
      "We serve the Hitchcock area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in Hitchcock?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in Hitchcock?",
    answer:
      "Full residential and commercial HVAC: AC repair, AC installation, heating repair, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in Hitchcock?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function HitchcockPage() {
  return (
    <CityPageTemplate
      city="Hitchcock"
      slug="hitchcock"
      description="From FM 2004 to Highway 6, Allstar AC & Heating is your trusted HVAC partner in Hitchcock. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["La Marque", "Texas City", "Santa Fe", "Galveston"]}
      faqs={faqs}
    />
  );
}
