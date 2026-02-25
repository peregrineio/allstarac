"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Snowflake, Fan, Flame, ThermometerSun, ArrowRight } from "lucide-react";

const services = [
  {
    title: "AC Repair",
    tagline: "Cool Again Today",
    description: "Fast, reliable AC repair with upfront pricing. No hidden fees, no surprises — just honest work.",
    icon: Snowflake,
    href: "/services/ac-repair",
    accent: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    title: "AC Installation",
    tagline: "New System, Fair Price",
    description: "Professional installation with financing available. We size it right and install it right the first time.",
    icon: Fan,
    href: "/services/ac-installation",
    accent: "from-cyan-500 to-teal-400",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    title: "Heating Repair",
    tagline: "Warmth When You Need It",
    description: "Furnace and heat pump repair you can trust. Honest diagnosis, quality repairs, fair pricing.",
    icon: Flame,
    href: "/services/heating-repair",
    accent: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    title: "Heating Installation",
    tagline: "Comfort Built to Last",
    description: "Professional heating system installation with options for every home and budget.",
    icon: ThermometerSun,
    href: "/services/heating-installation",
    accent: "from-red-500 to-rose-500",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function ServiceCards() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Subtle blueprint grid in background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(220 60% 8%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(220 60% 8%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-copper/10 border border-copper/30 text-copper text-sm font-semibold tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-midnight mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg font-body">
            From emergency repairs to full system installations — honest work at fair prices.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={cardVariants}>
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full bg-white border-2 border-border hover:border-midnight p-8 transition-all duration-300 group-hover:shadow-[8px_8px_0px_0px_hsl(220,60%,8%)]">
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 ${service.iconBg} flex items-center justify-center border border-current/10`}>
                      <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading text-2xl md:text-3xl text-midnight">
                          {service.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-copper opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                      <p className="text-copper font-semibold text-sm uppercase tracking-wide mb-3">
                        {service.tagline}
                      </p>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                    <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-300 transform rotate-45 translate-x-12 translate-y-12`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
