export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Allstar AC & Heating",
    url: "https://allstaractx.com",
    logo: "https://allstaractx.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-713-943-7283",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
