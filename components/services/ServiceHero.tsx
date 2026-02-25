"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Award, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustSignals = [
  { icon: ShieldCheck, text: "Licensed" },
  { icon: Award, text: "Insured" },
  { icon: Award, text: "BBB" },
  { icon: CreditCard, text: "Financing" },
];

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  bgVariant?: "navy" | "muted";
}

export function ServiceHero({
  title,
  subtitle,
  bgVariant = "muted",
}: ServiceHeroProps) {
  const isNavy = bgVariant === "navy";

  return (
    <section
      className={`py-20 md:py-28 px-4 relative overflow-hidden ${
        isNavy ? "bg-midnight" : "bg-muted"
      }`}
    >
      {/* Blueprint pattern for navy variant */}
      {isNavy && <div className="absolute inset-0 bg-blueprint opacity-50" />}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`font-heading text-4xl md:text-5xl lg:text-6xl mb-6 ${
            isNavy ? "text-white" : "text-midnight"
          }`}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg max-w-2xl mx-auto mb-8 ${
            isNavy ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </motion.p>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-8"
        >
          {trustSignals.map((signal) => (
            <div
              key={signal.text}
              className={`flex items-center gap-2 text-sm ${
                isNavy ? "text-white/60" : "text-muted-foreground"
              }`}
            >
              <signal.icon className={`h-4 w-4 ${isNavy ? "text-copper" : "text-copper"}`} />
              <span>{signal.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className={
              isNavy
                ? "border-2 border-white/30 text-white hover:bg-white/10 bg-transparent h-14 px-8"
                : "border-2 border-midnight text-midnight hover:bg-midnight hover:text-white h-14 px-8"
            }
          >
            <a href="tel:7139437283">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 713-943-7283
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className={
              isNavy
                ? "bg-copper hover:bg-copper/90 text-white h-14 px-8"
                : "bg-copper hover:bg-copper/90 text-white h-14 px-8"
            }
          >
            <Link href="/contact">Get Free Estimate</Link>
          </Button>
        </motion.div>
      </div>

      {/* Bottom accent line for navy variant */}
      {isNavy && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-copper" />
      )}
    </section>
  );
}
