"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCTAProps {
  variant: "emergency" | "estimate";
  title?: string;
  subtitle?: string;
}

export function ServiceCTA({
  variant,
  title,
  subtitle,
}: ServiceCTAProps) {
  if (variant === "emergency") {
    return (
      <section className="py-16 px-4 bg-[hsl(0,80%,45%)] relative overflow-hidden">
        {/* Warning stripes */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(90deg,hsl(45,100%,50%),hsl(45,100%,50%)_20px,hsl(0,80%,45%)_20px,hsl(0,80%,45%)_40px)]" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(90deg,hsl(45,100%,50%),hsl(45,100%,50%)_20px,hsl(0,80%,45%)_20px,hsl(0,80%,45%)_40px)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
                <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-[hsl(0,80%,45%)]" />
                </div>
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-white">
                  {title || "AC Emergency? Call Now."}
                </h2>
                <p className="text-white/80 mt-2">
                  {subtitle || "Don't sweat it — call Allstar for fast, reliable emergency service."}
                </p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-[hsl(0,80%,45%)] hover:bg-yellow-300 hover:text-[hsl(0,80%,35%)] font-bold text-xl h-16 px-10"
            >
              <a href="tel:7139437283">
                <Phone className="mr-2 h-6 w-6" />
                713-943-7283
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-copper relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            {title || "Get a Free Installation Estimate"}
          </h2>
          <p className="text-white/80 mb-8 font-body">
            {subtitle || "Let us help you find the right system for your home and budget."}
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
  );
}
