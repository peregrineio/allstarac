"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Snowflake, Fan, Flame, ThermometerSun, Wrench, ArrowRight } from "lucide-react";

const allServices = [
  {
    name: "AC Repair",
    slug: "ac-repair",
    href: "/services/ac-repair",
    icon: Snowflake,
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    name: "AC Installation",
    slug: "ac-installation",
    href: "/services/ac-installation",
    icon: Fan,
    color: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
  },
  {
    name: "Heating Repair",
    slug: "heating-repair",
    href: "/services/heating-repair",
    icon: Flame,
    color: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
  {
    name: "Heating Installation",
    slug: "heating-installation",
    href: "/services/heating-installation",
    icon: ThermometerSun,
    color: "bg-red-500/10",
    iconColor: "text-red-500",
  },
  {
    name: "Maintenance Plans",
    slug: "maintenance",
    href: "/maintenance",
    icon: Wrench,
    color: "bg-copper/10",
    iconColor: "text-copper",
  },
];

interface RelatedServicesProps {
  currentService: string;
}

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

export function RelatedServices({ currentService }: RelatedServicesProps) {
  const relatedServices = allServices
    .filter((service) => service.slug !== currentService)
    .slice(0, 3);

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl text-midnight text-center mb-12"
        >
          Related Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {relatedServices.map((service) => (
            <motion.div key={service.slug} variants={itemVariants}>
              <Link href={service.href} className="group block">
                <div className="bg-white border-2 border-border p-6 text-center transition-all hover:border-midnight hover:shadow-[4px_4px_0px_0px_hsl(220,60%,8%)]">
                  <div className={`mx-auto mb-4 w-14 h-14 ${service.color} flex items-center justify-center`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="font-heading text-xl text-midnight">{service.name}</h3>
                  <ArrowRight className="w-4 h-4 text-copper mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
