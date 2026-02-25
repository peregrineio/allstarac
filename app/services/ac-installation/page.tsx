import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProblems } from "@/components/services/ServiceProblems";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "AC Installation Houston | New Systems & Financing | Allstar AC & Heating",
  description:
    "Professional AC installation in Houston TX. Financing available through Synchrony & FTL. Licensed TACLB23470E. Free estimates. Call 713-943-7283.",
  alternates: { canonical: "https://allstaractx.com/services/ac-installation" },
};

const signs = [
  {
    icon: "Calendar",
    name: "System is 10-15+ Years Old",
    description: "Most AC units last 10-15 years in Houston's climate",
  },
  {
    icon: "Wrench",
    name: "Frequent Repairs",
    description: "If you're calling for repairs more than once a year, it may be time",
  },
  {
    icon: "TrendingUp",
    name: "Rising Energy Bills",
    description: "Old systems work harder and cost more to run",
  },
  {
    icon: "Thermometer",
    name: "Uneven Cooling",
    description: "Some rooms hot, some cold — your system is struggling",
  },
  {
    icon: "Volume2",
    name: "Loud Operation",
    description: "Excessive noise means your unit is working too hard",
  },
  {
    icon: "Droplets",
    name: "Poor Humidity Control",
    description: "Your home feels sticky even with AC running",
  },
  {
    icon: "Wind",
    name: "Weak Airflow",
    description: "Air coming out of vents feels weak",
  },
  {
    icon: "DollarSign",
    name: "Repair Costs Adding Up",
    description: "When repairs cost 50%+ of replacement, it's time to upgrade",
  },
];

const faqs = [
  {
    question: "How much does a new AC system cost in Houston?",
    answer:
      "New AC systems typically range from $5,000 to $12,000+ depending on size, efficiency rating, and home requirements. We provide free estimates and offer financing to make it affordable.",
  },
  {
    question: "How long does AC installation take?",
    answer:
      "Most installations are completed in one day. Complex installations or ductwork modifications may take 1-2 days.",
  },
  {
    question: "What size AC unit do I need?",
    answer:
      "System size depends on your home's square footage, insulation, and layout. We perform a proper assessment to recommend the right size — not too big, not too small.",
  },
  {
    question: "Do you offer financing for new AC systems?",
    answer:
      "Yes! We partner with Synchrony Bank and FTL Financing to offer flexible payment options including 0% APR promotions.",
  },
  {
    question: "What brands do you install?",
    answer:
      "We install all major brands and will recommend the best option for your home and budget.",
  },
  {
    question: "Do you remove the old unit?",
    answer:
      "Yes, removal and disposal of your old system is included in every installation.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Installation",
  provider: {
    "@type": "HVACBusiness",
    name: "Allstar AC & Heating",
    telephone: "713-943-7283",
  },
  areaServed: { "@type": "City", name: "Houston" },
  description:
    "Professional AC installation service in Houston TX with financing options and free estimates.",
};

export default function ACInstallationPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServiceHero
        title="AC Installation Houston — New Systems, Fair Prices"
        subtitle="Whether you're replacing an old unit or installing a brand-new system, we make it simple and affordable."
      />

      <ServiceProblems title="Signs You Need a New AC" problems={signs} />

      <ServiceProcess />

      <ServiceFAQ faqs={faqs} />

      <RelatedServices currentService="ac-installation" />

      <ServiceCTA
        variant="estimate"
        title="Get a Free Installation Estimate"
        subtitle="Let us help you find the right AC system for your home and budget. Financing available."
      />
    </div>
  );
}
