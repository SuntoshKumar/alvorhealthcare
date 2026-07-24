import { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getProductsByCategory } from "@/data";
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

  return {
    title: `${category.name} | Alvor Healthcare`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Alvor Healthcare`,
      description: category.description,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return <CategoryPageContent category={category} products={categoryProducts} />;
}
