import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data";
import { publicAssetPath } from "@/lib/paths";
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

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
      tags: article.tags,
      images: [{ url: publicAssetPath(article.featuredImage), alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [publicAssetPath(article.featuredImage)],
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

  return <NewsArticleContent article={article} relatedArticles={relatedArticles} />;
}
