import { CategoriesPageContent } from "./CategoriesPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Product Categories",
  description: "Explore pharmaceutical and healthcare products distributed by Alvor Healthcare across five product categories.",
  path: "/categories",
});

export default function CategoriesPage() {
  return <CategoriesPageContent />;
}
