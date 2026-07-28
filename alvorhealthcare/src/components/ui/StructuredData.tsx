import { companyInfo } from "@/data";
import type { NewsArticle } from "@/types";
import { absoluteSiteUrl } from "@/lib/seo";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function OrganizationStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "PharmaceuticalOrganization"],
    name: companyInfo.name,
    description: companyInfo.mission,
    url: absoluteSiteUrl("/"),
    logo: absoluteSiteUrl("/images/alvor.png"),
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

  return <JsonLd data={schema} />;
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteSiteUrl(item.path),
    })),
  };

  return <JsonLd data={schema} />;
}

export function NewsArticleStructuredData({ article }: { article: NewsArticle }) {
  const articleUrl = absoluteSiteUrl(`/news/${article.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [absoluteSiteUrl(article.featuredImage)],
    datePublished: article.publishDate,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteSiteUrl("/images/alvor.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return <JsonLd data={schema} />;
}
