"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Phone,
  AlertTriangle,
  Snowflake,
  Fan,
  Flame,
  ThermometerSun,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface CityPageProps {
  city: string;
  slug: string;
  description: string;
  nearbyAreas: string[];
  faqs: FAQ[];
}

const services = [
  {
    name: "AC Repair",
    href: "/services/ac-repair",
    icon: Snowflake,
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    name: "AC Installation",
    href: "/services/ac-installation",
    icon: Fan,
    color: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
  },
  {
    name: "Heating Repair",
    href: "/services/heating-repair",
    icon: Flame,
    color: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
  {
    name: "Heating Installation",
    href: "/services/heating-installation",
    icon: ThermometerSun,
    color: "bg-red-500/10",
    iconColor: "text-red-500",
  },
];

const trustSignals = [
  { icon: ShieldCheck, text: "Licensed" },
  { icon: Award, text: "Insured" },
  { icon: Award, text: "BBB" },
  { icon: MapPin, text: "Local" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function CityPageTemplate({
  city,
  slug,
  description,
  nearbyAreas,
  faqs,
}: CityPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Allstar AC & Heating",
    telephone: "713-943-7283",
    email: "allstar.ac.heat@gmail.com",
    areaServed: {
      "@type": "City",
      name: `${city}, TX`,
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "HVAC License",
      identifier: "TACLB23470E",
    },
  };

  const differentiators = [
    {
      icon: MapPin,
      title: `Your ${city} Neighbor`,
      description: `We're not a distant call center. We're a Houston family serving ${city} homes.`,
    },
    {
      icon: Clock,
      title: `Same-Day Service in ${city}`,
      description: "Call in the morning, we can be there by afternoon.",
    },
    {
      icon: ShieldCheck,
      title: "No Surprise Pricing",
      description: "What we quote is what you pay. Every time.",
    },
    {
      icon: Award,
      title: "Licensed HVAC Contractor",
      description: "TACLB23470E — fully licensed and insured.",
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-midnight py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-50" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-copper/20 border border-copper/40 text-copper text-sm font-semibold tracking-widest uppercase mb-6"
          >
            <MapPin className="w-4 h-4" />
            {city}, TX
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            HVAC Service in
            <br />
            <span className="text-copper">{city}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto mb-8"
          >
            {description}
          </motion.p>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-8"
          >
            {trustSignals.map((signal) => (
              <div
                key={signal.text}
                className="flex items-center gap-2 text-sm text-white/60"
              >
                <signal.icon className="h-4 w-4 text-copper" />
                <span>{signal.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent h-14 px-8"
            >
              <a href="tel:7139437283">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 713-943-7283
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-copper hover:bg-copper/90 text-white h-14 px-8"
            >
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-copper" />
      </section>

      {/* Services Available */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-4">
              HVAC Services in {city}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.href} variants={itemVariants}>
                <Link href={service.href} className="group block">
                  <div className="bg-white border-2 border-border p-6 text-center transition-all hover:border-midnight hover:shadow-[4px_4px_0px_0px_hsl(220,60%,8%)]">
                    <div className={`mx-auto mb-4 w-14 h-14 ${service.color} flex items-center justify-center`}>
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <h3 className="font-heading text-lg text-midnight mb-1">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">in {city}</p>
                    <ArrowRight className="w-4 h-4 text-copper mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-4">
              Why {city} Homeowners Choose Allstar
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white border-2 border-border p-6 flex gap-4 hover:border-midnight transition-all hover:shadow-[4px_4px_0px_0px_hsl(220,60%,8%)]"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-copper/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-copper" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-midnight mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-4">
              HVAC Questions from {city} Homeowners
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border-2 border-border px-6 data-[state=open]:border-midnight"
                >
                  <AccordionTrigger className="text-left font-medium text-midnight hover:text-copper py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-12 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-heading text-xl text-midnight mb-4">
            Also Serving Nearby Communities
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => {
              const areaSlug = area.toLowerCase().replace(" ", "-");
              const hasPage = ["clear-lake", "friendswood", "webster", "league-city"].includes(areaSlug);

              if (hasPage && areaSlug !== slug) {
                return (
                  <Link
                    key={area}
                    href={`/service-areas/${areaSlug}`}
                    className="px-4 py-2 bg-white border border-border text-midnight hover:border-copper hover:text-copper transition-colors"
                  >
                    {area}
                  </Link>
                );
              }
              return (
                <span
                  key={area}
                  className="px-4 py-2 bg-white/50 text-muted-foreground"
                >
                  {area}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 px-4 bg-[hsl(0,80%,45%)] relative overflow-hidden">
        {/* Warning stripes */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(90deg,hsl(45,100%,50%),hsl(45,100%,50%)_20px,hsl(0,80%,45%)_20px,hsl(0,80%,45%)_40px)]" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(90deg,hsl(45,100%,50%),hsl(45,100%,50%)_20px,hsl(0,80%,45%)_20px,hsl(0,80%,45%)_40px)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
                <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-[hsl(0,80%,45%)]" />
                </div>
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-white">
                  Need HVAC Service in {city}?
                </h2>
                <p className="text-white/80 mt-2">
                  Fast, reliable service from your local HVAC experts.
                </p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-[hsl(0,80%,45%)] hover:bg-yellow-300 hover:text-[hsl(0,80%,35%)] font-bold text-xl h-16 px-10"
            >
              <a href="tel:7139437283">
                <Phone className="mr-2 h-6 w-6" />
                713-943-7283
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
