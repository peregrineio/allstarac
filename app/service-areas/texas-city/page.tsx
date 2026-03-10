import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service Texas City TX | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in Texas City, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/texas-city" },
};

const faqs = [
  {
    question: "How fast can you get to Texas City?",
    answer:
      "We serve the Texas City area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in Texas City?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in Texas City?",
    answer:
      "Full residential and commercial HVAC: AC repair, AC installation, heating repair, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in Texas City?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function TexasCityPage() {
  return (
    <CityPageTemplate
      city="Texas City"
      slug="texas-city"
      description="From the Texas City Dike to Bay Street, Allstar AC & Heating is your trusted HVAC partner in Texas City. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["La Marque", "Dickinson", "Hitchcock", "Galveston"]}
      faqs={faqs}
    />
  );
}
