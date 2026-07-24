"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { homeContent, newsArticles } from "@/data";
import { format } from "date-fns";

const categoryBadge: Record<string, string> = {
  "product-launch": "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  announcement: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  research: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "healthcare-news": "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  event: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
};

const categoryLabel: Record<string, string> = {
  "product-launch": "Product Launch",
  announcement: "Announcement",
  research: "Research",
  "healthcare-news": "Healthcare News",
  event: "Event",
};

export function NewsSection() {
  const articles = newsArticles.slice(0, 3);
  const content = homeContent.news;

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="news-heading">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{content.eyebrow}</span>
            <h2 id="news-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2">
              {content.title}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mt-2 max-w-lg">
              {content.description}
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors flex-shrink-0"
          >
            {content.linkLabel} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="group p-6 rounded-2xl bg-white dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-700/50 hover:border-neutral-200 dark:hover:border-neutral-600 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryBadge[article.category]}`}>
                  {categoryLabel[article.category]}
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-400 dark:text-neutral-500">
                  <Calendar className="w-3 h-3" />
                  {format(new Date(article.publishDate), "MMM d, yyyy")}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 mt-4 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
