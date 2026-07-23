"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Package, Globe, Award, Shield, Leaf, Star, Search, Filter, Tablet, Pill, Droplets, Syringe } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { products } from "@/data";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Tablets: Tablet,
  Capsules: Pill,
  Syrups: Droplets,
  Injections: Syringe,
  Supplements: Pill,
  "Medical Supplies": Shield,
};

const getCategoryIcon = (category: string) => {
  const Icon = categoryIcons[category] || Tablet;
  return <Icon className="w-16 h-16 text-primary-600/50 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />;
};

const getCategoryIconSmall = (category: string) => {
  const Icon = categoryIcons[category] || Tablet;
  return <Icon className="w-4 h-4 text-primary-600" aria-hidden="true" />;
};

const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

export function FeaturedProducts() {
  return (
    <section className="section bg-neutral-50" aria-labelledby="featured-heading">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <ScrollReveal>
            <div>
              <h2 id="featured-heading" className="display-md lg:display-lg font-bold text-neutral-900">
                Featured Products
              </h2>
              <p className="body-lg text-neutral-600 mt-2">
                Our most trusted and innovative pharmaceutical solutions
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link href="/products" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
              View All Products
              <ChevronRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <StaggerItem key={product.id} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale scale={1.02}>
                  <Link href={`/products/${product.slug}`} className="block group">
                    <Card variant="elevated" className="h-full overflow-hidden group-hover:border-primary-200 transition-all duration-300">
                      <div className="relative h-48 bg-neutral-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          {getCategoryIcon(product.category)}
                        </div>
                        <div className="absolute top-3 right-3 flex gap-1.5">
                          {product.isNew && <Badge variant="primary" size="sm">New</Badge>}
                          {product.isBestseller && <Badge variant="secondary" size="sm">Bestseller</Badge>}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                          <Button size="sm" variant="ghost" className="bg-white/90 backdrop-blur-sm flex-1">
                            Quick View
                          </Button>
                          <Button size="sm" variant="primary" className="flex-1">
                            <Package className="w-4 h-4" /> Brochure
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <motion.svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </motion.svg>
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
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-12">
          <ScrollReveal>
            <Button variant="outline" size="lg" rightIcon={<ChevronRight className="w-5 h-5" />}>
              Browse All 52+ Products
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}