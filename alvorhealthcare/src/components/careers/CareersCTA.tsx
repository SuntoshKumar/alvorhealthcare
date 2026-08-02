"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { careersContent } from "@/data";

export function CareersCTA() {
  const { cta } = careersContent;

  return (
    <section className="section relative overflow-hidden bg-primary-600 dark:bg-primary-800" aria-labelledby="careers-cta-heading">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/60 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-400/20 blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="careers-cta-heading" className="display-md lg:display-lg font-bold text-white mb-4">
            {cta.title}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-lg mx-auto">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Link
              href={cta.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-primary-50 transition-all hover:-translate-y-0.5 text-sm"
            >
              {cta.primaryCta.label}
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
            <Link
              href={cta.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5 text-sm"
            >
              {cta.secondaryCta.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
