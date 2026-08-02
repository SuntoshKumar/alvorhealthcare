"use client";

import { Award, Shield, Heart, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { careersContent } from "@/data";

const icons: Record<string, typeof Award> = {
  award: Award,
  shield: Shield,
  heart: Heart,
  lightbulb: Lightbulb,
};

const gradients = {
  award: "from-primary-500 to-primary-600",
  shield: "from-emerald-500 to-emerald-600",
  heart: "from-rose-500 to-rose-600",
  lightbulb: "from-amber-500 to-amber-600",
};

export function CareersCulture() {
  const { culture } = careersContent;

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="culture-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
              {culture.eyebrow}
            </span>
            <h2 id="culture-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
              {culture.title}
            </h2>
            <p className="body-lg text-neutral-600 dark:text-neutral-300 max-w-lg">
              {culture.description}
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {culture.values.map((value) => {
              const Icon = icons[value.icon] ?? Award;
              const gradient = gradients[value.icon as keyof typeof gradients] ?? gradients.award;
              return (
                <motion.div
                  key={value.title}
                  className="group flex gap-4 rounded-2xl border border-neutral-200/70 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-[0_18px_50px_-38px_rgba(14,116,144,0.7)] dark:border-neutral-700/50 dark:bg-neutral-800/30 dark:hover:border-primary-700/60"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-neutral-900 dark:text-white">
                      {value.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
