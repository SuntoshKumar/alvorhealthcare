"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, Search, ChevronDown, ArrowRight, Shield, Pill, FlaskConical,
  Syringe, Droplets, HeartPulse, Microscope, BookOpen, Users, Building2,
  Globe, ChevronRight, Phone, Mail, Command,
} from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ──────────────────────────────────────────────────────────

const audienceLinks = [
  { label: "Healthcare Professionals", href: "/resources" },
  { label: "Patients & Caregivers", href: "/patient-support" },
  { label: "Distributors", href: "/distributors" },
];

const categoryIcons: Record<string, typeof Shield> = {
  Tablets: Pill, Capsules: Pill, Syrups: Droplets, Injections: Syringe, Supplements: FlaskConical,
};

const nav = [
  {
    label: "Products", href: "/products",
    mega: [
      {
        title: "Categories", cols: 2,
        items: [
          { label: "Tablets", href: "/categories/tablets", desc: "Solid oral dosage forms", icon: Pill },
          { label: "Capsules", href: "/categories/capsules", desc: "Hard & soft gelatin", icon: Shield },
          { label: "Syrups", href: "/categories/syrups", desc: "Liquid formulations", icon: Droplets },
          { label: "Injections", href: "/categories/injections", desc: "Sterile parenteral", icon: Syringe },
          { label: "Supplements", href: "/categories/supplements", desc: "Nutraceuticals", icon: FlaskConical },
        ],
      },
      {
        title: "Therapeutic Areas", cols: 1,
        items: [
          { label: "Cardiovascular", href: "/products?category=cardiovascular" },
          { label: "Neurology", href: "/products?category=neurology" },
          { label: "Gastroenterology", href: "/products?category=gastroenterology" },
          { label: "Respiratory", href: "/products?category=respiratory" },
          { label: "Pain Management", href: "/products?category=pain-management" },
        ],
      },
      {
        title: "Quick Access", cols: 1,
        items: [
          { label: "New Arrivals", href: "/products?sort=newest", badge: "New" },
          { label: "Best Sellers", href: "/products?sort=popular" },
          { label: "Product Catalog", href: "/catalog.pdf", desc: "Download PDF" },
        ],
      },
    ],
  },
  {
    label: "About", href: "/about",
    mega: [
      {
        title: "Company", cols: 1,
        items: [
          { label: "Our Story", href: "/about" },
          { label: "Mission & Vision", href: "/about#mission" },
          { label: "Leadership", href: "/about#team" },
          { label: "Quality Standards", href: "/about#quality" },
          { label: "Manufacturing", href: "/about#manufacturing" },
        ],
      },
      {
        title: "Impact", cols: 1,
        items: [
          { label: "Certifications", href: "/about#certifications", icon: Shield },
          { label: "Sustainability", href: "/sustainability", icon: Globe },
          { label: "Global Reach", href: "/about", icon: Building2 },
        ],
      },
      {
        title: "News & Media", cols: 1,
        items: [
          { label: "News & Updates", href: "/news" },
          { label: "Press Releases", href: "/news" },
          { label: "Careers", href: "/careers", icon: Users },
        ],
      },
    ],
  },
  {
    label: "Resources", href: "/resources",
    mega: [
      {
        title: "For Professionals", cols: 1,
        items: [
          { label: "Prescribing Info", href: "/prescribing-info", icon: BookOpen },
          { label: "Clinical Studies", href: "/clinical-studies", icon: Microscope },
          { label: "Medical Education", href: "/medical-education", icon: HeartPulse },
        ],
      },
      {
        title: "For Patients", cols: 1,
        items: [
          { label: "Medication Guides", href: "/medication-guides" },
          { label: "Patient Support", href: "/patient-support" },
          { label: "FAQ", href: "/faq" },
        ],
      },
      {
        title: "Company Info", cols: 1,
        items: [
          { label: "News & Updates", href: "/news" },
          { label: "Careers", href: "/careers" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

// ─── Logo ───────────────────────────────────────────────────────────

const LogoSymbol = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="7" fill="currentColor"/>
    <path d="M12 4.5v15M4.5 12h15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// ─── Sub-components ────────────────────────────────────────────────

function NavDot({ active, layoutId }: { active: boolean; layoutId: string }) {
  return (
    <motion.span
      layoutId={layoutId}
      className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-600"
      initial={false}
      animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    />
  );
}

function CommandBadge() {
  return (
    <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium text-neutral-400 bg-neutral-100 rounded-md ml-2 border border-neutral-200/60">
      <Command className="w-2.5 h-2.5" />K
    </kbd>
  );
}

// ─── Mega-menu card ────────────────────────────────────────────────

function MegaCard({ item, onClick }: {
  item: { label: string; href: string; desc?: string; icon?: typeof Shield; badge?: string };
  onClick: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all hover:bg-primary-50/70 hover:shadow-soft"
    >
      {Icon && (
        <span className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
          <Icon className="w-4 h-4" />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-neutral-800 group-hover:text-primary-700 transition-colors">{item.label}</span>
          {item.badge && (
            <span className="px-1.5 py-0.5 text-[10px] font-semibold text-primary-700 bg-primary-100 rounded-full">{item.badge}</span>
          )}
        </div>
        {item.desc && <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">{item.desc}</p>}
      </div>
    </Link>
  );
}

// ─── Component ─────────────────────────────────────────────────────

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setAtTop(y < 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen, searchOpen]);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 200);
  }, [searchOpen]);

  // keyboard shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setSearchOpen(true); }
      if (e.key === "Escape") { setSearchOpen(false); setMobileOpen(false); setMenu(null); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = useCallback((href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }, [pathname]);

  const openMenu = (id: string | null) => {
    if (timer.current) clearTimeout(timer.current);
    setMenu(id);
  };

  const closeMenu = () => {
    timer.current = setTimeout(() => setMenu(null), 100);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`;
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navWithMega = nav.filter((n) => "mega" in n);
  const navSimple = nav.filter((n) => !("mega" in n));

  return (
    <>
      {/* ── Top utility strip ── */}
      <div
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          atTop
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="h-9 bg-white/60 backdrop-blur-md border-b border-neutral-100/60">
          <div className="container h-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="flex items-center gap-1.5 text-[11px] text-neutral-500 mr-3">
                <Phone className="w-3 h-3 text-primary-500" />
                +1 (800) 555‑0123
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-[11px] text-neutral-500">
                <Mail className="w-3 h-3 text-primary-500" />
                info@alvorhealthcare.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              {audienceLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-[11px] font-medium text-neutral-500 hover:text-primary-600 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main header ── */}
      <header
        className={clsx(
          "fixed left-0 right-0 z-40 transition-all duration-500",
          atTop ? "top-9" : "top-0"
        )}
      >
        {/* glass bg */}
        <div
          className={clsx(
            "absolute inset-0 transition-all duration-500",
            scrolled || !atTop
              ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]"
              : "bg-white/0 backdrop-blur-none"
          )}
        />
        {/* border that fades in */}
        <div
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500",
            scrolled || !atTop ? "opacity-100" : "opacity-0",
          )}
          style={{ background: "linear-gradient(90deg, transparent, rgba(14,165,233,0.15), transparent)" }}
        />

        <div className="relative">
          <div className="container">
            <div className="flex items-center justify-between h-14 lg:h-16">
              {/* Logo */}
              <Link
                href="/"
                className="relative z-10 flex items-center gap-2.5 group flex-shrink-0"
                aria-label="Alvor Healthcare Home"
              >
                <span className="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-soft group-hover:shadow-medium transition-all">
                  <LogoSymbol />
                </span>
                <div className="hidden sm:block">
                  <span className="block font-display font-bold text-base lg:text-lg text-neutral-900 leading-tight">Alvor Healthcare</span>
                  <span className="block text-[9px] lg:text-[10px] text-neutral-400 font-medium tracking-[0.18em] uppercase leading-none">Pharmaceutical Excellence</span>
                </div>
              </Link>

              {/* ── Desktop nav ── */}
              <nav className="hidden lg:flex items-center" aria-label="Main navigation">
                {navWithMega.map((item) => {
                  const active = isActive(item.href);
                  const open = menu === item.href;
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => openMenu(item.href)}
                      onMouseLeave={closeMenu}
                    >
                      <button
                        className={clsx(
                          "relative flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium tracking-wide rounded-lg transition-colors",
                          open || active
                            ? "text-primary-700"
                            : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                        )}
                        aria-haspopup="true"
                        aria-expanded={open}
                      >
                        {item.label}
                        <ChevronDown className={clsx(
                          "w-3 h-3 transition-transform duration-200",
                          open && "rotate-180"
                        )} />
                        <NavDot active={open || active} layoutId={`dot-${item.href}`} />
                      </button>
                      <AnimatePresence>
                        {open && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 top-full pt-1.5"
                            onMouseEnter={() => openMenu(item.href)}
                            onMouseLeave={closeMenu}
                          >
                            <div
                              className="bg-white rounded-2xl border border-neutral-100 shadow-large shadow-black/5 overflow-hidden"
                              style={{ width: item.mega && item.mega.length === 1 ? 260 : 680 }}
                              role="menu"
                            >
                              <div className="flex">
                                {item.mega?.map((section, si) => (
                                  <div
                                    key={si}
                                    className={clsx(
                                      "p-5",
                                      si < item.mega.length - 1 && "border-r border-neutral-100",
                                      section.cols === 2 ? "flex-[2]" : "flex-1"
                                    )}
                                  >
                                    <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.12em] mb-2.5 px-3">
                                      {section.title}
                                    </p>
                                    <div className={clsx(section.cols === 2 && "grid grid-cols-2 gap-x-2")}>
                                      {section.items.map((link, li) => (
                                        <MegaCard key={li} item={link} onClick={() => setMenu(null)} />
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="px-5 py-3 bg-gradient-to-r from-primary-50/80 to-white border-t border-neutral-100">
                                <Link
                                  href="/products"
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                                  onClick={() => setMenu(null)}
                                >
                                  Browse all products <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
                <span className="w-px h-5 bg-neutral-200 mx-2" />
                {navSimple.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={clsx(
                        "relative px-3.5 py-2 text-[13px] font-medium tracking-wide rounded-lg transition-colors",
                        active
                          ? "text-primary-700"
                          : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                      )}
                    >
                      {item.label}
                      <NavDot active={active} layoutId={`dot-${item.href}`} />
                    </Link>
                  );
                })}
              </nav>

              {/* ── Right actions ── */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSearchOpen(true)}
                  className="flex items-center gap-1.5 h-8 px-3 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all text-xs"
                  aria-label="Search (Cmd+K)"
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden lg:inline text-neutral-400">Search</span>
                  <CommandBadge />
                </button>
                <Link
                  href="/contact"
                  className="hidden sm:inline-flex items-center gap-1.5 h-8 px-4 text-xs font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-all active:scale-[0.97] shadow-soft"
                >
                  Contact Us
                </Link>
                <button
                  className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu className="w-[18px] h-[18px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Spacer for the utility bar ── */}
      <div className="h-9 hidden lg:block" />

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative ml-auto w-full max-w-sm bg-white flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-600 text-white">
                    <LogoSymbol />
                  </span>
                  <span className="font-display font-bold text-base text-neutral-900">Alvor</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-400 hover:bg-neutral-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-[18px] h-[18px]" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-0.5" aria-label="Mobile">
                {nav.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={clsx(
                        "flex items-center justify-between px-4 py-3.5 text-sm font-medium rounded-xl transition-colors",
                        active ? "text-primary-700 bg-primary-50" : "text-neutral-700 hover:bg-neutral-50"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                      <ChevronRight className="w-4 h-4 text-neutral-300" />
                    </Link>
                  );
                })}
              </nav>

              <div className="px-4 py-4 border-t border-neutral-100 bg-neutral-50/60 space-y-3">
                <div className="flex items-center justify-center gap-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-primary-500" /> +1 (800) 555‑0123</span>
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-primary-500" /> info@alvorhealthcare.com</span>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Command palette search ── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] bg-black/15 backdrop-blur-sm"
            onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-lg mx-4 bg-white rounded-xl shadow-large border border-neutral-100 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="relative flex items-center">
                <Search className="absolute left-4 w-[18px] h-[18px] text-neutral-400" />
                <input
                  ref={searchRef}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, categories, resources…"
                  className="w-full pl-11 pr-4 py-4 text-sm bg-transparent border-none focus:outline-none text-neutral-900 placeholder:text-neutral-400"
                />
                <button
                  type="button"
                  onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                  className="mr-2 flex items-center justify-center w-7 h-7 rounded-md text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
              <div className="px-4 pb-4 flex flex-wrap items-center gap-1.5 border-t border-neutral-100 pt-3">
                <span className="text-[11px] text-neutral-400 font-medium mr-1">Suggestions:</span>
                {["Tablets", "Vitamins", "Pain Relief", "Antibiotics", "Contact"].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => {
                      const target = q === "Contact" ? "/contact" : `/products?search=${encodeURIComponent(q)}`;
                      window.location.href = target;
                      setSearchOpen(false);
                    }}
                    className="px-2.5 py-1 text-[11px] font-medium text-neutral-500 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
                  >
                    {q}
                  </button>
                ))}
                <span className="ml-auto text-[10px] text-neutral-400 hidden sm:inline">
                  <kbd className="px-1 py-0.5 bg-neutral-100 rounded text-[10px]">esc</kbd> to close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}