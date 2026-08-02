"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Mail, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { careersContent } from "@/data";
import { clsx } from "clsx";

const departmentColors: Record<string, string> = {
  Commercial: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "Quality & Compliance": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Regulatory Support": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  "Supply Operations": "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400",
  "Customer Operations": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  "Corporate Functions": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

export function CareersJobs() {
  const { jobs } = careersContent;
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const departments = ["All", ...new Set(jobs.items.map((job) => job.department))];
  const filteredJobs = activeFilter === "All" ? jobs.items : jobs.items.filter((job) => job.department === activeFilter);

  return (
    <section id="openings" className="section bg-white dark:bg-neutral-950" aria-labelledby="openings-heading">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
            {jobs.eyebrow}
          </span>
          <h2 id="openings-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
            {jobs.title}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            {jobs.description}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveFilter(dept)}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                activeFilter === dept
                  ? "bg-neutral-950 text-white shadow-md dark:bg-white dark:text-neutral-950"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
              )}
            >
              {dept}
              {dept !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({jobs.items.filter((j) => j.department === dept).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        <div
          key={activeFilter}
          className="space-y-4 max-w-3xl mx-auto"
        >
          {filteredJobs.map((job) => {
            const isExpanded = expandedJob === job.id;
            const colorClass = departmentColors[job.department] ?? "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300";

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl border border-neutral-100 bg-white transition-all duration-300 hover:border-primary-200 hover:shadow-[0_12px_40px_-28px_rgba(14,116,144,0.15)] dark:border-neutral-700/50 dark:bg-neutral-800/30 dark:hover:border-primary-700/60"
              >
                  <button
                    onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                    className="w-full text-left p-5 sm:p-6"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-heading text-base font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {job.title}
                          </h3>
                          {job.postCount > 1 && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2 py-0.5 text-[11px] font-semibold text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                              <Users className="h-3 w-3" />
                              {job.postCount} Posts
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
                          {job.summary}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className={clsx("rounded-full px-3 py-1 text-xs font-semibold", colorClass)}>
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-neutral-400 dark:text-neutral-500">
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </span>
                        <ChevronDown
                          className={clsx(
                            "h-5 w-5 text-neutral-400 transition-transform duration-300 dark:text-neutral-500",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-neutral-100 dark:border-neutral-700/50 pt-5">
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500 mb-3">
                                Key Responsibilities
                              </h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-300">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500 mb-3">
                                Requirements
                              </h4>
                              <ul className="space-y-2">
                                {job.requirements.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-300">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-700/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <a
                              href={`mailto:bd@alvorcare.com?subject=Application%20-%20${encodeURIComponent(job.title)}`}
                              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary-500/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/30 dark:from-primary-500 dark:to-primary-600"
                            >
                              <Mail className="h-4 w-4" />
                              Apply for this role
                            </a>
                            <p className="text-xs text-neutral-400 dark:text-neutral-500">
                              Or send your CV to{" "}
                              <span className="font-semibold text-neutral-600 dark:text-neutral-300">bd@alvorcare.com</span>
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
            );
          })}

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 text-neutral-400 dark:text-neutral-500">
              <p className="text-sm">No open positions in this department right now.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
