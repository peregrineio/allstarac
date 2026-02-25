import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "HVAC Webster TX | AC & Heating Service | Allstar AC & Heating",
  description:
    "HVAC service in Webster, TX. AC repair, heating installation, and maintenance. Fair pricing, licensed TACLB23470E. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/webster" },
};

const faqs = [
  {
    question: "Do you service both homes and businesses in Webster?",
    answer:
      "Yes, we provide residential and commercial HVAC services throughout the Webster area.",
  },
  {
    question: "How fast can Allstar get to Webster?",
    answer:
      "Same-day service is available for most calls in Webster. Emergencies are prioritized.",
  },
  {
    question: "Is there a trip charge for Webster service calls?",
    answer:
      "No trip charges. Our pricing is straightforward and the same across our service area.",
  },
  {
    question: "Can I finance a new AC system in Webster?",
    answer:
      "Absolutely. We offer flexible financing through Synchrony Bank and FTL Financing.",
  },
];

export default function WebsterPage() {
  return (
    <CityPageTemplate
      city="Webster"
      slug="webster"
      description="Webster homeowners and businesses trust Allstar for honest, reliable HVAC service. Licensed, insured, and committed to fair pricing on every job."
      nearbyAreas={["Clear Lake", "Friendswood", "League City", "Texas City"]}
      faqs={faqs}
    />
  );
}
