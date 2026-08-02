"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, FlaskConical, Scale, Handshake, HeadphonesIcon, Landmark, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { careersContent } from "@/data";

const icons: Record<string, typeof Building2> = {
  "Supply Operations": Building2,
  "Quality & Compliance": FlaskConical,
  "Regulatory Support": Scale,
  "Commercial": Handshake,
  "Customer Operations": HeadphonesIcon,
  "Corporate Functions": Landmark,
};

const roleDetails: Record<string, string[]> = {
  "Supply Operations": [
    "Manage inventory levels and warehouse operations",
    "Coordinate product orders and delivery schedules",
    "Optimize supply chain efficiency across Myanmar",
    "Work closely with international suppliers",
  ],
  "Quality & Compliance": [
    "Ensure products meet regulatory quality standards",
    "Manage supplier qualification and documentation",
    "Handle product traceability and batch records",
    "Coordinate complaint resolution and recalls",
  ],
  "Regulatory Support": [
    "Navigate Myanmar pharmaceutical regulations",
    "Prepare and submit regulatory documentation",
    "Maintain product registration compliance",
    "Monitor regulatory changes across markets",
  ],
  "Commercial": [
    "Build relationships with hospitals and pharmacies",
    "Develop product marketing strategies",
    "Identify new business opportunities",
    "Manage key healthcare provider accounts",
  ],
  "Customer Operations": [
    "Provide product and order support to customers",
    "Manage documentation and service inquiries",
    "Ensure customer satisfaction and retention",
    "Coordinate with supply and quality teams",
  ],
  "Corporate Functions": [
    "Support finance, HR, and legal operations",
    "Drive technology and digital initiatives",
    "Manage organizational development projects",
    "Enable cross-functional business growth",
  ],
};

export function CareersDepartments() {
  const { departments } = careersContent;
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);

  return (
    <section id="departments" className="section bg-white dark:bg-neutral-950" aria-labelledby="departments-heading">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
            {departments.eyebrow}
          </span>
          <h2 id="departments-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
            {departments.title}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            {departments.description}
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
          {departments.items.map((dept) => {
            const Icon = icons[dept.name] ?? Building2;
            const details = roleDetails[dept.name] ?? [];
            const isHovered = hoveredDept === dept.name;

            return (
              <motion.div
                key={dept.name}
                className="relative"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                onMouseEnter={() => setHoveredDept(dept.name)}
                onMouseLeave={() => setHoveredDept(null)}
              >
                <Link
                  href="/contact?inquiryType=career"
                  className="pharma-card group relative flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-6 dark:border-neutral-700/50 dark:bg-neutral-800/30 lg:p-7"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${dept.gradient} flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {dept.name}
                  </h3>

                  <p className="flex-1 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {dept.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 transition-colors">
                    Apply Now
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-900/30 dark:group-hover:bg-primary-600">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-x-0 top-full z-20 mt-2"
                    >
                      {/* Connector arrow */}
                      <div className="absolute -top-2 left-8 w-4 h-4 rotate-45 border-l border-t border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800" />

                      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.2)] dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.5)]">
                        {/* Gradient accent bar */}
                        <div className={`h-1 w-full bg-gradient-to-r ${dept.gradient}`} />

                        {/* Subtle background glow */}
                        <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${dept.gradient} opacity-[0.07] blur-2xl`} aria-hidden="true" />

                        <div className="relative p-5">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${dept.gradient} flex items-center justify-center shadow-lg`}>
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-500 dark:text-primary-400">
                                  Department
                                </p>
                                <h4 className="font-heading font-bold text-neutral-900 dark:text-white text-sm mt-0.5">
                                  {dept.name}
                                </h4>
                              </div>
                            </div>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setHoveredDept(null);
                              }}
                              className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-50 text-neutral-400 transition-all hover:bg-neutral-100 hover:text-neutral-600 dark:bg-neutral-700/50 dark:text-neutral-300 dark:hover:bg-neutral-700"
                              aria-label="Close"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
                            {dept.description}
                          </p>

                          {/* Responsibilities */}
                          <div className="mb-5">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500 mb-2.5">
                              Key Responsibilities
                            </p>
                            <div className="grid grid-cols-1 gap-2">
                              {details.map((detail, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                  className="flex items-start gap-2.5"
                                >
                                  <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br ${dept.gradient} flex-shrink-0`} />
                                  <span className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    {detail}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <Link
                            href="/contact?inquiryType=career"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-primary-500/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/30 dark:from-primary-500 dark:to-primary-600"
                          >
                            Apply for this role
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
