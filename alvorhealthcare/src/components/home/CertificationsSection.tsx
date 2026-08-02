"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, BadgeCheck, Thermometer, Truck, Leaf } from "lucide-react";
import { homeContent } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Award,
  BadgeCheck,
  Thermometer,
  Truck,
  Leaf,
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export function CertificationsSection() {
  const { certifications } = homeContent;

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="certifications-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
              Compliance
            </span>
          </div>
          <h2 id="certifications-heading" className="display-md font-bold text-neutral-900 dark:text-white mb-3">
            {certifications.title}
          </h2>
          <p className="body-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {certifications.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.badges.map((badge, index) => {
            const Icon = iconMap[badge.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: easeOut }}
                className="group relative flex flex-col items-center text-center p-5 rounded-2xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">
                  {badge.name}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
