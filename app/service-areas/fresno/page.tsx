import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service Fresno TX | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in Fresno, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/fresno" },
};

const faqs = [
  {
    question: "How fast can you get to Fresno?",
    answer:
      "We serve the Fresno area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in Fresno?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in Fresno?",
    answer:
      "Full residential and commercial HVAC: AC repair, AC installation, heating repair, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in Fresno?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function FresnoPage() {
  return (
    <CityPageTemplate
      city="Fresno"
      slug="fresno"
      description="From Masters Road to Chocolate Bayou, Allstar AC & Heating is your trusted HVAC partner in Fresno. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["Pearland", "Rosharon", "Manvel", "Alvin"]}
      faqs={faqs}
    />
  );
}
