"use client";

import { motion } from "framer-motion";
import { CheckCircle, X, AlertCircle, Info } from "lucide-react";
import { AnimatePresence } from "framer-motion";

interface ToastProps {
  count: number;
}

export function Toast({ count }: ToastProps) {
  if (count <= 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        key={count}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-2"
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="flex items-center gap-3 px-4 py-3 bg-success-600 text-white rounded-xl shadow-medium min-w-[280px]"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">Link copied to clipboard!</span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}