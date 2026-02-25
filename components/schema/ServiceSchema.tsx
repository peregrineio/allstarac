interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "HVACBusiness",
      name: "Allstar AC & Heating",
      telephone: "713-943-7283",
      url: "https://allstaractx.com",
    },
    areaServed: {
      "@type": "City",
      name: "Houston",
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
