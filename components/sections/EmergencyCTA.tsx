"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Phone, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmergencyCTA() {
  return (
    <section className="relative py-16 px-4 bg-[hsl(0,80%,45%)] overflow-hidden">
      {/* Animated pulse overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] animate-pulse" />

      {/* Warning stripes on edges */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(90deg,hsl(45,100%,50%),hsl(45,100%,50%)_20px,hsl(0,80%,45%)_20px,hsl(0,80%,45%)_40px)]" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(90deg,hsl(45,100%,50%),hsl(45,100%,50%)_20px,hsl(0,80%,45%)_20px,hsl(0,80%,45%)_40px)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left Side — Urgent Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
          >
            {/* Alert icon with pulse */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
              <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-[hsl(0,80%,45%)]" />
              </div>
            </div>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                AC Emergency?
                <span className="block text-yellow-300">We&apos;re Available Now.</span>
              </h2>
              <p className="text-white/80 mt-2 font-body text-lg">
                Don&apos;t suffer in the Houston heat — we&apos;ll be there today.
              </p>
            </div>
          </motion.div>

          {/* Right Side — Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Status indicators */}
            <div className="flex flex-col gap-2 text-white text-sm">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-300" />
                Same-Day Service
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-300" />
                Available 7 Days
              </span>
            </div>

            {/* Big call button */}
            <Button
              asChild
              size="lg"
              className="bg-white text-[hsl(0,80%,45%)] hover:bg-yellow-300 hover:text-[hsl(0,80%,35%)] font-bold text-xl h-16 px-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105"
            >
              <a href="tel:7139437283" className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <span>
                  <span className="block text-xs uppercase tracking-wider opacity-70">Call Now</span>
                  713-943-7283
                </span>
              </a>
            </Button>
          </motion.div>
        </div>

        {/* License number */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/60 text-sm mt-8 font-mono"
        >
          Licensed TACLB23470E • Insured • BBB Accredited
        </motion.p>
      </div>
    </section>
  );
}
