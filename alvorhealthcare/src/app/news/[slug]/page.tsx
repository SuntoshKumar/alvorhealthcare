import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbStructuredData, NewsArticleStructuredData } from "@/components/ui/StructuredData";
import { newsArticles } from "@/data";
import { absoluteSiteUrl } from "@/lib/seo";
import { NewsArticleContent } from "./NewsArticleContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const articleUrl = absoluteSiteUrl(`/news/${article.slug}`);
  const imageUrl = absoluteSiteUrl(article.featuredImage);

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: articleUrl,
      siteName: "Alvor Healthcare",
      locale: "en_MM",
      publishedTime: article.publishDate,
      authors: [article.author],
      tags: article.tags,
      images: [{ url: imageUrl, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [imageUrl],
    },
  };
}

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter(
      (item) =>
        item.slug !== slug &&
        (item.category === article.category || item.tags.some((tag) => article.tags.includes(tag)))
    )
    .slice(0, 2);

  return (
    <>
      <NewsArticleStructuredData article={article} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Newsroom", path: "/news" },
          { name: article.title, path: `/news/${article.slug}` },
        ]}
      />
      <NewsArticleContent article={article} relatedArticles={relatedArticles} />
    </>
  );
}
