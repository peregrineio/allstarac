"use client";

import { motion } from "framer-motion";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceAreasStrip() {
  return (
    <section className="py-8 md:py-10 bg-[#0B2545]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left side */}
          <h3 className="font-heading text-xl md:text-2xl text-white text-center md:text-left">
            Serving the Greater Houston Area
          </h3>

          {/* Right side - Cities */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            {SERVICE_AREAS.cities.map((city) => (
              <span
                key={city.slug}
                className="px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-sm"
              >
                {city.name}
              </span>
            ))}
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-white/60 text-sm">
              + surrounding areas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
