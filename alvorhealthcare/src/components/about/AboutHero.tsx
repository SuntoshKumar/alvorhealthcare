"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, BadgeCheck, Building2, MapPin, PackageSearch, Phone, Sparkles } from "lucide-react";
import { aboutContent, companyInfo } from "@/data";

const easeOut = [0.22, 1, 0.36, 1] as const;

const heroStats = [
  { label: "Primary market", value: "Myanmar", icon: MapPin },
  { label: "Healthcare products", value: `${companyInfo.productsCount}+`, icon: PackageSearch },
  { label: "Contact locations", value: `${companyInfo.contact.locations.length}`, icon: Building2 },
  { label: "Direct phone lines", value: `${companyInfo.contact.phones.length}`, icon: Phone },
];

export function AboutHero() {
  const content = aboutContent.hero;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about-top"
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-[#f4f8ff] pb-12 pt-28 dark:bg-[#07101f] lg:pb-20 lg:pt-32"
      aria-labelledby="about-hero-heading"
    >
      <div className="pharma-grid absolute inset-0 opacity-60 dark:opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_25%,rgba(37,99,235,0.2),transparent_32%),radial-gradient(circle_at_16%_86%,rgba(13,148,136,0.16),transparent_28%)]" aria-hidden="true" />

      <motion.div
        className="absolute -right-20 top-24 h-72 w-72 rounded-full border border-blue-300/30 dark:border-blue-700/30 lg:h-[34rem] lg:w-[34rem]"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -right-2 top-44 h-48 w-48 rounded-full border border-dashed border-teal-300/40 dark:border-teal-700/30 lg:h-[23rem] lg:w-[23rem]"
        animate={prefersReducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: prefersReducedMotion ? 0 : 0.08, ease: easeOut }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur-xl dark:border-blue-800/60 dark:bg-blue-950/35 dark:text-blue-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Yangon & Mandalay
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              {content.eyebrow}
            </motion.div>

            <motion.h1
              id="about-hero-heading"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.2, ease: easeOut }}
              className="max-w-4xl break-words font-display text-[clamp(3rem,6.8vw,6.4rem)] font-bold leading-[0.91] tracking-[-0.065em] text-neutral-950 dark:text-white"
            >
              {content.titlePrefix}
              <span className="mt-2 block pharma-gradient-text">{content.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.32, ease: easeOut }}
              className="mt-7 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg lg:text-xl"
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.44, ease: easeOut }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="#services" className="pharma-button group">
                {content.primaryCtaLabel}
                <ArrowDownRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
              <Link href="#distribution" className="pharma-button-secondary about-hero-secondary">
                {content.secondaryCtaLabel}
              </Link>
            </motion.div>
          </div>

          <div
            className="relative mx-auto w-full max-w-[640px]"
            aria-hidden="true"
          >
            <div className="absolute -inset-12 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.2),rgba(45,212,191,0.08)_42%,transparent_72%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(29,78,216,0.2),rgba(15,118,110,0.08)_44%,transparent_74%)]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 24 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easeOut }}
              className="relative transform-gpu p-2 sm:p-4"
            >
              <div className="flex items-end justify-between px-2 pb-3 sm:px-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Alvor supply network</p>
                  <p className="mt-1 font-display text-xl font-bold text-neutral-950 dark:text-white">From source to care</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200/80 bg-white/55 text-blue-600 shadow-sm backdrop-blur-lg dark:border-blue-700/40 dark:bg-blue-950/35 dark:text-blue-300">
                  <BadgeCheck className="h-5 w-5" />
                </span>
              </div>

              <div className="relative mt-2 aspect-[1.18/1] p-5 sm:p-7">
                <div className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),rgba(45,212,191,0.08)_42%,transparent_70%)] blur-xl dark:bg-[radial-gradient(circle,rgba(37,99,235,0.24),rgba(13,148,136,0.1)_42%,transparent_72%)]" />
                <div className="absolute inset-[7%] rounded-full opacity-45 [background-image:linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] [background-size:38px_38px] [mask-image:radial-gradient(circle,black_25%,transparent_72%)] dark:opacity-25 dark:[background-image:linear-gradient(rgba(147,197,253,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.16)_1px,transparent_1px)]" />
                <div className="absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/35 dark:border-blue-700/20" />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/55 dark:border-blue-500/30"
                  animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 28, delay: 0.9, repeat: Infinity, ease: "linear" }}
                >
                  <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-teal-400 shadow-[0_0_0_8px_rgba(45,212,191,0.12)] dark:border-blue-950" />
                </motion.div>
                <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-200/50 bg-white/28 p-2 shadow-[0_30px_70px_-42px_rgba(30,64,175,0.7)] backdrop-blur-md dark:border-blue-700/30 dark:bg-blue-950/18 sm:h-44 sm:w-44">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-white/85 bg-white/60 text-center backdrop-blur-xl dark:border-white/10 dark:bg-blue-950/48">
                    <div>
                      <p className="font-display text-2xl font-bold text-blue-950 dark:text-white sm:text-3xl">ALVOR</p>
                      <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-200">Healthcare</p>
                    </div>
                  </div>
                </div>
                {["Source", "Verify", "Store", "Deliver"].map((label, index) => (
                  <motion.div
                    key={label}
                    className={[
                      "absolute flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-800 dark:text-blue-200",
                      index === 0 && "left-[7%] top-[16%]",
                      index === 1 && "right-[6%] top-[23%]",
                      index === 2 && "bottom-[16%] left-[7%]",
                      index === 3 && "bottom-[12%] right-[8%]",
                    ].filter(Boolean).join(" ")}
                    animate={prefersReducedMotion ? undefined : { y: index % 2 === 0 ? [-3, 3, -3] : [3, -3, 3] }}
                    transition={{ duration: 4.5 + index * 0.35, delay: 0.8 + index * 0.08, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_0_4px_rgba(45,212,191,0.12)]" />
                    {label}
                  </motion.div>
                ))}
              </div>

              <div className="mx-2 mt-2 grid grid-cols-3 border-t border-blue-200/60 pt-4 dark:border-blue-800/35 sm:mx-3">
                {["Traceable supply", "Document support", "Reliable access"].map((label, index) => (
                  <div key={label} className={`px-2 text-center text-[9px] font-bold uppercase tracking-[0.1em] text-blue-700 dark:text-blue-300 ${index > 0 ? "border-l border-blue-200/60 dark:border-blue-800/35" : ""}`}>
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.78, ease: easeOut }}
          className="mt-14 grid transform-gpu overflow-hidden rounded-[1.6rem] border border-white/80 bg-white/68 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.65)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/55 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4"
        >
          {heroStats.map((stat, index) => (
            <div key={stat.label} className={`flex items-center gap-4 p-5 lg:p-6 ${index > 0 ? "border-t border-blue-100/70 sm:border-l sm:border-t-0 dark:border-blue-900/40" : ""} ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <stat.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
