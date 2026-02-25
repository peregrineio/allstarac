"use client";

import { motion } from "framer-motion";
import { Phone, Search, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Call Us",
    description: "We answer — tell us what's going on",
  },
  {
    icon: Search,
    title: "Diagnosis",
    description: "We find the problem and give you an upfront price",
  },
  {
    icon: Wrench,
    title: "Fix It",
    description: "Our licensed technicians get to work",
  },
  {
    icon: CheckCircle,
    title: "Verify",
    description: "We test everything and make sure you're comfortable",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function ServiceProcess() {
  return (
    <section className="py-20 px-4 bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl text-white text-center mb-4"
        >
          Our Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/60 text-center mb-12"
        >
          Simple, honest, and efficient.
        </motion.p>

        {/* Desktop: Horizontal timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid md:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={itemVariants} className="text-center relative">
              {/* Connector line */}
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

        {/* Mobile: Vertical timeline */}
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
  );
}
