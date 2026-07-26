import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const githubPagesUrl =
  repositoryOwner && repositoryName
    ? repositoryName.endsWith(".github.io")
      ? `https://${repositoryOwner.toLowerCase()}.github.io`
      : `https://${repositoryOwner.toLowerCase()}.github.io/${repositoryName}`
    : null;

export const siteUrl = (
  configuredSiteUrl ||
  (process.env.GITHUB_ACTIONS === "true" ? githubPagesUrl : null) ||
  "https://suntoshkumar.github.io/alvorhealthcare"
).replace(/\/+$/, "");

export function absoluteSiteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  image?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  openGraphTitle = title,
  openGraphDescription = description,
  image = "/images/og-image.png",
}: PageMetadataOptions): Metadata {
  const canonicalUrl = absoluteSiteUrl(path);
  const imageUrl = absoluteSiteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_MM",
      url: canonicalUrl,
      siteName: "Alvor Healthcare",
      title: openGraphTitle,
      description: openGraphDescription,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: "Alvor Healthcare" }],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description: openGraphDescription,
      images: [imageUrl],
    },
  };
}
