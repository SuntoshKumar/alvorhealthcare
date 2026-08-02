"use client";

import { startTransition, useDeferredValue, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  FileText,
  Search,
  Sparkles,
  Tag,
  X,
} from "lucide-react";
import { format } from "date-fns";
import { newsArticles } from "@/data";
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
  announcement: "bg-primary-50 text-primary-700 dark:bg-primary-950/40 dark:text-primary-300",
  research: "bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300",
  "healthcare-news": "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  event: "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
};

const sortedArticles = [...newsArticles].sort(
  (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
);

export function NewsPageContent() {
  const prefersReducedMotion = useReducedMotion();
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());

  const featuredArticle = sortedArticles.find((article) => article.featured) ?? sortedArticles[0];
  const availableCategories = Array.from(new Set(sortedArticles.map((article) => article.category)));
  const isDefaultView = category === "all" && deferredSearch.length === 0;

  const filteredArticles = sortedArticles.filter((article) => {
    const matchesCategory = category === "all" || article.category === category;
    const matchesSearch =
      !deferredSearch ||
      article.title.toLowerCase().includes(deferredSearch) ||
      article.excerpt.toLowerCase().includes(deferredSearch) ||
      article.tags.some((tag) => tag.toLowerCase().includes(deferredSearch));

    return matchesCategory && matchesSearch;
  });

  const visibleArticles = isDefaultView
    ? filteredArticles.filter((article) => article.id !== featuredArticle.id)
    : filteredArticles;

  const updateCategory = (nextCategory: string) => {
    startTransition(() => setCategory(nextCategory));
  };

  const clearFilters = () => {
    setSearch("");
    startTransition(() => setCategory("all"));
  };

  const revealTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-br from-neutral-50 via-white to-secondary-50 pt-28 dark:border-white/10 dark:from-[var(--bg-primary)] dark:via-[var(--bg-secondary)] dark:to-[var(--bg-primary)] lg:pt-40">
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-25 [background-image:linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:56px_56px] dark:[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]"
          aria-hidden="true"
        />
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-500/20"
          aria-hidden="true"
        />
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [8, -8, 8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-48 left-[8%] h-96 w-96 rounded-full bg-teal-300/10 blur-3xl dark:bg-teal-400/15"
          aria-hidden="true"
        />

        <div className="container relative pb-12 lg:pb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-700 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-white/[0.07] dark:text-primary-100">
                <Sparkles className="h-4 w-4 text-primary-600 dark:text-teal-300" aria-hidden="true" />
                Alvor newsroom
              </span>
            </motion.div>

            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
              className="mt-7 text-5xl font-bold tracking-[-0.055em] text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl"
            >
              Healthcare
              <span className="block text-primary-600 dark:text-primary-300">news & updates</span>
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-primary-100/70"
            >
              Company announcements, portfolio updates, distribution quality
              milestones, and the partnerships shaping our work in healthcare.
            </motion.p>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.24 }}
            className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.42fr]"
          >
            <div className="space-y-4">
              <label className="relative block">
                <span className="sr-only">Search news articles</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" aria-hidden="true" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by headline, topic, or keyword..."
                  className="h-14 w-full rounded-2xl border border-neutral-200 bg-white pl-12 pr-12 text-sm font-medium text-neutral-950 shadow-sm outline-none transition-[border-color,box-shadow,background-color] placeholder:text-neutral-400 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-primary-700 dark:focus:ring-primary-950"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-neutral-400 outline-none hover:bg-neutral-100 hover:text-neutral-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </label>

              <div className="flex flex-wrap gap-2" aria-label="Filter by category">
                <button
                  type="button"
                  onClick={() => updateCategory("all")}
                  aria-pressed={category === "all"}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold outline-none transition-all focus-visible:ring-2 focus-visible:ring-primary-500 ${
                    category === "all"
                      ? "bg-neutral-950 text-white shadow-md dark:bg-white dark:text-neutral-950"
                      : "border border-neutral-200 text-neutral-600 hover:border-primary-300 hover:text-primary-700 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-primary-800 dark:hover:text-primary-300"
                  }`}
                >
                  All news
                  <span className="ml-1.5 opacity-60">{sortedArticles.length}</span>
                </button>
                {availableCategories.map((categoryName) => (
                  <button
                    key={categoryName}
                    type="button"
                    onClick={() => updateCategory(categoryName)}
                    aria-pressed={category === categoryName}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold outline-none transition-all focus-visible:ring-2 focus-visible:ring-primary-500 ${
                      category === categoryName
                        ? "bg-neutral-950 text-white shadow-md dark:bg-white dark:text-neutral-950"
                        : "border border-neutral-200 text-neutral-600 hover:border-primary-300 hover:text-primary-700 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-primary-800 dark:hover:text-primary-300"
                    }`}
                  >
                    {categoryLabels[categoryName]}
                    <span className="ml-1.5 opacity-60">
                      {sortedArticles.filter((a) => a.category === categoryName).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-primary-100/50">
                Latest headlines
              </p>
              {sortedArticles.slice(0, 2).map((article, i) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-neutral-100 bg-white/70 p-3 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md dark:border-neutral-800 dark:bg-white/[0.03] dark:hover:border-primary-800"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-[11px] font-bold text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-1 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300">
                      {article.title}
                    </p>
                    <span className="text-[11px] text-neutral-400 dark:text-neutral-500">
                      {format(new Date(article.publishDate), "MMM d")} · {article.readTime} min read
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary-600 dark:text-neutral-600 dark:group-hover:text-primary-400" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {featuredArticle && (
        <section className="relative z-10 bg-[var(--bg-secondary)] py-10 dark:bg-[var(--bg-primary)] lg:py-14" aria-labelledby="featured-story">
          <div className="container">
            <motion.article
              initial={prefersReducedMotion ? false : { y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={revealTransition}
              className="group grid overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_30px_80px_-55px_rgba(15,23,42,0.7)] dark:border-neutral-800 dark:bg-neutral-900 lg:grid-cols-[1.18fr_0.82fr]"
            >
              <Link
                href={`/news/${featuredArticle.slug}`}
                className="relative min-h-72 overflow-hidden outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary-400 lg:min-h-[31rem]"
                aria-label={`Read featured story: ${featuredArticle.title}`}
              >
                <Image
                  src={publicAssetPath(featuredArticle.featuredImage)}
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/35 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-neutral-950/35 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  Featured release
                </span>
              </Link>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                  <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${categoryStyles[featuredArticle.category]}`}>
                    {categoryLabels[featuredArticle.category]}
                  </span>
                  <time dateTime={featuredArticle.publishDate} className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {format(new Date(featuredArticle.publishDate), "MMMM d, yyyy")}
                  </time>
                </div>
                <h2 id="featured-story" className="mt-6 text-3xl font-bold tracking-[-0.035em] text-neutral-950 dark:text-white sm:text-4xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-neutral-600 dark:text-neutral-300 sm:text-lg">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-7 flex items-center justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                    <Clock3 className="h-4 w-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                    {featuredArticle.readTime} min read
                  </span>
                  <Link
                    href={`/news/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 text-sm font-bold text-white outline-none transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-700 focus-visible:ring-4 focus-visible:ring-primary-200 dark:bg-white dark:text-neutral-950 dark:hover:bg-primary-300 dark:focus-visible:ring-primary-900"
                  >
                    Read story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      <section className="py-16 dark:bg-neutral-950 lg:py-24" aria-labelledby="news-archive">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">News archive</p>
              <h2 id="news-archive" className="mt-3 text-4xl font-bold tracking-[-0.04em] text-neutral-950 dark:text-white sm:text-5xl">
                {isDefaultView ? "More from Alvor" : "Search results"}
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300" aria-live="polite">
                {filteredArticles.length} {filteredArticles.length === 1 ? "story" : "stories"} available
              </p>
            </div>

            {(search || category !== "all") && (
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-neutral-500 dark:text-neutral-400">Active filters:</span>
                {search && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium dark:border-neutral-700 dark:bg-neutral-900">
                    &quot;{search}&quot;
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="ml-0.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                      aria-label="Remove search filter"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </span>
                )}
                {category !== "all" && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium dark:border-neutral-700 dark:bg-neutral-900">
                    {categoryLabels[category]}
                    <button
                      type="button"
                      onClick={() => updateCategory("all")}
                      className="ml-0.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                      aria-label="Remove category filter"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </span>
                )}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleArticles.map((article, index) => (
                <motion.article
                  layout
                  key={article.id}
                  initial={prefersReducedMotion ? false : { y: 24, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -14, scale: 0.985 }}
                  transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : index * 0.06 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_18px_55px_-46px_rgba(15,23,42,0.75)] dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <Link
                    href={`/news/${article.slug}`}
                    className="grid h-full outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary-400 sm:grid-cols-[13rem_1fr]"
                    aria-label={`Read article: ${article.title}`}
                  >
                    <div className="relative min-h-56 overflow-hidden sm:min-h-full">
                      <Image
                        src={publicAssetPath(article.featuredImage)}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                        sizes="(min-width: 768px) 208px, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 to-transparent sm:bg-gradient-to-r" aria-hidden="true" />
                    </div>
                    <div className="flex min-w-0 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                        <span className={`rounded-full px-2.5 py-1 ${categoryStyles[article.category]}`}>
                          {categoryLabels[article.category]}
                        </span>
                        <time dateTime={article.publishDate}>{format(new Date(article.publishDate), "MMM d, yyyy")}</time>
                      </div>
                      <h3 className="mt-5 text-xl font-bold tracking-tight text-neutral-950 transition-colors group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300">
                        {article.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{article.excerpt}</p>
                      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                          <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                          {article.readTime} min
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 dark:text-primary-300">
                          Read article
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {visibleArticles.length === 0 && (
            <motion.div
              initial={prefersReducedMotion ? false : { y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 rounded-[2rem] border border-dashed border-neutral-300 bg-neutral-50 px-6 py-16 text-center dark:border-neutral-700 dark:bg-neutral-900/60"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-sm dark:bg-neutral-800 dark:text-primary-300">
                <FileText className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-neutral-950 dark:text-white">No matching stories</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Try another keyword or return to the complete archive.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 text-sm font-bold text-white outline-none hover:bg-primary-700 focus-visible:ring-4 focus-visible:ring-primary-200 dark:bg-white dark:text-neutral-950 dark:hover:bg-primary-300"
              >
                <Tag className="h-4 w-4" aria-hidden="true" />
                View all news
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary-50 py-16 dark:bg-teal-950/25 lg:py-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-teal-700/10" aria-hidden="true" />
        <div className="container relative">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">Media and company enquiries</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-neutral-950 dark:text-white sm:text-4xl">
                Need context beyond the release?
              </h2>
              <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                Contact our team for company information, product enquiries, partnership discussions, or media requests.
              </p>
            </div>
            <Link
              href="/contact?inquiryType=media&subject=Newsroom%20enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-bold text-white outline-none transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-teal-800 focus-visible:ring-4 focus-visible:ring-teal-300 dark:bg-white dark:text-neutral-950 dark:hover:bg-teal-200"
            >
              Contact our team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
