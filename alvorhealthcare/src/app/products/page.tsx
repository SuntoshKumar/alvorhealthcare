import { Suspense } from "react";
import { ProductsPageContent } from "./ProductsPageContent";
import { ProductsPageSkeleton } from "./ProductsPageSkeleton";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Products",
  description: "Browse the Alvor Healthcare product portfolio by category, therapeutic area, or product name.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsPageSkeleton />}>
      <ProductsPageContent />
    </Suspense>
  );
}
