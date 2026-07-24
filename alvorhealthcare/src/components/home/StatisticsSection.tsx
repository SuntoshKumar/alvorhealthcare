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
      <span className="display-md lg:display-lg font-bold text-white">
        {count}{suffix}
      </span>
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section id="home-stats" className="relative overflow-hidden bg-neutral-950 py-12 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.45),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(13,148,136,0.28),transparent_32%)]" aria-hidden="true" />
      <div className="pharma-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="relative text-center after:absolute after:-right-4 after:top-1/2 after:hidden after:h-12 after:w-px after:-translate-y-1/2 after:bg-white/10 lg:after:block lg:last:after:hidden">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="mt-1.5 text-sm font-semibold text-blue-100">{stat.label}</p>
              <p className="mt-0.5 text-xs text-blue-200/60">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
