import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Navigation";
import { BreadcrumbStructuredData } from "@/components/ui/StructuredData";
import { categories, getProductsByCategory } from "@/data";
import { createPageMetadata } from "@/lib/seo";
import { CategoryPageContent } from "./CategoryPageContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return createPageMetadata({
    title: category.name,
    description: category.description,
    path: `/categories/${category.slug}`,
    openGraphTitle: `${category.name} | Alvor Healthcare`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Product Categories", path: "/categories" },
          { name: category.name, path: `/categories/${category.slug}` },
        ]}
      />
      <div className="absolute left-0 right-0 top-0 z-20 pt-28 lg:pt-32">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Categories", href: "/categories" },
              { label: category.name },
            ]}
          />
        </div>
      </div>
      <CategoryPageContent category={category} products={categoryProducts} />
    </>
  );
}
