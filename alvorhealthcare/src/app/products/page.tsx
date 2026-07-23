"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ChevronDown, ChevronUp, X, Tag, Star, Sparkles, Package, Download as DownloadIcon, ExternalLink, Grid, List, RotateCcw, SlidersHorizontal, ChevronRight, Users, Shield } from "lucide-react";
import { toast } from "react-hot-toast";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale, ScaleIn } from "@/components/animations/Animations";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { Pagination } from "@/components/ui/Navigation";
import { products, categories, filterProducts, sortProducts, paginateProducts, getFeaturedProducts, getNewProducts, getBestsellerProducts } from "@/data";
import { Category } from "@/types";

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

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Tablets: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></motion.svg>,
  Capsules: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16.5c0-.828.672-1.5 1.5-1.5h7c.828 0 1.5.672 1.5 1.5v2.5c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5v-2.5z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 9.5c0-.828.672-1.5 1.5-1.5h7c.828 0 1.5.672 1.5 1.5v2.5c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5v-2.5z" /></motion.svg>,
  Syrups: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2h4a2 2 0 002-2v-2" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4" /></motion.svg>,
  Injections: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12H9m12 0a9 9 0 10-18 0 9 9 0 0018 0z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" /></motion.svg>,
  Supplements: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11l3 3L22 4" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></motion.svg>,
  "Medical Supplies": ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></motion.svg>,
};

