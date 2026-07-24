import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsPageContent } from "./ProductsPageContent";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse the Alvor Healthcare product portfolio by category, therapeutic area, or product name.",
};

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsPageContent />
    </Suspense>
  );
}
