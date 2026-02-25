import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "Tomball HVAC Service | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in Tomball, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/tomball" },
};

const faqs = [
  {
    question: "How fast can you get to Tomball?",
    answer:
      "We serve the Tomball area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in Tomball?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in Tomball?",
    answer:
      "Full residential HVAC: AC repair, AC replacement, AC installation, heating repair, heating replacement, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in Tomball?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function TomballPage() {
  return (
    <CityPageTemplate
      city="Tomball"
      slug="tomball"
      description="From downtown Tomball to the surrounding neighborhoods, Allstar AC & Heating is your trusted HVAC partner in North Houston. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["Spring", "Humble", "The Woodlands", "Cypress"]}
      faqs={faqs}
    />
  );
}
