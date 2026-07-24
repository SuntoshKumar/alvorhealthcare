"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Tablets",
    slug: "tablets",
    count: 14,
    gradient: "from-blue-100 to-blue-300",
    image: "/images/categories/tablet.png",
  },
  {
    name: "Capsules",
    slug: "capsules",
    count: 10,
    gradient: "from-teal-100 to-teal-300",
    image: "/images/categories/capsule.png",
  },
  {
    name: "Syrups",
    slug: "syrups",
    count: 8,
    gradient: "from-emerald-100 to-emerald-300",
    image: "/images/categories/syrup.png",
  },
  {
    name: "Injections",
    slug: "injections",
    count: 10,
    gradient: "from-purple-100 to-purple-300",
    image: "/images/categories/injection.png",
  },
  {
    name: "Supplements",
    slug: "supplements",
    count: 8,
    gradient: "from-amber-100 to-amber-300",
    image: "/images/categories/supplement.png",
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
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
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
