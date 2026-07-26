import type { MetadataRoute } from "next";
import { categories, newsArticles, products } from "@/data";
import { absoluteSiteUrl } from "@/lib/seo";

export const dynamic = "force-static";

function getCategoryLastModified(categoryName: string) {
  const timestamps = products
    .filter((product) => product.category === categoryName)
    .map((product) => new Date(product.updatedAt).getTime());

  return timestamps.length > 0 ? new Date(Math.max(...timestamps)) : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/accessibility",
    "/careers",
    "/categories",
    "/clinical-studies",
    "/compliance",
    "/contact",
    "/cookies",
    "/distributors",
    "/faq",
    "/medical-education",
    "/medication-guides",
    "/news",
    "/patient-support",
    "/prescribing-info",
    "/privacy",
    "/products",
    "/resources",
    "/resources/clinical-studies",
    "/resources/education",
    "/resources/hcp",
    "/resources/patients",
    "/sustainability",
    "/terms",
  ];

  return [
    ...staticPages.map((page) => ({
      url: absoluteSiteUrl(page || "/"),
    })),
    ...products.map((product) => ({
      url: absoluteSiteUrl(`/products/${product.slug}`),
      lastModified: new Date(product.updatedAt),
    })),
    ...categories.map((category) => ({
      url: absoluteSiteUrl(`/categories/${category.slug}`),
      lastModified: getCategoryLastModified(category.name),
    })),
    ...newsArticles.map((article) => ({
      url: absoluteSiteUrl(`/news/${article.slug}`),
      lastModified: new Date(article.publishDate),
    })),
  ];
}
