"use client";

import { Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { contactContent, companyInfo } from "@/data";

export function ContactMap() {
  const { map } = contactContent;

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="map-heading">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Visit Us
          </span>
          <h2 id="map-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
            {map.title}
          </h2>
          <p className="body-lg text-neutral-600 dark:text-neutral-300">
            {map.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-medium border border-neutral-100 dark:border-neutral-700/50">
            <iframe
              src={companyInfo.contact.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alvor Healthcare Yangon Office"
              className="w-full"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-soft flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Navigation className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{map.label}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {companyInfo.contact.address}, {companyInfo.contact.city}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
