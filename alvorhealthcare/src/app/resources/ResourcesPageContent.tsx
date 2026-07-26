"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  FileText,
  MessageCircleQuestion,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ResourceIcon } from "@/components/resources/ResourceIcon";
import { resourceCollections, type ResourceTone } from "@/data";

const toneStyles: Record<
  ResourceTone,
  { icon: string; border: string; wash: string; label: string; accent: string }
> = {
  blue: {
    icon: "bg-blue-600 text-white",
    border: "border-blue-200/80 dark:border-blue-900/70",
    wash: "from-blue-50 to-white dark:from-blue-950/35 dark:to-neutral-900",
    label: "text-blue-600 dark:text-blue-400",
    accent: "bg-blue-500",
  },
  teal: {
    icon: "bg-teal-600 text-white",
    border: "border-teal-200/80 dark:border-teal-900/70",
    wash: "from-teal-50 to-white dark:from-teal-950/35 dark:to-neutral-900",
    label: "text-teal-600 dark:text-teal-400",
    accent: "bg-teal-500",
  },
  amber: {
    icon: "bg-amber-400 text-neutral-950",
    border: "border-amber-200/80 dark:border-amber-900/70",
    wash: "from-amber-50 to-white dark:from-amber-950/35 dark:to-neutral-900",
    label: "text-amber-700 dark:text-amber-400",
    accent: "bg-amber-500",
  },
  coral: {
    icon: "bg-rose-500 text-white",
    border: "border-rose-200/80 dark:border-rose-900/70",
    wash: "from-rose-50 to-white dark:from-rose-950/35 dark:to-neutral-900",
    label: "text-rose-600 dark:text-rose-400",
    accent: "bg-rose-500",
  },
};

const quickLinks = [
  {
    title: "Find a product",
    description: "Browse the complete product portfolio.",
    href: "/products",
    icon: Search,
  },
  {
    title: "Medication guides",
    description: "Read clear patient-focused information.",
    href: "/medication-guides",
    icon: FileText,
  },
  {
    title: "Quality & compliance",
    description: "Review our standards and commitments.",
    href: "/compliance",
    icon: ShieldCheck,
  },
  {
    title: "Common questions",
    description: "Get answers and find the right next step.",
    href: "/faq",
    icon: MessageCircleQuestion,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ResourcesPageContent() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      {/* ── Hero ── */}
      <section className="relative border-b border-neutral-100 bg-[#f7f8f4] pt-28 pb-16 dark:border-neutral-800 dark:bg-neutral-950 lg:pt-40 lg:pb-24">
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>
        <motion.div
          animate={prefersReduced ? {} : { y: [-6, 6, -6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[7%] top-28 h-48 w-48 rounded-full bg-teal-300/20 blur-3xl"
          aria-hidden="true"
        />
        <motion.div
          animate={prefersReduced ? {} : { y: [5, -5, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[6%] top-12 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="container relative">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-700 shadow-sm backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  Knowledge, made useful
                </span>
                <h1 className="mt-7 max-w-4xl text-5xl font-bold tracking-[-0.055em] text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl">
                  Healthcare information for the moments that matter.
                </h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
            >
              <div className="border-l-2 border-blue-600 pl-6 dark:border-blue-400">
                <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                  Find product references, patient guidance, clinical
                  information pathways, and professional learning through one
                  clear resource library.
                </p>
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                  {["Clear pathways", "Audience focused", "Easy to navigate"].map(
                    (item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          ease,
                          delay: 0.35 + i * 0.1,
                        }}
                        className="inline-flex items-center gap-2"
                      >
                        <Check className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                        {item}
                      </motion.span>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Resource Pathways (Collection Cards) ── */}
      <section
        className="section bg-white dark:bg-neutral-950"
        aria-labelledby="resource-pathways"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease }}
            className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                Choose your pathway
              </p>
              <h2
                id="resource-pathways"
                className="mt-3 text-4xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-5xl"
              >
                Built around who you are.
              </h2>
            </div>
            <div>
              <p className="max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                Each collection brings the most relevant information forward,
                without making you search through everything else.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {resourceCollections.map((collection, index) => {
              const tone = toneStyles[collection.tone];

              return (
                <motion.div
                  key={collection.slug}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.65, ease },
                    },
                  }}
                >
                  <Link
                    href={collection.href}
                    className={`group relative flex h-full min-h-[23rem] flex-col overflow-hidden rounded-[2rem] border bg-gradient-to-br p-7 shadow-[0_22px_60px_-48px_rgba(15,23,42,0.65)] outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-40px_rgba(15,23,42,0.7)] focus-visible:ring-4 focus-visible:ring-blue-200 dark:focus-visible:ring-blue-900/60 sm:p-9 ${tone.border} ${tone.wash}`}
                  >
                    <div
                      className={`absolute inset-y-0 left-0 w-1 transition-all duration-300 group-hover:w-1.5 ${tone.accent}`}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-current opacity-[0.07] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.12]"
                      aria-hidden="true"
                    />
                    <div className="relative flex items-start justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105 ${tone.icon}`}
                      >
                        <ResourceIcon
                          name={collection.icon}
                          className="h-7 w-7"
                        />
                      </div>
                      <span
                        className={`text-xs font-bold uppercase tracking-[0.16em] ${tone.label}`}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <div className="relative mt-auto pt-16">
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.16em] ${tone.label}`}
                      >
                        {collection.eyebrow}
                      </p>
                      <h3 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
                        {collection.shortTitle}
                      </h3>
                      <p className="mt-4 max-w-xl leading-7 text-neutral-600 dark:text-neutral-300">
                        {collection.description}
                      </p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {collection.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-full border border-neutral-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold text-neutral-600 backdrop-blur-sm transition-colors duration-200 group-hover:border-neutral-300/80 group-hover:bg-white dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-black"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <span className="mt-8 inline-flex items-center gap-2 border-t border-neutral-200/70 pt-5 text-sm font-bold text-neutral-950 dark:border-neutral-700/70 dark:text-white">
                        Explore collection
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Quick Access ── */}
      <section
        className="section bg-neutral-950 text-white dark:bg-neutral-900"
        aria-labelledby="quick-access"
      >
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="lg:sticky lg:top-28">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, ease }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-400">
                    Quick access
                  </p>
                  <h2
                    id="quick-access"
                    className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
                  >
                    Go straight to the answer.
                  </h2>
                  <p className="mt-5 max-w-md text-lg leading-8 text-neutral-400">
                    The most requested destinations, gathered into one direct
                    route.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="divide-y divide-white/10 border-y border-white/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {quickLinks.map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease },
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    className="group grid gap-5 py-7 outline-none transition-colors duration-200 hover:bg-white/[0.03] focus-visible:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-400 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:px-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-teal-300 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-105">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm text-neutral-400">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-neutral-500 transition-all duration-300 group-hover:text-teal-400 group-hover:translate-x-1 sm:block" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-[#eef6f3] dark:bg-teal-950/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease }}
          >
            <div className="grid items-center gap-10 rounded-[2rem] border border-teal-200/60 bg-white/70 p-7 shadow-sm backdrop-blur-sm dark:border-teal-900/60 dark:bg-neutral-900/60 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">
                  Need a hand?
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                  We can help you find the right information.
                </h2>
                <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                  Contact Alvor Healthcare if you cannot locate a resource or
                  need help directing a product, medical, or support enquiry.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-bold text-white outline-none transition-all duration-200 hover:bg-neutral-800 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-neutral-300 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:ring-neutral-700"
              >
                Contact our team
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
