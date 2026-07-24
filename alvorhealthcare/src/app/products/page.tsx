import type { Metadata } from "next";
import { ProductsPageContent } from "./ProductsPageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse the Alvor Healthcare product portfolio by category, therapeutic area, or product name.",
};

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string | string[];
    subcategory?: string | string[];
  }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const query = await searchParams;
  const category = Array.isArray(query.category) ? query.category[0] : query.category;
  const subCategory = Array.isArray(query.subcategory) ? query.subcategory[0] : query.subcategory;

  return (
    <ProductsPageContent
      key={`${category ?? "all"}:${subCategory ?? "all"}`}
      initialCategory={category}
      initialSubCategory={subCategory}
    />
  );
}
