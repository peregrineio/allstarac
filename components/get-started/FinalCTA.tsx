"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  const scrollToForm = () => {
    const form = document.getElementById("estimate-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#E8630A] to-[#D4580A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Fair pricing. Fast service. No surprises.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-[#0B2545] font-bold rounded-full px-8 py-6 shadow-xl text-lg"
            >
              <Link href="tel:7139437283" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 713-943-7283
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToForm}
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent rounded-full px-8 py-6 text-lg"
            >
              Get Free Estimate ↑
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
