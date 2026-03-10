import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Service Rosharon TX | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in Rosharon, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/rosharon" },
};

const faqs = [
  {
    question: "How fast can you get to Rosharon?",
    answer:
      "We serve the Rosharon area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in Rosharon?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in Rosharon?",
    answer:
      "Full residential and commercial HVAC: AC repair, AC installation, heating repair, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in Rosharon?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function RosharonPage() {
  return (
    <CityPageTemplate
      city="Rosharon"
      slug="rosharon"
      description="From Highway 288 to FM 1462, Allstar AC & Heating is your trusted HVAC partner in Rosharon. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["Fresno", "Manvel", "Alvin", "Pearland"]}
      faqs={faqs}
    />
  );
}
