import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { newsArticles } from "@/data";
import { format } from "date-fns";

const categoryLabels: Record<string, string> = {
  "product-launch": "Product Launch",
  announcement: "Announcement",
  research: "Research",
  "healthcare-news": "Healthcare News",
  event: "Event",
};

const categoryColors: Record<string, string> = {
  "product-launch": "bg-blue-100 text-blue-700",
  announcement: "bg-purple-100 text-purple-700",
  research: "bg-green-100 text-green-700",
  "healthcare-news": "bg-amber-100 text-amber-700",
  event: "bg-rose-100 text-rose-700",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | Alvor Healthcare`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((a) => a.slug !== slug && (a.category === article.category || a.tags.some((t) => article.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <article>
        <header className="bg-gradient-to-b from-primary-50 via-white to-secondary-50 pt-16 lg:pt-24 pb-12 lg:pb-16">
          <div className="container max-w-4xl">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                {categoryLabels[article.category]}
              </span>
              <time dateTime={article.publishDate} className="text-sm text-neutral-500">
                {format(new Date(article.publishDate), "MMMM d, yyyy")}
              </time>
              <span className="text-sm text-neutral-500">{article.readTime} min read</span>
            </div>
            <h1 className="display-lg lg:display-xl font-bold text-neutral-900 leading-tight mb-4">
              {article.title}
            </h1>
            <p className="body-lg text-neutral-600 max-w-3xl">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-neutral-200">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                {article.author.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-neutral-900">{article.author}</div>
                <div className="text-sm text-neutral-500">Author</div>
              </div>
            </div>
          </div>
        </header>

        <section className="py-12 lg:py-16">
          <div className="container max-w-4xl">
            <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-100 mb-12">
              <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/50 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <p className="text-neutral-500 text-sm font-medium">{article.title}</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-neutral max-w-none">
              <div className="bg-neutral-50 rounded-2xl p-6 lg:p-8 mb-8 border border-neutral-100">
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Article Summary</h2>
                <p className="text-neutral-700 leading-relaxed">{article.excerpt}</p>
              </div>

              <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">Overview</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                {article.title} marks a significant milestone in Alvor Healthcare&apos;s commitment to advancing
                healthcare globally. This development underscores our dedication to innovation, quality,
                and patient-centered care.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {[
                  { label: "Published", value: format(new Date(article.publishDate), "MMMM d, yyyy") },
                  { label: "Category", value: categoryLabels[article.category] },
                  { label: "Author", value: article.author },
                  { label: "Read Time", value: `${article.readTime} minutes` },
                ].map((item) => (
                  <div key={item.label} className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                    <div className="text-sm text-neutral-500 mb-1">{item.label}</div>
                    <div className="font-medium text-neutral-900">{item.value}</div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">Key Highlights</h2>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-600 flex-shrink-0" />
                  <span>Continued commitment to pharmaceutical excellence and global health standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-600 flex-shrink-0" />
                  <span>Strengthening partnerships with healthcare providers across multiple regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-600 flex-shrink-0" />
                  <span>Advancing research and development in therapeutic areas that matter most</span>
                </li>
              </ul>
            </div>

            {article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </article>

      {relatedArticles.length > 0 && (
        <section className="bg-neutral-50 py-16 lg:py-20">
          <div className="container max-w-6xl">
            <h2 className="display-md font-bold text-neutral-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/news/${related.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl border border-neutral-100 p-6 h-full hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[related.category]}`}>
                        {categoryLabels[related.category]}
                      </span>
                      <span className="text-xs text-neutral-500">{related.readTime} min read</span>
                    </div>
                    <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-2 line-clamp-2">{related.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-primary-600 text-white py-16">
        <div className="container text-center max-w-3xl">
          <h2 className="display-md font-bold mb-4">Stay Updated with Alvor Healthcare</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest product launches, research updates, and industry insights.
          </p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
          >
            Browse All News
          </Link>
        </div>
      </section>
    </div>
  );
}
