"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { categories } from "@/data";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Tablets: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></motion.svg>,
  Capsules: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16.5c0-.828.672-1.5 1.5-1.5h7c.828 0 1.5.672 1.5 1.5v2.5c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5v-2.5z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 9.5c0-.828.672-1.5 1.5-1.5h7c.828 0 1.5.672 1.5 1.5v2.5c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5v-2.5z" /></motion.svg>,
  Syrups: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2h4a2 2 0 002-2v-2" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4" /></motion.svg>,
  Injections: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12H9m12 0a9 9 0 10-18 0 9 9 0 0018 0z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" /></motion.svg>,
  Supplements: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11l3 3L22 4" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></motion.svg>,
  "Medical Supplies": ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></motion.svg>,
};

const getCategoryIcon = (name: string) => {
  const Icon = categoryIcons[name] || (({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11l3 3L22 4" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></motion.svg>);
  return <Icon className="w-16 h-16 text-primary-600 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />;
};

export function CategoriesSection() {
  return (
    <section className="section bg-neutral-50" aria-labelledby="categories-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="categories-heading" className="display-md lg:display-lg font-bold text-neutral-900">
              Product Categories
            </h2>
            <p className="body-lg text-neutral-600 mt-4">
              Explore our comprehensive portfolio of pharmaceutical products across multiple dosage forms
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <StaggerItem key={category.id} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale scale={1.02}>
                  <Link href={`/categories/${category.slug}`} className="block">
                    <Card variant="elevated" className="h-full overflow-hidden group-hover:border-primary-200 transition-all duration-300">
                      <div className="relative h-56 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          {getCategoryIcon(category.name)}
                        </div>
                        <Badge variant="primary" className="absolute top-4 right-4">
                          {category.productCount} Products
                        </Badge>
                        {category.featured && (
                          <Badge variant="secondary" className="absolute top-4 left-4">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <CardTitle className="text-neutral-900 group-hover:text-primary-600 transition-colors">
                          {category.name}
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-2">{category.description}</CardDescription>
                        
                        {category.subCategories && category.subCategories.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {category.subCategories.slice(0, 4).map((sub) => (
                              <Badge key={sub.id} variant="outline" size="sm" className="group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:border-primary-200 transition-colors">
                                {sub.name} ({sub.productCount})
                              </Badge>
                            ))}
                            {category.subCategories.length > 4 && (
                              <Badge variant="outline" size="sm">+{category.subCategories.length - 4} more</Badge>
                            )}
                          </div>
                        )}

                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-sm font-medium text-primary-600 group-hover:underline">
                            View Products
                            <ChevronRight className="w-4 h-4 inline ms-1" />
                          </span>
                        </div>
                      </CardContent>
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
              View All Categories
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}