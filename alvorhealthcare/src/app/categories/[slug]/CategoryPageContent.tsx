"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Package, Globe, Award, Shield, Leaf, Star, Search, Filter, ChevronDown, ChevronUp, X, Tag, Sparkles, RotateCcw, DownloadIcon } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Select } from "@/components/ui/Select";
import { Pagination } from "@/components/ui/Navigation";
import { sortProducts, paginateProducts } from "@/data";
import { Category, Product } from "@/types";

interface Props {
  category: Category;
  products: Product[];
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Tablets: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></motion.svg>,
  Capsules: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16.5c0-.828.672-1.5 1.5-1.5h7c.828 0 1.5.672 1.5 1.5v2.5c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5v-2.5z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 9.5c0-.828.672-1.5 1.5-1.5h7c.828 0 1.5.672 1.5 1.5v2.5c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5v-2.5z" /></motion.svg>,
  Syrups: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2h4a2 2 0 002-2v-2" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4" /></motion.svg>,
  Injections: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12H9m12 0a9 9 0 10-18 0 9 9 0 0018 0z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" /></motion.svg>,
  Supplements: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11l3 3L22 4" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></motion.svg>,
  "Medical Supplies": ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></motion.svg>,
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

  const CategoryIcon = categoryIcons[category.name] || Package;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-cover bg-center opacity-5" aria-hidden="true" />

        <div className="container relative px-6 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Link href="/categories" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium hover:bg-primary-200 transition-colors">
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
                <CategoryIcon className="w-20 h-20 mx-auto mb-6 text-primary-600" aria-hidden="true" />
                <h1 className="display-xl lg:display-2xl font-bold text-neutral-900 leading-tight mb-6">
                  {category.name}
                </h1>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="body-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto mb-10"
              >
                {category.description}
              </motion.p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-600"
              >
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-neutral-900">{category.productCount}</span>
                  <span>Products</span>
                </div>
                {category.subCategories && category.subCategories.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-5 h-5 text-primary-600" />
                    <span className="font-medium text-neutral-900">{category.subCategories.length}</span>
                    <span>Subcategories</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-neutral-900">45+</span>
                  <span>Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-neutral-900">WHO GMP</span>
                  <span>Certified</span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {category.subCategories && category.subCategories.length > 0 && (
        <section className="py-12 bg-neutral-50" aria-labelledby="subcategories-heading">
          <div className="container">
            <ScrollReveal>
              <h2 id="subcategories-heading" className="display-sm font-bold text-neutral-900 text-center mb-10">
                Subcategories
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.subCategories.map((sub, index) => (
                <StaggerItem key={sub.id} delay={index * 0.1}>
                  <ScrollReveal>
                    <HoverScale>
                      <Link href={`/products?category=${category.slug}&subcategory=${sub.slug}`} className="block">
                        <Card variant="elevated" className="p-6 text-center h-full group-hover:border-primary-200 transition-colors">
                          <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                            <Package className="w-8 h-8" />
                          </div>
                          <CardTitle className="text-neutral-900">{sub.name}</CardTitle>
                          <CardDescription className="mt-2">{sub.description}</CardDescription>
                          <div className="mt-4 text-sm font-medium text-primary-600">
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

      <section className="section bg-white" aria-labelledby="products-heading">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
            <div>
              <ScrollReveal>
                <h2 id="products-heading" className="display-md lg:display-lg font-bold text-neutral-900">
                  {category.name} Products
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="body-lg text-neutral-600 mt-2">
                  {filteredProducts.length} products in this category
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                <div className="relative max-w-xs flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Search products..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange("search", e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-neutral-50 border-none focus:ring-2 focus:ring-primary-500 text-base"
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
            <p className="text-neutral-600">
              Showing <span className="font-semibold text-neutral-900">{paginated.data.length > 0 ? (filters.page - 1) * filters.limit + 1 : 0}</span> to{" "}
              <span className="font-semibold text-neutral-900">{Math.min(filters.page * filters.limit, filteredProducts.length)}</span> of{" "}
              <span className="font-semibold text-neutral-900">{filteredProducts.length}</span> products
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginated.data.map((product, index) => (
              <StaggerItem key={product.id} delay={index * 0.05}>
                <ScrollReveal>
                  <HoverScale>
                    <Link href={`/products/${product.slug}`} className="block">
                      <Card variant="elevated" className="h-full overflow-hidden group-hover:border-primary-200 transition-all duration-300">
                        <div className="relative aspect-square bg-neutral-100 overflow-hidden">
                          <CategoryIcon className="absolute inset-0 w-full h-full text-primary-200 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                          <div className="absolute top-3 right-3 flex gap-1.5">
                            {product.isNew && <Badge variant="primary" size="sm"><Sparkles className="w-3 h-3 mr-1" /> New</Badge>}
                            {product.isBestseller && <Badge variant="secondary" size="sm"><Star className="w-3 h-3 mr-1 fill-current" /> Bestseller</Badge>}
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                            <Button variant="primary" size="sm" className="flex-1">View Details</Button>
                            <Button variant="ghost" size="sm" className="flex-1 bg-white/90"><DownloadIcon className="w-4 h-4" /></Button>
                          </div>
                        </div>
                        <CardContent className="p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <CategoryIcon className="w-4 h-4 text-primary-600" aria-hidden="true" />
                            <span className="text-sm font-medium text-primary-600">{category.name}</span>
                          </div>
                          <CardTitle className="text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-1">{product.name}</CardTitle>
                          <CardDescription className="mt-2 line-clamp-2">{product.shortDescription}</CardDescription>
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {product.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
                            ))}
                            {product.tags.length > 3 && (
                              <Badge variant="outline" size="sm">+{product.tags.length - 3} more</Badge>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="px-5 pb-5">
                          <span className="flex items-center justify-between w-full text-sm font-medium text-primary-600 transition-colors">
                            View Details
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </HoverScale>
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
                <Search className="w-16 h-16 mx-auto mb-4 text-neutral-300" />
                <h3 className="heading-lg font-bold text-neutral-900 mb-2">No products found</h3>
                <p className="text-neutral-600 mb-4">Try adjusting your search or filters</p>
                <Button variant="outline" onClick={() => setFilters({ search: "", sortBy: "name", page: 1, limit: 12 })}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <section className="section bg-primary-600 text-white relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-[url('/images/cta-pattern.svg')] bg-cover bg-center opacity-10" aria-hidden="true" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 id="cta-heading" className="display-md font-bold mb-6">
                Need Help Finding the Right Product?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="body-lg text-primary-100 mb-8">
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
