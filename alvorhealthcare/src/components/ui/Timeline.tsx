"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/Animations";
import { clsx } from "clsx";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  side: "left" | "right";
}

interface TimelineProps {
  items: TimelineItem[];
  lineColor?: string;
}

export function Timeline({ items, lineColor = "primary-400" }: TimelineProps) {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b" style={{ backgroundImage: `linear-gradient(to bottom, var(--color-${lineColor}), var(--color-${lineColor.replace("400", "600")}))` }} aria-hidden="true" />
      <div className="space-y-12 lg:space-y-16">
        {items.map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <TimelineItemComponent item={item} lineColor={lineColor} index={index} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

function TimelineItemComponent({ item, lineColor, index }: { item: TimelineItem; lineColor: string; index: number }) {
  const isLeft = item.side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative lg:flex"
    >
      <div className={clsx("flex-1 px-6 lg:w-1/2", isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left")}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={clsx(
            "relative p-6 lg:p-8 bg-white rounded-2xl border border-neutral-100 shadow-soft hover:border-primary-200 hover:shadow-medium transition-all duration-300",
            "bg-white"
          )}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
          >
            <item.icon className="w-6 h-6" aria-hidden="true" />
          </motion.div>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-sm font-medium text-primary-600">{item.year}</p>
            <h3 className="font-semibold text-neutral-900">{item.title}</h3>
          </div>
          <p className="text-neutral-600">{item.description}</p>
        </motion.div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 lg:flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
          className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-white shadow-lg z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
            className={`w-4 h-4 rounded-full ${lineColor}`}
          />
        </motion.div>
        <div className="absolute top-1/2 w-px h-full" style={{ backgroundImage: `linear-gradient(to bottom, var(--color-${lineColor}), var(--color-${lineColor.replace("400", "600")}))` }} aria-hidden="true" />
      </div>
    </motion.div>
  );
}