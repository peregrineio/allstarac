"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
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

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  serviceType: z.enum([
    "ac-repair",
    "ac-installation",
    "heating-repair",
    "heating-installation",
    "maintenance",
    "other",
  ]),
  urgency: z.enum(["emergency", "this-week", "just-quotes"]),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: "ac-repair", label: "AC Repair" },
  { value: "ac-installation", label: "AC Installation" },
  { value: "heating-repair", label: "Heating Repair" },
  { value: "heating-installation", label: "Heating Installation" },
  { value: "maintenance", label: "Maintenance / Tune-Up" },
  { value: "other", label: "Other" },
];

const urgencyOptions = [
  { value: "emergency", label: "Emergency (need help today)" },
  { value: "this-week", label: "This week" },
  { value: "just-quotes", label: "Just getting quotes" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceType: "ac-repair",
      urgency: "this-week",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="font-semibold text-lg mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          We&apos;ll get back to you within 24 hours. For emergencies, call{" "}
          <a href="tel:7139437283" className="text-primary font-medium">
            713-943-7283
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-sm">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Your name"
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone <span className="text-red-500">*</span>
        </label>
        <Input
          id="phone"
          type="tel"
          inputMode="tel"
          {...register("phone")}
          placeholder="(555) 555-5555"
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email <span className="text-muted-foreground">(optional)</span>
        </label>
        <Input
          id="email"
          type="email"
          inputMode="email"
          {...register("email")}
          placeholder="your@email.com"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <Select
          defaultValue="ac-repair"
          onValueChange={(value) =>
            setValue("serviceType", value as ContactFormData["serviceType"])
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Urgency */}
      <div>
        <label className="block text-sm font-medium mb-3">
          How urgent is this? <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {urgencyOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                value={option.value}
                {...register("urgency")}
                className="w-4 h-4 text-primary"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-muted-foreground">(optional)</span>
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us more about your issue or what you need..."
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Request"
        )}
      </Button>
    </form>
  );
}
