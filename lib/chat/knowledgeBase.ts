// Allstar AC & Heating - Chatbot Knowledge Base
// All information the chatbot knows about the company

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  license: string;
  founded: number;
  yearsInBusiness: string;
  owners: string;
  type: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
    emergency: string;
  };
}

export interface ServiceInfo {
  id: string;
  name: string;
  description: string;
  features: string[];
  keywords: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

export interface ServiceArea {
  name: string;
  hasPage: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface FinancingInfo {
  partners: string[];
  features: string[];
  keywords: string[];
}

export interface PricingInfo {
  philosophy: string[];
  keywords: string[];
}

export interface EmergencyInfo {
  available: string;
  response: string;
  keywords: string[];
}

// ============================================
// COMPANY INFORMATION
// ============================================

export const COMPANY: CompanyInfo = {
  name: "Allstar AC & Heating",
  phone: "713-943-7283",
  email: "allstar.ac.heat@gmail.com",
  license: "TACLB23470E",
  founded: 2006,
  yearsInBusiness: "19+",
  owners: "Leo & Gicela",
  type: "Family-owned and operated",
  hours: {
    weekday: "Mon-Fri 8am-6pm",
    saturday: "Sat 9am-2pm",
    sunday: "Sun Closed",
    emergency: "24/7 Emergency Service Available",
  },
};

// ============================================
// SERVICES
// ============================================

export const SERVICES: ServiceInfo[] = [
  {
    id: "ac-repair",
    name: "AC Repair",
    description: "Fast, reliable AC repair with upfront pricing.",
    features: [
      "Diagnose honestly, quote before starting",
      "No hidden fees, no upselling",
      "Same-day service available",
      "Work on ALL brands",
    ],
    keywords: [
      "ac repair",
      "ac broken",
      "ac not working",
      "ac won't turn on",
      "no cold air",
      "ac blowing hot",
      "air conditioner",
      "fix ac",
      "ac emergency",
      "ac problem",
      "cooling",
      "a/c",
      "airconditioner",
      "hvac",
      "ac unit",
      "ac not cooling",
    ],
  },
  {
    id: "ac-installation",
    name: "AC Installation / Replacement",
    description: "New AC systems professionally installed.",
    features: [
      "Right-sized for your home",
      "Free estimates",
      "Financing available (Synchrony Bank & FTL)",
      "0% APR options",
    ],
    keywords: [
      "new ac",
      "replace ac",
      "ac installation",
      "new system",
      "ac replacement",
      "install",
      "new unit",
      "upgrade ac",
      "new air conditioner",
      "ac install",
    ],
  },
  {
    id: "heating-repair",
    name: "Heating Repair",
    description: "Furnace and heat pump repair with honest pricing.",
    features: [
      "Same honest pricing as AC",
      "All brands serviced",
      "Fast response times",
    ],
    keywords: [
      "heating",
      "heater",
      "furnace",
      "heat pump",
      "no heat",
      "heater not working",
      "furnace repair",
      "heat broken",
      "heating problem",
      "heater broken",
    ],
  },
  {
    id: "heating-installation",
    name: "Heating Installation / Replacement",
    description: "New furnace and heat pump installation.",
    features: [
      "Professional installation",
      "Financing available",
      "Free estimates",
    ],
    keywords: [
      "new heater",
      "new furnace",
      "heating installation",
      "replace heater",
      "replace furnace",
      "new heating",
      "furnace install",
      "heat pump install",
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance",
    description: "Preventive maintenance plans to keep your system running.",
    features: [
      "Extends system life",
      "Improves efficiency",
      "Prevents costly breakdowns",
    ],
    keywords: [
      "maintenance",
      "tune up",
      "tune-up",
      "checkup",
      "service plan",
      "preventive",
      "annual service",
      "maintenance plan",
      "hvac maintenance",
    ],
  },
];

// ============================================
// SERVICE AREAS
// ============================================

export const SERVICE_AREAS: {
  primary: ServiceArea[];
  additional: string[];
  region: string;
  keywords: string[];
} = {
  primary: [
    { name: "Clear Lake", hasPage: true },
    { name: "Friendswood", hasPage: true },
    { name: "Webster", hasPage: true },
    { name: "League City", hasPage: true },
    { name: "Tomball", hasPage: false },
    { name: "Humble", hasPage: false },
    { name: "Spring", hasPage: false },
  ],
  additional: [
    "Texas City",
    "San Leon",
    "South Houston",
    "Pasadena",
    "Pearland",
  ],
  region: "Greater Houston — from Clear Lake in the south to Tomball in the north",
  keywords: [
    "service area",
    "do you come to",
    "do you serve",
    "my area",
    "location",
    "where",
    "zip code",
    "near me",
    "come to my house",
    "my city",
  ],
};

// ============================================
// FINANCING
// ============================================

export const FINANCING: FinancingInfo = {
  partners: ["Synchrony Bank", "FTL Financing"],
  features: [
    "0% APR options available",
    "Flexible monthly payments",
    "Quick approval",
    "For new system installations",
  ],
  keywords: [
    "financing",
    "payment plan",
    "afford",
    "monthly payments",
    "0% apr",
    "credit",
    "pay over time",
    "finance",
    "cost",
    "payment options",
    "finance options",
  ],
};

// ============================================
// PRICING
// ============================================

export const PRICING: PricingInfo = {
  philosophy: [
    "Free estimates on new installations",
    "Quote BEFORE starting — no surprise bills",
    "What we quote is what you pay",
    "No hidden fees, no upselling",
    "Diagnostic fee for repairs (applied to repair cost if you proceed)",
  ],
  keywords: [
    "price",
    "pricing",
    "cost",
    "how much",
    "estimate",
    "quote",
    "expensive",
    "cheap",
    "affordable",
    "rate",
    "fee",
    "rates",
    "charges",
  ],
};

// ============================================
// EMERGENCY
// ============================================

export const EMERGENCY: EmergencyInfo = {
  available: "24/7",
  response: "Same-day service available",
  keywords: [
    "emergency",
    "urgent",
    "asap",
    "right now",
    "today",
    "ac down",
    "no ac",
    "ac died",
    "ac stopped",
    "broken",
    "help",
    "immediately",
    "now",
    "tonight",
    "this weekend",
  ],
};

// ============================================
// FAQs
// ============================================

export const FAQS: FAQItem[] = [
  {
    question: "Do you work on all brands?",
    answer:
      "Yes! We work on ALL brands. If it heats or cools your home, we service it. The only exception is commercial chillers — we don't service those.",
    keywords: ["brands", "all brands", "my brand", "what brands"],
  },
  {
    question: "How fast can you come out?",
    answer: `Same-day service in most cases! Call us at ${COMPANY.phone} and we'll get you on the schedule.`,
    keywords: ["how fast", "when can you come", "how soon", "today", "quick"],
  },
  {
    question: "Are you licensed?",
    answer: `Yes! Our license number is ${COMPANY.license}. We're fully licensed, insured, and BBB accredited.`,
    keywords: ["licensed", "license", "insured", "accredited", "bbb", "legit"],
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! Free estimates on new installations. For repairs, a diagnostic fee applies but it gets credited toward the repair cost if you proceed with the work.",
    keywords: ["free estimate", "free quote", "estimates"],
  },
  {
    question: "Who are Leo and Gicela?",
    answer:
      "Leo and Gicela are the husband-and-wife team who have owned Allstar since 2006. Real people, not a call center. Family-owned and operated!",
    keywords: ["leo", "gicela", "owners", "who owns", "family"],
  },
  {
    question: "Do I need to be home?",
    answer:
      "For most repairs, yes — we need access to your system. For outdoor unit work, sometimes we can work while you're away. Just let us know your situation!",
    keywords: ["be home", "home", "there", "present", "need to be"],
  },
  {
    question: "What's your warranty?",
    answer:
      "We stand behind our work. New installations include both manufacturer warranty and labor warranty. Ask us about the specifics for your project!",
    keywords: ["warranty", "guarantee", "guaranteed"],
  },
];

// ============================================
// TESTIMONIALS
// ============================================

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Honest, fair pricing. No surprise bill. Finally an HVAC company I can trust.",
    author: "Maria R.",
    location: "Clear Lake",
  },
  {
    quote:
      "Called in the morning, here by lunch. Price exactly what they quoted.",
    author: "James T.",
    location: "Friendswood",
  },
  {
    quote: "Family-owned and it shows. Treated us like neighbors.",
    author: "Sandra K.",
    location: "Webster",
  },
];

// ============================================
// KEYWORD CATEGORIES
// ============================================

export const GREETING_KEYWORDS = [
  "hi",
  "hello",
  "hey",
  "howdy",
  "good morning",
  "good afternoon",
  "good evening",
  "sup",
  "yo",
  "hiya",
];

export const THANKS_KEYWORDS = [
  "thank you",
  "thanks",
  "thx",
  "appreciate",
  "ty",
];

export const HUMAN_KEYWORDS = [
  "talk to someone",
  "real person",
  "human",
  "speak to someone",
  "call me",
  "representative",
  "agent",
  "talk to a person",
];

export const HOURS_KEYWORDS = [
  "hours",
  "open",
  "when",
  "business hours",
  "closed",
  "operating hours",
  "schedule",
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getAllKeywords(): {
  category: string;
  keywords: string[];
}[] {
  return [
    { category: "emergency", keywords: EMERGENCY.keywords },
    { category: "pricing", keywords: PRICING.keywords },
    { category: "financing", keywords: FINANCING.keywords },
    { category: "service_areas", keywords: SERVICE_AREAS.keywords },
    { category: "greeting", keywords: GREETING_KEYWORDS },
    { category: "thanks", keywords: THANKS_KEYWORDS },
    { category: "human", keywords: HUMAN_KEYWORDS },
    { category: "hours", keywords: HOURS_KEYWORDS },
    ...SERVICES.map((s) => ({ category: `service_${s.id}`, keywords: s.keywords })),
    ...FAQS.map((f, i) => ({ category: `faq_${i}`, keywords: f.keywords })),
  ];
}

export function getServiceByKeyword(keyword: string): ServiceInfo | undefined {
  const lowerKeyword = keyword.toLowerCase();
  return SERVICES.find((service) =>
    service.keywords.some((k) => lowerKeyword.includes(k))
  );
}

export function getFAQByKeyword(keyword: string): FAQItem | undefined {
  const lowerKeyword = keyword.toLowerCase();
  return FAQS.find((faq) =>
    faq.keywords.some((k) => lowerKeyword.includes(k))
  );
}

export function isInServiceArea(cityName: string): boolean {
  const lowerCity = cityName.toLowerCase();
  const allAreas = [
    ...SERVICE_AREAS.primary.map((a) => a.name.toLowerCase()),
    ...SERVICE_AREAS.additional.map((a) => a.toLowerCase()),
  ];
  return allAreas.some((area) => lowerCity.includes(area) || area.includes(lowerCity));
}

// Important notes
export const NOTES = {
  brandsServiced: "We work on ALL brands",
  notServiced: "We do NOT service commercial chillers",
};
