"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpDown, ChevronDown, Grid, List, Package, Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Navigation";
import { categories, filterProducts, paginateProducts, products, sortProducts } from "@/data";

type SortOption = "name" | "newest" | "popular" | "featured";
type ViewMode = "grid" | "list";

interface FilterState {
  search: string;
  category: string;
  tags: string[];
  sortBy: SortOption;
  viewMode: ViewMode;
  page: number;
  limit: number;
}

const defaultFilters: FilterState = {
  search: "",
  category: "all",
  tags: [],
  sortBy: "featured",
  viewMode: "grid",
  page: 1,
  limit: 12,
};

export function ProductsPageContent() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

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
      tags: filters.tags.length > 0 ? filters.tags : undefined,
      search: filters.search || undefined,
    });

    return sortProducts(result, filters.sortBy);
  }, [filters.category, filters.search, filters.sortBy, filters.tags]);

  const paginated = paginateProducts(filteredProducts, filters.page, filters.limit);
  const hasActiveFilters = filters.search || filters.category !== "all" || filters.tags.length > 0;

  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
      ...(key === "page" ? {} : { page: 1 }),
    }));
  };

  const clearFilters = () => {
    setFilters((previous) => ({
      ...defaultFilters,
      sortBy: previous.sortBy,
      viewMode: previous.viewMode,
    }));
  };

  const toggleTag = (tag: string) => {
    updateFilter("tags", filters.tags.includes(tag)
      ? filters.tags.filter((selectedTag) => selectedTag !== tag)
      : [...filters.tags, tag]);
  };

  const rangeStart = filteredProducts.length === 0 ? 0 : (filters.page - 1) * filters.limit + 1;
  const rangeEnd = Math.min(filters.page * filters.limit, filteredProducts.length);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-100 bg-gradient-to-b from-blue-50 via-white to-white pt-28 pb-14 dark:border-neutral-800 dark:from-blue-950/30 dark:via-neutral-950 dark:to-neutral-950">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-800/10" aria-hidden="true" />
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 shadow-sm dark:border-blue-800/50 dark:bg-neutral-900/70 dark:text-blue-300">
              <Package className="h-3.5 w-3.5" />
              Product directory
            </div>
            <h1 className="display-lg lg:display-xl font-bold text-neutral-900 dark:text-white">
              Find the right product,
              <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                without the noise.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              Browse {products.length} products across {categories.length} categories. Search by product name,
              indication, or therapeutic area.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800">
                <Package className="h-4 w-4 text-blue-600" />
                {products.length} products
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800">
                <Sparkles className="h-4 w-4 text-teal-600" />
                {products.filter((product) => product.isNew).length} recent additions
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-100 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <div className="container py-5">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" aria-label="Product categories">
            <button
              type="button"
              onClick={() => updateFilter("category", "all")}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filters.category === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
              }`}
            >
              All products
              <span className="ml-2 opacity-70">{products.length}</span>
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => updateFilter("category", category.slug)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filters.category === category.slug
                    ? "bg-blue-600 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                }`}
              >
                {category.name}
                <span className="ml-2 opacity-70">{category.productCount}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50/70 dark:bg-neutral-900/30" aria-label="Product results">
        <div className="container">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] border border-neutral-200/80 bg-white shadow-[0_18px_55px_-35px_rgba(15,23,42,0.45)] dark:border-neutral-800 dark:bg-neutral-900/80">
            <div className="grid gap-3 p-3 lg:grid-cols-[minmax(0,1fr)_240px_auto]">
              <div className="relative">
                <label htmlFor="product-search" className="sr-only">Search products</label>
                <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600 dark:text-blue-400" />
                <input
                  id="product-search"
                  type="search"
                  placeholder="Search by product, indication, or therapeutic area"
                  value={filters.search}
                  onChange={(event) => updateFilter("search", event.target.value)}
                  className="h-16 w-full rounded-2xl border border-transparent bg-neutral-50 pl-14 pr-28 text-base font-medium text-neutral-900 outline-none transition-all placeholder:font-normal placeholder:text-neutral-400 hover:bg-neutral-100/80 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:bg-neutral-800/70 dark:text-white dark:placeholder:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:border-blue-500 dark:focus:bg-neutral-900 dark:focus:ring-blue-900/40 sm:pr-40"
                />
                <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
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
                  className="h-16 w-full appearance-none rounded-2xl border border-transparent bg-neutral-50 pb-2 pl-11 pr-10 pt-6 text-sm font-semibold text-neutral-800 outline-none transition-all hover:bg-neutral-100/80 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:bg-neutral-800/70 dark:text-white dark:hover:bg-neutral-800 dark:focus:border-blue-500 dark:focus:bg-neutral-900 dark:focus:ring-blue-900/40"
                >
                  <option value="featured">Featured first</option>
                  <option value="name">Name A-Z</option>
                  <option value="newest">Newest first</option>
                  <option value="popular">Bestsellers first</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              </div>

              <div className="flex h-16 items-center justify-between gap-3 rounded-2xl bg-neutral-50 px-3 dark:bg-neutral-800/70 lg:justify-center">
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
              <div className="border-t border-neutral-100 px-4 pb-4 pt-4 dark:border-neutral-800 sm:px-5">
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
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      aria-pressed={filters.tags.includes(tag)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                        filters.tags.includes(tag)
                          ? "bg-blue-600 text-white"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                      }`}
                    >
                      {tag.split("-").join(" ")}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">
                {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Showing {rangeStart}-{rangeEnd} of {filteredProducts.length}
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${filters.viewMode}-${filters.page}-${filters.category}-${filters.search}-${filters.tags.join(",")}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {paginated.data.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-neutral-200 bg-white px-6 py-20 text-center dark:border-neutral-700 dark:bg-neutral-900/60">
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
                </div>
              ) : filters.viewMode === "grid" ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {paginated.data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {paginated.data.map((product) => (
                    <ProductCard key={product.id} product={product} variant="list" />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {paginated.totalPages > 1 && (
            <Pagination
              currentPage={filters.page}
              totalPages={paginated.totalPages}
              onPageChange={(page) => updateFilter("page", page)}
            />
          )}
        </div>
      </section>
    </div>
  );
}
