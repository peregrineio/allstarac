"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cities = [
  // Original 7
  {
    name: "Clear Lake",
    slug: "clear-lake",
    tagline: "NASA Area",
    description: "HVAC service for the Clear Lake community",
  },
  {
    name: "Friendswood",
    slug: "friendswood",
    tagline: "Family Community",
    description: "Trusted HVAC service in Friendswood",
  },
  {
    name: "Webster",
    slug: "webster",
    tagline: "Bay Area",
    description: "Professional HVAC for Webster homes",
  },
  {
    name: "League City",
    slug: "league-city",
    tagline: "Growing Fast",
    description: "Reliable HVAC in League City",
  },
  {
    name: "Tomball",
    slug: "tomball",
    tagline: "North Houston",
    description: "HVAC service for Tomball homes",
  },
  {
    name: "Humble",
    slug: "humble",
    tagline: "Atascocita Area",
    description: "Trusted HVAC service in Humble",
  },
  {
    name: "Spring",
    slug: "spring",
    tagline: "Champions Area",
    description: "Professional HVAC for Spring homes",
  },
  // New 13
  {
    name: "Pearland",
    slug: "pearland",
    tagline: "Shadow Creek",
    description: "Reliable HVAC service in Pearland",
  },
  {
    name: "Pasadena",
    slug: "pasadena",
    tagline: "East Houston",
    description: "Trusted HVAC for Pasadena homes",
  },
  {
    name: "Deer Park",
    slug: "deer-park",
    tagline: "San Jacinto",
    description: "Professional HVAC in Deer Park",
  },
  {
    name: "La Porte",
    slug: "la-porte",
    tagline: "Sylvan Beach",
    description: "HVAC service for La Porte homes",
  },
  {
    name: "Galena Park",
    slug: "galena-park",
    tagline: "Ship Channel",
    description: "Reliable HVAC in Galena Park",
  },
  {
    name: "Fresno",
    slug: "fresno",
    tagline: "Fort Bend",
    description: "Trusted HVAC service in Fresno",
  },
  {
    name: "Rosharon",
    slug: "rosharon",
    tagline: "Brazoria County",
    description: "Professional HVAC for Rosharon",
  },
  {
    name: "Dickinson",
    slug: "dickinson",
    tagline: "Bayou Country",
    description: "HVAC service for Dickinson homes",
  },
  {
    name: "Texas City",
    slug: "texas-city",
    tagline: "Gulf Coast",
    description: "Reliable HVAC in Texas City",
  },
  {
    name: "Seabrook",
    slug: "seabrook",
    tagline: "Kemah Area",
    description: "Trusted HVAC service in Seabrook",
  },
  {
    name: "La Marque",
    slug: "la-marque",
    tagline: "Highland Bayou",
    description: "Professional HVAC in La Marque",
  },
  {
    name: "Hitchcock",
    slug: "hitchcock",
    tagline: "Galveston County",
    description: "HVAC service for Hitchcock homes",
  },
  {
    name: "San Leon",
    slug: "san-leon",
    tagline: "Bay Waterfront",
    description: "Reliable HVAC in San Leon",
  },
];

const additionalAreas = [
  "South Houston",
  "Channelview",
  "Baytown",
  "Manvel",
  "Alvin",
  "Santa Fe",
  "Kemah",
  "Nassau Bay",
  "Morgan's Point",
  "Galveston",
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

export default function ServiceAreasPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-midnight py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-50" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-copper/20 border border-copper/40 text-copper text-sm font-semibold tracking-widest uppercase mb-6"
          >
            <MapPin className="w-4 h-4" />
            Service Areas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Greater Houston
            <br />
            <span className="text-copper">Covered</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Allstar AC & Heating proudly serves Greater Houston — from Clear Lake
            and League City in the south to Tomball, Humble, and Spring in the north.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-copper" />
      </section>

      {/* City Cards */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {cities.map((city) => (
              <motion.div key={city.slug} variants={itemVariants}>
                <Link href={`/service-areas/${city.slug}`} className="group block">
                  <div className="bg-white border-2 border-border p-6 text-center transition-all hover:border-midnight hover:shadow-[4px_4px_0px_0px_hsl(220,60%,8%)]">
                    {/* Map pin icon */}
                    <div className="relative mx-auto w-14 h-14 mb-4">
                      <div className="absolute inset-0 bg-copper rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                      <div className="relative w-full h-full bg-midnight rounded-full flex items-center justify-center group-hover:bg-copper transition-colors duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      {/* Pin point */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-midnight group-hover:border-t-copper transition-colors duration-300" />
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl text-midnight mb-1">
                      {city.name}
                    </h3>
                    <p className="text-copper text-sm font-medium mb-2">
                      {city.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {city.description}
                    </p>

                    <ArrowRight className="w-4 h-4 text-copper mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl text-midnight mb-6">
              We Also Serve
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {additionalAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-white border border-border text-midnight text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground">
              Don&apos;t see your area? Give us a call at{" "}
              <a
                href="tel:7139437283"
                className="text-copper font-semibold hover:text-copper-light transition-colors"
              >
                713-943-7283
              </a>{" "}
              — we may still serve you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted border-2 border-border h-64 md:h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-steel/30 mx-auto mb-4" />
              <p className="text-muted-foreground uppercase tracking-wider text-sm">
                Interactive map coming soon
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-copper">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              Need HVAC Service in Your Area?
            </h2>
            <p className="text-white/80 mb-8 font-body">
              Family-owned HVAC service with fair pricing and no surprises.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
