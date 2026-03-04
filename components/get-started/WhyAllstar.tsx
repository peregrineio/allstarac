"use client";

import { motion } from "framer-motion";
import { Star, Phone, Shield, Heart, Zap, Wrench, CreditCard } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "We Answer Our Phone",
    description:
      "Call 713-943-7283 and a real person picks up. Not a call center. Not a recording. Us.",
  },
  {
    icon: Shield,
    title: "No Surprise Bills",
    description:
      "We diagnose, explain, and quote you BEFORE we start. What we quote is what you pay. Period.",
  },
  {
    icon: Heart,
    title: "Family-Owned Since 2006",
    description:
      "Leo and Gicela started Allstar because Houston homeowners deserve honest HVAC service.",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    description:
      "AC down in July? We get it. Call us and we'll be there today. Emergency service 24/7.",
  },
  {
    icon: Wrench,
    title: "All Brands Serviced",
    description:
      "Trane, Carrier, Lennox, Goodman — you name it. If it heats or cools, we fix it.",
  },
  {
    icon: CreditCard,
    title: "Financing Available",
    description:
      "New system? 0% APR options through Synchrony Bank and FTL Financing.",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function WhyAllstar() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B2545] text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-white" />
            WHY HOUSTON TRUSTS US
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[#0B2545]">
            Not Your Average HVAC Company
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#0B2545] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
