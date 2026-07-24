import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import { getProductBySlug, getRelatedProducts, products } from "@/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    keywords: [...product.tags, product.category, ...product.uses],
    openGraph: {
      title: `${product.name} | Alvor Healthcare`,
      description: product.shortDescription,
      type: "website",
      images: product.images.length > 0 ? [{ url: product.images[0] }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: product.images.length > 0 ? [product.images[0]] : [],
    },
  };
}

export async function generateStaticParams() {
  const params = products.map((product) => ({
    slug: product.slug,
  }));
  return params;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
