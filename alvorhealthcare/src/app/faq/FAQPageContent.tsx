"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";
import { faqContent } from "@/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function FAQPageContent() {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const prefersReduced = useReducedMotion();

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const filteredFaqs = faqContent.categories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50 pt-28 pb-16 dark:from-primary-950/35 dark:via-neutral-950 dark:to-teal-950/25 lg:pt-40 lg:pb-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px] text-primary-950 opacity-[0.035] dark:text-primary-100 dark:opacity-[0.06]"
          aria-hidden="true"
        />
        <motion.div
          animate={prefersReduced ? {} : { y: [-6, 6, -6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-28 h-64 w-64 rounded-full bg-primary-300/20 blur-3xl dark:bg-primary-500/10"
          aria-hidden="true"
        />
        <motion.div
          animate={prefersReduced ? {} : { y: [5, -5, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-500/10"
          aria-hidden="true"
        />

        <div className="container relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-700 shadow-sm backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200">
              <Sparkles className="h-3.5 w-3.5 text-primary-600 dark:text-primary-400" />
              Help centre
            </span>
            <h1 className="mt-7 display-lg lg:display-xl font-bold text-neutral-900 dark:text-white">
              {faqContent.hero.title}
            </h1>
            <p className="mt-5 body-lg text-neutral-600 dark:text-neutral-300">
              {faqContent.hero.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
          >
            <div className="relative max-w-lg mx-auto mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 dark:text-neutral-500" />
              <input
                type="search"
                placeholder={faqContent.hero.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input pl-12 pr-4 py-3.5"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ List ── */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container max-w-3xl">
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {filteredFaqs.map((category) => (
              <motion.div
                key={category.category}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease },
                  },
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-md">
                    <HelpCircle className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="heading-xl font-bold text-neutral-900 dark:text-white">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.items.map((item) => {
                    const key = `${category.category}:${item.question}`;
                    const isOpen = openItems.has(key);

                    return (
                      <div
                        key={key}
                        className="group rounded-2xl border border-neutral-100 bg-white transition-all duration-300 hover:border-neutral-200 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-neutral-700"
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-500"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-neutral-900 dark:text-white pr-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                            {item.question}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown className="w-5 h-5 text-neutral-400 dark:text-neutral-500" />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-neutral-100 dark:border-neutral-800">
                                <div className="mx-6 my-5 h-0.5 w-12 rounded-full bg-gradient-to-r from-primary-500 to-teal-500" />
                                <p className="-mt-3 px-6 pb-5 text-neutral-600 leading-relaxed dark:text-neutral-300">
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Empty state ── */}
          <AnimatePresence>
            {filteredFaqs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease }}
                className="text-center py-16"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                  <Search className="h-7 w-7 text-neutral-400 dark:text-neutral-500" />
                </div>
                <p className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  No results found
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 mb-6">
                  No FAQs match &ldquo;{search}&rdquo;. Try a different search term.
                </p>
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="pharma-button"
                >
                  Clear search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
