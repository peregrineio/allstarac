// ===== COMPANY INFO =====
export const COMPANY = {
  name: "Allstar AC & Heating",
  phone: "713-943-7283",
  phoneFormatted: "(713) 943-7283",
  phoneTel: "tel:7139437283",
  email: "allstar.ac.heat@gmail.com",
  license: "TACLB23470E",
  domain: "allstaractx.com",
  url: "https://allstaractx.com",
  address: {
    city: "Houston",
    state: "TX",
    area: "Greater Houston",
  },
  tagline: "Family-owned. Fair pricing. No surprises.",
  description: "Licensed HVAC repair, installation, and maintenance for Houston homeowners.",
} as const;

// ===== SERVICE AREAS =====
export const SERVICE_AREAS = {
  cities: [
    { name: "Clear Lake", slug: "clear-lake", hasPage: true },
    { name: "Friendswood", slug: "friendswood", hasPage: true },
    { name: "Webster", slug: "webster", hasPage: true },
    { name: "League City", slug: "league-city", hasPage: true },
    { name: "Tomball", slug: "tomball", hasPage: true },
    { name: "Humble", slug: "humble", hasPage: true },
    { name: "Spring", slug: "spring", hasPage: true },
  ],
  additionalAreas: [
    "Texas City", "San Leon", "South Houston", "Pasadena", "Pearland"
  ],
} as const;

// ===== SERVICES =====
export const SERVICES = [
  {
    name: "AC Repair",
    slug: "ac-repair",
    href: "/services/ac-repair",
    icon: "Snowflake",
    shortDescription: "Fast, reliable AC repair with upfront pricing.",
  },
  {
    name: "AC Replacement",
    slug: "ac-installation",
    href: "/services/ac-installation",
    icon: "RefreshCw",
    shortDescription: "Expert AC replacement with financing options.",
  },
  {
    name: "AC Installation",
    slug: "ac-installation",
    href: "/services/ac-installation",
    icon: "AirVent",
    shortDescription: "New AC systems with financing available.",
  },
  {
    name: "Heating Repair",
    slug: "heating-repair",
    href: "/services/heating-repair",
    icon: "Flame",
    shortDescription: "Furnace and heat pump repair you can trust.",
  },
  {
    name: "Heating Replacement",
    slug: "heating-installation",
    href: "/services/heating-installation",
    icon: "RefreshCw",
    shortDescription: "Professional heating system replacement.",
  },
  {
    name: "Heating Installation",
    slug: "heating-installation",
    href: "/services/heating-installation",
    icon: "Heater",
    shortDescription: "Professional heating system installation.",
  },
] as const;

// ===== NAVIGATION =====
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "AC Repair", href: "/services/ac-repair" },
      { label: "AC Replacement", href: "/services/ac-installation" },
      { label: "AC Installation", href: "/services/ac-installation" },
      { label: "Heating Repair", href: "/services/heating-repair" },
      { label: "Heating Replacement", href: "/services/heating-installation" },
      { label: "Heating Installation", href: "/services/heating-installation" },
      { label: "Maintenance Plans", href: "/maintenance" },
    ],
  },
  {
    label: "Service Areas",
    children: [
      { label: "All Service Areas", href: "/service-areas" },
      { label: "Clear Lake", href: "/service-areas/clear-lake" },
      { label: "Friendswood", href: "/service-areas/friendswood" },
      { label: "Webster", href: "/service-areas/webster" },
      { label: "League City", href: "/service-areas/league-city" },
    ],
  },
  { label: "Financing", href: "/financing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// ===== SERVICE HOURS =====
export const HOURS = {
  weekday: "Monday - Friday: 8:00 AM - 6:00 PM",
  saturday: "Saturday: 9:00 AM - 2:00 PM",
  sunday: "Sunday: Closed",
  emergency: "Emergency: Available 24/7",
} as const;

// ===== TRUST SIGNALS =====
export const TRUST_SIGNALS = [
  { icon: "ShieldCheck", text: "Licensed & Insured" },
  { icon: "Award", text: "BBB Accredited" },
  { icon: "CreditCard", text: "Financing Available" },
  { icon: "Clock", text: "Same-Day Service" },
] as const;

// ===== TESTIMONIALS =====
export const TESTIMONIALS = [
  {
    quote: "Honest, fair pricing. Leo showed up on time and explained everything before starting. No surprise bill. Finally an HVAC company I can trust.",
    author: "Maria R.",
    location: "Clear Lake",
  },
  {
    quote: "Called in the morning, they were here by lunch. AC was fixed and the price was exactly what they quoted. Will use again.",
    author: "James T.",
    location: "Friendswood",
  },
  {
    quote: "Family-owned and it shows. They treated us like neighbors, not just customers. Highly recommend Allstar.",
    author: "Sandra K.",
    location: "Webster",
  },
] as const;

// ===== FINANCING PARTNERS =====
export const FINANCING_PARTNERS = [
  { name: "Synchrony Bank", slug: "synchrony" },
  { name: "FTL Financing", slug: "ftl" },
] as const;
