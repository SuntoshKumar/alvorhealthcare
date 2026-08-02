"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Award,
  BadgeCheck,
  Boxes,
  ChevronDown,
  Globe,
  Shield,
  Sparkles,
} from "lucide-react";
import { homeContent } from "@/data";

const easeOut = [0.22, 1, 0.36, 1] as const;

const entrance = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function PharmaVisual({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.div
      className="relative mx-auto hidden aspect-[4/4.35] w-full max-w-[620px] lg:block"
      initial={{ opacity: 0, scale: 0.94, x: 24 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: easeOut }}
      aria-hidden="true"
    >
      <div className="absolute inset-x-[7%] bottom-[2%] h-[14%] rounded-[50%] bg-primary-950/10 blur-3xl dark:bg-black/35" />
      <div className="absolute inset-x-[12%] bottom-[7%] h-px bg-gradient-to-r from-transparent via-primary-300/45 to-transparent dark:via-primary-600/35" />

      <div className="absolute inset-x-[8%] bottom-[9%] top-[3%]">
        <div className="absolute inset-[-8%] bg-[radial-gradient(ellipse_at_50%_43%,rgba(255,255,255,0.72),rgba(219,234,254,0.22)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_50%_43%,rgba(30,58,138,0.2),rgba(10,15,30,0.08)_44%,transparent_74%)]" />
        <div className="absolute inset-x-[12%] top-[12%] h-px bg-gradient-to-r from-transparent via-primary-300/45 to-transparent dark:via-primary-500/30" />
        <div className="absolute inset-x-[19%] top-[17%] h-px bg-gradient-to-r from-transparent via-teal-300/35 to-transparent dark:via-teal-600/25" />

        <motion.div
          className="absolute left-1/2 top-[15%] h-[58%] w-[58%] -translate-x-1/2 rounded-full border border-primary-200/70 dark:border-primary-600/30"
          animate={reducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-primary-500 shadow-[0_0_0_8px_rgba(14,116,144,0.12)]" />
          <span className="absolute bottom-[9%] left-[10%] h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_0_6px_rgba(45,212,191,0.1)]" />
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-[21%] h-[46%] w-[46%] -translate-x-1/2 rounded-full border border-dashed border-primary-300/60 dark:border-primary-600/30"
          animate={reducedMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute left-[12%] top-[12%] flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.1)]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Reliable medicine access
          </span>
        </div>

        <div className="absolute right-[12%] top-[12%] text-right">
          <p className="font-display text-[10px] font-bold tracking-[0.16em] text-primary-600 dark:text-primary-400">AHC / 01</p>
          <p className="mt-0.5 text-[8px] uppercase tracking-[0.18em] text-neutral-400">Myanmar portfolio</p>
        </div>

        <motion.div
          className="absolute bottom-[15%] left-[24%] h-[51%] w-[31%]"
          animate={reducedMotion ? undefined : { y: [-5, 5, -5], rotate: [-4, -3, -4] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ rotate: -4 }}
        >
          <div className="absolute inset-0 rounded-[1.4rem] border border-white bg-gradient-to-br from-white via-slate-50 to-primary-100 shadow-[18px_28px_45px_-20px_rgba(15,23,42,0.5)] dark:border-primary-200/40 dark:from-slate-100 dark:via-primary-50 dark:to-primary-200">
            <div className="absolute inset-y-0 right-0 w-[13%] rounded-r-[1.35rem] bg-gradient-to-b from-primary-100 to-primary-300 opacity-80" />
            <div className="absolute left-[13%] top-[10%]">
              <p className="font-display text-[clamp(0.78rem,1.4vw,1.05rem)] font-bold tracking-[-0.04em] text-primary-700">
                ALVOR
              </p>
              <p className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Healthcare
              </p>
            </div>
            <div className="absolute left-[13%] top-[32%] h-px w-[52%] bg-primary-200" />
            <div className="absolute left-[13%] top-[39%] max-w-[65%]">
              <p className="text-[clamp(0.62rem,1.1vw,0.82rem)] font-bold leading-tight text-slate-900">
                Trusted Medicines
              </p>
              <p className="mt-1 text-[7px] uppercase tracking-[0.16em] text-slate-400">Distributed portfolio</p>
            </div>
            <div className="absolute bottom-[11%] left-[13%] right-[18%]">
              <div className="mb-2 flex items-center justify-between text-[7px] font-semibold uppercase tracking-[0.12em] text-primary-700">
                <span>Batch tracked</span>
                <span>30 units</span>
              </div>
              <div className="h-7 overflow-hidden rounded-md bg-gradient-to-r from-primary-600 via-primary-500 to-teal-400">
                <div className="h-full w-1/2 border-r border-white/35 bg-white/10" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[14%] right-[24%] h-[36%] w-[20%]"
          animate={reducedMotion ? undefined : { y: [5, -5, 5], rotate: [5, 4, 5] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ rotate: 5 }}
        >
          <div className="absolute left-1/2 top-0 h-[13%] w-[58%] -translate-x-1/2 rounded-t-md bg-gradient-to-b from-slate-300 to-slate-500 shadow-md" />
          <div className="absolute left-1/2 top-[10%] h-[10%] w-[44%] -translate-x-1/2 bg-primary-700" />
          <div className="absolute inset-x-[8%] bottom-0 top-[17%] overflow-hidden rounded-[0.8rem_0.8rem_1.5rem_1.5rem] border border-white/80 bg-gradient-to-br from-white/95 via-primary-50/90 to-primary-200/80 shadow-[14px_24px_35px_-18px_rgba(15,23,42,0.55)]">
            <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-primary-500/35 to-transparent" />
            <div className="absolute inset-x-[16%] top-[30%] rounded-lg border border-primary-100 bg-white/80 px-1 py-2 text-center">
              <p className="font-display text-[clamp(0.55rem,1vw,0.72rem)] font-bold text-primary-700">AHC</p>
              <p className="mt-0.5 text-[6px] font-bold uppercase tracking-[0.15em] text-slate-400">Supply 01</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[10%] left-1/2 h-px w-[58%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-400/60 to-transparent"
          animate={reducedMotion ? undefined : { opacity: [0.35, 1, 0.35], scaleX: [0.86, 1, 0.86] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="absolute left-0 top-[27%] flex origin-left scale-[0.82] items-center gap-2.5 rounded-2xl border border-white/85 bg-white/78 px-3.5 py-3 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-900/78 sm:scale-100"
        animate={reducedMotion ? undefined : { y: [-6, 6, -6] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-500/20">
          <Boxes className="h-4.5 w-4.5" />
        </span>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-400">Sourcing network</p>
          <p className="mt-0.5 text-xs font-bold text-neutral-900 dark:text-white">Source to care</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[17%] right-0 flex origin-right scale-[0.82] items-center gap-2.5 rounded-2xl border border-white/85 bg-white/78 px-3.5 py-3 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-900/78 sm:scale-100"
        animate={reducedMotion ? undefined : { y: [6, -6, 6] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
          <BadgeCheck className="h-4.5 w-4.5" />
        </span>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-400">Supply checked</p>
          <p className="mt-0.5 text-xs font-bold text-neutral-900 dark:text-white">Documentation ready</p>
        </div>
      </motion.div>

      <div className="absolute right-[9%] top-[20%] rounded-full border border-primary-200/80 bg-white/70 p-2.5 text-primary-600 shadow-lg backdrop-blur-xl dark:border-primary-700/50 dark:bg-primary-950/60 dark:text-primary-400">
        <Activity className="h-4 w-4" />
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const hero = homeContent.hero;
  const trustIcons = [Shield, Award, Globe];
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = Boolean(prefersReducedMotion);

  return (
    <section
      className="pharma-hero relative flex min-h-[92svh] items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="pharma-grid absolute inset-0 opacity-65 dark:opacity-25" aria-hidden="true" />
      <motion.div
        className="absolute -right-32 top-8 h-[32rem] w-[32rem] rounded-full bg-primary-300/25 blur-3xl dark:bg-primary-800/20"
        animate={reducedMotion ? undefined : { scale: [1, 1.12, 1], x: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-teal-200/25 blur-3xl dark:bg-teal-900/15"
        animate={reducedMotion ? undefined : { scale: [1.1, 0.95, 1.1], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="container relative z-10 py-14 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 xl:gap-16">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: reducedMotion ? 0 : 0.11, delayChildren: 0.08 }}
          >
            <motion.div
              variants={entrance}
              transition={{ duration: 0.65, ease: easeOut }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200/80 bg-white/65 px-3.5 py-2 text-xs font-semibold text-primary-700 shadow-sm backdrop-blur-xl dark:border-primary-800/60 dark:bg-primary-950/35 dark:text-primary-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {hero.eyebrow}
              <span className="h-1 w-1 rounded-full bg-primary-300" />
              Yangon & Mandalay
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={entrance}
              transition={{ duration: 0.75, ease: easeOut }}
              className="max-w-2xl break-words font-display text-[clamp(2.65rem,5.2vw,5.25rem)] font-bold leading-[0.96] tracking-[-0.055em] text-neutral-950 dark:text-white"
            >
              {hero.titlePrefix}{" "}
              <span className="pharma-gradient-text">{hero.titleHighlight}</span>
              <span className="mt-2 block">{hero.titleSuffix}</span>
            </motion.h1>

            <motion.p
              variants={entrance}
              transition={{ duration: 0.7, ease: easeOut }}
              className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg lg:text-xl"
            >
              {hero.description}
            </motion.p>

            <motion.div
              variants={entrance}
              transition={{ duration: 0.7, ease: easeOut }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link href={hero.primaryCta.href} className="pharma-button group">
                {hero.primaryCta.label}
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href={hero.secondaryCta.href} className="pharma-button-secondary">
                {hero.secondaryCta.label}
              </Link>
            </motion.div>

            <motion.div
              variants={entrance}
              transition={{ duration: 0.7, ease: easeOut }}
              className="mt-9 grid max-w-xl gap-3 border-t border-primary-100/80 pt-6 dark:border-primary-900/40 sm:grid-cols-3"
            >
              {hero.trustBadges.map((badge, index) => {
                const Icon = trustIcons[index] ?? Shield;
                return (
                  <div key={badge} className="flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-semibold leading-tight text-neutral-600 dark:text-neutral-300">{badge}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <PharmaVisual reducedMotion={reducedMotion} />
        </div>
      </div>

      <motion.a
        href="#home-stats"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400 lg:flex"
        animate={reducedMotion ? undefined : { y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to company statistics"
      >
        Discover
        <ChevronDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
