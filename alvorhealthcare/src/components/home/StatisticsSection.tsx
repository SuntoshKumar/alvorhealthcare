"use client";

import { useEffect, useRef, useState } from "react";
import { categories, companyInfo } from "@/data";

const stats = [
  { value: companyInfo.productsCount, suffix: "+", label: "Products", desc: "Across the current portfolio" },
  { value: categories.length, suffix: "", label: "Product Categories", desc: "For varied healthcare needs" },
  { value: companyInfo.yearsInOperation, suffix: "+", label: "Years of Operation", desc: "Serving Myanmar since 2018" },
  { value: companyInfo.healthcarePartners, suffix: "+", label: "Healthcare Partners", desc: "Hospitals, clinics, and pharmacies" },
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,116,144,0.45),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(13,148,136,0.28),transparent_32%)]" aria-hidden="true" />
      <div className="pharma-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="relative text-center after:absolute after:-right-4 after:top-1/2 after:hidden after:h-12 after:w-px after:-translate-y-1/2 after:bg-white/10 lg:after:block lg:last:after:hidden">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="mt-1.5 text-sm font-semibold text-primary-100">{stat.label}</p>
              <p className="mt-0.5 text-xs text-primary-200/60">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
