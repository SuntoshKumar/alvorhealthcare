"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Package } from "lucide-react";
import { publicAssetPath } from "@/lib/paths";

export const categoryIcons: Record<string, string> = {
  Tablets: "/images/categories/tablet.svg",
  Capsules: "/images/categories/capsule.svg",
  Syrups: "/images/categories/syrup.svg",
  Injections: "/images/categories/injection.svg",
  Supplements: "/images/categories/supplement.svg",
  "Medical Supplies": "/images/categories/medical-supplies.png",
};

export interface CategoryColorSet {
  gradient: string;
  iconBg: string;
  iconColor: string;
  hoverBorder: string;
  subHoverBg: string;
  subHoverBorder: string;
  subHoverText: string;
}

export const categoryColors: Record<string, CategoryColorSet> = {
  Tablets: {
    gradient: "from-blue-50 via-blue-50/40 to-blue-100/50",
    iconBg: "bg-blue-600 dark:bg-blue-500",
    iconColor: "text-white",
    hoverBorder: "hover:border-blue-200 dark:hover:border-blue-700",
    subHoverBg: "group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20",
    subHoverBorder: "group-hover:border-blue-300 dark:group-hover:border-blue-600",
    subHoverText: "group-hover:text-blue-700 dark:group-hover:text-blue-300",
  },
  Capsules: {
    gradient: "from-teal-50 via-teal-50/40 to-teal-100/50",
    iconBg: "bg-teal-600 dark:bg-teal-500",
    iconColor: "text-white",
    hoverBorder: "hover:border-teal-200 dark:hover:border-teal-700",
    subHoverBg: "group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20",
    subHoverBorder: "group-hover:border-teal-300 dark:group-hover:border-teal-600",
    subHoverText: "group-hover:text-teal-700 dark:group-hover:text-teal-300",
  },
  Syrups: {
    gradient: "from-emerald-50 via-emerald-50/40 to-emerald-100/50",
    iconBg: "bg-emerald-600 dark:bg-emerald-500",
    iconColor: "text-white",
    hoverBorder: "hover:border-emerald-200 dark:hover:border-emerald-700",
    subHoverBg: "group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20",
    subHoverBorder: "group-hover:border-emerald-300 dark:group-hover:border-emerald-600",
    subHoverText: "group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
  },
  Injections: {
    gradient: "from-purple-50 via-purple-50/40 to-purple-100/50",
    iconBg: "bg-purple-600 dark:bg-purple-500",
    iconColor: "text-white",
    hoverBorder: "hover:border-purple-200 dark:hover:border-purple-700",
    subHoverBg: "group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20",
    subHoverBorder: "group-hover:border-purple-300 dark:group-hover:border-purple-600",
    subHoverText: "group-hover:text-purple-700 dark:group-hover:text-purple-300",
  },
  Supplements: {
    gradient: "from-amber-50 via-amber-50/40 to-amber-100/50",
    iconBg: "bg-amber-600 dark:bg-amber-500",
    iconColor: "text-white",
    hoverBorder: "hover:border-amber-200 dark:hover:border-amber-700",
    subHoverBg: "group-hover:bg-amber-50 dark:group-hover:bg-amber-900/20",
    subHoverBorder: "group-hover:border-amber-300 dark:group-hover:border-amber-600",
    subHoverText: "group-hover:text-amber-700 dark:group-hover:text-amber-300",
  },
  "Medical Supplies": {
    gradient: "from-rose-50 via-rose-50/40 to-rose-100/50",
    iconBg: "bg-rose-600 dark:bg-rose-500",
    iconColor: "text-white",
    hoverBorder: "hover:border-rose-200 dark:hover:border-rose-700",
    subHoverBg: "group-hover:bg-rose-50 dark:group-hover:bg-rose-900/20",
    subHoverBorder: "group-hover:border-rose-300 dark:group-hover:border-rose-600",
    subHoverText: "group-hover:text-rose-700 dark:group-hover:text-rose-300",
  },
};

export function getCategoryColors(name: string): CategoryColorSet {
  return categoryColors[name] || categoryColors.Tablets;
}

export function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
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
    <span ref={ref} className="font-medium text-neutral-900 dark:text-white">
      {count}
      {suffix}
    </span>
  );
}

export function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  if (reducedMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function getCategoryIcon(
  name: string,
  colors: CategoryColorSet,
  size: "sm" | "md" | "lg" = "md"
) {
  const icon = categoryIcons[name];
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };
  const iconSizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  if (icon) {
    const resolvedIcon = publicAssetPath(icon);
    return (
      <div className="relative">
        <div
          className={`${sizeClasses[size]} ${colors.iconBg} ${colors.iconColor} drop-shadow-lg`}
          style={{
            maskImage: `url(${resolvedIcon})`,
            WebkitMaskImage: `url(${resolvedIcon})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskSize: "contain",
            WebkitMaskSize: "contain",
          }}
        />
        <div
          className={`absolute inset-0 ${sizeClasses[size]} ${colors.iconBg} opacity-20 blur-xl`}
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <Package
        className={`${iconSizeClasses[size]} ${colors.iconColor} ${colors.iconBg} p-3 rounded-2xl drop-shadow-lg`}
      />
      <div
        className={`absolute inset-0 ${iconSizeClasses[size]} ${colors.iconBg} opacity-20 blur-xl`}
        aria-hidden="true"
      />
    </div>
  );
}
