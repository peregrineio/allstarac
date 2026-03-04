// Allstar AC & Heating - Keyword Matching Engine
// Matches user messages against knowledge base to generate responses

import {
  COMPANY,
  SERVICES,
  SERVICE_AREAS,
  FINANCING,
  PRICING,
  EMERGENCY,
  FAQS,
  GREETING_KEYWORDS,
  THANKS_KEYWORDS,
  HUMAN_KEYWORDS,
  HOURS_KEYWORDS,
  isInServiceArea,
} from "./knowledgeBase";
import type { ChatResponse, ChatLink } from "./types";

// ============================================
// HELPER FUNCTIONS
// ============================================

function normalizeMessage(message: string): string {
  return message
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ") // Remove punctuation
    .replace(/\s+/g, " "); // Normalize whitespace
}

function containsAny(message: string, keywords: string[]): boolean {
  const normalized = normalizeMessage(message);
  return keywords.some((keyword) => normalized.includes(keyword.toLowerCase()));
}

function extractCityName(message: string): string | null {
  const normalized = normalizeMessage(message);
  const allCities = [
    ...SERVICE_AREAS.primary.map((a) => a.name),
    ...SERVICE_AREAS.additional,
  ];

  for (const city of allCities) {
    if (normalized.includes(city.toLowerCase())) {
      return city;
    }
  }
  return null;
}

// ============================================
// RESPONSE GENERATORS
// ============================================

function createEmergencyResponse(): ChatResponse {
  return {
    text: `🚨 **AC Emergency?** We're available 24/7 for urgent repairs!\n\n📞 **Call us NOW at ${COMPANY.phone}** for same-day service.\n\nDon't wait — we'll get your AC running again fast!`,
    isEmergency: true,
    links: [
      { label: `Call Now: ${COMPANY.phone}`, href: `tel:${COMPANY.phone}` },
      { label: "Request Emergency Service", href: "/contact" },
    ],
    quickReplies: ["Get a quote", "What's the cost?", "Service areas"],
  };
}

function createPricingResponse(): ChatResponse {
  return {
    text: `💰 **Our Pricing Philosophy:**\n\n${PRICING.philosophy.map((p) => `• ${p}`).join("\n")}\n\nWe believe in honest, upfront pricing. No surprises, no upselling.`,
    links: [
      { label: "Get Free Estimate", href: "/contact" },
      { label: `Call: ${COMPANY.phone}`, href: `tel:${COMPANY.phone}` },
    ],
    quickReplies: ["Financing options", "Schedule service", "Service areas"],
  };
}

function createFinancingResponse(): ChatResponse {
  return {
    text: `💳 **Flexible Financing Available!**\n\nWe partner with **${FINANCING.partners.join(" & ")}** to offer:\n\n${FINANCING.features.map((f) => `• ${f}`).join("\n")}\n\nMake your new system affordable with easy monthly payments.`,
    links: [
      { label: "View Financing Options", href: "/financing" },
      { label: "Get Free Estimate", href: "/contact" },
    ],
    quickReplies: ["How much is a new AC?", "Service areas", "Contact us"],
  };
}

function createServiceResponse(serviceId: string): ChatResponse {
  const service = SERVICES.find((s) => s.id === serviceId);
  if (!service) return createFallbackResponse();

  const isRepair = serviceId.includes("repair");

  return {
    text: `🔧 **${service.name}**\n\n${service.description}\n\n${service.features.map((f) => `✓ ${f}`).join("\n")}\n\n${isRepair ? "Need help today? We offer same-day service!" : "Ready for a free estimate on a new system?"}`,
    links: [
      {
        label: isRepair ? `Call Now: ${COMPANY.phone}` : "Get Free Estimate",
        href: isRepair ? `tel:${COMPANY.phone}` : "/contact",
      },
      { label: "Learn More", href: `/services/${serviceId}` },
    ],
    quickReplies: isRepair
      ? ["Schedule service", "What's the cost?", "Service areas"]
      : ["Financing options", "What's the cost?", "Service areas"],
  };
}

function createServiceAreasResponse(specificCity?: string): ChatResponse {
  if (specificCity && isInServiceArea(specificCity)) {
    return {
      text: `✅ **Yes, we service ${specificCity}!**\n\nWe proudly serve the Greater Houston area, including:\n\n${SERVICE_AREAS.primary.map((a) => `• ${a.name}`).join("\n")}\n\nPlus: ${SERVICE_AREAS.additional.join(", ")}\n\nReady to schedule service?`,
      links: [
        { label: "Schedule Service", href: "/contact" },
        { label: `Call: ${COMPANY.phone}`, href: `tel:${COMPANY.phone}` },
      ],
      quickReplies: ["Get a quote", "Services offered", "Financing"],
    };
  }

  if (specificCity && !isInServiceArea(specificCity)) {
    return {
      text: `🤔 I'm not sure if we service ${specificCity}. We cover the Greater Houston area.\n\n**Call us at ${COMPANY.phone}** and we'll let you know right away if we can help!\n\nAreas we definitely serve:\n${SERVICE_AREAS.primary.map((a) => `• ${a.name}`).join("\n")}`,
      links: [
        { label: `Call to Check: ${COMPANY.phone}`, href: `tel:${COMPANY.phone}` },
        { label: "View All Service Areas", href: "/service-areas" },
      ],
    };
  }

  return {
    text: `📍 **Our Service Areas**\n\nWe serve the **Greater Houston area**, from Clear Lake in the south to Tomball in the north!\n\n**Primary Areas:**\n${SERVICE_AREAS.primary.map((a) => `• ${a.name}`).join("\n")}\n\n**Also serving:** ${SERVICE_AREAS.additional.join(", ")}`,
    links: [
      { label: "View All Areas", href: "/service-areas" },
      { label: "Schedule Service", href: "/contact" },
    ],
    quickReplies: ["Get a quote", "Services offered", "Financing options"],
  };
}

