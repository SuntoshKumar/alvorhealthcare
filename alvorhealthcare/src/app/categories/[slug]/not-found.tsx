import Link from "next/link";
import { Package, ArrowLeft, Search } from "lucide-react";

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900/60">
          <Package className="h-12 w-12 text-neutral-300 dark:text-neutral-600" />
          <div className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-4 ring-white dark:bg-blue-900/30 dark:text-blue-400 dark:ring-neutral-950">
            <Search className="h-5 w-5" />
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          Category Not Found
        </h1>

        <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
          The product category you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/40"
          >
            <ArrowLeft className="h-4 w-4" />
            Browse All Categories
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:ring-neutral-800"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
