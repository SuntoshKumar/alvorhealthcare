"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronRight,
  Globe,
  Grid,
  List,
  Package,
  RotateCcw,
  Search,
  Shield,
  Star,
  X,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button, LinkButton } from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Navigation";
import { ProductCard } from "@/components/products/ProductCard";
import { sortProducts, paginateProducts } from "@/data";
import { publicAssetPath } from "@/lib/paths";
import {
  AnimatedCounter,
  TiltCard,
} from "@/components/products/category-utils";
import { Category, Product } from "@/types";

interface Props {
  category: Category;
  products: Product[];
}

type SortOption = "name" | "newest" | "popular" | "featured";
type ViewMode = "grid" | "list";

const easeOut = [0.22, 1, 0.36, 1] as const;

function HeroDecor({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/50 dark:border-blue-700/20"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" />
        <span className="absolute bottom-[15%] left-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-teal-400 shadow-[0_0_0_5px_rgba(45,212,191,0.1)]" />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-300/40 dark:border-blue-600/15"
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400" />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-[18%] h-px w-[420px] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300/60 to-transparent dark:via-blue-600/30"
        animate={reducedMotion ? undefined : { opacity: [0.3, 0.8, 0.3], scaleX: [0.85, 1, 0.85] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 bottom-[22%] h-px w-[320px] -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-300/40 to-transparent dark:via-teal-600/20"
        animate={reducedMotion ? undefined : { opacity: [0.2, 0.6, 0.2], scaleX: [0.9, 1.05, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </div>
  );
}

export function CategoryPageContent({ category, products: categoryProducts }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const { colors } = category;
  const transitionDuration = prefersReducedMotion ? 0.01 : 0.35;

  const [filters, setFilters] = useState(() => {
    let viewMode: ViewMode = "grid";
    let sortBy: SortOption = "name";
    let search = "";
    if (typeof window !== "undefined") {
      const savedView = localStorage.getItem("productViewMode");
      if (savedView === "grid" || savedView === "list") viewMode = savedView;
      const savedSort = localStorage.getItem("productSortBy") as SortOption | null;
      if (savedSort && ["name", "newest", "popular", "featured"].includes(savedSort)) sortBy = savedSort;
      const savedSearch = localStorage.getItem("productSearch");
      if (savedSearch) search = savedSearch;
    }
    return {
      search,
      sortBy,
      viewMode,
      page: 1,
      limit: 12,
    };
  });

  const deferredSearch = useDeferredValue(filters.search);
  const isSearching = filters.search !== deferredSearch;

  const filteredProducts = useMemo(() => {
    let result = [...categoryProducts];

    if (deferredSearch) {
      const query = deferredSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    result = sortProducts(result, filters.sortBy);
    return result;
  }, [deferredSearch, filters.sortBy, categoryProducts]);

  const paginated = paginateProducts(filteredProducts, filters.page, filters.limit);

  const handleFilterChange = (key: string, value: unknown) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }));
    if (typeof window !== "undefined") {
      if (key === "viewMode") localStorage.setItem("productViewMode", value as string);
      if (key === "sortBy") localStorage.setItem("productSortBy", value as string);
      if (key === "search") localStorage.setItem("productSearch", value as string);
    }
  };

  const clearFilters = () => {
    setFilters((prev) => ({
      ...prev,
      search: "",
      page: 1,
    }));
    if (typeof window !== "undefined") localStorage.removeItem("productSearch");
  };

  const rangeStart = filteredProducts.length === 0 ? 0 : (filters.page - 1) * filters.limit + 1;
  const rangeEnd = Math.min(filters.page * filters.limit, filteredProducts.length);
  const hasActiveFilters = filters.search !== "";

  const heroItemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.5, ease: easeOut },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section
        className={`relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b ${colors.gradient} dark:from-blue-950/30 dark:via-neutral-950 dark:to-teal-950/30`}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.04]"
          aria-hidden="true"
        />
        <HeroDecor reducedMotion={!!prefersReducedMotion} />

        <div className="container relative px-6 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={heroItemVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-900/70 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm ring-1 ring-blue-100 dark:ring-blue-800/50 hover:bg-white dark:hover:bg-neutral-900 transition-colors backdrop-blur-xl"
              >
                <Package className="w-4 h-4" aria-hidden="true" />
                All Categories
              </Link>
            </motion.div>

            <motion.div
              variants={heroItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
            >
              <div className="group relative mx-auto mb-8 flex h-44 w-44 items-center justify-center rounded-full border border-white/25 bg-white/[0.07] p-2 shadow-[0_28px_70px_-38px_rgba(15,23,42,0.75)] backdrop-blur-[2px] transition-all duration-500 hover:border-white/40 hover:shadow-[0_28px_70px_-38px_rgba(59,130,246,0.45)] sm:h-48 sm:w-48 sm:p-3">
                <div className={`absolute -inset-5 rounded-full ${colors.glow} blur-2xl transition-all duration-700 group-hover:scale-110`} />
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-20`} />
                <div className="absolute inset-3 rounded-full border border-white/15 transition-colors duration-500 group-hover:border-white/25 dark:border-white/[0.08]" aria-hidden="true" />
                <div className="absolute inset-2 rounded-full border border-white/70 transition-all duration-500 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:border-white/10">
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_6px_rgba(59,130,246,0.14)] dark:bg-blue-300" />
                </div>
                <div className="absolute inset-[15%] rounded-full border border-dashed border-white/60 transition-all duration-500 group-hover:border-white/80 group-hover:rotate-45 dark:border-blue-200/20">
                  <span className="absolute bottom-[8%] right-0 h-1.5 w-1.5 translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_0_5px_rgba(45,212,191,0.12)]" />
                </div>
                <div className="relative z-10 h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${colors.accent} transition-all duration-500 group-hover:scale-110`}
                    style={{
                      maskImage: `url("${publicAssetPath(category.image)}")`,
                      WebkitMaskImage: `url("${publicAssetPath(category.image)}")`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                    }}
                  />
                </div>
              </div>
              <h1 className="display-xl lg:display-2xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
                {category.name}
              </h1>
            </motion.div>

            <motion.p
              variants={heroItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
              className="body-lg lg:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-10"
            >
              {category.description}
            </motion.p>

            <motion.div
              variants={heroItemVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-600 dark:text-neutral-300"
            >
              <div className="flex items-center gap-2 rounded-full bg-white/80 dark:bg-neutral-900/70 px-4 py-2 shadow-sm ring-1 ring-neutral-100 dark:ring-neutral-800 backdrop-blur-xl">
                <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <AnimatedCounter end={category.productCount} duration={1800} />
                <span>Products</span>
              </div>
              {category.subCategories && category.subCategories.length > 0 && (
                <div className="flex items-center gap-2 rounded-full bg-white/80 dark:bg-neutral-900/70 px-4 py-2 shadow-sm ring-1 ring-neutral-100 dark:ring-neutral-800 backdrop-blur-xl">
                  <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <AnimatedCounter end={category.subCategories.length} duration={1600} />
                  <span>Subcategories</span>
                </div>
              )}
              <div className="flex items-center gap-2 rounded-full bg-white/80 dark:bg-neutral-900/70 px-4 py-2 shadow-sm ring-1 ring-neutral-100 dark:ring-neutral-800 backdrop-blur-xl">
                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-neutral-900 dark:text-white">Myanmar</span>
                <span>Market</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/80 dark:bg-neutral-900/70 px-4 py-2 shadow-sm ring-1 ring-neutral-100 dark:ring-neutral-800 backdrop-blur-xl">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-neutral-900 dark:text-white">Documented</span>
                <span>Records</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {category.subCategories && category.subCategories.length > 0 && (
        <section className="py-16 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="subcategories-heading">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 id="subcategories-heading" className="display-sm lg:display-md font-bold text-neutral-900 dark:text-white">
                  Subcategories
                </h2>
                <p className="body-lg text-neutral-600 dark:text-neutral-300 mt-3">
                  Browse {category.subCategories.length} subcategories within {category.name}
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.subCategories.map((sub, index) => (
                <StaggerItem key={sub.id} delay={index * 0.1} className="h-full">
                  <ScrollReveal className="h-full">
                    <HoverScale scale={1.02} className="h-full">
                      <TiltCard className="h-full">
                        <Link href={`/products?category=${category.slug}&subcategory=${sub.slug}`} className="block group h-full">
                          <Card
                            variant="elevated"
                            className={`group relative h-full flex flex-col overflow-hidden rounded-[1.5rem] border-neutral-100 bg-white/90 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.42)] ${colors.hoverBorder} transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_60px_-34px_rgba(30,64,175,0.3)] dark:border-white/10 dark:bg-neutral-900/80 dark:hover:shadow-[0_26px_60px_-34px_rgba(0,0,0,0.45)]`}
                          >
                            <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${colors.surface}`}>
                              <span className={`absolute -right-10 top-2 h-36 w-36 rounded-full ${colors.glow} blur-3xl transition-transform duration-700 group-hover:scale-110`} />
                              <span className="absolute -right-8 top-4 h-32 w-32 rounded-full border border-white/75 dark:border-white/10" />
                              <span className="absolute right-3 top-14 h-24 w-24 rounded-full border border-white/65 dark:border-white/[0.08]" />

                              <div className="relative flex items-center justify-between p-4">
                                <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${colors.text}`}>
                                  Subcategory {String(index + 1).padStart(2, "0")}
                                </span>
                                <Badge
                                  variant="outline"
                                  className={
                                    sub.productCount === 0
                                      ? "text-red-600 border-red-200 bg-red-50/55 dark:text-red-400 dark:border-red-800/40 dark:bg-red-950/25"
                                      : `${colors.text} border-current/20 bg-white/55 dark:bg-neutral-950/25`
                                  }
                                >
                                  {sub.productCount} products
                                </Badge>
                              </div>

                              <div className={`absolute right-6 top-16 flex h-20 w-20 items-center justify-center rounded-[1.35rem] bg-gradient-to-br ${colors.accent} shadow-[0_18px_35px_-18px_rgba(15,23,42,0.55)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-[1.06]`}>
                                <Image
                                  src={publicAssetPath(category.image)}
                                  alt=""
                                  width={48}
                                  height={48}
                                  className="h-11 w-11 object-contain brightness-0 invert"
                                />
                              </div>
                            </div>
                            <CardContent className="p-5 flex flex-col flex-1">
                              <div className="flex items-start justify-between gap-3">
                                <CardTitle className="text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                  {sub.name}
                                </CardTitle>
                                <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600 dark:text-neutral-600 dark:group-hover:text-blue-400" />
                              </div>
                              <CardDescription className="mt-2 line-clamp-2">{sub.description}</CardDescription>
                              <div className="mt-auto pt-4 flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                                <span className="group-hover:underline">View Products</span>
                                <span className="h-px w-5 bg-current transition-all duration-300 group-hover:w-8" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </TiltCard>
                    </HoverScale>
                  </ScrollReveal>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="products-heading">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
            <div>
              <ScrollReveal>
                <h2 id="products-heading" className="display-md lg:display-lg font-bold text-neutral-900 dark:text-white">
                  {category.name} Products
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="body-lg text-neutral-600 dark:text-neutral-300 mt-2">
                  {filteredProducts.length} products in this category
                </p>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.15}>
            <motion.div
              className="mb-8 overflow-hidden rounded-[1.5rem] border border-neutral-200/80 bg-white shadow-[0_18px_55px_-38px_rgba(15,23,42,0.45)] dark:border-neutral-800 dark:bg-neutral-900/80"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, ease: easeOut }}
            >
              <div className="grid gap-2.5 p-2.5 lg:grid-cols-[minmax(0,1fr)_220px_auto]">
                <div className="relative">
                  <label htmlFor="category-product-search" className="sr-only">
                    Search products
                  </label>
                  <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600 dark:text-blue-400" />
                  <input
                    id="category-product-search"
                    type="text"
                    placeholder="Search products in this category..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange("search", e.target.value)}
                    className="h-14 w-full rounded-[0.9rem] border border-transparent bg-neutral-50 pl-14 pr-28 text-[15px] font-medium text-neutral-900 outline-none transition-all placeholder:font-normal placeholder:text-neutral-400 hover:bg-neutral-100/80 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:bg-neutral-800/70 dark:text-white dark:placeholder:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:border-blue-500 dark:focus:bg-neutral-900 dark:focus:ring-blue-900/40 sm:pr-40"
                  />
                  <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
                    <AnimatePresence>
                      {isSearching && (
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {filters.search && (
                      <button
                        type="button"
                        onClick={() => handleFilterChange("search", "")}
                        className="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-white hover:text-neutral-700 dark:hover:bg-neutral-700 dark:hover:text-white"
                        aria-label="Clear product search"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                    <span className="hidden rounded-lg bg-white px-3 py-1.5 text-xs font-semibold tabular-nums text-neutral-500 shadow-sm ring-1 ring-neutral-200/70 dark:bg-neutral-900 dark:text-neutral-300 dark:ring-neutral-700 sm:block">
                      {filteredProducts.length} matches
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="category-product-sort" className="sr-only">
                    Sort results
                  </label>
                  <ArrowUpDown className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-blue-600 dark:text-blue-400" />
                  <span className="pointer-events-none absolute left-11 top-2.5 z-10 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                    Sort by
                  </span>
                  <select
                    id="category-product-sort"
                    value={filters.sortBy}
                    onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                    className="h-14 w-full appearance-none rounded-[0.9rem] border border-transparent bg-neutral-50 pb-1.5 pl-11 pr-10 pt-5 text-sm font-semibold text-neutral-800 outline-none transition-all hover:bg-neutral-100/80 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:bg-neutral-800/70 dark:text-white dark:hover:bg-neutral-800 dark:focus:border-blue-500 dark:focus:bg-neutral-900 dark:focus:ring-blue-900/40"
                  >
                    <option value="name">Name A-Z</option>
                    <option value="newest">Newest first</option>
                    <option value="popular">Bestsellers first</option>
                    <option value="featured">Featured first</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                </div>

                <div className="flex h-14 items-center justify-between gap-3 rounded-[0.9rem] bg-neutral-50 px-3 dark:bg-neutral-800/70 lg:justify-center">
                  <span className="pl-1 text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 lg:sr-only">
                    Layout
                  </span>
                  <div className="inline-flex rounded-xl bg-neutral-200/60 p-1 dark:bg-neutral-900/70">
                    <button
                      type="button"
                      onClick={() => handleFilterChange("viewMode", "grid")}
                      className={`rounded-lg p-2.5 transition-all ${
                        filters.viewMode === "grid"
                          ? "bg-white text-blue-600 shadow-sm dark:bg-neutral-700 dark:text-blue-400"
                          : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"
                      }`}
                      aria-label="Grid view"
                      aria-pressed={filters.viewMode === "grid"}
                    >
                      <Grid className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleFilterChange("viewMode", "list")}
                      className={`rounded-lg p-2.5 transition-all ${
                        filters.viewMode === "list"
                          ? "bg-white text-blue-600 shadow-sm dark:bg-neutral-700 dark:text-blue-400"
                          : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"
                      }`}
                      aria-label="List view"
                      aria-pressed={filters.viewMode === "list"}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          <motion.div
            className="mb-6 flex flex-wrap items-end justify-between gap-3"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.4, ease: easeOut }}
          >
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white" aria-live="polite">
                {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Showing {rangeStart}-{rangeEnd} of {filteredProducts.length}
              </p>
            </div>
            <AnimatePresence mode="popLayout">
              {hasActiveFilters && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex flex-wrap items-center justify-end gap-2"
                >
                  {filters.search && (
                    <button
                      type="button"
                      onClick={() => handleFilterChange("search", "")}
                      className="inline-flex max-w-56 items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 transition-colors hover:border-blue-200 hover:text-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                    >
                      <Search className="h-3 w-3 shrink-0" />
                      <span className="truncate">{filters.search}</span>
                      <X className="h-3 w-3 shrink-0" />
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <LayoutGroup id="category-product-results">
            <AnimatePresence mode="wait">
              {paginated.data.length === 0 ? (
                <motion.div
                  key="empty-results"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                  transition={{ duration: transitionDuration, ease: easeOut }}
                  className="rounded-3xl border border-dashed border-neutral-200 bg-white px-6 py-20 text-center dark:border-neutral-700 dark:bg-neutral-900/60"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-neutral-900 dark:text-white">No matching products</h3>
                  <p className="mx-auto mt-2 max-w-md text-neutral-500 dark:text-neutral-400">
                    Try a broader search or clear your filters.
                  </p>
                  <Button className="mt-6" variant="outline" onClick={clearFilters}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Clear Filters
                  </Button>
                </motion.div>
              ) : filters.viewMode === "grid" ? (
                <motion.div key="grid-results" layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <AnimatePresence mode="popLayout">
                    {paginated.data.map((product, index) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16, scale: prefersReducedMotion ? 1 : 0.985 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            duration: transitionDuration,
                            delay: prefersReducedMotion ? 0 : Math.min(index * 0.035, 0.2),
                            ease: easeOut,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          y: prefersReducedMotion ? 0 : -10,
                          scale: prefersReducedMotion ? 1 : 0.985,
                          transition: { duration: prefersReducedMotion ? 0.01 : 0.18 },
                        }}
                        transition={{
                          layout: prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 420, damping: 38 },
                        }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div key="list-results" layout className="space-y-3.5">
                  <AnimatePresence mode="popLayout">
                    {paginated.data.map((product, index) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: transitionDuration,
                            delay: prefersReducedMotion ? 0 : Math.min(index * 0.035, 0.2),
                            ease: easeOut,
                          },
                        }}
                        exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8, transition: { duration: prefersReducedMotion ? 0.01 : 0.18 } }}
                        transition={{
                          layout: prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 420, damping: 38 },
                        }}
                      >
                        <ProductCard product={product} variant="list" />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>

          {paginated.totalPages > 1 && (
            <div className="mt-12">
              <Pagination
                currentPage={filters.page}
                totalPages={paginated.totalPages}
                onPageChange={(page) => setFilters((prev) => ({ ...prev, page }))}
              />
            </div>
          )}
        </div>
      </section>

      <section className="section bg-blue-600 dark:bg-blue-800 text-white relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px] opacity-10" aria-hidden="true" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 id="cta-heading" className="display-md font-bold mb-6">
                Need Help Finding the Right Product?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="body-lg text-blue-100 mb-8">
                Our pharmaceutical experts can help you select the best products for your market needs.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LinkButton
                  href={`/contact?inquiryType=product-inquiry&subject=${encodeURIComponent(`${category.name} category inquiry`)}`}
                  size="lg"
                  variant="secondary"
                  rightIcon={<ChevronRight className="w-5 h-5" />}
                >
                  Contact Our Experts
                </LinkButton>
                <LinkButton
                  href={`/contact?inquiryType=product-inquiry&subject=${encodeURIComponent(`Product catalog request - ${category.name}`)}`}
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Request Product Catalog
                </LinkButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
