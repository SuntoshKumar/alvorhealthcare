"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Package, Globe, Award, Search, Tag, RotateCcw } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";

import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { Pagination } from "@/components/ui/Navigation";
import { ProductCard } from "@/components/products/ProductCard";
import { sortProducts, paginateProducts } from "@/data";
import { publicAssetPath } from "@/lib/paths";
import { Category, Product } from "@/types";

interface Props {
  category: Category;
  products: Product[];
}

const categoryImages: Record<string, string> = {
  Tablets: "/images/categories/tablet.svg",
  Capsules: "/images/categories/capsule.svg",
  Syrups: "/images/categories/syrup.svg",
  Injections: "/images/categories/injection.svg",
  Supplements: "/images/categories/supplement.svg",
  "Medical Supplies": "/images/categories/medical-supplies.png",
};

export function CategoryPageContent({ category, products: categoryProducts }: Props) {
  const [filters, setFilters] = useState({
    search: "",
    sortBy: "name" as "name" | "newest" | "popular" | "featured",
    page: 1,
    limit: 12,
  });

  const filteredProducts = useMemo(() => {
    let result = [...categoryProducts];

    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    result = sortProducts(result, filters.sortBy);
    return result;
  }, [filters, categoryProducts]);

  const paginated = paginateProducts(filteredProducts, filters.page, filters.limit);

  const handleFilterChange = (key: string, value: unknown) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }));
  };

  const categoryImage = categoryImages[category.name];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-teal-50 dark:from-blue-950/30 dark:via-neutral-950 dark:to-teal-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.04]" aria-hidden="true" />

        <div className="container relative px-6 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Link href="/categories" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors">
                  <Package className="w-4 h-4" aria-hidden="true" />
                  All Categories
                </Link>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="relative w-32 h-32 mx-auto mb-6 rounded-[2rem] bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-neutral-900 dark:via-blue-950/40 dark:to-blue-900/60 shadow-xl border border-blue-100/70 dark:border-blue-800/50 flex items-center justify-center p-5 overflow-hidden group"
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-blue-500/10 dark:bg-blue-400/10 blur-xl" />
                  <div
                    className="relative z-10 w-20 h-20 bg-blue-600 dark:bg-blue-400 transition-all duration-500 group-hover:scale-110 drop-shadow-xl"
                    style={{
                      maskImage: `url(${publicAssetPath(categoryImage)})`,
                      WebkitMaskImage: `url(${publicAssetPath(categoryImage)})`,
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                    }}
                  />
                </div>
                <h1 className="display-xl lg:display-2xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
                  {category.name}
                </h1>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="body-lg lg:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-10"
              >
                {category.description}
              </motion.p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-neutral-900 dark:text-white">{category.productCount}</span>
                  <span>Products</span>
                </div>
                {category.subCategories && category.subCategories.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-neutral-900 dark:text-white">{category.subCategories.length}</span>
                    <span>Subcategories</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-neutral-900 dark:text-white">45+</span>
                  <span>Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-neutral-900 dark:text-white">WHO GMP</span>
                  <span>Certified</span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {category.subCategories && category.subCategories.length > 0 && (
        <section className="py-12 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="subcategories-heading">
          <div className="container">
            <ScrollReveal>
              <h2 id="subcategories-heading" className="display-sm font-bold text-neutral-900 dark:text-white text-center mb-10">
                Subcategories
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.subCategories.map((sub, index) => (
                <StaggerItem key={sub.id} delay={index * 0.1}>
                  <ScrollReveal>
                    <HoverScale>
                      <Link href={`/products?category=${category.slug}&subcategory=${sub.slug}`} className="block">
                        <Card variant="elevated" className="p-6 text-center h-full group-hover:border-blue-200 dark:group-hover:border-blue-700 transition-colors">
                          <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                            <Package className="w-8 h-8" />
                          </div>
                          <CardTitle className="text-neutral-900 dark:text-white">{sub.name}</CardTitle>
                          <CardDescription className="mt-2">{sub.description}</CardDescription>
                          <div className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                            {sub.productCount} Products
                            <ChevronRight className="w-4 h-4 inline ml-1" />
                          </div>
                        </Card>
                      </Link>
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
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
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

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                <div className="relative max-w-xs flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 dark:text-neutral-500" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Search products..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange("search", e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border-none focus:ring-2 focus:ring-blue-500 text-base dark:text-white dark:placeholder-neutral-500"
                    aria-label="Search products"
                  />
                </div>

                <Select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                  options={[
                    { value: "name", label: "Name A-Z" },
                    { value: "newest", label: "Newest" },
                    { value: "popular", label: "Best Sellers" },
                    { value: "featured", label: "Featured" },
                  ]}
                  placeholder="Sort By"
                  className="w-full sm:w-40"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-neutral-600 dark:text-neutral-400">
              Showing <span className="font-semibold text-neutral-900 dark:text-white">{paginated.data.length > 0 ? (filters.page - 1) * filters.limit + 1 : 0}</span> to{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">{Math.min(filters.page * filters.limit, filteredProducts.length)}</span> of{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">{filteredProducts.length}</span> products
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginated.data.map((product, index) => (
              <StaggerItem key={product.id} delay={index * 0.05}>
                <ScrollReveal>
                  <ProductCard product={product} />
                </ScrollReveal>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {paginated.totalPages > 1 && (
            <div className="mt-12">
              <ScrollReveal>
                <Pagination
                  currentPage={filters.page}
                  totalPages={paginated.totalPages}
                  onPageChange={(page) => setFilters((prev) => ({ ...prev, page }))}
                />
              </ScrollReveal>
            </div>
          )}

          {filteredProducts.length === 0 && (
            <ScrollReveal>
              <div className="text-center py-16">
                <Search className="w-16 h-16 mx-auto mb-4 text-neutral-300 dark:text-neutral-600" />
                <h3 className="heading-lg font-bold text-neutral-900 dark:text-white mb-2">No products found</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">Try adjusting your search or filters</p>
                <Button variant="outline" onClick={() => setFilters({ search: "", sortBy: "name", page: 1, limit: 12 })}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </ScrollReveal>
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
                <Button size="lg" variant="secondary" rightIcon={<ChevronRight className="w-5 h-5" />}>
                  Contact Our Experts
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download Full Catalog
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
