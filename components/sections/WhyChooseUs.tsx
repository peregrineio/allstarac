"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, Award, Quote } from "lucide-react";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "No Surprise Pricing",
    stat: "100%",
    statLabel: "Transparent",
    description: "What we quote is what you pay. Period. No hidden fees, no upselling, no games.",
  },
  {
    icon: Users,
    title: "Family-Owned",
    stat: "Since '06",
    statLabel: "Est.",
    description: "Real people answer our phone. We treat your home like it's our own.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    stat: "Today",
    statLabel: "Available",
    description: "Houston heat doesn't wait. Neither do we. Call now, we'll be there.",
  },
  {
    icon: Award,
    title: "Licensed & BBB",
    stat: "A+",
    statLabel: "Rating",
    description: "TACLB23470E — fully licensed, insured, and BBB accredited.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function WhyChooseUs() {
  return (
    <section className="py-24 px-4 bg-midnight relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint opacity-50" />

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-copper/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-copper/20 border border-copper/40 text-copper text-sm font-semibold tracking-widest uppercase mb-4">
            Why Allstar
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Tired of Being
            <br />
            <span className="text-copper">Ripped Off?</span>
          </h2>
        </motion.div>

        {/* Differentiator cards — 2x2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group relative bg-white/5 border border-white/10 hover:border-copper/50 active:border-copper/50 max-md:border-copper/30 p-6 transition-all duration-300"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-copper transform origin-bottom scale-y-0 max-md:scale-y-100 max-md:opacity-60 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-500" />

              <div className="flex items-start gap-5">
                {/* Stat block */}
                <div className="flex-shrink-0 text-center min-w-[70px]">
                  <div className="font-heading text-2xl md:text-3xl text-copper leading-none">
                    {item.stat}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">
                    {item.statLabel}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-16 bg-white/20 flex-shrink-0" />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-copper" />
                    <h3 className="font-heading text-xl text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/60 font-body text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Promise card — below grid, centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-copper p-8 relative">
            <Quote className="absolute top-4 right-4 w-12 h-12 text-white/20" />

            <h3 className="font-heading text-2xl md:text-3xl text-white mb-4">
              Our Promise to You
            </h3>

            <div className="space-y-3 text-white/90 font-body">
              <p className="flex items-start gap-3">
                <span className="text-white font-bold">01.</span>
                We answer our own phone — no call centers.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-white font-bold">02.</span>
                We show up on time — every time.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-white font-bold">03.</span>
                We quote before we start — what we say is what you pay.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-white font-bold">04.</span>
                We do the job right — no shortcuts.
              </p>
            </div>

            {/* Signature style */}
            <div className="mt-6 pt-4 border-t border-white/30">
              <p className="text-white font-semibold">— The Allstar Family</p>
              <p className="text-white/60 text-sm">Family-Owned Since 2006</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
