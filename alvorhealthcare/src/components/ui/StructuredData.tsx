import { companyInfo } from "@/data";

export function OrganizationStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "PharmaceuticalOrganization"],
    name: companyInfo.name,
    description: companyInfo.mission,
    url: "https://alvorhealthcare.com",
    logo: "https://alvorhealthcare.com/images/og-image.svg",
    slogan: companyInfo.tagline,
    areaServed: {
      "@type": "Country",
      name: "Myanmar",
    },
    contactPoint: companyInfo.contact.phones.map((phone) => ({
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "customer service",
        email: companyInfo.contact.email,
        availableLanguage: ["English"],
      })),
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
      "Medical Supplies",
      "Diagnostic Products",
      "Consumer Healthcare",
      "Healthcare Product Marketing",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Pharmaceutical Products",
        description: "Pharmaceutical products, medical supplies, diagnostic products, vitamins, supplements, and over-the-counter healthcare products",
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
