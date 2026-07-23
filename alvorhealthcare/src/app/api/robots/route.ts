import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://alvorhealthcare.com";

  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 10

# Disallow private/admin areas
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/
Disallow: /*.json$

# Host
Host: ${baseUrl}

# Clean param
Clean-param: utm_source&utm_medium&utm_campaign&utm_content&utm_term /products
Clean-param: page&limit&sort&search /products
Clean-param: page&limit&sort&search&category /categories`;

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}