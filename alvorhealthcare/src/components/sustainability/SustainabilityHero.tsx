"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const scopeItems = [
  "Shipment and route planning",
  "Packaging and handling review",
  "Inventory and expiry visibility",
  "Supplier and logistics engagement",
];

export function SustainabilityHero() {
  const prefersReducedMotion = useReducedMotion();
  const enterY = prefersReducedMotion ? 0 : 24;

  return (
    <section className="relative overflow-hidden border-b border-emerald-100/70 bg-gradient-to-b from-green-50 via-white to-emerald-50 pb-20 pt-28 dark:border-emerald-900/30 dark:from-emerald-950/35 dark:via-neutral-950 dark:to-teal-950/25 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px] text-emerald-950 opacity-[0.035] dark:text-emerald-100 dark:opacity-[0.06]" aria-hidden="true" />
      <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-green-300/20 blur-3xl dark:bg-emerald-500/10" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-500/10" aria-hidden="true" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: enterY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: prefersReducedMotion ? 0 : 0.08, ease: easeOut }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/75 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-800/60 dark:bg-neutral-900/70 dark:text-emerald-300"
            >
              <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
              Responsible distribution
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: enterY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.2, ease: easeOut }}
              className="mt-7 max-w-4xl font-display text-[clamp(3.25rem,7vw,6.25rem)] font-bold leading-[0.92] tracking-[-0.06em] text-neutral-950 dark:text-white"
            >
              Better supply decisions, made deliberately.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: enterY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.32, ease: easeOut }}
              className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300"
            >
              We focus on the parts of sustainability a pharmaceutical distributor can directly influence:
              logistics, packaging stewardship, product handling, and responsible partner engagement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: enterY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.44, ease: easeOut }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#initiatives"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_16px_35px_-18px_rgba(5,150,105,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 dark:bg-emerald-500 dark:text-neutral-950 dark:hover:bg-emerald-400 dark:focus-visible:ring-emerald-900"
              >
                Explore our approach
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact?inquiryType=partnership&subject=Responsible%20distribution"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white/70 px-5 py-3.5 text-sm font-bold text-neutral-800 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-white dark:hover:border-emerald-700 dark:hover:text-emerald-300 dark:focus-visible:ring-emerald-900"
              >
                Discuss a partnership
              </Link>
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-300/25 to-teal-300/10 blur-2xl dark:from-emerald-500/15 dark:to-teal-500/5" aria-hidden="true" />
            <motion.div
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.94, x: prefersReducedMotion ? 0 : 24 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: prefersReducedMotion ? 0 : 0.2, ease: easeOut }}
              className="relative transform-gpu overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_32px_90px_-50px_rgba(5,150,105,0.65)] backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80 sm:p-8"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-5 dark:border-neutral-800">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">Our scope</p>
                  <p className="mt-1 font-display text-2xl font-bold text-neutral-950 dark:text-white">Where we can act</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                  <Leaf className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {scopeItems.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center gap-4 rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/70 dark:border-neutral-800 dark:bg-neutral-950/55 dark:hover:border-emerald-800 dark:hover:bg-emerald-950/20"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-emerald-700 shadow-sm ring-1 ring-neutral-100 transition-colors group-hover:ring-emerald-200 dark:bg-neutral-900 dark:text-emerald-300 dark:ring-neutral-800">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
