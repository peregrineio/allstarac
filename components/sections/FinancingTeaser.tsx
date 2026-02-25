"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CreditCard, Percent, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "0% APR options available",
  "Quick approval process",
  "Flexible monthly payments",
  "No prepayment penalties",
];

export function FinancingTeaser() {
  return (
    <section className="py-24 px-4 bg-copper relative overflow-hidden">
      {/* Diagonal stripes pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-stripes" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-stripes)"/>
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-copper via-copper to-[hsl(18,65%,40%)]" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-midnight" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-midnight" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 text-white text-sm font-semibold tracking-widest uppercase mb-6">
              <CreditCard className="w-4 h-4" />
              Financing Available
            </span>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              New System?
              <br />
              Don&apos;t Sweat
              <br />
              The Cost.
            </h2>

            <p className="text-white/80 text-lg font-body max-w-md mb-8 leading-relaxed">
              Get the comfort your family needs with flexible financing through
              Synchrony Bank and FTL Financing. Quick approval, low monthly payments.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-midnight hover:bg-midnight/90 text-white font-semibold text-lg h-14 px-8 border-0"
            >
              <Link href="/financing" className="flex items-center gap-2">
                View Financing Options
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Column — Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 md:p-10 shadow-[8px_8px_0px_0px_hsl(220,60%,8%)]">
              {/* 0% APR highlight */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-border">
                <div className="w-16 h-16 bg-copper/10 flex items-center justify-center">
                  <Percent className="w-8 h-8 text-copper" />
                </div>
                <div>
                  <span className="font-heading text-5xl text-midnight">0%</span>
                  <span className="block text-muted-foreground text-sm uppercase tracking-wider">APR Available</span>
                </div>
              </div>

              {/* Benefits list */}
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                    <span className="text-midnight font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Partners */}
              <div className="mt-8 pt-6 border-t-2 border-border">
                <p className="text-muted-foreground text-sm mb-3">Financing Partners:</p>
                <div className="flex items-center gap-6">
                  <span className="font-semibold text-midnight">Synchrony Bank</span>
                  <span className="w-px h-4 bg-border" />
                  <span className="font-semibold text-midnight">FTL Financing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
