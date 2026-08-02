"use client";

import { Award, PackageCheck, Shield, Truck, Users, Warehouse } from "lucide-react";
import { motion } from "framer-motion";
import { homeContent } from "@/data";

const icons: Record<string, typeof Shield> = {
  shield: Shield,
  package: PackageCheck,
  truck: Truck,
  award: Award,
  users: Users,
  warehouse: Warehouse,
};

const gradients: Record<string, string> = {
  shield: "from-primary-500 to-primary-600",
  package: "from-teal-500 to-teal-600",
  award: "from-amber-500 to-amber-600",
  truck: "from-cyan-500 to-cyan-600",
  users: "from-rose-500 to-rose-600",
  warehouse: "from-emerald-500 to-emerald-600",
};

export function WhyChooseUsSection() {
  const content = homeContent.whyChoose;

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="why-choose-heading">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">{content.eyebrow}</span>
          <h2 id="why-choose-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
            {content.title}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {content.items.map((feature) => {
            const Icon = icons[feature.icon] ?? Shield;
            return (
              <motion.div
                key={feature.title}
                className="pharma-card group rounded-2xl border border-neutral-100 bg-white p-6 dark:border-neutral-700/50 dark:bg-neutral-800/30 lg:p-7"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradients[feature.icon] ?? gradients.shield} flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-5.5 h-5.5 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-neutral-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
