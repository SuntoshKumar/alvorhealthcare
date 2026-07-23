"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-glow mb-6"
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="h-1 bg-neutral-100 rounded-full overflow-hidden"
            >
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="h-full w-full bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 rounded-full"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-sm text-neutral-500 font-medium"
            >
              Alvor Healthcare
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
