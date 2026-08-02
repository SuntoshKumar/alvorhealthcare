"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
} from "lucide-react";
import { ResourceIcon } from "./ResourceIcon";
import type {
  ResourceInformationPage as ResourceInformationPageData,
  ResourceTone,
} from "@/data";

const toneStyles: Record<
  ResourceTone,
  {
    badge: string;
    icon: string;
    iconSoft: string;
    panel: string;
    glow: string;
    line: string;
    accent: string;
  }
> = {
  blue: {
    badge: "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300",
    icon: "bg-primary-600 text-white",
    iconSoft: "bg-primary-50 text-primary-600 dark:bg-primary-950/60 dark:text-primary-300",
    panel: "from-primary-600 to-primary-800",
    glow: "bg-primary-400/25",
    line: "bg-primary-500",
    accent: "bg-primary-500",
  },
  teal: {
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    icon: "bg-teal-600 text-white",
    iconSoft:
      "bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-300",
    panel: "from-teal-600 to-emerald-800",
    glow: "bg-teal-400/25",
    line: "bg-teal-500",
    accent: "bg-teal-500",
  },
  amber: {
    badge:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    icon: "bg-amber-500 text-neutral-950",
    iconSoft:
      "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
    panel: "from-amber-500 to-orange-700",
    glow: "bg-amber-300/25",
    line: "bg-amber-500",
    accent: "bg-amber-500",
  },
  coral: {
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    icon: "bg-rose-500 text-white",
    iconSoft:
      "bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-300",
    panel: "from-rose-500 to-orange-700",
    glow: "bg-rose-300/25",
    line: "bg-rose-500",
    accent: "bg-rose-500",
  },
};

interface ResourceInformationPageProps {
  page: ResourceInformationPageData;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function ResourceInformationPage({ page }: ResourceInformationPageProps) {
  const tone = toneStyles[page.tone];
  const prefersReduced = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-neutral-100 bg-neutral-50 pt-28 pb-16 dark:border-neutral-800 dark:bg-neutral-950 lg:pt-36 lg:pb-24">
        <motion.div
          animate={prefersReduced ? {} : { y: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -right-24 -top-28 h-96 w-96 rounded-full blur-3xl ${tone.glow}`}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.045] dark:opacity-[0.08]"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px]" />
        </div>

        <div className="container relative">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-10 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400"
            aria-label="Breadcrumb"
          >
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Resources
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-neutral-700 dark:text-neutral-200">
              {page.title}
            </span>
          </motion.nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${tone.badge}`}
                >
                  {page.eyebrow}
                </span>
                <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-[-0.045em] text-neutral-950 dark:text-white sm:text-5xl lg:text-6xl">
                  {page.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                  {page.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.15 }}
                >
                  <div className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                    <span>
                      <strong className="text-neutral-900 dark:text-white">
                        Designed for:
                      </strong>{" "}
                      {page.audience}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
            >
              <div
                className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 text-white shadow-xl transition-shadow duration-300 hover:shadow-2xl sm:p-10 ${tone.panel}`}
              >
                <div
                  className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/20 transition-all duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 transition-transform duration-300 group-hover:scale-105">
                    <ResourceIcon name={page.icon} className="h-8 w-8" />
                  </div>
                  <h2 className="mt-12 text-3xl font-bold tracking-tight">
                    {page.overviewTitle}
                  </h2>
                  <p className="mt-4 leading-7 text-white/80">
                    {page.overviewDescription}
                  </p>
                  <Link
                    href={page.primaryAction.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-neutral-900 outline-none transition-all duration-200 hover:bg-neutral-100 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-white/40"
                  >
                    {page.primaryAction.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Topics ── */}
      <section
        className="section bg-white dark:bg-neutral-950"
        aria-labelledby={`${page.slug}-topics`}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">
              How we can help
            </p>
            <h2
              id={`${page.slug}-topics`}
              className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl"
            >
              A clear path to the right information.
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-5 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {page.topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease },
                  },
                }}
              >
                <div className="group relative flex min-h-72 flex-col rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700 dark:hover:shadow-lg">
                  <span className="absolute right-7 top-7 text-xs font-bold tracking-[0.16em] text-neutral-300 dark:text-neutral-700">
                    0{index + 1}
                  </span>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${tone.iconSoft}`}
                  >
                    <ResourceIcon name={topic.icon} className="h-6 w-6" />
                  </div>
                  <div className="mt-auto pt-10">
                    <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                      {topic.title}
                    </h3>
                    <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Notice / CTA ── */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease }}
          >
            <div className="group grid overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:hover:shadow-lg lg:grid-cols-[1fr_auto]">
              <div className="p-7 sm:p-10 lg:p-14">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${tone.iconSoft}`}
                >
                  <ResourceIcon name="shield" className="h-6 w-6" />
                </span>
                <h2 className="mt-7 text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
                  {page.noticeTitle}
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                  {page.noticeDescription}
                </p>
              </div>
              <div
                className={`flex flex-col justify-center gap-3 bg-gradient-to-br p-7 sm:p-10 lg:w-96 ${tone.panel}`}
              >
                <Link
                  href={page.primaryAction.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-neutral-900 outline-none transition-all duration-200 hover:bg-neutral-100 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  {page.primaryAction.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={page.secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/40"
                >
                  {page.secondaryAction.label}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
