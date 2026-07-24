"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";
import { clsx } from "clsx";
import { siteContent } from "@/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resolved, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-700/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20 transition-all duration-300">
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Alvor Healthcare Home">
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-glow">
            <span className="text-white font-bold text-sm lg:text-base font-heading">A</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-base lg:text-lg text-neutral-900 dark:text-white leading-tight block -mb-0.5">
              Alvor
            </span>
            <span className="text-[10px] lg:text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wider uppercase leading-tight block">
              Healthcare
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label={`Switch to ${resolved === "dark" ? "light" : "dark"} mode`}
          >
            {resolved === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          <Link
            href={siteContent.headerCta.href}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            {siteContent.headerCta.label}
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeMobile}
          aria-hidden="true"
        />
        <div
          className={clsx(
            "absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-700 shadow-2xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-neutral-100 dark:border-neutral-800">
            <span className="font-heading font-bold text-neutral-900 dark:text-white">Menu</span>
            <button
              onClick={closeMobile}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4.5 h-4.5 text-neutral-500" />
            </button>
          </div>
          <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-5rem)]" aria-label="Mobile navigation">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className="block px-4 py-3 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl font-medium transition-all"
              >
                {item.label}
              </Link>
            ))}
            <hr className="my-3 border-neutral-100 dark:border-neutral-800" />
            <Link
              href={siteContent.headerCta.href}
              onClick={closeMobile}
              className="block px-4 py-3 bg-blue-600 text-white text-center font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              {siteContent.headerCta.label}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
