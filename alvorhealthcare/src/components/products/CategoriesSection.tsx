"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { categories } from "@/data";
import { publicAssetPath } from "@/lib/paths";

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
                          <Image
                            src={publicAssetPath(category.image)}
                            alt=""
                            width={64}
                            height={64}
                            className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                          />
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