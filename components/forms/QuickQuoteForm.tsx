"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const quickQuoteSchema = z.object({
  name: z.string().min(2, "Name required"),
  phone: z.string().min(10, "Phone required"),
  serviceType: z.enum([
    "ac-repair",
    "ac-installation",
    "heating-repair",
    "heating-installation",
    "maintenance",
    "other",
  ]),
});

type QuickQuoteData = z.infer<typeof quickQuoteSchema>;

interface QuickQuoteFormProps {
  variant?: "light" | "dark";
  className?: string;
}

const serviceOptions = [
  { value: "ac-repair", label: "AC Repair" },
  { value: "ac-installation", label: "AC Installation" },
  { value: "heating-repair", label: "Heating Repair" },
  { value: "heating-installation", label: "Heating Installation" },
  { value: "maintenance", label: "Maintenance" },
  { value: "other", label: "Other" },
];

export function QuickQuoteForm({ variant = "light", className }: QuickQuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const isDark = variant === "dark";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<QuickQuoteData>({
    resolver: zodResolver(quickQuoteSchema),
    defaultValues: {
      serviceType: "ac-repair",
    },
  });

  const onSubmit = async (data: QuickQuoteData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "quick-quote" }),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      }
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 p-4 rounded-lg",
          isDark ? "bg-white/10 text-white" : "bg-green-50 text-green-700",
          className
        )}
      >
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm">Thanks! We&apos;ll call you shortly.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("w-full", className)}
    >
      <div className="flex flex-col md:flex-row gap-3">
        <Input
          {...register("name")}
          placeholder="Your Name"
          className={cn(
            "flex-1",
            isDark && "bg-white/10 border-white/20 text-white placeholder:text-white/60",
            errors.name && "border-red-500"
          )}
        />
        <Input
          {...register("phone")}
          type="tel"
          inputMode="tel"
          placeholder="Phone Number"
          className={cn(
            "flex-1",
            isDark && "bg-white/10 border-white/20 text-white placeholder:text-white/60",
            errors.phone && "border-red-500"
          )}
        />
        <Select
          defaultValue="ac-repair"
          onValueChange={(value) =>
            setValue("serviceType", value as QuickQuoteData["serviceType"])
          }
        >
          <SelectTrigger
            className={cn(
              "flex-1 md:w-[180px]",
              isDark && "bg-white/10 border-white/20 text-white"
            )}
          >
            <SelectValue placeholder="Service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            isDark && "bg-white text-primary hover:bg-white/90"
          )}
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Get Quote"
          )}
        </Button>
      </div>
    </form>
  );
}
