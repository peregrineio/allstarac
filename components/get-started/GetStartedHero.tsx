"use client";

import { motion } from "framer-motion";
import { Star, Calendar, ShieldCheck, Zap, CreditCard, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Calendar, label: "19+ Years" },
  { icon: ShieldCheck, label: "Licensed TACLB23470E" },
  { icon: Zap, label: "Same-Day Service" },
  { icon: CreditCard, label: "Financing Available" },
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
    transition: { duration: 0.5 },
  },
};

export function GetStartedHero() {
  const scrollToForm = () => {
    const form = document.getElementById("estimate-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] bg-gradient-to-br from-[#0B2545] via-[#0D2F5E] to-[#0B2545] overflow-hidden">
      {/* Blueprint/Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8630A] text-white text-sm font-medium">
              <Star className="w-4 h-4 fill-white" />
              FAMILY-OWNED SINCE 2006
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6"
          >
            <span className="text-white block">AC EMERGENCY?</span>
            <span className="text-[#E8630A] block">WE'RE ON THE WAY.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Same-day service. Upfront pricing. No surprises. Houston's trusted
            HVAC team for 19+ years.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#E8630A] hover:bg-[#d45a09] text-white text-lg px-8 py-6 rounded-full shadow-lg"
            >
              <Link href="tel:7139437283" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: 713-943-7283
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToForm}
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full bg-transparent"
            >
              Get Free Estimate ↓
            </Button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm"
              >
                <badge.icon className="w-4 h-4" />
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
