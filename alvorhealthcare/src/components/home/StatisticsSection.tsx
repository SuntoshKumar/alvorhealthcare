"use client";

import { useEffect, useRef, useState } from "react";
import { companyInfo } from "@/data";

const stats = [
  { value: companyInfo.experienceYears, suffix: "+", label: "Years of Excellence", desc: `Serving global healthcare since ${companyInfo.foundedYear}` },
  { value: companyInfo.productsCount, suffix: "+", label: "Pharmaceutical Products", desc: "Across therapeutic categories" },
  { value: companyInfo.countriesServed, suffix: "+", label: "Countries Served", desc: "Global distribution network" },
  { value: 500, suffix: "+", label: "Healthcare Partners", desc: "Hospitals & pharmacies worldwide" },
];

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || counted.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref}>
      <span className="display-md lg:display-lg font-bold text-neutral-900 dark:text-white">
        {count}{suffix}
      </span>
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section className="py-12 lg:py-16 bg-primary-600 dark:bg-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/50 to-transparent" aria-hidden="true" />
      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-sm font-semibold text-blue-100 mt-1.5">{stat.label}</p>
              <p className="text-xs text-blue-200/70 mt-0.5">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
