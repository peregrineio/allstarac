import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service Deer Park TX | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in Deer Park, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/deer-park" },
};

const faqs = [
  {
    question: "How fast can you get to Deer Park?",
    answer:
      "We serve the Deer Park area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in Deer Park?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in Deer Park?",
    answer:
      "Full residential and commercial HVAC: AC repair, AC installation, heating repair, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in Deer Park?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function DeerParkPage() {
  return (
    <CityPageTemplate
      city="Deer Park"
      slug="deer-park"
      description="From Center Street to San Jacinto, Allstar AC & Heating is your trusted HVAC partner in Deer Park. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["Pasadena", "La Porte", "Channelview", "Baytown"]}
      faqs={faqs}
    />
  );
}
