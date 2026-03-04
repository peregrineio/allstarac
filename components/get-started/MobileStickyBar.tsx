"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~50vh
      const threshold = window.innerHeight * 0.5;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#E8630A] py-3 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
        >
          <div className="flex items-center justify-between">
            <span className="text-white font-bold text-sm">AC Emergency?</span>
            <Link
              href="tel:7139437283"
              className="flex items-center gap-2 bg-white text-[#E8630A] font-bold rounded-full px-5 py-2 text-sm shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
