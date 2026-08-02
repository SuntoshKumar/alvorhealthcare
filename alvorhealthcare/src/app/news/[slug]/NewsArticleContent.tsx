"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, FileText, UserRound } from "lucide-react";
import { format } from "date-fns";
import type { NewsArticle } from "@/types";
import { publicAssetPath } from "@/lib/paths";

const categoryLabels: Record<string, string> = {
  "product-launch": "Product Launch",
  announcement: "Announcement",
  research: "Research",
  "healthcare-news": "Healthcare News",
  event: "Event",
};

const categoryStyles: Record<string, string> = {
  "product-launch": "bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-200",
  announcement: "bg-primary-100 text-primary-800 dark:bg-primary-950/50 dark:text-primary-200",
  research: "bg-teal-100 text-teal-800 dark:bg-teal-950/50 dark:text-teal-200",
  "healthcare-news": "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-200",
  event: "bg-violet-100 text-violet-800 dark:bg-violet-950/50 dark:text-violet-200",
};

interface NewsArticleContentProps {
  article: NewsArticle;
  relatedArticles: NewsArticle[];
}

export function NewsArticleContent({ article, relatedArticles }: NewsArticleContentProps) {
  const prefersReducedMotion = useReducedMotion();
  const paragraphs = article.content.split("\n\n").filter(Boolean);
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.68, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <article>
        <header className="relative overflow-hidden bg-neutral-900 pt-28 text-white lg:pt-40">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]" aria-hidden="true" />
          <div className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" aria-hidden="true" />

          <div className="container relative pb-14 lg:pb-20">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-lg text-sm font-bold text-primary-100/70 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-primary-300"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to newsroom
            </Link>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <motion.div
                initial={prefersReducedMotion ? false : { y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition}
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-primary-100/60">
                  <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${categoryStyles[article.category]}`}>
                    {categoryLabels[article.category]}
                  </span>
                  <time dateTime={article.publishDate} className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-teal-300" aria-hidden="true" />
                    {format(new Date(article.publishDate), "MMMM d, yyyy")}
                  </time>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-4 w-4 text-teal-300" aria-hidden="true" />
                    {article.readTime} min read
                  </span>
                </div>
                <h1 className="mt-7 text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-7xl">{article.title}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-100/70 sm:text-xl">{article.excerpt}</p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-teal-300">
                    <UserRound className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-white">{article.author}</p>
                    <p className="text-sm text-primary-100/50">Alvor Healthcare</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? false : { x: 32, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.12 }}
                className="relative aspect-[8/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl"
              >
                <Image
                  src={publicAssetPath(article.featuredImage)}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/25 to-transparent" aria-hidden="true" />
              </motion.div>
            </div>
          </div>
        </header>

        <section className="py-14 lg:py-24">
          <div className="container">
            <div className="grid items-start gap-12 lg:grid-cols-[15rem_minmax(0,48rem)] lg:justify-center lg:gap-20">
              <motion.aside
                initial={prefersReducedMotion ? false : { y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/60 lg:sticky lg:top-28"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-400">Article details</p>
                <dl className="mt-5 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Published</dt>
                    <dd className="mt-1 font-bold text-neutral-950 dark:text-white">
                      {format(new Date(article.publishDate), "MMMM d, yyyy")}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Category</dt>
                    <dd className="mt-1 font-bold text-neutral-950 dark:text-white">{categoryLabels[article.category]}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Reading time</dt>
                    <dd className="mt-1 font-bold text-neutral-950 dark:text-white">{article.readTime} minutes</dd>
                  </div>
                </dl>
              </motion.aside>

              <motion.div
                initial={prefersReducedMotion ? false : { y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.08 }}
                className="min-w-0"
              >
                <div className="rounded-2xl border-l-4 border-teal-500 bg-teal-50/70 p-6 text-lg font-semibold leading-8 text-neutral-800 dark:bg-teal-950/20 dark:text-neutral-100">
                  {article.excerpt}
                </div>

                <div className="mt-10 space-y-7">
                  {paragraphs.map((paragraph, index) => (
                    <p
                      key={`${article.id}-${index}`}
                      className={`${index === 0 ? "text-xl leading-9 text-neutral-800 dark:text-neutral-200" : "text-lg leading-8 text-neutral-700 dark:text-neutral-300"}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 rounded-2xl border border-primary-200 bg-primary-50/70 p-6 dark:border-primary-900/60 dark:bg-primary-950/20">
                  <div className="flex items-start gap-3">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary-700 dark:text-primary-300" aria-hidden="true" />
                    <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                      This release reflects information available on its publication date. Product availability,
                      registration status, and approved information may differ by market.
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-2 border-t border-neutral-200 pt-7 dark:border-neutral-800">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-semibold text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </article>

      {relatedArticles.length > 0 && (
        <section className="border-y border-neutral-200 bg-[var(--bg-secondary)] py-16 dark:border-neutral-800 dark:bg-[var(--bg-primary)] lg:py-20" aria-labelledby="related-news">
          <div className="container">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">Continue reading</p>
                <h2 id="related-news" className="mt-3 text-4xl font-bold tracking-[-0.04em] text-neutral-950 dark:text-white">
                  Related stories
                </h2>
              </div>
              <Link href="/news" className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 dark:text-primary-300">
                View newsroom
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedArticles.map((related, index) => (
                <motion.article
                  key={related.id}
                  initial={prefersReducedMotion ? false : { y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ ...transition, delay: prefersReducedMotion ? 0 : index * 0.08 }}
                  className="group overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <Link
                    href={`/news/${related.slug}`}
                    className="grid h-full outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary-400 sm:grid-cols-[13rem_1fr]"
                  >
                    <div className="relative min-h-52 overflow-hidden">
                      <Image
                        src={publicAssetPath(related.featuredImage)}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                        sizes="(min-width: 768px) 208px, 100vw"
                      />
                    </div>
                    <div className="flex flex-col p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary-600 dark:text-primary-400">
                        {categoryLabels[related.category]}
                      </p>
                      <h3 className="mt-3 text-xl font-bold text-neutral-950 transition-colors group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300">
                        {related.title}
                      </h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{related.excerpt}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-primary-700 dark:text-primary-300">
                        Read article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-neutral-950 py-16 text-white dark:bg-black lg:py-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">Alvor newsroom</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">Explore every company update.</h2>
              <p className="mt-4 text-lg leading-8 text-neutral-400">
                Browse announcements, portfolio updates, distribution news, and company developments.
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-neutral-950 outline-none transition-transform hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-white/30"
            >
              Browse all news
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
