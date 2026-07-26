"use client";

import { HeartPulse, Megaphone, Ship, Truck, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/data";

const serviceIcons = {
  ship: Ship,
  truck: Truck,
  megaphone: Megaphone,
  heart: HeartPulse,
};

export function AboutServices() {
  const content = aboutContent.services;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative scroll-mt-32 overflow-hidden bg-[#071b2f] py-20 text-white sm:py-24 lg:py-32" aria-labelledby="services-heading">
      <div className="pharma-grid absolute inset-0 opacity-15" aria-hidden="true" />
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">{content.eyebrow}</span>
            <h2 id="services-heading" className="mt-4 font-display text-[clamp(2.7rem,5.4vw,5rem)] font-bold leading-[0.95] tracking-[-0.055em]">
              {content.title}
            </h2>
          </motion.div>
          <p className="max-w-2xl text-base leading-relaxed text-blue-100/75 sm:text-lg">{content.description}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {content.items.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? HeartPulse;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : index * 0.07 }}
                className="border border-white/10 bg-white/[0.065] p-7 backdrop-blur-xl sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-blue-500 to-teal-500 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-blue-100/70">{service.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {content.productGroups.map((group) => (
            <article key={group.title} className="border-t border-teal-300/45 pt-6">
              <h3 className="font-display text-xl font-bold">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-blue-100/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
