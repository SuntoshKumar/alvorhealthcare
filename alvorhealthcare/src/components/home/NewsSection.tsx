"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, Newspaper } from "lucide-react";
import { format } from "date-fns";
import { homeContent, newsArticles } from "@/data";
import { publicAssetPath } from "@/lib/paths";

const categoryLabels: Record<string, string> = {
  "product-launch": "Product Launch",
  announcement: "Announcement",
  research: "Research",
  "healthcare-news": "Healthcare News",
  event: "Event",
};

const categoryStyles: Record<string, string> = {
  "product-launch": "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
  announcement: "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  research: "bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300",
  "healthcare-news": "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  event: "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
};

const articles = [...newsArticles]
  .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
  .slice(0, 3);

export function NewsSection() {
  const content = homeContent.news;
  const prefersReducedMotion = useReducedMotion();
  const [leadArticle, ...briefs] = articles;
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

  if (!leadArticle) return null;

  return (
    <section className="relative overflow-hidden border-y border-neutral-200 bg-[#f4f7f9] py-20 dark:border-neutral-800 dark:bg-[#08111d] lg:py-28" aria-labelledby="home-news-heading">
      <div className="absolute inset-0 opacity-[0.045] dark:opacity-[0.08]" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-800/10" aria-hidden="true" />
      <div className="absolute -bottom-32 left-[8%] h-72 w-72 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-800/10" aria-hidden="true" />

      <div className="container relative">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={prefersReducedMotion ? false : { y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={transition}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              <Newspaper className="h-4 w-4" aria-hidden="true" />
              {content.eyebrow}
            </span>
            <h2 id="home-news-heading" className="mt-3 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-neutral-950 dark:text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              {content.description}
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { x: 20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.08 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold text-neutral-950 shadow-sm outline-none transition-[transform,border-color,color] hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 focus-visible:ring-4 focus-visible:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:border-blue-700 dark:hover:text-blue-300 dark:focus-visible:ring-blue-950"
            >
              {content.linkLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
          <motion.article
            initial={prefersReducedMotion ? false : { y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transition}
            className="group min-w-0 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_28px_70px_-55px_rgba(15,23,42,0.8)] dark:border-neutral-800 dark:bg-neutral-900"
          >
            <Link
              href={`/news/${leadArticle.slug}`}
              className="grid h-full outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-blue-400 sm:grid-cols-[1.08fr_0.92fr] lg:grid-cols-1 xl:grid-cols-[1.08fr_0.92fr]"
              aria-label={`Read featured news: ${leadArticle.title}`}
            >
              <div className="relative min-h-72 overflow-hidden lg:min-h-[23rem]">
                <Image
                  src={publicAssetPath(leadArticle.featuredImage)}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 62vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-neutral-950/35 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  Featured release
                </span>
              </div>

              <div className="flex min-w-0 flex-col justify-center p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                  <span className={`rounded-full px-2.5 py-1 ${categoryStyles[leadArticle.category]}`}>
                    {categoryLabels[leadArticle.category]}
                  </span>
                  <time dateTime={leadArticle.publishDate} className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {format(new Date(leadArticle.publishDate), "MMM d, yyyy")}
                  </time>
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-neutral-950 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 sm:text-3xl">
                  {leadArticle.title}
                </h3>
                <p className="mt-4 line-clamp-3 text-base leading-7 text-neutral-600 dark:text-neutral-300">
                  {leadArticle.excerpt}
                </p>
                <div className="mt-7 flex items-center justify-between gap-4 border-t border-neutral-200 pt-5 dark:border-neutral-800">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    <Clock3 className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                    {leadArticle.readTime} min read
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 dark:text-blue-300">
                    Read story
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>

          <div className="grid gap-5">
            {briefs.map((article, index) => (
              <motion.article
                key={article.id}
                initial={prefersReducedMotion ? false : { x: 28 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.08 + index * 0.08 }}
                className="group min-w-0 overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
              >
                <Link
                  href={`/news/${article.slug}`}
                  className="grid h-full grid-cols-[7.5rem_minmax(0,1fr)] outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-blue-400 sm:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[9rem_minmax(0,1fr)]"
                  aria-label={`Read news article: ${article.title}`}
                >
                  <div className="relative min-h-48 overflow-hidden">
                    <Image
                      src={publicAssetPath(article.featuredImage)}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      sizes="(min-width: 1024px) 144px, (min-width: 640px) 176px, 120px"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold text-neutral-500 dark:text-neutral-400">
                      <span className={`rounded-full px-2 py-1 ${categoryStyles[article.category]}`}>
                        {categoryLabels[article.category]}
                      </span>
                      <time dateTime={article.publishDate}>{format(new Date(article.publishDate), "MMM d, yyyy")}</time>
                    </div>
                    <h3 className="mt-4 text-lg font-bold leading-snug text-neutral-950 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 sm:text-xl">
                      {article.title}
                    </h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 dark:text-blue-300">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
