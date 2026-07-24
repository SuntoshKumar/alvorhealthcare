"use client";

import Link from "next/link";
import { Tablet, Pill, Droplets, Syringe, Shield, ChevronRight, Download } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const featuredProducts = [
  {
    id: "prod-1",
    name: "AlvorPar 500",
    category: "Tablets",
    shortDescription: "Effective relief from pain and fever with rapid onset of action.",
    thumbnail: "/images/products/alvorpar-500-thumb.svg",
    tags: ["OTC", "Pain Relief", "Bestseller"],
    featured: true,
    isNew: false,
    isBestseller: true,
  },
  {
    id: "prod-2",
    name: "AlvorFen 400",
    category: "Tablets",
    shortDescription: "Anti-inflammatory medication for pain, swelling, and joint stiffness.",
    thumbnail: "/images/products/alvorfen-400-thumb.svg",
    tags: ["OTC", "Anti-inflammatory", "Bestseller"],
    featured: true,
    isNew: true,
    isBestseller: true,
  },
  {
    id: "prod-3",
    name: "AlvorCillin 500",
    category: "Capsules",
    shortDescription: "Broad-spectrum antibiotic for bacterial infections.",
    thumbnail: "/images/products/alvorcillin-500-thumb.svg",
    tags: ["RX", "Antibiotic", "New"],
    featured: true,
    isNew: true,
    isBestseller: false,
  },
  {
    id: "prod-4",
    name: "AlvorPrazole 20",
    category: "Capsules",
    shortDescription: "Proton pump inhibitor for acid reflux and stomach ulcers.",
    thumbnail: "/images/products/alvorprazole-20-thumb.svg",
    tags: ["RX", "GI Health", "Bestseller"],
    featured: true,
    isNew: false,
    isBestseller: true,
  },
  {
    id: "prod-5",
    name: "AlvorD3 1000",
    category: "Supplements",
    shortDescription: "Essential vitamin for bone health and immune function.",
    thumbnail: "/images/products/alvord3-1000-thumb.svg",
    tags: ["OTC", "Vitamin", "New"],
    featured: true,
    isNew: true,
    isBestseller: false,
  },
  {
    id: "prod-6",
    name: "AlvorOmega",
    category: "Supplements",
    shortDescription: "High-purity omega-3 fatty acids for cardiovascular health.",
    thumbnail: "/images/products/alvoromega-thumb.svg",
    tags: ["OTC", "Heart Health", "Bestseller"],
    featured: true,
    isNew: false,
    isBestseller: true,
  },
];

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

export function FeaturedProductsSection() {
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
                  <Card variant="elevated" className="h-full overflow-hidden group">
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
                          <Download className="w-4 h-4" /> Brochure
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
                      <Link
                        href={`/products/${product.id}`}
                        className="flex items-center justify-between w-full text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardFooter>
                  </Card>
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