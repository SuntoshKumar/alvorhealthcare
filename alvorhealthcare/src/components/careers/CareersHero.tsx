"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { careersContent } from "@/data";

export function CareersHero() {
  const { hero } = careersContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-teal-50 dark:from-blue-950/35 dark:via-neutral-950 dark:to-teal-950/25 py-16 lg:py-24" aria-labelledby="careers-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px] text-blue-950 opacity-[0.035] dark:text-blue-100 dark:opacity-[0.06]" aria-hidden="true" />
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-500/10" aria-hidden="true" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                {hero.eyebrow}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Now hiring — New Dermatology &amp; Paediatrics division
              </motion.span>
            </div>

            <motion.h1
              id="careers-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="display-lg lg:display-xl font-bold text-neutral-900 dark:text-white mt-6"
            >
              {hero.titlePrefix}{" "}
              <span className="pharma-gradient-text">{hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="body-lg text-neutral-600 dark:text-neutral-300 mt-5 max-w-xl"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3.5 mt-8"
            >
              <Link
                href={hero.primaryCta.href}
                className="pharma-button inline-flex items-center justify-center gap-2 text-sm"
              >
                {hero.primaryCta.label}
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="pharma-button-secondary inline-flex items-center justify-center gap-2 text-sm"
              >
                {hero.secondaryCta.label}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_28px_70px_-55px_rgba(15,23,42,0.15)] dark:border-neutral-700/50 dark:bg-neutral-800/40 dark:shadow-[0_28px_70px_-55px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-teal-500/5 dark:from-blue-500/10 dark:to-teal-500/10" aria-hidden="true" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                  Life at Alvor
                </p>
                <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-white mb-6">
                  Grow with purpose
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="display-sm font-bold pharma-gradient-text">
                        {stat.value}
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-700/50">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["bg-blue-500", "bg-teal-500", "bg-emerald-500", "bg-amber-500"].map((color, i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded-full ${color} border-2 border-white dark:border-neutral-800 flex items-center justify-center text-[10px] font-bold text-white`}
                        >
                          {["A", "B", "C", "D"][i]}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Join a growing team across Myanmar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