const getCategoryIcon = (categoryName: string, className?: string) => {
  const Icon = categoryIcons[categoryName] || (({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11l3 3L22 4" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></motion.svg>);
  return <Icon className={className} aria-hidden="true" />;
};

const getCategoryIconSmall = (categoryName: string) => {
  const Icon = categoryIcons[categoryName] || (({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11l3 3L22 4" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></motion.svg>);
  return <Icon className="w-4 h-4 text-primary-600" aria-hidden="true" />;
};

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    tags: [],
    sortBy: "featured",
    viewMode: "grid",
    page: 1,
    limit: 12,
  });
  const [showFilters, setShowFilters] = useState(false);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    const tags = new Set<string>();
    products.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    setAllTags(Array.from(tags).sort());
  }, []);

  const filteredProducts = useMemo(() => {
    let result = filterProducts({
      category: filters.category !== "all" ? filters.category : undefined,
      tags: filters.tags.length > 0 ? filters.tags : undefined,
      search: filters.search || undefined,
      featured: filters.sortBy === "featured" ? true : undefined,
      isNew: filters.sortBy === "newest" ? true : undefined,
      isBestseller: filters.sortBy === "popular" ? true : undefined,
    });

    result = sortProducts(result, filters.sortBy);
    return result;
  }, [filters]);

  const paginated = paginateProducts(filteredProducts, filters.page, filters.limit);

  const handleFilterChange = (key: keyof FilterState, value: unknown) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      category: "all",
      tags: [],
      sortBy: "featured",
      viewMode: "grid",
      page: 1,
      limit: 12,
    });
  };

  const hasActiveFilters = filters.search || filters.category !== "all" || filters.tags.length > 0 || filters.sortBy !== "featured";

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-neutral-50 py-16 lg:py-24" aria-labelledby="products-heading">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 id="products-heading" className="display-lg lg:display-xl font-bold text-neutral-900">
                Our Product Portfolio
              </h1>
              <p className="body-lg text-neutral-600 mt-4">
                Explore 52+ pharmaceutical products across 6 categories. Filter by category, search by name, or browse featured selections.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-600">
                <span className="flex items-center gap-1">
                  <Package className="w-4 h-4" />
                  {filteredProducts.length} products found
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {categories.length} categories
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  {products.filter(p => p.isNew).length} new arrivals
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-neutral-100 p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="heading-sm font-bold text-neutral-900">Filters</h3>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="text-primary-600 hover:text-primary-700">
                      <X className="w-4 h-4 mr-1" />
                      Clear All
                    </Button>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="search" className="label">Search Products</label>
                    <Input
                      id="search"
                      type="search"
                      placeholder="Search by name, use..."
                      value={filters.search}
                      onChange={(e) => handleFilterChange("search", e.target.value)}
                      leftIcon={<Search className="w-5 h-5" />}
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="label">Category</label>
                    <Select
                      id="category"
                      value={filters.category}
                      onChange={(e) => handleFilterChange("category", e.target.value)}
                      options={[
                        { value: "all", label: "All Categories" },
                        ...categories.map((c) => ({ value: c.slug, label: `${c.name} (${c.productCount})` })),
                      ]}
                      placeholder="Select category"
                    />
                  </div>

                  <div>
                    <label className="label">Tags</label>
                    <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2">
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => handleFilterChange("tags", filters.tags.includes(tag) ? filters.tags.filter((t) => t !== tag) : [...filters.tags, tag])}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                            filters.tags.includes(tag)
                              ? "bg-primary-600 text-white"
                              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sort" className="label">Sort By</label>
                    <Select
                      id="sort"
                      value={filters.sortBy}
                      onChange={(e) => handleFilterChange("sortBy", e.target.value as SortOption)}
                      options={[
                        { value: "featured", label: "Featured First" },
                        { value: "name", label: "Name (A-Z)" },
                        { value: "newest", label: "Newest First" },
                        { value: "popular", label: "Best Sellers" },
                      ]}
                      placeholder="Sort by"
                    />
                  </div>
                </div>
              </div>
            </aside>

            <main className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <label htmlFor="view" className="text-sm font-medium text-neutral-700">View:</label>
                  <div className="flex bg-neutral-100 rounded-lg p-1">
                    <button
                      onClick={() => handleFilterChange("viewMode", "grid")}
                      className={`p-2 rounded transition-colors ${filters.viewMode === "grid" ? "bg-white shadow-sm text-primary-600" : "text-neutral-500 hover:text-neutral-700"}`}
                      aria-label="Grid view"
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleFilterChange("viewMode", "list")}
                      className={`p-2 rounded transition-colors ${filters.viewMode === "list" ? "bg-white shadow-sm text-primary-600" : "text-neutral-500 hover:text-neutral-700"}`}
                      aria-label="List view"
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="ml-auto flex items-center gap-2">
                  <span className="text-sm text-neutral-600">
                    Showing {(filters.page - 1) * filters.limit + 1}–{Math.min(filters.page * filters.limit, filteredProducts.length)} of {filteredProducts.length} products
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={filters.viewMode}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {filters.viewMode === "grid" ? (
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {paginated.data.map((product, index) => (
                        <StaggerItem key={product.id} delay={index * 0.05}>
                          <ScrollReveal>
                            <ProductCardGrid product={product} />
                          </ScrollReveal>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  ) : (
                    <StaggerContainer className="space-y-4">
                      {paginated.data.map((product, index) => (
                        <StaggerItem key={product.id} delay={index * 0.05}>
                          <ScrollReveal>
                            <ProductCardList product={product} />
                          </ScrollReveal>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  )}
                </motion.div>
              </AnimatePresence>

              {paginated.totalPages > 1 && (
                <Pagination
                  currentPage={filters.page}
                  totalPages={paginated.totalPages}
                  onPageChange={(page) => handleFilterChange("page", page)}
                />
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCardGrid({ product }: { product: typeof products[0] }) {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.pdfBrochure) {
      const link = document.createElement("a");
      link.href = product.pdfBrochure;
      link.download = `${product.slug}-brochure.pdf`;
      link.click();
      toast.success("Brochure download started!");
    } else {
      toast("Brochure coming soon. Check the product page for more details.", { icon: "📄" });
    }
  };

  return (
    <HoverScale scale={1.02}>
      <Link href={`/products/${product.slug}`} className="block group">
        <Card variant="elevated" className="h-full overflow-hidden group-hover:border-primary-200 transition-all duration-300">
          <div className="relative h-48 bg-neutral-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100" />
            <div className="absolute inset-0 flex items-center justify-center">
              {getCategoryIcon(product.category, "w-20 h-20 text-primary-600/50 group-hover:scale-110 transition-transform duration-300")}
            </div>
            <div className="absolute top-3 right-3 flex gap-1.5">
              {product.isNew && <Badge variant="primary" size="sm">New</Badge>}
              {product.isBestseller && <Badge variant="secondary" size="sm">Bestseller</Badge>}
              {product.featured && <Badge variant="outline" size="sm"><Sparkles className="w-3 h-3 mr-1" /> Featured</Badge>}
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <Button size="sm" variant="ghost" className="bg-white/90 backdrop-blur-sm flex-1">
                Quick View
              </Button>
              <Button size="sm" variant="primary" className="flex-1" onClick={handleDownload}>
                <DownloadIcon className="w-4 h-4" /> Brochure
              </Button>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              {getCategoryIconSmall(product.category)}
              <span className="text-sm font-medium text-primary-600">{product.category}</span>
            </div>
            <CardTitle className="text-neutral-900 group-hover:text-primary-600 transition-colors">
              {product.name}
            </CardTitle>
            <CardDescription className="mt-2 line-clamp-2">{product.shortDescription}</CardDescription>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {product.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="px-6 pb-6">
            <span className="flex items-center justify-between w-full text-sm font-medium text-primary-600 transition-colors">
              View Details
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </HoverScale>
  );
}

function ProductCardList({ product }: { product: typeof products[0] }) {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.pdfBrochure) {
      const link = document.createElement("a");
      link.href = product.pdfBrochure;
      link.download = `${product.slug}-brochure.pdf`;
      link.click();
      toast.success("Brochure download started!");
    } else {
      toast("Brochure coming soon. Check the product page for more details.", { icon: "📄" });
    }
  };

  return (
    <HoverScale scale={1.01}>
      <Card variant="outlined" className="p-4 flex flex-col sm:flex-row gap-4 group">
        <div className="relative w-32 h-32 sm:w-32 sm:h-32 flex-shrink-0 bg-neutral-100 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100" />
          <div className="absolute inset-0 flex items-center justify-center">
            {getCategoryIcon(product.category, "w-12 h-12 text-primary-600/50")}
          </div>
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {product.isNew && <Badge variant="primary" size="sm">New</Badge>}
            {product.isBestseller && <Badge variant="secondary" size="sm">Bestseller</Badge>}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {getCategoryIconSmall(product.category)}
            <span className="text-sm font-medium text-primary-600">{product.category}</span>
          </div>
          <Link href={`/products/${product.slug}`} className="block">
            <CardTitle className="text-neutral-900 group-hover:text-primary-600 transition-colors">
              {product.name}
            </CardTitle>
          </Link>
          <CardDescription className="mt-2 line-clamp-2">{product.shortDescription}</CardDescription>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end justify-between sm:items-center gap-3 sm:flex-shrink-0">
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" className="w-full sm:w-auto">
              Quick View
            </Button>
            <Button size="sm" variant="primary" className="w-full sm:w-auto" onClick={handleDownload}>
              <DownloadIcon className="w-4 h-4 mr-1" /> Brochure
            </Button>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1"
          >
            Details
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </Card>
    </HoverScale>
  );
}