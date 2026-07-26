"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Award, BadgeCheck, Globe, PackageSearch, ShieldCheck, Sparkles } from "lucide-react";
import { aboutContent, companyInfo } from "@/data";

const easeOut = [0.22, 1, 0.36, 1] as const;

const heroStats = [
  { label: "Years of excellence", value: companyInfo.experienceYears, suffix: "+", icon: Award },
  { label: "Healthcare products", value: companyInfo.productsCount, suffix: "+", icon: PackageSearch },
  { label: "Countries reached", value: companyInfo.countriesServed, suffix: "+", icon: Globe },
  { label: "Supply controls", value: companyInfo.qualityStandards.length, suffix: "", icon: ShieldCheck },
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 1, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur-xl dark:border-blue-800/60 dark:bg-blue-950/35 dark:text-blue-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Since {companyInfo.foundedYear}
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              {content.eyebrow}
            </motion.div>

            <motion.h1
              id="about-hero-heading"
              variants={{ hidden: { opacity: 1, y: 26 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.75, ease: easeOut }}
              className="max-w-4xl break-words font-display text-[clamp(3rem,6.8vw,6.4rem)] font-bold leading-[0.91] tracking-[-0.065em] text-neutral-950 dark:text-white"
            >
              {content.titlePrefix}
              <span className="mt-2 block pharma-gradient-text">{content.titleHighlight}</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 1, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="mt-7 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg lg:text-xl"
            >
              {content.description}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 1, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.65, ease: easeOut }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="#history" className="pharma-button group">
                {content.primaryCtaLabel}
                <ArrowDownRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
              <Link href="#distribution" className="pharma-button-secondary about-hero-secondary">
                {content.secondaryCtaLabel}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 34, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
            className="relative mx-auto w-full max-w-[640px]"
            aria-hidden="true"
          >
            <div className="absolute -inset-8 rounded-[4rem] bg-blue-400/15 blur-3xl dark:bg-blue-700/15" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white/72 p-5 shadow-[0_45px_110px_-55px_rgba(30,64,175,0.75)] backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-950/70 sm:p-7">
              <div className="flex items-center justify-between border-b border-blue-100/80 pb-5 dark:border-blue-900/40">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Alvor supply network</p>
                  <p className="mt-1 font-display text-xl font-bold text-neutral-950 dark:text-white">From source to care</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/25">
                  <BadgeCheck className="h-5 w-5" />
                </span>
              </div>

              <div className="relative mt-6 aspect-[1.18/1] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900 p-5 text-white sm:p-7">
                <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:38px_38px]" />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/25"
                  animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                >
                  <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300 shadow-[0_0_0_8px_rgba(94,234,212,0.12)]" />
                </motion.div>
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-center shadow-2xl backdrop-blur-xl sm:h-36 sm:w-36">
                  <div>
                    <p className="font-display text-2xl font-bold sm:text-3xl">ALVOR</p>
                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-blue-200">Healthcare</p>
                  </div>
                </div>
                {["Source", "Verify", "Store", "Deliver"].map((label, index) => (
                  <motion.div
                    key={label}
                    className={[
                      "absolute rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur-lg",
                      index === 0 && "left-[7%] top-[16%]",
                      index === 1 && "right-[6%] top-[23%]",
                      index === 2 && "bottom-[16%] left-[7%]",
                      index === 3 && "bottom-[12%] right-[8%]",
                    ].filter(Boolean).join(" ")}
                    animate={prefersReducedMotion ? undefined : { y: index % 2 === 0 ? [-3, 3, -3] : [3, -3, 3] }}
                    transition={{ duration: 4.5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {label}
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {["Traceable supply", "Document support", "Reliable access"].map((label) => (
                  <div key={label} className="rounded-xl bg-blue-50 px-2 py-3 text-center text-[10px] font-bold uppercase tracking-[0.08em] text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5, ease: easeOut }}
          className="mt-14 grid overflow-hidden rounded-[1.6rem] border border-white/80 bg-white/68 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.65)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/55 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4"
        >
          {heroStats.map((stat, index) => (
            <div key={stat.label} className={`flex items-center gap-4 p-5 lg:p-6 ${index > 0 ? "border-t border-blue-100/70 sm:border-l sm:border-t-0 dark:border-blue-900/40" : ""} ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <stat.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
                  {stat.value}{stat.suffix}
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
