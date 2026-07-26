"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building2, ArrowDown } from "lucide-react";
import { contactContent } from "@/data";

export function ContactHero() {
  const { hero } = contactContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-teal-50 dark:from-blue-950/35 dark:via-neutral-950 dark:to-teal-950/25 py-16 lg:py-24" aria-labelledby="contact-heading">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px] text-blue-950 opacity-[0.035] dark:text-blue-100 dark:opacity-[0.06]" aria-hidden="true" />
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-500/10" aria-hidden="true" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              id="contact-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="display-lg lg:display-xl font-bold text-neutral-900 dark:text-white mt-6"
            >
              {hero.titlePrefix}{" "}
              <span className="pharma-gradient-text">{hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="body-lg text-neutral-600 dark:text-neutral-300 mt-5 max-w-xl"
            >
              {hero.description}
            </motion.p>

            {/* Quick contact pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <a href="tel:09250666200" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-all hover:border-blue-300 hover:text-blue-600 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-blue-600 dark:hover:text-blue-400">
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a href="mailto:alvorhealthcare@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-all hover:border-teal-300 hover:text-teal-600 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-teal-600 dark:hover:text-teal-400">
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                <MapPin className="w-4 h-4" />
                Yangon, Myanmar
              </span>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden lg:flex items-center gap-2 mt-12 text-neutral-400 dark:text-neutral-500"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
              <span className="text-xs">Scroll to explore</span>
            </motion.div>
          </div>

          {/* Right side - Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_28px_70px_-55px_rgba(15,23,42,0.15)] dark:border-neutral-700/50 dark:bg-neutral-800/40 dark:shadow-[0_28px_70px_-55px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-teal-500/5 dark:from-blue-500/10 dark:to-teal-500/10" aria-hidden="true" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Myanmar Operations
                    </p>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white">
                      Yangon and Mandalay
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-5 border-y border-neutral-100 dark:border-neutral-700/50">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold pharma-gradient-text">
                        {stat.value}
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["bg-blue-500", "bg-emerald-500", "bg-teal-500"].map((color, i) => (
                      <div
                        key={i}
                        className={`w-9 h-9 rounded-full ${color} border-2 border-white dark:border-neutral-800 flex items-center justify-center text-[11px] font-bold text-white shadow-sm`}
                      >
                        {["Y", "M", "P"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                      3 Locations
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Yangon, Mandalay & public listing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
