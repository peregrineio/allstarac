"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Phone } from "lucide-react";

const areas = [
  { name: "Clear Lake", href: "/service-areas/clear-lake", tagline: "NASA Area" },
  { name: "Friendswood", href: "/service-areas/friendswood", tagline: "Family Community" },
  { name: "Webster", href: "/service-areas/webster", tagline: "Bay Area" },
  { name: "League City", href: "/service-areas/league-city", tagline: "South Houston" },
  { name: "Pearland", href: "/service-areas/pearland", tagline: "Brazoria County" },
  { name: "Pasadena", href: "/service-areas/pasadena", tagline: "East Houston" },
  { name: "Tomball", href: "/service-areas/tomball", tagline: "North Houston" },
  { name: "Humble", href: "/service-areas/humble", tagline: "Atascocita Area" },
  { name: "Spring", href: "/service-areas/spring", tagline: "Champions Area" },
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

export function ServiceAreasPreview() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Map-style background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="map-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" className="text-midnight"/>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-copper/10 border border-copper/30 text-copper text-sm font-semibold tracking-widest uppercase mb-4">
            <MapPin className="w-4 h-4" />
            Service Areas
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-midnight mb-4">
            Greater Houston
            <br />
            <span className="text-copper">Covered</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg font-body">
            From Clear Lake to Tomball — family-owned HVAC service across Houston.
            Your neighbors trust us — you can too.
          </p>
        </motion.div>

        {/* Area Cards — Map Pin Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
        >
          {areas.map((area, index) => (
            <motion.div key={area.href} variants={itemVariants}>
              <Link href={area.href} className="group block">
                <div className="relative bg-white border-2 border-border hover:border-midnight active:border-midnight p-6 text-center transition-all duration-300 group-hover:shadow-[4px_4px_0px_0px_hsl(220,60%,8%)] max-md:shadow-[2px_2px_0px_0px_hsl(220,60%,8%,0.2)] active:shadow-[2px_2px_0px_0px_hsl(220,60%,8%)]">
                  {/* Map pin icon */}
                  <div className="relative mx-auto w-12 h-12 mb-4">
                    <div className="absolute inset-0 bg-copper rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <div className="relative w-full h-full bg-midnight rounded-full flex items-center justify-center group-hover:bg-copper transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    {/* Pin point */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-midnight group-hover:border-t-copper transition-colors duration-300" />
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl text-midnight mb-1">
                    {area.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {area.tagline}
                  </p>

                  {/* Arrow on hover/mobile */}
                  <div className="absolute bottom-2 right-2 opacity-0 max-md:opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-copper" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-muted border border-border">
            <p className="text-muted-foreground font-body">
              Don&apos;t see your area? We likely serve you too.
            </p>
            <a
              href="tel:7139437283"
              className="inline-flex items-center gap-2 text-midnight font-semibold hover:text-copper transition-colors link-underline"
            >
              <Phone className="w-4 h-4" />
              713-943-7283
            </a>
          </div>

          <div className="mt-6">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 font-heading text-lg text-copper hover:text-copper-light transition-colors group"
            >
              View All 20+ Service Areas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
