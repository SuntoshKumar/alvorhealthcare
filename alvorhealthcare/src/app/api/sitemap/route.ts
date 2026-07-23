import { NextResponse } from "next/server";
import { products, categories, newsArticles } from "@/data";

const baseUrl = "https://alvorhealthcare.com";

export async function GET() {
  const staticPages = [
    "",
    "/about",
    "/products",
    "/categories",
    "/contact",
    "/news",
  ];

  const productUrls = products
    .filter((p) => p.slug)
    .map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastmod: product.updatedAt,
      changefreq: "monthly" as const,
      priority: product.featured ? 0.9 : 0.7,
    }));

  const categoryUrls = categories
    .filter((c) => c.slug)
    .map((category) => ({
      url: `${baseUrl}/categories/${category.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly" as const,
      priority: 0.8,
    }));

  const newsUrls = newsArticles
    .filter((a) => a.slug && a.publishDate)
    .map((article) => ({
      url: `${baseUrl}/news/${article.slug}`,
      lastmod: article.publishDate,
      changefreq: "monthly" as const,
      priority: article.featured ? 0.8 : 0.6,
    }));

  const allUrls = [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastmod: new Date().toISOString(),
      changefreq: page === "" ? "daily" : "weekly",
      priority: page === "" ? 1.0 : 0.8,
    })),
    ...productUrls,
    ...categoryUrls,
    ...newsUrls,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allUrls
  .filter((u) => u.url && u.lastmod)
  .map(
    (u) => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${new Date(u.lastmod).toISOString().split("T")[0]}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}