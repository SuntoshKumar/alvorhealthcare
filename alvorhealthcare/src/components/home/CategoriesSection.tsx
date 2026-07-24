"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Tablets",
    slug: "tablets",
    count: 14,
    gradient: "from-blue-500 to-blue-600",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    name: "Capsules",
    slug: "capsules",
    count: 10,
    gradient: "from-teal-500 to-teal-600",
    icon: "M7 16.5c0-.828.672-1.5 1.5-1.5h7c.828 0 1.5.672 1.5 1.5v2.5c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5v-2.5zM7 9.5c0-.828.672-1.5 1.5-1.5h7c.828 0 1.5.672 1.5 1.5v2.5c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5v-2.5z",
  },
  {
    name: "Syrups",
    slug: "syrups",
    count: 8,
    gradient: "from-emerald-500 to-emerald-600",
    icon: "M12 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2h4a2 2 0 002-2v-2M10 12a2 2 0 100-4 2 2 0 000 4zM19 14v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4",
  },
  {
    name: "Injections",
    slug: "injections",
    count: 10,
    gradient: "from-purple-500 to-purple-600",
    icon: "M15 12H9m12 0a9 9 0 10-18 0 9 9 0 0018 0zM9 12l2 2 4-4",
  },
  {
    name: "Supplements",
    slug: "supplements",
    count: 8,
    gradient: "from-amber-500 to-amber-600",
    icon: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",
  },
];

export function CategoriesSection() {
  return (
    <section className="section" aria-labelledby="categories-heading">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Categories</span>
            <h2 id="categories-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2">
              Explore Our Product Range
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mt-2 max-w-lg">
              50+ pharmaceutical products organized across 6 therapeutic categories to meet diverse healthcare needs.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex-shrink-0"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.slug}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.97 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <Link
                href={`/categories/${cat.slug}`}
                className="pharma-card group relative block rounded-2xl border border-neutral-100 bg-white p-6 text-center dark:border-neutral-700/50 dark:bg-neutral-800/50 lg:p-8"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-neutral-900 dark:text-white text-sm lg:text-base">
                  {cat.name}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{cat.count} products</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
