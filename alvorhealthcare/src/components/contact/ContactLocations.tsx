"use client";

import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { contactContent, companyInfo } from "@/data";

export function ContactLocations() {
  const { locations } = contactContent;

  return (
    <section className="section bg-white dark:bg-neutral-950" aria-labelledby="offices-heading">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Our Offices
          </span>
          <h2 id="offices-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
            {locations.title}
          </h2>
          <p className="body-lg text-neutral-600 dark:text-neutral-300">
            {locations.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {companyInfo.contact.locations.map((office) => {
            const address = [office.address, office.city, office.region, office.country].join(", ");
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

            return (
              <motion.div
                key={office.name}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${office.name} in Google Maps (opens in a new tab)`}
                  className="pharma-card group flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-6 transition-[border-color,box-shadow,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 dark:border-neutral-700/50 dark:bg-neutral-800/30 dark:focus-visible:ring-offset-neutral-950 lg:p-7"
                >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Building2 className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-neutral-900 dark:text-white">
                      {office.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mt-1">
                      {office.city}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {office.address}, {office.region}, {office.country}
                    </p>
                  </div>
                </div>
                  <span className="mt-6 flex items-center gap-2 border-t border-neutral-100 pt-4 text-sm font-semibold text-blue-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:border-neutral-700 dark:text-blue-300">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="ml-auto h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
