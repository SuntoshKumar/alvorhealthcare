import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import { BreadcrumbStructuredData } from "@/components/ui/StructuredData";
import { getProductBySlug, getRelatedProducts, products } from "@/data";
import { createPageMetadata } from "@/lib/seo";

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

  const image = product.images[0] ?? product.thumbnail;

  return {
    ...createPageMetadata({
      title: product.name,
      description: product.shortDescription,
      path: `/products/${product.slug}`,
      image,
    }),
    title: product.name,
    keywords: [...product.tags, product.category, ...product.uses],
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

  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ]}
      />
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </>
  );
}
