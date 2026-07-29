"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { categories, companyInfo } from "@/data";
import { publicAssetPath } from "@/lib/paths";

export function CategoriesSection() {
  const productRangeFloor = Math.floor(companyInfo.productsCount / 10) * 10;

  return (
    <section className="section" aria-labelledby="categories-heading">
      <div className="container">
        <motion.div
          className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between"
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
              {productRangeFloor}+ pharmaceutical and healthcare products organized across {categories.length} product
              categories.
            </p>
          </div>
          <Link
            href="/categories"
            className="inline-flex w-fit flex-shrink-0 items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-4 py-2.5 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100/70 dark:border-blue-800/60 dark:bg-blue-950/35 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-900/45"
          >
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-5 xl:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {categories.slice(0, 5).map((cat, index) => {
            const { colors } = cat;

            return (
              <motion.div
                key={cat.slug}
                className=""
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.97 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <Link
                  href={`/categories/${cat.slug}`}
                  aria-label={`Explore ${cat.name}, ${cat.productCount} products`}
                  className={`group relative block h-[13.5rem] overflow-hidden rounded-[1.5rem] border border-white/90 bg-gradient-to-br ${colors.surface} p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_28px_60px_-36px_rgba(30,64,175,0.45)] dark:border-white/10 dark:hover:border-blue-700/50 sm:h-[15rem] sm:p-5 xl:h-[17rem] xl:p-6`}
                >
                  <span
                    className={`absolute -right-10 top-8 h-36 w-36 rounded-full ${colors.glow} blur-2xl transition-transform duration-700 group-hover:scale-125 sm:h-44 sm:w-44`}
                  />
                  <span className="absolute -right-8 top-7 h-32 w-32 rounded-full border border-white/70 dark:border-white/10 sm:h-40 sm:w-40" />
                  <span className="absolute -right-1 top-16 h-24 w-24 rounded-full border border-white/60 dark:border-white/[0.08] sm:h-28 sm:w-28" />

                  <div className="relative flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${colors.text}`}>
                      Category {String(index + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-300" />
                  </div>

                  <div
                    className={`absolute right-4 top-14 flex h-20 w-20 items-center justify-center rounded-[1.4rem] bg-gradient-to-br ${colors.accent} shadow-[0_18px_35px_-18px_rgba(15,23,42,0.55)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-[1.06] sm:right-6 sm:h-24 sm:w-24 xl:right-5 xl:top-16`}
                  >
                    <Image
                      src={publicAssetPath(cat.image)}
                      alt=""
                      width={54}
                      height={54}
                      className="h-10 w-10 object-contain brightness-0 invert sm:h-12 sm:w-12"
                    />
                  </div>

                  <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5 xl:inset-x-6 xl:bottom-6">
                    <p className={`text-[10px] font-bold uppercase tracking-[0.16em] ${colors.text}`}>
                      {cat.productCount} products
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold tracking-[-0.035em] text-neutral-950 dark:text-white sm:text-2xl">
                      {cat.name}
                    </h3>
                    <span className="mt-2 hidden items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors group-hover:text-blue-700 dark:text-neutral-400 dark:group-hover:text-blue-300 sm:flex">
                      Explore category
                      <span className="h-px w-5 bg-current transition-all duration-300 group-hover:w-8" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
