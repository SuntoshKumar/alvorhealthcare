"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  q: string;
  a: string;
}

interface AnimatedFaqProps {
  items: FaqItem[];
}

export function AnimatedFaq({ items }: AnimatedFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={`rounded-xl border transition-colors duration-200 ${
                isOpen
                  ? "border-blue-200 bg-blue-50/50 dark:border-blue-800/50 dark:bg-blue-950/20"
                  : "border-neutral-100 bg-white dark:border-neutral-700/50 dark:bg-neutral-800/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                aria-expanded={isOpen}
              >
                <span className={`font-medium text-sm leading-relaxed transition-colors duration-200 ${
                  isOpen
                    ? "text-blue-700 dark:text-blue-300"
                    : "text-neutral-900 dark:text-white"
                }`}>
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className={`w-5 h-5 transition-colors duration-200 ${
                    isOpen
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-neutral-400 dark:text-neutral-500"
                  }`} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-gradient-to-r from-blue-200 via-blue-100 to-transparent dark:from-blue-800 dark:via-blue-900 mb-4" />
                      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
