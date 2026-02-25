"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  DollarSign,
  ShieldCheck,
  Clock,
  FileCheck,
  Check,
  Phone,
  Snowflake,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: DollarSign,
    title: "Lower Energy Bills",
    description: "A well-maintained system runs more efficiently",
  },
  {
    icon: ShieldCheck,
    title: "Fewer Breakdowns",
    description: "Catch small problems before they become big ones",
  },
  {
    icon: Clock,
    title: "Longer System Life",
    description: "Proper maintenance can add years to your HVAC system",
  },
  {
    icon: FileCheck,
    title: "Warranty Protection",
    description: "Most manufacturers require regular maintenance to keep warranties valid",
  },
];

const acChecklist = [
  "Thermostat calibration",
  "Electrical connections inspection",
  "Refrigerant level check",
  "Condenser coil cleaning",
  "Drain line inspection",
  "Air filter inspection/replacement",
  "Blower motor assessment",
  "System performance test",
];

const heatingChecklist = [
  "Thermostat calibration",
  "Heat exchanger inspection",
  "Gas connection check",
  "Burner and ignition test",
  "Safety controls verification",
  "Air filter inspection/replacement",
  "Flue and vent inspection",
  "System performance test",
];

const plans = [
  {
    name: "One-Time Tune-Up",
    price: "$[TBD]",
    period: "",
    description: "Single visit — AC or Heating",
    features: [
      "System inspection",
      "Filter check",
      "Performance test",
      "Written report",
    ],
    cta: "Schedule Tune-Up",
    popular: false,
  },
  {
    name: "Annual Plan",
    price: "$[TBD]",
    period: "/year",
    description: "2 visits — Spring AC + Fall Heating",
    features: [
      "Everything in tune-up",
      "Priority scheduling",
      "10% off repairs",
      "Two seasonal visits",
    ],
    cta: "Get Annual Plan",
    popular: true,
  },
  {
    name: "VIP Plan",
    price: "$[TBD]",
    period: "/year",
    description: "2 visits + premium perks",
    features: [
      "Everything in Annual",
      "15% off repairs",
      "No overtime charges",
      "Extended warranty",
    ],
    cta: "Get VIP Plan",
    popular: false,
  },
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

export default function MaintenancePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-midnight py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-50" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-copper/20 border border-copper/40 text-copper text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Maintenance Plans
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Prevent Problems
            <br />
            <span className="text-copper">Before They Start</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Regular maintenance keeps your system running efficiently, extends its
            lifespan, and saves you money on costly repairs.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-4">
              Why Maintenance Matters
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="bg-white border-2 border-border p-6 text-center hover:border-midnight transition-all hover:shadow-[4px_4px_0px_0px_hsl(220,60%,8%)]"
              >
                <div className="mx-auto mb-4 w-14 h-14 bg-copper/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-copper" />
                </div>
                <h3 className="font-heading text-lg text-midnight mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-4">
              What&apos;s Included in a Tune-Up
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* AC Checklist */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-border overflow-hidden"
            >
              <div className="bg-blue-500/10 p-4 flex items-center gap-3 border-b border-border">
                <Snowflake className="w-6 h-6 text-blue-500" />
                <h3 className="font-heading text-xl text-midnight">AC Tune-Up</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {acChecklist.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Heating Checklist */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-border overflow-hidden"
            >
              <div className="bg-orange-500/10 p-4 flex items-center gap-3 border-b border-border">
                <Flame className="w-6 h-6 text-orange-500" />
                <h3 className="font-heading text-xl text-midnight">Heating Tune-Up</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {heatingChecklist.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-4">
              Choose Your Plan
            </h2>
            <p className="text-muted-foreground mb-10">
              Pricing details coming soon. Contact us for current rates.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative bg-white border-2 p-6 transition-all hover:shadow-[6px_6px_0px_0px_hsl(220,60%,8%)] ${
                  plan.popular
                    ? "border-copper"
                    : "border-border hover:border-midnight"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-copper text-white">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-6 pb-6 border-b border-border">
                  <h3 className="font-heading text-xl text-midnight mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="font-heading text-4xl text-midnight">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-copper flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-copper hover:bg-copper/90 text-white"
                      : "bg-midnight hover:bg-midnight/90 text-white"
                  }`}
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-copper">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Schedule Your Tune-Up Today
          </h2>
          <p className="text-white/80 mb-8 font-body">
            Keep your system running smoothly year-round with regular maintenance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-midnight hover:bg-midnight/90 text-white font-semibold h-14 px-8"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent font-semibold h-14 px-8"
            >
              <a href="tel:7139437283">
                <Phone className="mr-2 h-5 w-5" />
                Call: 713-943-7283
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
