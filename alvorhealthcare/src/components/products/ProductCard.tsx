"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Download, Sparkles, Star } from "lucide-react";
import { toast } from "react-hot-toast";
import { Badge } from "@/components/ui/Badge";
import { publicAssetPath } from "@/lib/paths";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "list" | "related";
}

function downloadBrochure(product: Product) {
  if (!product.pdfBrochure) return;

  const link = document.createElement("a");
  link.href = publicAssetPath(product.pdfBrochure);
  link.download = `${product.slug}-brochure.pdf`;
  link.click();
  toast.success("Brochure download started");
}

function ProductBadges({ product }: { product: Product }) {
  return (
    <div className="flex flex-wrap justify-end gap-1.5">
      {product.isNew && (
        <Badge variant="primary" size="sm">
          <Sparkles className="mr-1 h-3 w-3" />
          New
        </Badge>
      )}
      {product.isBestseller && (
        <Badge variant="secondary" size="sm">
          <Star className="mr-1 h-3 w-3 fill-current" />
          Bestseller
        </Badge>
      )}
    </div>
  );
}

export function ProductCard({ product, variant = "grid" }: ProductCardProps) {
  const specifications = [
    product.keyInformation.strength,
    product.keyInformation.dosageForm,
  ].filter(Boolean);

  if (variant === "list") {
    return (
      <article className="group relative grid gap-5 rounded-2xl border border-neutral-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg dark:border-neutral-700/50 dark:bg-neutral-800/30 dark:hover:border-blue-700 sm:grid-cols-[152px_minmax(0,1fr)_auto] sm:items-center sm:p-5">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-neutral-50 to-blue-50 dark:from-neutral-800 dark:to-blue-950/40">
          <Image
            src={publicAssetPath(product.thumbnail)}
            alt={`${product.name} product artwork`}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 152px"
          />
          <div className="absolute right-2 top-2">
            <ProductBadges product={product} />
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {product.category}{product.subCategory ? ` / ${product.subCategory}` : ""}
          </p>
          <h2 className="mt-2 font-heading text-lg font-semibold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            <Link href={`/products/${product.slug}`} className="after:absolute after:inset-0">
              {product.name}
            </Link>
          </h2>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {product.shortDescription}
          </p>
          {specifications.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {specifications.map((value) => (
                <span key={value} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  {value}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="relative z-10 flex items-center gap-2 sm:flex-col sm:items-end">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
            View product
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
          {product.pdfBrochure && (
            <button
              type="button"
              onClick={() => downloadBrochure(product)}
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-neutral-500 hover:bg-blue-50 hover:text-blue-600 dark:text-neutral-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
              aria-label={`Download ${product.name} brochure`}
            >
              <Download className="h-3.5 w-3.5" />
              Brochure
            </button>
          )}
        </div>
      </article>
    );
  }

  const isRelated = variant === "related";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-neutral-700/50 dark:bg-neutral-800/30 dark:hover:border-blue-700">
      <div className={`relative overflow-hidden bg-gradient-to-br from-neutral-50 to-blue-50 dark:from-neutral-800 dark:to-blue-950/40 ${isRelated ? "h-48" : "h-60"}`}>
        <Image
          src={publicAssetPath(product.thumbnail)}
          alt={`${product.name} product artwork`}
          fill
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          sizes={isRelated ? "(max-width: 640px) 100vw, 25vw" : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"}
        />
        <div className="absolute right-3 top-3">
          <ProductBadges product={product} />
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${isRelated ? "p-4" : "p-5"}`}>
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {product.category}
        </p>
        <h2 className="mt-2 font-heading text-lg font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          <Link href={`/products/${product.slug}`} className="after:absolute after:inset-0">
            {product.name}
          </Link>
        </h2>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {product.shortDescription}
        </p>

        {specifications.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {specifications.map((value) => (
              <span key={value} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                {value}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-neutral-700/50">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
            View details
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
          {product.pdfBrochure && (
            <button
              type="button"
              onClick={() => downloadBrochure(product)}
              className="relative z-10 rounded-lg p-2 text-neutral-400 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-neutral-500 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
              aria-label={`Download ${product.name} brochure`}
              title="Download brochure"
            >
              <Download className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
