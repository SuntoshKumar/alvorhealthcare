"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data";
import { ProductCard } from "@/components/products/ProductCard";

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 8);

  return (
    <section className="section" aria-labelledby="featured-heading">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Products</span>
            <h2 id="featured-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2">
              Featured Products
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mt-2 max-w-lg">
              Our most trusted pharmaceutical solutions, chosen by healthcare professionals worldwide.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors flex-shrink-0"
          >
            Browse All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
