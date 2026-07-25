import type { MetadataRoute } from "next";
import { categories, newsArticles, products } from "@/data";

export const dynamic = "force-static";

const baseUrl = "https://alvorhealthcare.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/products",
    "/categories",
    "/contact",
    "/news",
    "/resources",
    "/privacy",
    "/terms",
    "/cookies",
    "/accessibility",
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? ("daily" as const) : ("weekly" as const),
      priority: page === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(product.updatedAt),
      changeFrequency: "monthly" as const,
      priority: product.featured ? 0.9 : 0.7,
    })),
    ...categories.map((category) => ({
      url: `${baseUrl}/categories/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...newsArticles.map((article) => ({
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: new Date(article.publishDate),
      changeFrequency: "monthly" as const,
      priority: article.featured ? 0.8 : 0.6,
    })),
  ];
}
