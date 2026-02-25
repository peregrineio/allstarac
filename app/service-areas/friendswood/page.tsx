import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair Friendswood TX | HVAC Service | Allstar AC & Heating",
  description:
    "Trusted AC repair and HVAC service in Friendswood, TX. No hidden fees, same-day available. Licensed TACLB23470E. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/friendswood" },
};

const faqs = [
  {
    question: "How quickly can you get to Friendswood?",
    answer:
      "We serve Friendswood regularly and offer same-day service for most calls.",
  },
  {
    question: "Do you charge extra for Friendswood service calls?",
    answer:
      "No. Our pricing is consistent across our entire service area.",
  },
  {
    question: "What HVAC services do you provide in Friendswood?",
    answer:
      "Complete residential and commercial HVAC including AC repair, installation, heating service, and maintenance plans.",
  },
  {
    question: "Do you offer financing for Friendswood homeowners?",
    answer:
      "Yes — we offer financing through Synchrony Bank and FTL Financing for new system installations.",
  },
];

export default function FriendswoodPage() {
  return (
    <CityPageTemplate
      city="Friendswood"
      slug="friendswood"
      description="Allstar AC & Heating proudly serves Friendswood families with honest, reliable HVAC service. No hidden fees, no upselling — just quality work at a fair price."
      nearbyAreas={["Clear Lake", "Webster", "League City", "Pearland"]}
      faqs={faqs}
    />
  );
}
