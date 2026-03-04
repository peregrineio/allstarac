"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ChevronRight, Shield, Award, Clock, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustSignals = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Award, text: "BBB Accredited" },
  { icon: Banknote, text: "Financing Available" },
  { icon: Clock, text: "Same-Day Service" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[hsl(220,60%,8%)] via-[hsl(220,55%,10%)] to-[hsl(220,50%,6%)]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/allstaracherobg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Radial glow from temperature gauge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_rgba(196,90,44,0.15)_0%,_transparent_60%)] z-[2]" />

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column — Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="px-3 py-1 bg-copper/20 border-2 border-copper text-copper-light text-sm font-semibold tracking-wide uppercase">
                Family-Owned
              </span>
              <span className="text-steel text-sm">Serving South Houston Since 2006</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] mb-6"
            >
              Fair Pricing.
              <br />
              <span className="text-copper">Fast Service.</span>
              <br />
              No Surprises.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-white/70 max-w-lg mb-8 font-body leading-relaxed"
            >
              We answer our own phone. We show up on time.
              We quote before we start. What we quote is what you pay.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-copper hover:bg-copper-light text-white font-semibold text-lg h-14 px-8 border-0 shadow-[0_4px_20px_rgba(196,90,44,0.4)] hover:shadow-[0_4px_30px_rgba(196,90,44,0.6)] transition-all"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Estimate
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent font-semibold text-lg h-14 px-8"
              >
                <a href="tel:7139437283" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  713-943-7283
                </a>
              </Button>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {trustSignals.map((signal, index) => (
                <div
                  key={signal.text}
                  className="flex items-center gap-2 text-white/60 text-sm"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <signal.icon className="h-4 w-4 text-copper" />
                  <span className="font-medium">{signal.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Temperature Gauge Visual (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex order-1 lg:order-2 justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Temperature gauge container */}
              <div className="relative w-48 h-80 md:w-56 md:h-96">
                {/* Outer frame */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-steel/30 to-steel/10 border-4 border-steel/40" />

                {/* Inner track */}
                <div className="absolute inset-4 rounded-full bg-midnight/80 border-2 border-steel/30 overflow-hidden">
                  {/* Temperature fill */}
                  <motion.div
                    initial={{ height: "0%" }}
                    animate={{ height: "85%" }}
                    transition={{ duration: 2, delay: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsl(0,80%,50%)] via-copper to-[hsl(38,92%,50%)] rounded-b-full"
                  >
                    {/* Heat shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent heat-shimmer" />
                  </motion.div>

                  {/* Temperature marks */}
                  <div className="absolute inset-0 flex flex-col justify-between py-6 px-2">
                    {[110, 100, 90, 80, 70, 60].map((temp, i) => (
                      <div key={temp} className="flex items-center justify-between text-white/40 text-xs font-mono">
                        <span className="w-2 h-px bg-white/30" />
                        <span>{temp}°</span>
                        <span className="w-2 h-px bg-white/30" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bulb at bottom */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-24 md:w-28 md:h-28">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[hsl(0,80%,50%)] to-[hsl(0,80%,35%)] border-4 border-steel/40 shadow-[0_0_40px_rgba(220,38,38,0.5)]">
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Temperature callout */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="absolute -right-4 md:right-0 top-8 bg-midnight border-2 border-copper px-4 py-2"
              >
                <span className="font-heading text-4xl md:text-5xl text-copper">105°</span>
                <span className="block text-white/60 text-xs uppercase tracking-wider">Houston Heat</span>
              </motion.div>

              {/* "We fix it" callout */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="absolute -left-4 md:left-0 bottom-20 bg-copper px-4 py-2"
              >
                <span className="font-heading text-2xl text-white">We Fix It.</span>
                <span className="block text-white/80 text-xs uppercase tracking-wider">Same Day Service</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge — Industrial border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-copper" />
    </section>
  );
}
