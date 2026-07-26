import { companyInfo } from "@/data";

export function OrganizationStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "PharmaceuticalOrganization"],
    name: companyInfo.name,
    description: companyInfo.mission,
    url: "https://alvorhealthcare.com",
    logo: "https://alvorhealthcare.com/images/og-image.svg",
    foundingDate: `${companyInfo.foundedYear}`,
    slogan: companyInfo.tagline,
    areaServed: "Worldwide",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 1200 },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyInfo.contact.phone,
        contactType: "customer service",
        email: companyInfo.contact.email,
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.contact.address,
      addressLocality: companyInfo.contact.city,
      addressRegion: companyInfo.contact.state,
      postalCode: companyInfo.contact.postalCode,
      addressCountry: companyInfo.contact.country,
    },
    sameAs: companyInfo.socialLinks.map((l) => l.url),
    knowsAbout: [
      "Pharmaceutical Distribution",
      "Medicine Supply",
      "Product Documentation",
      "Batch Traceability",
      "Healthcare Products",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Pharmaceutical Products",
        description: "50+ pharmaceutical products across tablets, capsules, syrups, injections, and supplements",
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
