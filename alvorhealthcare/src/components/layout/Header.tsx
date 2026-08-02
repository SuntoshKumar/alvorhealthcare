"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  ChevronRight,
  House,
  Leaf,
  Mail,
  Menu,
  Moon,
  Newspaper,
  PackageSearch,
  Phone,
  ShieldCheck,
  Sun,
  X,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { clsx } from "clsx";
import { useTheme } from "@/components/layout/ThemeProvider";
import { siteContent } from "@/data";
import { publicAssetPath } from "@/lib/paths";

const navigationIcons: Record<string, LucideIcon> = {
  Home: House,
  About: Building2,
  Products: PackageSearch,
  Sustainability: Leaf,
  Careers: BriefcaseBusiness,
  News: Newspaper,
  Resources: BookOpen,
  Contact: Mail,
};

const navigationDescriptions: Record<string, string> = {
  Careers: "Opportunities at Alvor",
  News: "Company news and updates",
  Resources: "Healthcare information",
  Contact: "Connect with our team",
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const companyMenuRef = useRef<HTMLDivElement>(null);
  const companyButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLElement>(null);
  const mobileCloseButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const { resolved, toggle } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const primaryNavigation = siteContent.navigation.slice(0, 4);
  const companyNavigation = siteContent.navigation.slice(4);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1279px)");

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 12);
      setScrollProgress(maxScroll > 0 ? Math.min(y / maxScroll, 1) : 0);

      if (!mq.matches || y <= 80) {
        setIsHidden(false);
      } else if (delta > 6) {
        setIsHidden(true);
      } else if (delta < -6) {
        setIsHidden(false);
      }

      if (Math.abs(delta) > 6 || y <= 80) {
        lastScrollY.current = y;
      }
    };

    const onResize = () => {
      if (!mq.matches) {
        setIsHidden(false);
        setMobileOpen(false);
      } else {
        setCompanyOpen(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onResize);
    };
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => {
    if (!mobileOpen) {
      lastScrollY.current = window.scrollY;
      setIsHidden(false);
    }

    setMobileOpen((open) => !open);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousActiveElement = document.activeElement as HTMLElement | null;
    const mobileMenuButton = mobileMenuButtonRef.current;
    const focusTimer = window.setTimeout(() => mobileCloseButtonRef.current?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobile();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = mobilePanelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      if (previousActiveElement?.isConnected) {
        previousActiveElement.focus();
      } else {
        mobileMenuButton?.focus();
      }
    };
  }, [closeMobile, mobileOpen]);

  useEffect(() => {
    if (!companyOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!companyMenuRef.current?.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCompanyOpen(false);
        companyButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [companyOpen]);

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const companyActive = companyNavigation.some((item) => isActive(item.href));

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 h-16 transition-transform duration-300 xl:h-[4.5rem]",
        isHidden && "-translate-y-full"
      )}
    >
      <div
        ref={companyMenuRef}
        className={clsx(
          "relative h-full border-b backdrop-blur-2xl transition-[background-color,border-color,box-shadow] duration-500",
          scrolled
            ? "border-neutral-200/80 bg-white/95 shadow-[0_12px_36px_-26px_rgba(15,23,42,0.5)] dark:border-white/10 dark:bg-[var(--bg-primary)]/95 dark:shadow-[0_14px_40px_-28px_rgba(0,0,0,0.9)]"
            : "border-white/10 bg-white/88 dark:bg-[var(--bg-primary)]/88"
        )}
      >
        <div className="container flex h-full items-center justify-between">
          <Link
            href="/"
            onClick={() => setCompanyOpen(false)}
            className="group flex min-w-0 flex-shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-[var(--bg-primary)]"
            aria-label="Alvor Healthcare Home"
          >
            <span className="relative h-10 w-10 flex-shrink-0 transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-[1.04] xl:h-11 xl:w-11">
              <Image
                src={publicAssetPath("/images/alvor.svg")}
                alt=""
                fill
                priority
                className="object-contain drop-shadow-[0_8px_12px_rgba(14,116,144,0.18)]"
                sizes="44px"
              />
            </span>
            <span className="min-w-0">
              <span className="block whitespace-nowrap font-heading text-[15px] font-bold leading-none text-neutral-950 dark:text-white xl:text-base">
                Alvor Healthcare
              </span>
              <span className="mt-1.5 block whitespace-nowrap text-[10px] font-semibold uppercase leading-none tracking-[0.14em] text-primary-600 dark:text-primary-400">
                Licensed Pharmaceutical Distributor
              </span>
            </span>
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 xl:flex" aria-label="Main navigation">
            {primaryNavigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setCompanyOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "relative rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                    active
                      ? "text-primary-800 dark:text-primary-200"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="header-active-tab"
                      className="absolute inset-0 rounded-lg bg-primary-50 ring-1 ring-primary-100/80 dark:bg-primary-500/12 dark:ring-primary-400/15"
                      transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 430, damping: 34 }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}

            <div className="relative">
              <button
                ref={companyButtonRef}
                type="button"
                onClick={() => setCompanyOpen((open) => !open)}
                aria-expanded={companyOpen}
                aria-controls="company-navigation"
                className={clsx(
                  "relative flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                  companyActive
                    ? "text-primary-800 dark:text-primary-200"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                )}
              >
                {companyActive && (
                  <motion.span
                    layoutId="header-active-tab"
                    className="absolute inset-0 rounded-lg bg-primary-50 ring-1 ring-primary-100/80 dark:bg-primary-500/12 dark:ring-primary-400/15"
                    transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 430, damping: 34 }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">Company</span>
                <ChevronDown
                  className={clsx("relative z-10 h-3.5 w-3.5 transition-transform duration-200", companyOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
            </div>
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href="tel:+959250666200"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 transition-colors duration-200 hover:bg-neutral-100 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-neutral-400 dark:hover:bg-white/[0.07] dark:hover:text-primary-300"
              aria-label="Call us at 09-250666200"
            >
              <Phone className="h-[17px] w-[17px]" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={toggle}
              className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-neutral-500 transition-colors duration-200 hover:bg-neutral-100 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-neutral-400 dark:hover:bg-white/[0.07] dark:hover:text-primary-300"
              aria-label={`Switch to ${resolved === "dark" ? "light" : "dark"} mode`}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={resolved}
                  initial={prefersReducedMotion ? false : { opacity: 0, rotate: -30, scale: 0.75 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: 30, scale: 0.75 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="transition-transform duration-300 group-hover:rotate-12"
                >
                  {resolved === "dark" ? <Sun className="h-[17px] w-[17px]" /> : <Moon className="h-[17px] w-[17px]" />}
                </motion.span>
              </AnimatePresence>
            </button>

            <Link
              href={siteContent.headerCta.href}
              onClick={() => setCompanyOpen(false)}
              className="group hidden h-9 items-center gap-2 rounded-lg bg-primary-600 px-4 text-[13px] font-semibold text-white shadow-[0_8px_18px_-10px_rgba(14,116,144,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-400 dark:hover:text-neutral-950 dark:focus-visible:ring-offset-[var(--bg-primary)] sm:inline-flex"
            >
              {siteContent.headerCta.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>

            <button
              ref={mobileMenuButtonRef}
              type="button"
              onClick={toggleMobile}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-800 transition-colors duration-200 hover:border-primary-200 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:text-primary-300 xl:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={prefersReducedMotion ? false : { opacity: 0, rotate: -35, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: 35, scale: 0.7 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                >
                  {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {companyOpen && (
            <motion.div
              id="company-navigation"
              role="navigation"
              aria-label="Company navigation"
              initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full border-b border-neutral-200/80 bg-white/97 shadow-[0_26px_60px_-34px_rgba(15,23,42,0.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-[var(--bg-primary)]/97 dark:shadow-[0_30px_70px_-36px_rgba(0,0,0,0.9)]"
            >
              <div className="container grid grid-cols-[0.7fr_1.8fr] gap-10 py-6">
                <div className="border-r border-neutral-200 pr-10 dark:border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
                    Company
                  </p>
                  <p className="mt-3 max-w-xs font-heading text-lg font-bold leading-6 text-neutral-950 dark:text-white">
                    Learn more about Alvor Healthcare.
                  </p>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    Explore company updates, resources, opportunities, and contact channels.
                  </p>
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-primary-200 bg-primary-50 p-3 dark:border-primary-800 dark:bg-primary-900/20">
                    <ShieldCheck className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold text-primary-700 dark:text-primary-300">WHO-GMP Certified</p>
                      <p className="text-[10px] text-primary-600 dark:text-primary-400">ISO 9001:2015 | Myanmar FDA Registered</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {companyNavigation.map((item) => {
                    const active = isActive(item.href);
                    const Icon = navigationIcons[item.label] ?? ChevronRight;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setCompanyOpen(false)}
                        className={clsx(
                          "group flex items-center gap-3 rounded-lg border px-3.5 py-3 transition-[background-color,border-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                          active
                            ? "border-primary-200 bg-primary-50 text-primary-900 dark:border-primary-400/20 dark:bg-primary-500/12 dark:text-primary-100"
                            : "border-transparent text-neutral-800 hover:border-neutral-200 hover:bg-neutral-50 dark:text-neutral-200 dark:hover:border-white/10 dark:hover:bg-white/[0.05]"
                        )}
                      >
                        <span
                          className={clsx(
                            "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border",
                            active
                              ? "border-primary-200 bg-white text-primary-700 dark:border-primary-400/20 dark:bg-primary-500/10 dark:text-primary-300"
                              : "border-neutral-200 bg-white text-neutral-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-400"
                          )}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold">{item.label}</span>
                          <span className="mt-0.5 block text-xs font-normal text-neutral-500 dark:text-neutral-400">
                            {navigationDescriptions[item.label]}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-neutral-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-neutral-600" aria-hidden="true" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.span
          className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-primary-600 via-primary-500 to-emerald-400"
          animate={{ scaleX: scrollProgress }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.12, ease: "easeOut" }}
          aria-hidden="true"
        />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="fixed inset-0 z-[60] xl:hidden" initial="closed" animate="open" exit="closed">
            <motion.div
              className="absolute inset-0 bg-neutral-950/45 backdrop-blur-sm"
              variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
              onClick={closeMobile}
              aria-hidden="true"
            />
            <motion.aside
              ref={mobilePanelRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation panel"
              tabIndex={-1}
              className="absolute inset-y-0 right-0 flex w-full max-w-[25rem] flex-col overflow-hidden border-l border-neutral-200 bg-white shadow-[-24px_0_70px_-32px_rgba(2,6,23,0.65)] dark:border-white/10 dark:bg-[var(--bg-primary)]"
              variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0, x: prefersReducedMotion ? 0 : 36 },
              }}
              transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 36, mass: 0.8 }}
            >
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 dark:border-white/10">
                <Link
                  href="/"
                  onClick={closeMobile}
                  className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  <span className="relative h-11 w-11 flex-shrink-0">
                    <Image
                      src={publicAssetPath("/images/alvor.svg")}
                      alt=""
                      fill
                      className="object-contain drop-shadow-[0_8px_12px_rgba(14,116,144,0.18)]"
                      sizes="44px"
                    />
                  </span>
                  <span>
                    <span className="block font-heading text-base font-bold leading-none text-neutral-950 dark:text-white">
                      Alvor Healthcare
                    </span>
                    <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-600 dark:text-primary-400">
                      Licensed Pharmaceutical Distributor
                    </span>
                  </span>
                </Link>
                <button
                  ref={mobileCloseButtonRef}
                  type="button"
                  onClick={closeMobile}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/[0.06]"
                  aria-label="Close menu"
                >
                  <X className="h-[18px] w-[18px]" aria-hidden="true" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile navigation">
                {[
                  { label: "Main", items: primaryNavigation },
                  { label: "Company", items: companyNavigation },
                ].map((group, groupIndex) => (
                  <div key={group.label} className={clsx(groupIndex > 0 && "mt-6")}>
                    <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                      {group.label}
                    </p>
                    <motion.div
                      className="space-y-1"
                      variants={{
                        open: {
                          transition: {
                            staggerChildren: prefersReducedMotion ? 0 : 0.03,
                            delayChildren: prefersReducedMotion ? 0 : 0.06 + groupIndex * 0.08,
                          },
                        },
                        closed: {},
                      }}
                    >
                      {group.items.map((item) => {
                        const active = isActive(item.href);
                        const Icon = navigationIcons[item.label] ?? ChevronRight;

                        return (
                          <motion.div
                            key={item.href}
                            variants={{
                              open: { opacity: 1, x: 0 },
                              closed: { opacity: 0, x: prefersReducedMotion ? 0 : 12 },
                            }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                          >
                            <Link
                              href={item.href}
                              onClick={closeMobile}
                              aria-current={active ? "page" : undefined}
                              className={clsx(
                                "group flex min-h-12 items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                                active
                                  ? "bg-primary-50 text-primary-800 dark:bg-primary-500/12 dark:text-primary-200"
                                  : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                              )}
                            >
                              <span
                                className={clsx(
                                  "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border",
                                  active
                                    ? "border-primary-200 bg-white text-primary-700 dark:border-primary-400/20 dark:bg-primary-500/10 dark:text-primary-300"
                                    : "border-neutral-200 bg-white text-neutral-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-400"
                                )}
                              >
                                <Icon className="h-4 w-4" aria-hidden="true" />
                              </span>
                              <span className="flex-1">{item.label}</span>
                              <ChevronRight className="h-4 w-4 text-neutral-300 transition-transform group-hover:translate-x-0.5 dark:text-neutral-600" aria-hidden="true" />
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                ))}
              </nav>

              <div className="border-t border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/[0.025]">
                <Link
                  href={siteContent.headerCta.href}
                  onClick={closeMobile}
                  className="group flex w-full items-center justify-between rounded-lg bg-primary-600 px-4 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgba(14,116,144,0.85)] transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-400 dark:hover:text-neutral-950 dark:focus-visible:ring-offset-[var(--bg-primary)]"
                >
                  <span>{siteContent.headerCta.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
