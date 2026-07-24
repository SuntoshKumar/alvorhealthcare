"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, Globe, HandHeart, HeartPulse, Leaf, Lightbulb, Shield, Target } from "lucide-react";
import { aboutContent, companyInfo } from "@/data";

const missionIcons = {
  shield: Shield,
  award: Award,
  lightbulb: Lightbulb,
  heart: HeartPulse,
  globe: Globe,
  leaf: Leaf,
};

const missionVision = [
  { icon: Target, eyebrow: "Why we exist", title: "Our Mission", description: companyInfo.mission, accent: "blue" },
  { icon: Lightbulb, eyebrow: "Where we are going", title: "Our Vision", description: companyInfo.vision, accent: "teal" },
  { icon: HandHeart, eyebrow: "How we work", title: "Our Values", description: aboutContent.mission.valuesSummary, accent: "blue" },
];

export function AboutMission() {
  const content = aboutContent.mission;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="mission" className="relative scroll-mt-32 overflow-hidden bg-white py-20 dark:bg-neutral-950 sm:py-24 lg:py-32" aria-labelledby="mission-heading">
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent dark:via-blue-900" aria-hidden="true" />
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Our foundation</span>
            <h2 id="mission-heading" className="mt-4 max-w-lg font-display text-[clamp(2.5rem,5vw,4.6rem)] font-bold leading-[0.96] tracking-[-0.055em] text-neutral-950 dark:text-white">
              Principles that stay constant as we grow.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-600 dark:text-neutral-300 lg:text-lg">
              {content.description} They connect scientific ambition with the responsibility of serving patients.
            </p>
            <div className="mt-8 h-px w-24 bg-gradient-to-r from-blue-600 to-teal-400" />
          </motion.div>

          <div>
            <div className="space-y-4">
              {missionVision.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, delay: prefersReducedMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={prefersReducedMotion ? undefined : { x: 5 }}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-neutral-200/80 bg-neutral-50/80 p-6 transition-colors hover:border-blue-200 hover:bg-blue-50/55 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-blue-800/70 dark:hover:bg-blue-950/20 sm:p-8"
                >
                  <div className={`absolute inset-y-0 left-0 w-1 ${item.accent === "teal" ? "bg-teal-500" : "bg-blue-600"}`} />
                  <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
                    <span className={`flex h-13 w-13 items-center justify-center rounded-2xl ${item.accent === "teal" ? "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"}`}>
                      <item.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">{item.eyebrow}</p>
                      <h3 className="mt-1 font-display text-2xl font-bold tracking-[-0.03em] text-neutral-950 dark:text-white">{item.title}</h3>
                      <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-300">{item.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">Everyday decisions</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-neutral-950 dark:text-white sm:text-3xl">{content.valuesTitle}</h3>
                </div>
                <span className="hidden text-sm text-neutral-400 sm:block">Six commitments, one standard</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {content.coreValues.map((value, index) => {
                  const Icon = missionIcons[value.icon as keyof typeof missionIcons] ?? Shield;
                  return (
                    <motion.article
                      key={value.title}
                      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : (index % 2) * 0.07 }}
                      className="group flex gap-4 rounded-2xl border border-neutral-200/70 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-[0_18px_50px_-38px_rgba(13,148,136,0.7)] dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-teal-800/60"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 dark:bg-teal-900/30 dark:text-teal-400">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="font-heading font-bold text-neutral-900 dark:text-white">{value.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{value.description}</p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
