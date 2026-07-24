"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  ChevronRight,
  Download,
  Factory,
  Mail,
  Package,
  Share2,
  Shield,
  Sparkles,
  Star,
  Thermometer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/Animations";
import { ProductCard } from "@/components/products/ProductCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Navigation";
import { categories } from "@/data";
import { publicAssetPath } from "@/lib/paths";
import type { Product } from "@/types";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

interface Specification {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const category = categories.find((item) => item.name === product.category);
  const images = product.images.length > 0 ? product.images : [product.thumbnail];

  const specificationCandidates: Array<Specification | null> = [
    product.keyInformation.composition
      ? { icon: Award, label: "Composition", value: product.keyInformation.composition }
      : null,
    product.keyInformation.strength
      ? { icon: CheckCircle, label: "Strength", value: product.keyInformation.strength }
      : null,
    product.keyInformation.dosageForm
      ? { icon: Package, label: "Dosage form", value: product.keyInformation.dosageForm }
      : null,
    product.keyInformation.packaging
      ? { icon: Package, label: "Packaging", value: product.keyInformation.packaging }
      : null,
    product.keyInformation.storage
      ? { icon: Thermometer, label: "Storage", value: product.keyInformation.storage }
      : null,
    product.keyInformation.shelfLife
      ? { icon: Shield, label: "Shelf life", value: product.keyInformation.shelfLife }
      : null,
    product.keyInformation.manufacturer
      ? { icon: Factory, label: "Manufacturer", value: product.keyInformation.manufacturer }
      : null,
    product.keyInformation.licenseNumber
      ? { icon: Shield, label: "License number", value: product.keyInformation.licenseNumber }
      : null,
  ];
  const specifications = specificationCandidates.filter((item): item is Specification => item !== null);
  const inquiryHref = `/contact?inquiryType=product-inquiry&product=${encodeURIComponent(product.name)}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.shortDescription,
          url: window.location.href,
        });
      } catch {
        return;
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Product link copied");
    } catch {
      toast.error("Unable to copy the product link");
    }
  };

  const handleDownloadBrochure = () => {
    if (!product.pdfBrochure) return;

    const link = document.createElement("a");
    link.href = publicAssetPath(product.pdfBrochure);
    link.download = `${product.slug}-brochure.pdf`;
    link.click();
    toast.success("Brochure download started");
  };

  return (
    <>
      <nav className="border-b border-neutral-100 bg-neutral-50 pt-16 dark:border-neutral-800 dark:bg-neutral-900/50 lg:pt-20" aria-label="Breadcrumb">
        <div className="container py-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              {
                label: product.category,
                href: category ? `/categories/${category.slug}` : "/categories",
              },
              { label: product.name },
            ]}
          />
        </div>
      </nav>

      <section className="relative overflow-hidden bg-white py-12 dark:bg-neutral-950 lg:py-20" aria-labelledby="product-title">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/10" aria-hidden="true" />
        <div className="container relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <ScrollReveal>
              <div>
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-neutral-100 bg-gradient-to-br from-neutral-50 to-blue-50 shadow-sm dark:border-neutral-800 dark:from-neutral-900 dark:to-blue-950/30">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={publicAssetPath(images[selectedImage])}
                        alt={`${product.name} product image ${selectedImage + 1}`}
                        fill
                        className="object-contain p-5 sm:p-8"
                        priority
                        sizes="(max-width: 1024px) 100vw, 52vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {images.length > 1 && (
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setSelectedImage(index)}
                        className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-neutral-50 transition-colors dark:bg-neutral-900 ${
                          index === selectedImage
                            ? "border-blue-600"
                            : "border-neutral-200 hover:border-blue-300 dark:border-neutral-700"
                        }`}
                        aria-label={`View product image ${index + 1}`}
                        aria-pressed={index === selectedImage}
                      >
                        <Image src={publicAssetPath(image)} alt="" fill className="object-contain p-1" sizes="80px" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  {product.category}{product.subCategory ? ` / ${product.subCategory}` : ""}
                </p>
                <h1 id="product-title" className="mt-4 display-sm font-bold text-neutral-900 dark:text-white lg:display-md">
                  {product.name}
                </h1>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.isNew && (
                    <Badge variant="primary"><Sparkles className="mr-1 h-3 w-3" />New</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge variant="secondary"><Star className="mr-1 h-3 w-3 fill-current" />Bestseller</Badge>
                  )}
                  {product.featured && (
                    <Badge variant="outline"><Award className="mr-1 h-3 w-3" />Featured</Badge>
                  )}
                  {product.tags.includes("rx") && (
                    <Badge variant="outline"><Shield className="mr-1 h-3 w-3" />Prescription</Badge>
                  )}
                  {product.tags.includes("otc") && <Badge variant="outline">OTC</Badge>}
                </div>

                <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {product.shortDescription}
                </p>

                <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                  {specifications.slice(0, 4).map((item) => (
                    <div key={item.label} className="rounded-xl border border-neutral-100 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        {item.label}
                      </dt>
                      <dd className="mt-1 font-medium text-neutral-900 dark:text-white">{item.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={inquiryHref} className="btn btn-primary btn-lg">
                    <Mail className="h-5 w-5" />
                    Ask about this product
                  </Link>
                  {product.pdfBrochure && (
                    <Button variant="outline" size="lg" onClick={handleDownloadBrochure}>
                      <Download className="mr-2 h-5 w-5" />
                      Brochure
                    </Button>
                  )}
                  <Button variant="ghost" size="lg" onClick={handleShare}>
                    <Share2 className="mr-2 h-5 w-5" />
                    Share
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="details-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <ScrollReveal>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Product information
                </p>
                <h2 id="details-heading" className="mt-3 display-sm font-bold text-neutral-900 dark:text-white">
                  Details and intended uses
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {product.description}
                </p>
              </ScrollReveal>

              {product.uses.length > 0 && (
                <ScrollReveal delay={0.1}>
                  <div className="mt-10">
                    <h3 className="heading-md font-semibold text-neutral-900 dark:text-white">Uses</h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {product.uses.map((use) => (
                        <li key={use} className="flex items-start gap-3 rounded-xl bg-white p-4 text-neutral-700 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:text-neutral-300 dark:ring-neutral-800">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {product.certifications.length > 0 && (
                <ScrollReveal delay={0.2}>
                  <div className="mt-10">
                    <h3 className="heading-md font-semibold text-neutral-900 dark:text-white">
                      Certifications listed for this product
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.certifications.map((certification) => (
                        <Badge key={certification} variant="outline" className="px-4 py-2">
                          <Shield className="mr-1.5 h-4 w-4 text-blue-600 dark:text-blue-400" />
                          {certification}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            <div className="space-y-6">
              {specifications.length > 0 && (
                <ScrollReveal>
                  <Card variant="elevated" className="p-6">
                    <h3 className="heading-sm font-bold text-neutral-900 dark:text-white">Specifications</h3>
                    <dl className="mt-5 space-y-4">
                      {specifications.map((item) => (
                        <div key={item.label} className="flex gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                              {item.label}
                            </dt>
                            <dd className="mt-1 text-sm text-neutral-900 dark:text-white">{item.value}</dd>
                          </div>
                        </div>
                      ))}
                    </dl>
                  </Card>
                </ScrollReveal>
              )}

              <ScrollReveal delay={0.1}>
                <Card variant="outlined" className="border-blue-100 bg-blue-50 p-6 dark:border-blue-800/40 dark:bg-blue-900/20">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="mt-4 heading-sm font-bold text-neutral-900 dark:text-white">
                    Need availability or prescribing information?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    Contact our team with your market and organization details. We will respond with the applicable product information.
                  </p>
                  <Link href={inquiryHref} className="btn btn-primary mt-5 w-full">
                    Contact the product team
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section bg-white dark:bg-neutral-950" aria-labelledby="related-heading">
          <div className="container">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <ScrollReveal>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Continue browsing
                </p>
                <h2 id="related-heading" className="mt-3 display-sm font-bold text-neutral-900 dark:text-white">
                  Related products
                </h2>
              </ScrollReveal>
              <Link href="/products" className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400">
                View all products
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((related, index) => (
                <StaggerItem key={related.id} delay={index * 0.08}>
                  <ProductCard product={related} variant="related" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </>
  );
}
