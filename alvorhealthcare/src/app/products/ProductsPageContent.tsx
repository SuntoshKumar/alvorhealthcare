"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { ArrowUpDown, ChevronDown, Grid, List, LoaderCircle, Package, Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Navigation";
import { categories, filterProducts, paginateProducts, products, sortProducts } from "@/data";

type SortOption = "name" | "newest" | "popular" | "featured";
type ViewMode = "grid" | "list";

interface FilterState {
  search: string;
  category: string;
  subCategory: string;
  tags: string[];
  sortBy: SortOption;
  viewMode: ViewMode;
  page: number;
  limit: number;
}


const defaultFilters: FilterState = {
  search: "",
  category: "all",
  subCategory: "",
  tags: [],
  sortBy: "featured",
  viewMode: "grid",
  page: 1,
  limit: 12,
};

function createInitialFilters(initialCategory?: string, initialSubCategory?: string): FilterState {
  const category = categories.find((item) => item.slug === initialCategory);
  const subCategory = category?.subCategories?.find((item) => item.slug === initialSubCategory);

  return {
    ...defaultFilters,
    category: category?.slug ?? "all",
    subCategory: subCategory?.name ?? "",
  };
}

export function ProductsPageContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const rawCategory = searchParams.get("category") ?? undefined;
  const rawSubCategory = searchParams.get("subcategory") ?? undefined;
  const [filters, setFilters] = useState<FilterState>(() => createInitialFilters(rawCategory, rawSubCategory));
  const deferredSearch = useDeferredValue(filters.search);
  const prefersReducedMotion = useReducedMotion();

  const therapeuticTags = useMemo(() => {
    const structuralTags = new Set([
      "new",
      "bestseller",
      "featured",
      "rx",
      "otc",
      ...categories.flatMap((category) => [
        category.name.toLowerCase(),
        category.slug,
        ...(category.subCategories?.flatMap((subCategory) => [
          subCategory.name.toLowerCase(),
          subCategory.slug,
        ]) ?? []),
      ]),
      ...products.flatMap((product) => product.subCategory
        ? [
            product.subCategory.toLowerCase(),
            product.subCategory.toLowerCase().split(" ").join("-"),
          ]
        : []),
    ]);

    return Array.from(new Set(products.flatMap((product) => product.tags)))
      .filter((tag) => !structuralTags.has(tag))
      .sort();
  }, []);

  const filteredProducts = useMemo(() => {
    const result = filterProducts({
      category: filters.category !== "all" ? filters.category : undefined,
      subCategory: filters.subCategory || undefined,
      tags: filters.tags.length > 0 ? filters.tags : undefined,
      search: deferredSearch || undefined,
    });

    return sortProducts(result, filters.sortBy);
  }, [deferredSearch, filters.category, filters.sortBy, filters.subCategory, filters.tags]);

  const paginated = paginateProducts(filteredProducts, filters.page, filters.limit);
  const hasActiveFilters = filters.search || filters.category !== "all" || filters.subCategory || filters.tags.length > 0;

  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
      ...(key === "category" ? { subCategory: "" } : {}),
      ...(key === "page" ? {} : { page: 1 }),
    }));
  };

  const clearFilters = () => {
    setFilters((previous) => ({
      ...defaultFilters,
      sortBy: previous.sortBy,
      viewMode: previous.viewMode,
    }));
    updateProductUrl("all");
  };

  const toggleTag = (tag: string) => {
    updateFilter("tags", filters.tags.includes(tag)
      ? filters.tags.filter((selectedTag) => selectedTag !== tag)
      : [...filters.tags, tag]);
  };

  const rangeStart = filteredProducts.length === 0 ? 0 : (filters.page - 1) * filters.limit + 1;
  const rangeEnd = Math.min(filters.page * filters.limit, filteredProducts.length);
  const isSearching = filters.search !== deferredSearch;
  const transitionDuration = prefersReducedMotion ? 0.01 : 0.35;
  const heroItemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
  const activeCategory = categories.find((category) => category.slug === filters.category);
  const activeSubCategory = activeCategory?.subCategories?.find((subCategory) => subCategory.name === filters.subCategory);

  const updateProductUrl = (category: string, subCategory = "") => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "all") {
      params.delete("category");
      params.delete("subcategory");
    } else {
      params.set("category", category);
      if (subCategory) {
        const categoryData = categories.find((item) => item.slug === category);
        const subCategoryData = categoryData?.subCategories?.find((item) => item.name === subCategory);
        if (subCategoryData) {
          params.set("subcategory", subCategoryData.slug);
        }
      } else {
        params.delete("subcategory");
      }
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const selectCategory = (category: string) => {
    updateFilter("category", category);
    updateProductUrl(category);
  };

  const selectSubCategory = (subCategory: string) => {
    updateFilter("subCategory", subCategory);
    updateProductUrl(filters.category, subCategory);
  };

  const changePage = (page: number) => {
    updateFilter("page", page);
    window.requestAnimationFrame(() => {
      document.getElementById("product-results")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    });
  };

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-neutral-950"
      initial={{ opacity: prefersReducedMotion ? 1 : 0.72 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.28, ease: "easeOut" }}
    >
      <section className="relative overflow-hidden border-b border-neutral-100 bg-gradient-to-b from-blue-50 via-white to-white pb-12 pt-28 dark:border-neutral-800 dark:from-blue-950/30 dark:via-neutral-950 dark:to-neutral-950 lg:pb-14">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-800/10" aria-hidden="true" />
        <div className="pharma-grid absolute inset-0 opacity-40 dark:opacity-15" aria-hidden="true" />
        <div className="container relative">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: prefersReducedMotion ? 0 : 0.04,
                  staggerChildren: prefersReducedMotion ? 0 : 0.075,
                },
              },
            }}
          >
            <motion.div variants={heroItemVariants} className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 shadow-sm backdrop-blur-xl dark:border-blue-800/50 dark:bg-neutral-900/70 dark:text-blue-300">
              <Package className="h-3.5 w-3.5" />
              Product directory
            </motion.div>
            <motion.h1 variants={heroItemVariants} className="display-lg lg:display-xl font-bold text-neutral-900 dark:text-white">
              Find the right product,
              <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                without the noise.
              </span>
            </motion.h1>
            <motion.p variants={heroItemVariants} className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              Browse {products.length} products across {categories.length} categories. Search by product name,
              indication, or therapeutic area.
            </motion.p>
            <motion.div variants={heroItemVariants} className="mt-7 flex flex-wrap gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800">
                <Package className="h-4 w-4 text-blue-600" />
                {products.length} products
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800">
                <Sparkles className="h-4 w-4 text-teal-600" />
                {products.filter((product) => product.isNew).length} recent additions
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="sticky top-16 z-30 border-b border-neutral-100 bg-white/88 shadow-[0_12px_30px_-28px_rgba(15,23,42,0.7)] backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/88 lg:top-20"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 0.42, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container py-3.5">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" aria-label="Product categories">
            <button
              type="button"
              onClick={() => selectCategory("all")}
              className={`relative shrink-0 overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filters.category === "all" ? "text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
              }`}
            >
              {filters.category === "all" && (
                <motion.span
                  layoutId="active-product-category"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                  transition={prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <span className="relative">All products <span className="ml-2 opacity-70">{products.length}</span></span>
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => selectCategory(category.slug)}
                className={`relative shrink-0 overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filters.category === category.slug ? "text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                }`}
              >
                {filters.category === category.slug && (
                  <motion.span
                    layoutId="active-product-category"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                    transition={prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative">{category.name} <span className="ml-2 opacity-70">{category.productCount}</span></span>
              </button>
            ))}
          </div>
          <AnimatePresence initial={false}>
            {activeCategory?.subCategories && activeCategory.subCategories.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -6 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -6 }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="flex gap-2 overflow-x-auto border-t border-neutral-100 pt-3 scrollbar-hide dark:border-neutral-800" aria-label={`${activeCategory.name} subcategories`}>
                  <button
                    type="button"
                    onClick={() => selectSubCategory("")}
                    className={`relative shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      !filters.subCategory
                        ? "text-blue-700 dark:text-blue-300"
                        : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"
                    }`}
                  >
                    {!filters.subCategory && (
                      <motion.span
                        layoutId="active-product-subcategory"
                        className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-900/30"
                        transition={prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    <span className="relative">All {activeCategory.name.toLowerCase()}</span>
                  </button>
                  {activeCategory.subCategories.map((subCategory) => (
                    <button
                      key={subCategory.id}
                      type="button"
                      onClick={() => selectSubCategory(subCategory.name)}
                      className={`relative shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                        filters.subCategory === subCategory.name
                          ? "text-blue-700 dark:text-blue-300"
                          : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"
                      }`}
                    >
                      {filters.subCategory === subCategory.name && (
                        <motion.span
                          layoutId="active-product-subcategory"
                          className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-900/30"
                          transition={prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 380, damping: 34 }}
                        />
                      )}
                      <span className="relative">
                        {subCategory.name} <span className="ml-1 opacity-60">{subCategory.productCount}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      <section id="product-results" className="scroll-mt-36 bg-neutral-50/70 py-10 dark:bg-neutral-900/30 lg:py-14" aria-label="Product results">
        <div className="container">
          <motion.div
            className="mb-7 overflow-hidden rounded-[1.5rem] border border-neutral-200/80 bg-white shadow-[0_18px_55px_-38px_rgba(15,23,42,0.45)] dark:border-neutral-800 dark:bg-neutral-900/80"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-2.5 p-2.5 lg:grid-cols-[minmax(0,1fr)_220px_auto]">
              <div className="relative">
                <label htmlFor="product-search" className="sr-only">Search products</label>
                <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600 dark:text-blue-400" />
                <input
                  id="product-search"
                  type="search"
                  placeholder="Search by product, indication, or therapeutic area"
                  value={filters.search}
                  onChange={(event) => updateFilter("search", event.target.value)}
                  className="h-14 w-full rounded-[0.9rem] border border-transparent bg-neutral-50 pl-14 pr-28 text-[15px] font-medium text-neutral-900 outline-none transition-all placeholder:font-normal placeholder:text-neutral-400 hover:bg-neutral-100/80 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:bg-neutral-800/70 dark:text-white dark:placeholder:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:border-blue-500 dark:focus:bg-neutral-900 dark:focus:ring-blue-900/40 sm:pr-40"
                />
                <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
                  <AnimatePresence>
                    {isSearching && (
                      <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                        <LoaderCircle className="h-4 w-4 animate-spin text-blue-600" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {filters.search && (
                    <button
                      type="button"
                      onClick={() => updateFilter("search", "")}
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
                <label htmlFor="product-sort" className="sr-only">Sort results</label>
                <ArrowUpDown className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-blue-600 dark:text-blue-400" />
                <span className="pointer-events-none absolute left-11 top-2.5 z-10 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                  Sort by
                </span>
                <select
                  id="product-sort"
                  value={filters.sortBy}
                  onChange={(event) => updateFilter("sortBy", event.target.value as SortOption)}
                  className="h-14 w-full appearance-none rounded-[0.9rem] border border-transparent bg-neutral-50 pb-1.5 pl-11 pr-10 pt-5 text-sm font-semibold text-neutral-800 outline-none transition-all hover:bg-neutral-100/80 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:bg-neutral-800/70 dark:text-white dark:hover:bg-neutral-800 dark:focus:border-blue-500 dark:focus:bg-neutral-900 dark:focus:ring-blue-900/40"
                >
                  <option value="featured">Featured first</option>
                  <option value="name">Name A-Z</option>
                  <option value="newest">Newest first</option>
                  <option value="popular">Bestsellers first</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              </div>

              <div className="flex h-14 items-center justify-between gap-3 rounded-[0.9rem] bg-neutral-50 px-3 dark:bg-neutral-800/70 lg:justify-center">
                <span className="pl-1 text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 lg:sr-only">Layout</span>
                <div className="inline-flex rounded-xl bg-neutral-200/60 p-1 dark:bg-neutral-900/70">
                  <button
                    type="button"
                    onClick={() => updateFilter("viewMode", "grid")}
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
                    onClick={() => updateFilter("viewMode", "list")}
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

            {therapeuticTags.length > 0 && (
              <div className="border-t border-neutral-100 px-4 pb-4 pt-3.5 dark:border-neutral-800 sm:px-5">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                    <SlidersHorizontal className="h-4 w-4 text-blue-600" />
                    Therapeutic areas
                  </p>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      <X className="mr-1 h-4 w-4" />
                      Clear filters
                    </Button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {therapeuticTags.map((tag) => (
                    <motion.button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      whileTap={{ scale: 0.96 }}
                      aria-pressed={filters.tags.includes(tag)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-all ${
                        filters.tags.includes(tag)
                          ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                      }`}
                    >
                      {tag.split("-").join(" ")}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            className="mb-6 flex flex-wrap items-end justify-between gap-3"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.4, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
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
                  {activeCategory && (
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-300">
                      {activeCategory.name}
                    </span>
                  )}
                  {activeSubCategory && (
                    <button
                      type="button"
                      onClick={() => selectSubCategory("")}
                      className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 transition-colors hover:border-blue-200 hover:bg-blue-100 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                    >
                      {activeSubCategory.name}
                      <X className="h-3 w-3" />
                    </button>
                  )}
                  {filters.search && (
                    <button type="button" onClick={() => updateFilter("search", "")} className="inline-flex max-w-56 items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 transition-colors hover:border-blue-200 hover:text-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                      <Search className="h-3 w-3 shrink-0" />
                      <span className="truncate">{filters.search}</span>
                      <X className="h-3 w-3 shrink-0" />
                    </button>
                  )}
                  {filters.tags.map((tag) => (
                    <button key={tag} type="button" onClick={() => toggleTag(tag)} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium capitalize text-neutral-600 transition-colors hover:border-blue-200 hover:text-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                      {tag.split("-").join(" ")}
                      <X className="h-3 w-3" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <LayoutGroup id="product-directory-results">
            <AnimatePresence mode="wait">
              {paginated.data.length === 0 ? (
                <motion.div
                  key="empty-results"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                  transition={{ duration: transitionDuration, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl border border-dashed border-neutral-200 bg-white px-6 py-20 text-center dark:border-neutral-700 dark:bg-neutral-900/60"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Search className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-neutral-900 dark:text-white">No matching products</h2>
                  <p className="mx-auto mt-2 max-w-md text-neutral-500 dark:text-neutral-400">
                    Try a broader search or remove one of the selected filters.
                  </p>
                  <Button className="mt-6" variant="outline" onClick={clearFilters}>
                    Reset product filters
                  </Button>
                </motion.div>
              ) : filters.viewMode === "grid" ? (
                <motion.div
                  key="grid-results"
                  layout
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
                >
                  <AnimatePresence mode="popLayout">
                    {paginated.data.map((product, index) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16, scale: prefersReducedMotion ? 1 : 0.985 }}
                        animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: transitionDuration, delay: prefersReducedMotion ? 0 : Math.min(index * 0.035, 0.2), ease: [0.22, 1, 0.36, 1] } }}
                        exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10, scale: prefersReducedMotion ? 1 : 0.985, transition: { duration: prefersReducedMotion ? 0.01 : 0.18 } }}
                        transition={{ layout: prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 420, damping: 38 } }}
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
                        animate={{ opacity: 1, y: 0, transition: { duration: transitionDuration, delay: prefersReducedMotion ? 0 : Math.min(index * 0.035, 0.2), ease: [0.22, 1, 0.36, 1] } }}
                        exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8, transition: { duration: prefersReducedMotion ? 0.01 : 0.18 } }}
                        transition={{ layout: prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 420, damping: 38 } }}
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
              <Pagination currentPage={filters.page} totalPages={paginated.totalPages} onPageChange={changePage} />
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
