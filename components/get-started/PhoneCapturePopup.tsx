"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle, Loader2, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PhoneCapturePopupProps {
  onClose: () => void;
  onSubmitSuccess: () => void;
}

const trustBadges = [
  "Same-day service available",
  "No obligation, no pressure",
  "Talk to a real person, not a call center",
];

export function PhoneCapturePopup({ onClose, onSubmitSuccess }: PhoneCapturePopupProps) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // Auto-close after success
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "loading") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose, status]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");

    // Limit to 10 digits
    const limited = digits.slice(0, 10);

    // Format as (XXX) XXX-XXXX
    if (limited.length === 0) return "";
    if (limited.length <= 3) return `(${limited}`;
    if (limited.length <= 6) return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
    return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    setError("");
  };

  const validatePhone = (): boolean => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return false;
    }
    return true;
  };

  const getUtmParams = useCallback(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      utm_content: params.get("utm_content") || undefined,
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhone()) return;

    setStatus("loading");
    setError("");

    try {
      const utmParams = getUtmParams();
      const response = await fetch("/api/phone-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone.replace(/\D/g, ""),
          source_url: window.location.pathname,
          ...utmParams,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        onSubmitSuccess();
      } else {
        setError(result.error || "Something went wrong. Please try again.");
        setStatus("idle");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("idle");
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && status !== "loading") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-[420px] bg-white rounded-2xl p-6 md:p-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            disabled={status === "loading"}
            className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {status === "success" ? (
            // Success State
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#0B2545] mb-2">You&apos;re All Set!</h2>
              <p className="text-gray-600 mb-4">
                Thanks! Leo or our team will call you within 1 hour during business hours.
              </p>
              <p className="text-gray-600 mb-3">Need help right now?</p>
              <Link
                href="tel:7139437283"
                className="inline-flex items-center gap-2 text-[#E8630A] text-xl font-bold hover:underline mb-6"
              >
                <Phone className="w-5 h-5" />
                713-943-7283
              </Link>
              <div className="mt-4">
                <Button
                  onClick={onClose}
                  className="w-full bg-[#0B2545] hover:bg-[#0B2545]/90 text-white"
                >
                  Continue to Website &rarr;
                </Button>
              </div>
            </div>
          ) : (
            // Form State
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <Zap className="w-6 h-6 text-[#E8630A]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
                  Get Your Free Estimate
                </h2>
                <p className="text-gray-600">
                  Enter your number — we&apos;ll call within 1 hour to discuss your HVAC needs.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="(713) 555-1234"
                      autoFocus
                      disabled={status === "loading"}
                      className={`w-full h-14 pl-12 pr-4 text-lg rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8630A]/20 ${
                        error
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-200 focus:border-[#E8630A]"
                      } disabled:opacity-50 disabled:bg-gray-50`}
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-14 bg-[#E8630A] hover:bg-[#d45a09] text-white text-lg font-bold rounded-xl transition-all"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Get My Callback →"
                  )}
                </Button>
              </form>

              {/* Trust badges */}
              <div className="mt-6 space-y-2">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-sm text-orange-700">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              {/* Privacy note */}
              <p className="text-xs text-gray-400 text-center mt-4">
                We&apos;ll only use your number to schedule your estimate. No spam, ever.
              </p>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
