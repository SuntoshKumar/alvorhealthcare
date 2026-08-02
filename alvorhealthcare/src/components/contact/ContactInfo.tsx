"use client";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaViber, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { contactContent } from "@/data";

const icons: Record<string, typeof MapPin | typeof FaViber> = {
  mapPin: MapPin,
  phone: Phone,
  mail: Mail,
  viber: FaViber,
  whatsapp: FaWhatsapp,
  facebook: FaFacebookF,
};

export function ContactInfo() {
  const { contactInfo } = contactContent;

  return (
    <section className="section bg-white dark:bg-neutral-950" aria-labelledby="contact-info-heading">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
            Contact Information
          </span>
          <h2 id="contact-info-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
            How to Reach Us
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Multiple ways to connect with our team across Myanmar.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {contactInfo.map((info) => {
            const Icon = icons[info.icon] ?? MapPin;
            return (
              <motion.div
                key={info.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <div className="pharma-card group relative flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-6 dark:border-neutral-700/50 dark:bg-neutral-800/30 lg:p-7">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-1">
                    {info.subtitle}
                  </p>

                  <h3 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {info.title}
                  </h3>

                  <div className="flex-1 space-y-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>

                  {info.link && (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 transition-colors hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      {info.action}
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-900/30 dark:group-hover:bg-primary-600">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
