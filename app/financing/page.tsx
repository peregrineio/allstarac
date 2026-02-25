"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ClipboardList,
  CreditCard,
  CheckCircle,
  Smile,
  Phone,
  Wallet,
  PiggyBank,
  Zap,
  Clock,
  Percent,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: ClipboardList,
    title: "Get Your Free Estimate",
    description: "We quote the job with no obligation",
  },
  {
    icon: CreditCard,
    title: "Choose Your Plan",
    description: "Pick the monthly payment that fits your budget",
  },
  {
    icon: CheckCircle,
    title: "Get Approved",
    description: "Quick application with fast decisions",
  },
  {
    icon: Smile,
    title: "Enjoy Your Comfort",
    description: "We install your new system and you relax",
  },
];

const benefits = [
  {
    icon: Wallet,
    title: "Keep Your Savings",
    description: "No large upfront payment needed. Keep your emergency fund intact.",
  },
  {
    icon: PiggyBank,
    title: "Affordable Payments",
    description: "Break a major purchase into manageable monthly payments.",
  },
  {
    icon: Zap,
    title: "Invest in Efficiency",
    description: "A new, efficient system can lower your monthly energy bills.",
  },
  {
    icon: Clock,
    title: "Act Now, Not Later",
    description: "Don't wait for your old system to fail completely. Upgrade on your terms.",
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

export default function FinancingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-copper py-20 md:py-28 px-4 relative overflow-hidden">
        {/* Diagonal stripes */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal-stripes-hero" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-stripes-hero)"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 text-white text-sm font-semibold tracking-widest uppercase mb-6"
          >
            <CreditCard className="w-4 h-4" />
            Financing Available
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            New System?
            <br />
            Don&apos;t Sweat the Cost.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg max-w-2xl mx-auto"
          >
            Don&apos;t let cost stop you from getting the HVAC system your family
            needs. We offer affordable monthly payment options.
          </motion.p>
        </div>
      </section>

      {/* Financing Partners */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-4">
              Our Financing Partners
            </h2>
            <p className="text-muted-foreground">
              Quick approval through trusted lenders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Synchrony Bank */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-border p-8 hover:border-midnight transition-all hover:shadow-[6px_6px_0px_0px_hsl(220,60%,8%)]"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                <div className="w-14 h-14 bg-copper/10 flex items-center justify-center">
                  <Percent className="w-7 h-7 text-copper" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-midnight">Synchrony Bank</h3>
                  <span className="text-copper font-semibold">0% APR Available</span>
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-copper" />
                  Apply in minutes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-copper" />
                  Flexible terms available
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-copper" />
                  Promotional financing options
                </li>
              </ul>
              <p className="text-xs text-muted-foreground">
                *Subject to credit approval. Terms may vary.
              </p>
            </motion.div>

            {/* FTL Financing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-border p-8 hover:border-midnight transition-all hover:shadow-[6px_6px_0px_0px_hsl(220,60%,8%)]"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                <div className="w-14 h-14 bg-copper/10 flex items-center justify-center">
                  <CreditCard className="w-7 h-7 text-copper" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-midnight">FTL Financing</h3>
                  <span className="text-copper font-semibold">Multiple Options</span>
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-copper" />
                  Multiple plans available
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-copper" />
                  Quick approval process
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-copper" />
                  Competitive rates
                </li>
              </ul>
              <p className="text-xs text-muted-foreground">
                Contact us for current promotional offers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              How Financing Works
            </h2>
            <p className="text-white/70">Four simple steps to comfort.</p>
          </motion.div>

          {/* Desktop: Horizontal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:grid md:grid-cols-4 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div key={step.title} variants={itemVariants} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-copper/30" />
                )}
                <div className="relative z-10 mx-auto mb-4 w-16 h-16 bg-copper text-white flex items-center justify-center">
                  <step.icon className="w-7 h-7" />
                </div>
                <span className="font-heading text-copper text-sm block mb-2">
                  Step {index + 1}
                </span>
                <h3 className="font-heading text-lg text-white mb-1">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile: Vertical */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:hidden space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div key={step.title} variants={itemVariants} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-copper text-white flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-copper/30 mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="font-heading text-copper text-sm block mb-1">
                    Step {index + 1}
                  </span>
                  <h3 className="font-heading text-lg text-white mb-1">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Finance */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-4">
              Why Finance Your HVAC System?
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

      {/* CTA */}
      <section className="py-16 px-4 bg-copper">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to See Your Options?
          </h2>
          <p className="text-white/80 mb-8 font-body">
            Get a free estimate and we&apos;ll walk you through financing options that
            work for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-midnight hover:bg-midnight/90 text-white font-semibold h-14 px-8"
            >
              <Link href="/contact">Get Free Estimate</Link>
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
