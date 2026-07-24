"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const sections = [
  { id: "mission", label: "Foundation" },
  { id: "history", label: "Journey" },
  { id: "quality", label: "Quality" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "certifications", label: "Standards" },
  { id: "leadership", label: "Leadership" },
];

export function AboutSectionNav() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const updateActiveSection = () => {
      let currentSection = sections[0].id;

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 180) {
          currentSection = id;
        }
      });

      setActiveSection((previous) => previous === currentSection ? previous : currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <nav
      className="sticky top-16 z-40 border-y border-neutral-200/80 bg-white/88 shadow-[0_14px_35px_-30px_rgba(15,23,42,0.8)] backdrop-blur-2xl dark:border-neutral-800 dark:bg-neutral-950/88 lg:top-20"
      aria-label="About page sections"
    >
      <div className="container">
        <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-colors sm:text-sm ${
                  isActive
                    ? "text-white"
                    : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
                }`}
                aria-current={isActive ? "location" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="about-section-nav"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-teal-600"
                    transition={prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative">{section.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
