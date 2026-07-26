"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Building2,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Globe,
  Leaf,
  MapPin,
  Shield,
  Target,
  Truck,
  Zap,
} from "lucide-react";
import { aboutContent } from "@/data";

const historyIcons = {
  building: Building2,
  flask: FlaskConical,
  award: Award,
  globe: Globe,
  target: Target,
  zap: Zap,
  shield: Shield,
  leaf: Leaf,
  truck: Truck,
};

const milestones = aboutContent.history.milestones.map((item) => ({
  ...item,
  icon: historyIcons[item.icon as keyof typeof historyIcons] ?? Building2,
}));

export function AboutHistory() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const content = aboutContent.history;

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -380 : 380,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section id="history" className="relative scroll-mt-32 overflow-hidden bg-[#071b2f] py-20 text-white sm:py-24 lg:py-32" aria-labelledby="history-heading">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:54px_54px]" aria-hidden="true" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" aria-hidden="true" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
              <MapPin className="h-3.5 w-3.5" />
              {content.eyebrow}
            </span>
            <h2 id="history-heading" className="mt-4 font-display text-[clamp(2.7rem,5.4vw,5rem)] font-bold leading-[0.95] tracking-[-0.055em]">
              {content.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/75 sm:text-lg">{content.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-colors hover:border-blue-300/50 hover:bg-white/15"
              aria-label="View earlier milestones"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-colors hover:border-blue-300/50 hover:bg-white/15"
              aria-label="View later milestones"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[2.9rem] hidden h-px bg-gradient-to-r from-blue-400/20 via-teal-300/80 to-blue-400/20 sm:block" aria-hidden="true" />
          <div
            ref={scrollRef}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 pt-1 scrollbar-hide sm:-mx-6 sm:gap-5 sm:px-6 lg:-mx-10 lg:px-10"
          >
            {milestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : Math.min(index * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
                  className="group relative w-[82vw] max-w-[350px] shrink-0 snap-start pt-8 sm:w-[330px]"
                >
                  <div className="absolute left-7 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-[0_16px_30px_-14px_rgba(45,212,191,0.7)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-2">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex h-full min-h-[285px] flex-col rounded-[1.6rem] border border-white/10 bg-white/[0.065] p-7 pt-11 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-teal-300/30 group-hover:bg-white/[0.095]">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-display text-3xl font-bold tracking-[-0.04em] text-white">{item.year}</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/60">
                        Chapter {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-xl font-bold tracking-[-0.025em] text-white">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-blue-100/65">{item.description}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                      <span className="font-medium text-blue-200/55">{item.statLabel}</span>
                      <span className="font-bold uppercase tracking-[0.1em] text-teal-300">{item.statValue}</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-blue-100/55 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>{milestones.length} defining milestones across more than two decades.</p>
          <p className="font-semibold text-teal-300">Built deliberately. Improved continuously.</p>
        </motion.div>
      </div>
    </section>
  );
}
