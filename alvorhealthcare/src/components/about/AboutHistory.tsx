"use client";

import { useRef } from "react";
import {
  Building2, FlaskConical, Award, Globe, Target, Zap, Shield, Leaf, Factory,
  ChevronLeft, ChevronRight, Calendar, MapPin
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/Animations";
import { clsx } from "clsx";
import { aboutContent } from "@/data";

const historyIcons = {
  building: Building2,
  flask: FlaskConical,
  award: Award,
  globe: Globe,
  target: Target,
  zap: Zap,
  shield: Shield,
  leaf: Leaf,
  factory: Factory,
};

const historyGradients: Record<string, string> = {
  building: "from-blue-500 to-blue-600",
  flask: "from-purple-500 to-purple-600",
  award: "from-emerald-500 to-emerald-600",
  globe: "from-teal-500 to-teal-600",
  target: "from-blue-500 to-blue-600",
  zap: "from-amber-500 to-amber-600",
  shield: "from-blue-500 to-blue-600",
  leaf: "from-green-500 to-green-600",
  factory: "from-teal-500 to-teal-600",
};

const milestones = aboutContent.history.milestones.map((item) => ({
  ...item,
  icon: historyIcons[item.icon as keyof typeof historyIcons] ?? Building2,
  gradient: historyGradients[item.icon] ?? historyGradients.building,
  stats: [{ label: item.statLabel, value: item.statValue }],
}));

function JourneyCard({ item }: { item: typeof milestones[0] }) {
  const Icon = item.icon;

  return (
    <div className="group relative flex-shrink-0 w-[280px] sm:w-[300px] snap-start">
      <div className="relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-700/50 hover:border-blue-200 dark:hover:border-blue-700/50 transition-all hover:-translate-y-1 hover:shadow-xl h-full">
        <div className="flex items-center justify-between mb-4">
          <div className={clsx(
            "w-10 h-10 rounded-xl bg-gradient-to-br shadow-md flex items-center justify-center",
            item.gradient
          )}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider">
            <Calendar className="w-3 h-3" />
            {item.year}
          </span>
        </div>

        <h3 className="font-heading font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm sm:text-base leading-snug">
          {item.title}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        {item.stats && (
          <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-700/50">
            {item.stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between text-xs">
                <span className="text-neutral-400 dark:text-neutral-500">{stat.label}</span>
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">{stat.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function AboutHistory() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const content = aboutContent.history;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden" aria-labelledby="history-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-100/30 dark:from-blue-900/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
                <MapPin className="w-3.5 h-3.5" />
                {content.eyebrow}
              </span>
              <h2 id="history-heading" className="display-md lg:display-lg font-bold text-neutral-900 dark:text-white">
                {content.title}
              </h2>
              <p className="body-lg text-neutral-600 dark:text-neutral-300 mt-3 max-w-xl">
                {content.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center justify-center"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center justify-center"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 sm:-mx-6 px-4 sm:px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {milestones.map((item, index) => (
            <ScrollReveal key={item.year} delay={index * 0.05}>
              <JourneyCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {milestones.map((item, index) => (
            <button
              key={item.year}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.children[index]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                }
              }}
              className={clsx(
                "w-2 h-2 rounded-full transition-all",
                "bg-neutral-300 dark:bg-neutral-600 hover:bg-blue-400 dark:hover:bg-blue-500"
              )}
              aria-label={`Go to ${item.year}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
