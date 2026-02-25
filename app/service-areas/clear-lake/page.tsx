import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service Clear Lake TX | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in Clear Lake, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/clear-lake" },
};

const faqs = [
  {
    question: "How fast can you get to Clear Lake?",
    answer:
      "We serve the Clear Lake area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in Clear Lake?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in Clear Lake?",
    answer:
      "Full residential and commercial HVAC: AC repair, AC installation, heating repair, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in Clear Lake?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function ClearLakePage() {
  return (
    <CityPageTemplate
      city="Clear Lake"
      slug="clear-lake"
      description="From NASA Road 1 to Bay Area Boulevard, Allstar AC & Heating is your trusted HVAC partner in Clear Lake. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["Friendswood", "Webster", "League City", "South Houston"]}
      faqs={faqs}
    />
  );
}
