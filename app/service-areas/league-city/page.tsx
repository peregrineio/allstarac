import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/services/CityPageTemplate";

export const metadata: Metadata = {
  title: "Heating Repair League City TX | HVAC Service | Allstar AC & Heating",
  description:
    "HVAC and heating repair in League City, TX. Family-owned, fair pricing. Licensed TACLB23470E. Call Allstar: 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/service-areas/league-city" },
};

const faqs = [
  {
    question: "How fast can you respond in League City?",
    answer:
      "We serve League City regularly. Same-day appointments are available and emergencies are our priority.",
  },
  {
    question: "What HVAC brands do you service in League City?",
    answer:
      "All major brands — Carrier, Trane, Lennox, Goodman, Rheem, York, and more.",
  },
  {
    question: "Do you offer maintenance plans for League City residents?",
    answer:
      "Yes, our maintenance plans include seasonal tune-ups with priority scheduling and repair discounts.",
  },
  {
    question: "Are there extra charges for League City?",
    answer:
      "Never. Same fair pricing across our entire service area. No trip fees.",
  },
];

export default function LeagueCityPage() {
  return (
    <CityPageTemplate
      city="League City"
      slug="league-city"
      description="From League City Parkway to FM 518, Allstar AC & Heating delivers dependable HVAC service to League City homes and businesses. Family-owned with no hidden fees."
      nearbyAreas={["Clear Lake", "Friendswood", "Webster", "Texas City"]}
      faqs={faqs}
    />
  );
}
