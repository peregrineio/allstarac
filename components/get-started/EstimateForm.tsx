"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Lock, Zap, BadgeCheck, CheckCircle, Loader2, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  serviceType: z.string().min(1, "Please select a service"),
  urgency: z.enum(["emergency", "this-week", "planning"], {
    message: "Please select urgency level",
  }),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
  "AC Repair",
  "AC Installation / Replacement",
  "Heating Repair",
  "Heating Installation / Replacement",
  "Maintenance / Tune-Up",
  "Not Sure — Help Me Decide",
];

const urgencyOptions = [
  {
    value: "emergency",
    emoji: "🚨",
    label: "Emergency",
    sublabel: "AC/Heat is down NOW",
    selectedBg: "bg-red-50",
    selectedBorder: "border-red-400",
    selectedText: "text-red-700",
  },
  {
    value: "this-week",
    emoji: "📅",
    label: "This Week",
    sublabel: "Need service soon",
    selectedBg: "bg-orange-50",
    selectedBorder: "border-orange-400",
    selectedText: "text-orange-700",
  },
  {
    value: "planning",
    emoji: "🗓️",
    label: "Planning Ahead",
    sublabel: "Getting quotes",
    selectedBg: "bg-blue-50",
    selectedBorder: "border-blue-400",
    selectedText: "text-blue-700",
  },
];

const trustMicroBadges = [
  { icon: Lock, label: "Secure" },
  { icon: Zap, label: "Fast Response" },
  { icon: BadgeCheck, label: "No Obligation" },
];

export function EstimateForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      urgency: undefined,
      notes: "",
    },
  });

  const selectedUrgency = watch("urgency");
  const selectedService = watch("serviceType");

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/get-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <section id="estimate-form" className="relative py-16 md:py-20 bg-gray-50">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            </motion.div>
            <h3 className="font-heading text-3xl text-[#0B2545] mb-4">
              Thanks! We&apos;ll call you shortly.
            </h3>
            <p className="text-gray-600 mb-4">
              Leo or our team typically responds within 1 hour during business hours.
            </p>
            <p className="text-gray-600 mb-8">
              For emergencies, call{" "}
              <Link href="tel:7139437283" className="text-[#E8630A] font-semibold hover:underline">
                713-943-7283
              </Link>{" "}
              right now.
            </p>
            <Button asChild className="bg-[#0B2545] hover:bg-[#0B2545]/90 text-white">
              <Link href="/">Back to Home</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="estimate-form" className="relative py-16 md:py-20 bg-gray-50 overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-400/20 via-orange-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Card with glow border */}
        <div className="relative max-w-xl mx-auto">
          {/* Gradient border glow */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#E8630A] via-green-400 to-[#0B2545] rounded-2xl blur-sm opacity-20" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100"
          >
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="font-heading text-3xl text-[#0B2545] mb-2">
                Get Your Free Estimate
              </h2>
              <p className="text-gray-600">
                No obligation. No surprise fees. Just an honest quote.
              </p>
            </div>

            {/* Trust micro-badges */}
            <div className="flex justify-center gap-6 pb-6 mb-6 border-b border-gray-200">
              {trustMicroBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-gray-600 text-sm">
                  <badge.icon className="w-4 h-4 text-green-500" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Error state */}
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                <p className="font-medium mb-1">{errorMessage}</p>
                <p className="text-sm">
                  Please call us at{" "}
                  <Link href="tel:7139437283" className="underline font-semibold">
                    713-943-7283
                  </Link>{" "}
                  instead.
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name */}
              <div>
                <Input
                  {...register("name")}
                  placeholder="Your full name"
                  className={`h-12 ${errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Input
                  {...register("phone")}
                  type="tel"
                  placeholder="(713) 555-1234"
                  className={`h-12 ${errors.phone ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="For your estimate receipt (optional)"
                  className="h-12"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Service Needed */}
              <div>
                <Select
                  value={selectedService}
                  onValueChange={(value) => setValue("serviceType", value)}
                >
                  <SelectTrigger
                    className={`h-12 ${errors.serviceType ? "border-red-400 focus:ring-red-400" : ""}`}
                  >
                    <SelectValue placeholder="What service do you need?" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.serviceType && (
                  <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
                )}
              </div>

              {/* Urgency Radio Cards */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">How urgent?</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {urgencyOptions.map((option) => {
                    const isSelected = selectedUrgency === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setValue("urgency", option.value as FormData["urgency"])}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-left ${
                          isSelected
                            ? `${option.selectedBg} ${option.selectedBorder} ${option.selectedText}`
                            : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="text-2xl mb-1">{option.emoji}</div>
                        <div className="font-semibold text-sm">{option.label}</div>
                        <div className={`text-xs ${isSelected ? "opacity-80" : "text-gray-500"}`}>
                          {option.sublabel}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.urgency && (
                  <p className="text-red-500 text-sm mt-2">{errors.urgency.message}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <Textarea
                  {...register("notes")}
                  placeholder="Anything else we should know? (AC making noise, age of system, etc.)"
                  rows={3}
                  className="resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#E8630A] hover:bg-[#d45a09] text-white rounded-xl py-6 text-lg font-bold transition-all duration-200"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get My Free Estimate →"
                )}
              </Button>

              {/* Phone fallback */}
              <p className="text-center text-gray-600 text-sm">
                Or call us now:{" "}
                <Link
                  href="tel:7139437283"
                  className="text-[#E8630A] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <Phone className="w-4 h-4" />
                  713-943-7283
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