function createFAQResponse(faqIndex: number): ChatResponse {
  const faq = FAQS[faqIndex];
  if (!faq) return createFallbackResponse();

  return {
    text: `❓ **${faq.question}**\n\n${faq.answer}`,
    quickReplies: ["More questions", "Get a quote", "Contact us"],
  };
}

function createGreetingResponse(): ChatResponse {
  return {
    text: `👋 Hi there! Welcome to **${COMPANY.name}**!\n\nI'm here to help you with AC & heating questions. What can I help you with today?`,
    quickReplies: [
      "AC Repair",
      "New AC System",
      "Heating Help",
      "Get a Quote",
      "Service Areas",
    ],
  };
}

function createThanksResponse(): ChatResponse {
  return {
    text: `You're welcome! 😊 Is there anything else I can help you with?\n\nFeel free to ask about our services, pricing, or service areas!`,
    quickReplies: ["Services", "Pricing", "Contact us"],
  };
}

function createHumanResponse(): ChatResponse {
  return {
    text: `Of course! Our team would love to help you directly.\n\n📞 **Call us:** ${COMPANY.phone}\n📧 **Email:** ${COMPANY.email}\n\nOr fill out our contact form and we'll get back to you quickly!`,
    links: [
      { label: `Call: ${COMPANY.phone}`, href: `tel:${COMPANY.phone}` },
      { label: `Email Us`, href: `mailto:${COMPANY.email}` },
      { label: "Contact Form", href: "/contact" },
    ],
  };
}

function createHoursResponse(): ChatResponse {
  return {
    text: `🕐 **Business Hours:**\n\n• ${COMPANY.hours.weekday}\n• ${COMPANY.hours.saturday}\n• ${COMPANY.hours.sunday}\n\n🚨 **${COMPANY.hours.emergency}**\n\nAC emergency? Call us anytime at ${COMPANY.phone}!`,
    links: [
      { label: `Call: ${COMPANY.phone}`, href: `tel:${COMPANY.phone}` },
      { label: "Schedule Service", href: "/contact" },
    ],
    quickReplies: ["Get a quote", "Services", "Service areas"],
  };
}

function createFallbackResponse(): ChatResponse {
  return {
    text: `I'm not quite sure I understood that. 🤔\n\nI can help you with:\n• AC & Heating Repair\n• New System Installation\n• Pricing & Financing\n• Service Areas\n\nOr reach us directly:`,
    links: [
      { label: `Call: ${COMPANY.phone}`, href: `tel:${COMPANY.phone}` },
      { label: `Email: ${COMPANY.email}`, href: `mailto:${COMPANY.email}` },
      { label: "Contact Form", href: "/contact" },
    ],
    quickReplies: ["AC Repair", "New System", "Pricing", "Service Areas"],
  };
}

// ============================================
// MAIN MATCHING FUNCTION
// ============================================

export function matchResponse(userMessage: string): ChatResponse {
  const normalized = normalizeMessage(userMessage);

  // 1. EMERGENCY - Always check first
  if (containsAny(userMessage, EMERGENCY.keywords)) {
    return createEmergencyResponse();
  }

  // 2. PRICING
  if (containsAny(userMessage, PRICING.keywords)) {
    return createPricingResponse();
  }

  // 3. FINANCING
  if (containsAny(userMessage, FINANCING.keywords)) {
    return createFinancingResponse();
  }

  // 4. SERVICES - Check each service
  for (const service of SERVICES) {
    if (containsAny(userMessage, service.keywords)) {
      return createServiceResponse(service.id);
    }
  }

  // 5. SERVICE AREAS
  if (containsAny(userMessage, SERVICE_AREAS.keywords)) {
    const city = extractCityName(userMessage);
    return createServiceAreasResponse(city || undefined);
  }

  // Also check if they mention a specific city without asking about areas
  const mentionedCity = extractCityName(userMessage);
  if (mentionedCity) {
    return createServiceAreasResponse(mentionedCity);
  }

  // 6. FAQs
  for (let i = 0; i < FAQS.length; i++) {
    if (containsAny(userMessage, FAQS[i].keywords)) {
      return createFAQResponse(i);
    }
  }

  // 7. GREETING
  if (containsAny(userMessage, GREETING_KEYWORDS)) {
    return createGreetingResponse();
  }

  // 8. THANKS
  if (containsAny(userMessage, THANKS_KEYWORDS)) {
    return createThanksResponse();
  }

  // 9. HUMAN/REAL PERSON
  if (containsAny(userMessage, HUMAN_KEYWORDS)) {
    return createHumanResponse();
  }

  // 10. HOURS
  if (containsAny(userMessage, HOURS_KEYWORDS)) {
    return createHoursResponse();
  }

  // 11. FALLBACK
  return createFallbackResponse();
}

// Export the greeting for auto-greeting feature
export function getInitialGreeting(): ChatResponse {
  return createGreetingResponse();
}
