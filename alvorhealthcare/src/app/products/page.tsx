import type { Metadata } from "next";
import { categories } from "@/data";
import { ProductsPageContent } from "./ProductsPageContent";

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

export async function generateStaticParams() {
  const params: Array<{ category?: string; subcategory?: string }> = [{ category: undefined, subcategory: undefined }];

  for (const category of categories) {
    params.push({ category: category.slug });
    if (category.subCategories) {
      for (const subCategory of category.subCategories) {
        params.push({ category: category.slug, subcategory: subCategory.slug });
      }
    }
  }

  return params;
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
