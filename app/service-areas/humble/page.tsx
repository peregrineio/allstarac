import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "Humble HVAC Service | AC Repair & Installation | Allstar AC & Heating",
  description:
    "Trusted HVAC service in Humble, TX. AC repair, installation, and heating services. Family-owned, fair pricing. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/humble" },
};

const faqs = [
  {
    question: "How fast can you get to Humble?",
    answer:
      "We serve the Humble area regularly. Same-day service is available for most calls, and we prioritize emergencies.",
  },
  {
    question: "Do you charge extra for service in Humble?",
    answer:
      "No — our pricing is the same regardless of location within our service area. No trip charges, no surprises.",
  },
  {
    question: "What HVAC services do you offer in Humble?",
    answer:
      "Full residential HVAC: AC repair, AC replacement, AC installation, heating repair, heating replacement, heating installation, and maintenance.",
  },
  {
    question: "Are you licensed to work in Humble?",
    answer:
      "Yes — we hold Texas HVAC license TACLB23470E and are fully insured and BBB accredited.",
  },
];

export default function HumblePage() {
  return (
    <CityPageTemplate
      city="Humble"
      slug="humble"
      description="Serving Humble and the Atascocita area, Allstar AC & Heating brings honest HVAC service to North Houston. Family-owned, fair pricing, and same-day service available."
      nearbyAreas={["Spring", "Tomball", "Kingwood", "Atascocita"]}
      faqs={faqs}
    />
  );
}
