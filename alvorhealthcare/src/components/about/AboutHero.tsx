"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Globe, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { aboutContent, companyInfo } from "@/data";

export function AboutHero() {
  const content = aboutContent.hero;

  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-teal-50 dark:from-blue-950/30 dark:via-neutral-950 dark:to-teal-950/30">
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-cover bg-center opacity-5" aria-hidden="true" />
      
      <div className="relative container px-6 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              {companyInfo.experienceYears}+ Years · {content.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="display-xl lg:display-2xl font-bold text-neutral-900 dark:text-white leading-tight mb-6"
          >
            {content.titlePrefix}{" "}
            <span className="gradient-text">{content.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="body-lg lg:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-10"
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="w-full sm:w-auto">
              {content.primaryCtaLabel}
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
              {content.secondaryCtaLabel}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Excellence", value: companyInfo.experienceYears, suffix: "+", icon: Award },
            { label: "Products", value: companyInfo.productsCount, suffix: "+", icon: FlaskConical },
            { label: "Countries", value: companyInfo.countriesServed, suffix: "+", icon: Globe },
            { label: "Certifications", value: companyInfo.certifications.length, suffix: "", icon: Shield },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white/80 dark:bg-neutral-800/50 backdrop-blur-sm rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                <stat.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white">
                {stat.value}
                <span className="text-lg font-normal">{stat.suffix}</span>
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
