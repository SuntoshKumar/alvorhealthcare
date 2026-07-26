"use client";

import { HeartPulse, GraduationCap, Globe, TrendingUp, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { careersContent } from "@/data";

const icons: Record<string, typeof HeartPulse> = {
  heartPulse: HeartPulse,
  graduationCap: GraduationCap,
  globe: Globe,
  trendingUp: TrendingUp,
  users: Users,
  briefcase: Briefcase,
};

export function CareersBenefits() {
  const { benefits } = careersContent;

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="benefits-heading">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            {benefits.eyebrow}
          </span>
          <h2 id="benefits-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
            {benefits.title}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            {benefits.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {benefits.items.map((benefit) => {
            const Icon = icons[benefit.icon] ?? HeartPulse;
            return (
              <motion.div
                key={benefit.title}
                className="pharma-card group rounded-2xl border border-neutral-100 bg-white p-6 dark:border-neutral-700/50 dark:bg-neutral-800/30 lg:p-7"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-neutral-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
