"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { ResourceIcon } from "./ResourceIcon";
import type { ResourceCollection, ResourceTone } from "@/data";

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

interface ResourceDetailPageProps {
  collection: ResourceCollection;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function ResourceDetailPage({ collection }: ResourceDetailPageProps) {
  const tone = toneStyles[collection.tone];
  const prefersReduced = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-neutral-100 bg-neutral-50 pt-28 pb-16 dark:border-neutral-800 dark:bg-neutral-950 lg:pt-36 lg:pb-24">
        <motion.div
          animate={prefersReduced ? {} : { y: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-20 right-[-8rem] h-96 w-96 rounded-full blur-3xl ${tone.glow}`}
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
              {collection.shortTitle}
            </span>
          </motion.nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${tone.badge}`}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  {collection.eyebrow}
                </span>
                <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-[-0.045em] text-neutral-950 dark:text-white sm:text-5xl lg:text-6xl">
                  {collection.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                  {collection.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.12 }}
              >
                <div className="mt-8 flex flex-wrap gap-3">
                  {collection.highlights.map((highlight, i) => (
                    <motion.span
                      key={highlight}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        ease,
                        delay: 0.25 + i * 0.08,
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
                    >
                      <Check className="h-4 w-4 text-teal-500" />
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
            >
              <div
                className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br p-7 text-white shadow-xl transition-shadow duration-300 hover:shadow-2xl sm:p-9 ${tone.panel}`}
              >
                <div
                  className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/20 transition-all duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="mb-14 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                      <ResourceIcon
                        name={collection.icon}
                        className="h-7 w-7"
                      />
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white/70">
                    {collection.featured.meta}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight">
                    {collection.featured.title}
                  </h2>
                  <p className="mt-3 max-w-md leading-7 text-white/80">
                    {collection.featured.description}
                  </p>
                  <Link
                    href={collection.featured.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-neutral-900 outline-none transition-all duration-200 hover:bg-neutral-100 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-white/40"
                  >
                    Contact our team
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Audience bar ── */}
      <div className="border-b border-neutral-100 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <div className="container flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Designed for
          </p>
          <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
            {collection.audience}
          </p>
        </div>
      </div>

      {/* ── Sections ── */}
      {collection.sections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={
            sectionIndex % 2 === 0
              ? "section bg-white dark:bg-neutral-950"
              : "section bg-neutral-50 dark:bg-neutral-900/40"
          }
          aria-labelledby={`${collection.slug}-section-${sectionIndex}`}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, ease }}
              className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">
                  {section.eyebrow}
                </span>
                <h2
                  id={`${collection.slug}-section-${sectionIndex}`}
                  className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl"
                >
                  {section.title}
                </h2>
              </div>
              <div>
                <p className="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300 lg:ml-auto lg:text-lg">
                  {section.description}
                </p>
              </div>
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
              {section.items.map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 32 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease },
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    className="group flex h-full min-h-72 flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_48px_-42px_rgba(15,23,42,0.55)] outline-none transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_24px_56px_-36px_rgba(15,23,42,0.6)] focus-visible:ring-4 focus-visible:ring-primary-200 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700 dark:hover:shadow-[0_24px_56px_-36px_rgba(15,23,42,0.4)] dark:focus-visible:ring-primary-900/60 sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${tone.iconSoft}`}
                      >
                        <ResourceIcon
                          name={item.icon}
                          className="h-6 w-6"
                        />
                      </div>
                      <ExternalLink className="h-4 w-4 text-neutral-400 transition-all duration-300 group-hover:text-primary-500 group-hover:-translate-y-0.5 dark:text-neutral-600" />
                    </div>
                    <div className="mt-auto pt-10">
                      {item.meta && (
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
                          {item.meta}
                        </p>
                      )}
                      <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── CTA Banner ── */}
      <section className="px-4 pb-20 pt-6 dark:bg-neutral-950 sm:px-6 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease }}
          className={`group container relative overflow-hidden rounded-[2rem] bg-gradient-to-br px-6 py-12 text-white transition-shadow duration-300 hover:shadow-2xl sm:px-10 lg:px-16 lg:py-16 ${tone.panel}`}
        >
          <div
            className="absolute right-0 top-0 h-full w-1/2 opacity-20 transition-all duration-500 group-hover:opacity-30"
            aria-hidden="true"
          >
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:22px_22px]" />
          </div>
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 transition-transform duration-300 group-hover:scale-105">
                <ResourceIcon name="message" className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {collection.supportTitle}
              </h2>
              <p className="mt-4 leading-7 text-white/80">
                {collection.supportDescription}
              </p>
            </div>
            <Link
              href={collection.supportHref}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-neutral-900 outline-none transition-all duration-200 hover:bg-neutral-100 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-white/40"
            >
              {collection.supportLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
