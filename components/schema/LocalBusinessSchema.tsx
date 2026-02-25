export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Allstar AC & Heating",
    telephone: "713-943-7283",
    email: "allstar.ac.heat@gmail.com",
    url: "https://allstaractx.com",
    areaServed: [
      "Clear Lake, TX",
      "Friendswood, TX",
      "Webster, TX",
      "League City, TX",
      "Houston, TX",
    ],
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "Financing"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "HVAC License",
      identifier: "TACLB23470E",
    },
    sameAs: [],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
