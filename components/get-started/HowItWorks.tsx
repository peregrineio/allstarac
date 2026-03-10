"use client";

import { motion } from "framer-motion";
import { ClipboardList, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: ClipboardList,
    title: "Request Your Estimate",
    description: "Fill out the form above or call us. Takes 30 seconds.",
  },
  {
    number: 2,
    icon: Search,
    title: "We Diagnose & Quote",
    description:
      "We come out, diagnose honestly, and give you an upfront price. No work starts without your OK.",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "We Fix It Right",
    description:
      "Our team handles the repair or installation. You pay exactly what was quoted.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-[#0B2545] mb-3">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">Three simple steps to comfort</p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="text-center relative"
              >
                {/* Number badge */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-[#E8630A] text-white font-bold text-sm flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#0B2545]/5 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-8 h-8 text-[#0B2545]" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg text-[#0B2545] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
