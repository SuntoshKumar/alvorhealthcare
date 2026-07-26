"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronRight, Menu, Moon, Plus, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/layout/ThemeProvider";
import { clsx } from "clsx";
import { siteContent } from "@/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const { resolved, toggle } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setIsHidden(mq.matches && y > lastScrollY.current && y > 80);
      lastScrollY.current = y;
    };

    const onResize = () => {
      if (!mq.matches) setIsHidden(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onResize);
    };
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;

    lastScrollY.current = window.scrollY;
    setIsHidden(false);

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobile();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeMobile, mobileOpen]);

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 h-16 transition-transform duration-300 lg:h-20",
        isHidden && "-translate-y-full"
      )}
    >
      <div className="container flex h-full items-center">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={clsx(
            "relative flex h-12 w-full items-center justify-between rounded-2xl border px-2 transition-[background-color,border-color,box-shadow] duration-500 ease-out lg:h-14 lg:px-2.5",
            scrolled
              ? "translate-y-0 border-white/70 bg-white/88 shadow-[0_16px_45px_-20px_rgba(15,23,42,0.38)] backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-950/86 dark:shadow-[0_18px_50px_-22px_rgba(0,0,0,0.75)]"
              : "border-white/60 bg-white/68 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.28)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/58"
          )}
        >
          <Link
            href="/"
            className="group flex min-w-0 flex-shrink-0 items-center gap-2.5 rounded-xl pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
            aria-label="Alvor Healthcare Home"
          >
            <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800 shadow-[0_8px_20px_-8px_rgba(37,99,235,0.8)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 lg:h-10 lg:w-10">
              <div className="absolute -right-2 -top-3 h-7 w-7 rounded-full bg-white/20 blur-sm" aria-hidden="true" />
              <span className="relative font-display text-base font-bold text-white lg:text-lg">A</span>
              <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 ring-2 ring-primary-700">
                <Plus className="h-2.5 w-2.5 stroke-[3]" aria-hidden="true" />
              </span>
            </div>
            <div className="hidden min-w-0 sm:block">
              <span className="block font-heading text-[15px] font-bold leading-none tracking-[-0.03em] text-neutral-950 dark:text-white lg:text-base">
                Alvor
              </span>
              <span className="mt-1 block text-[8px] font-bold uppercase leading-none tracking-[0.22em] text-primary-600 dark:text-primary-400 lg:text-[9px]">
                Healthcare
              </span>
            </div>
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-xl border border-neutral-200/70 bg-neutral-100/70 p-1 dark:border-white/5 dark:bg-white/[0.045] lg:flex"
            aria-label="Main navigation"
          >
            {siteContent.navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "group/tab relative rounded-lg px-3 py-1.5 text-[13px] font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 xl:px-3.5",
                    active
                      ? "text-neutral-950 dark:text-white"
                      : "text-neutral-600 hover:text-primary-700 dark:text-neutral-300 dark:hover:text-primary-300"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="header-active-tab"
                      className="absolute inset-0 rounded-lg bg-white shadow-[0_3px_10px_-5px_rgba(15,23,42,0.45)] dark:bg-neutral-800 dark:shadow-[0_4px_12px_-6px_rgba(0,0,0,0.8)]"
                      transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 430, damping: 34 }}
                      aria-hidden="true"
                    >
                      <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-emerald-400" />
                    </motion.span>
                  )}
                  <span className="relative z-10 block transition-transform duration-300 group-hover/tab:-translate-y-px">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggle}
              className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-transparent text-neutral-500 transition-all duration-200 hover:border-neutral-200 hover:bg-white hover:text-primary-700 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-neutral-400 dark:hover:border-white/10 dark:hover:bg-white/[0.07] dark:hover:text-primary-300"
              aria-label={`Switch to ${resolved === "dark" ? "light" : "dark"} mode`}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={resolved}
                  initial={prefersReducedMotion ? false : { opacity: 0, rotate: -35, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: 35, scale: 0.7 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="transition-transform duration-300 group-hover:rotate-12"
                >
                  {resolved === "dark" ? <Sun className="h-[17px] w-[17px]" /> : <Moon className="h-[17px] w-[17px]" />}
                </motion.span>
              </AnimatePresence>
            </button>

            <Link
              href={siteContent.headerCta.href}
              className="group hidden h-9 items-center gap-2 rounded-xl bg-neutral-950 px-4 text-[13px] font-semibold text-white shadow-[0_8px_18px_-10px_rgba(15,23,42,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-[0_10px_22px_-10px_rgba(37,99,235,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-950 dark:hover:bg-primary-400 dark:hover:text-neutral-950 dark:focus-visible:ring-offset-neutral-950 sm:inline-flex"
            >
              {siteContent.headerCta.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>

            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white shadow-[0_8px_18px_-10px_rgba(37,99,235,0.9)] transition-all duration-200 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={prefersReducedMotion ? false : { opacity: 0, rotate: -45, scale: 0.65 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.65 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="absolute inset-0 bg-neutral-950/45 backdrop-blur-sm"
              variants={{
                open: { opacity: 1 },
                closed: { opacity: 0 },
              }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
              onClick={closeMobile}
              aria-hidden="true"
            />
            <motion.aside
              id="mobile-navigation"
              aria-label="Mobile navigation panel"
              className="absolute bottom-2 right-2 top-2 flex w-[min(23rem,calc(100vw-1rem))] flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/96 shadow-[0_28px_80px_-24px_rgba(2,6,23,0.65)] backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-950/96"
              variants={{
                open: { opacity: 1, x: 0, scale: 1 },
                closed: { opacity: 0, x: prefersReducedMotion ? 0 : 28, scale: prefersReducedMotion ? 1 : 0.985 },
              }}
              transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 34, mass: 0.8 }}
            >
          <div className="relative overflow-hidden border-b border-neutral-200/70 px-5 pb-5 pt-4 dark:border-white/10">
            <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-primary-400/15 blur-3xl" aria-hidden="true" />
            <div className="relative flex items-center justify-between">
              <Link href="/" onClick={closeMobile} className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-800 shadow-glow">
                  <span className="font-display text-lg font-bold text-white">A</span>
                  <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 ring-2 ring-primary-700">
                    <Plus className="h-2.5 w-2.5 stroke-[3]" aria-hidden="true" />
                  </span>
                </div>
                <div>
                  <span className="block font-heading text-base font-bold leading-none text-neutral-950 dark:text-white">Alvor Healthcare</span>
                  <span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">Science for better living</span>
                </div>
              </Link>
              <button
                onClick={closeMobile}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 shadow-sm transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-neutral-300 dark:hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-[18px] w-[18px]" />
              </button>
            </div>
            <p className="relative mt-5 max-w-[17rem] text-sm leading-6 text-neutral-500 dark:text-neutral-400">
              Trusted healthcare solutions, built around quality and care.
            </p>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile navigation">
            <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              Explore
            </p>
            <motion.div
              className="space-y-1"
              variants={{
                open: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.035, delayChildren: prefersReducedMotion ? 0 : 0.08 } },
                closed: {},
              }}
            >
              {siteContent.navigation.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <motion.div
                    key={item.href}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: prefersReducedMotion ? 0 : 12 },
                    }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      aria-current={active ? "page" : undefined}
                      className={clsx(
                        "group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold transition-[color,background-color,transform] duration-300 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                        active
                          ? "bg-primary-50 text-primary-800 dark:bg-primary-500/15 dark:text-primary-300"
                          : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                      )}
                    >
                      <span
                        className={clsx(
                          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl text-[10px] font-bold tabular-nums transition-colors duration-300",
                          active
                            ? "bg-primary-600 text-white shadow-[0_6px_14px_-7px_rgba(37,99,235,0.9)]"
                            : "bg-neutral-100 text-neutral-400 group-hover:bg-white dark:bg-white/[0.05] dark:text-neutral-500 dark:group-hover:bg-white/10"
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{item.label}</span>
                      <ChevronRight className={clsx("h-4 w-4 transition-transform duration-300 group-hover:translate-x-1", active ? "text-primary-500" : "text-neutral-300 dark:text-neutral-600")} aria-hidden="true" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </nav>

          <div className="border-t border-neutral-200/70 bg-neutral-50/80 p-4 dark:border-white/10 dark:bg-white/[0.025]">
            <Link
              href={siteContent.headerCta.href}
              onClick={closeMobile}
              className="group flex w-full items-center justify-between rounded-2xl bg-neutral-950 px-4 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(15,23,42,0.75)] transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-950 dark:hover:bg-primary-400 dark:focus-visible:ring-offset-neutral-950"
            >
              <span>{siteContent.headerCta.label}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 transition-transform group-hover:rotate-6 dark:bg-neutral-950/10">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
