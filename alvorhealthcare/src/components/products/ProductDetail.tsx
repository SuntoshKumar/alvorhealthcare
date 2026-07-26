"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Award,
  CheckCircle,
  ChevronRight,
  Download,
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
  const prefersReducedMotion = useReducedMotion();
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
      <nav className="border-b border-neutral-100 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50" aria-label="Breadcrumb">
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

      <section className="relative overflow-hidden bg-white py-10 dark:bg-neutral-950 lg:py-16" aria-labelledby="product-title">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/10" aria-hidden="true" />
        <div className="pharma-grid absolute inset-0 opacity-25 dark:opacity-10" aria-hidden="true" />
        <div className="container relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-14">
            <motion.div
              className="lg:sticky lg:top-28"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-neutral-100 bg-gradient-to-br from-neutral-50 via-white to-blue-50 shadow-[0_30px_70px_-48px_rgba(30,64,175,0.55)] dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-900 dark:to-blue-950/30 sm:aspect-[3/2] lg:aspect-[4/3]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.95),transparent_50%)] opacity-80 dark:opacity-10" aria-hidden="true" />
                  <div className="absolute inset-x-[25%] bottom-8 h-5 rounded-[50%] bg-blue-950/10 blur-lg dark:bg-black/35" aria-hidden="true" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage}
                      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.975 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.015 }}
                      transition={{ duration: prefersReducedMotion ? 0.01 : 0.36, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={publicAssetPath(images[selectedImage])}
                        alt={`${product.name} product image ${selectedImage + 1}`}
                        fill
                        className="object-contain p-6 sm:p-10"
                        priority
                        sizes="(max-width: 1024px) 100vw, 52vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {images.length > 1 && (
                  <div className="mt-4 flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
                    {images.map((image, index) => (
                      <motion.button
                        key={image}
                        type="button"
                        onClick={() => setSelectedImage(index)}
                        whileTap={{ scale: 0.96 }}
                        whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
                        className={`relative h-18 w-18 shrink-0 overflow-hidden rounded-xl border-2 bg-neutral-50 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-neutral-900 sm:h-20 sm:w-20 ${
                          index === selectedImage
                            ? "border-blue-600 shadow-[0_8px_20px_-12px_rgba(37,99,235,0.7)]"
                            : "border-neutral-200 opacity-70 hover:border-blue-300 hover:opacity-100 dark:border-neutral-700"
                        }`}
                        aria-label={`View product image ${index + 1}`}
                        aria-pressed={index === selectedImage}
                      >
                        <Image src={publicAssetPath(image)} alt="" fill className="object-contain p-1" sizes="80px" />
                        {index === selectedImage && (
                          <motion.span
                            layoutId="selected-product-image"
                            className="pointer-events-none absolute inset-0 rounded-[0.65rem] ring-2 ring-inset ring-blue-500/70"
                            transition={prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 420, damping: 34 }}
                          />
                        )}
                        <AnimatePresence>
                          {index === selectedImage && (
                            <motion.span layoutId="active-product-thumbnail" className="absolute inset-x-2 bottom-1 h-0.5 rounded-full bg-blue-600" />
                          )}
                        </AnimatePresence>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.65, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  {product.category}{product.subCategory ? ` / ${product.subCategory}` : ""}
                </p>
                <h1 id="product-title" className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                  {product.name}
                </h1>

                <div className="mt-4 flex flex-wrap gap-2">
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

                <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {product.shortDescription}
                </p>

                {specifications.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {specifications.slice(0, 3).map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2.5 rounded-xl border border-neutral-100 bg-neutral-50 px-3.5 py-2.5 dark:border-neutral-800 dark:bg-neutral-900/60"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                          <item.icon className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                            {item.label}
                          </p>
                          <p className="text-sm font-semibold text-neutral-900 dark:text-white">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-7 space-y-4">
                  <Link
                    href={inquiryHref}
                    className="group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 dark:from-blue-500 dark:to-blue-600"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                      <Mail className="h-6 w-6" />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold">Request product information</p>
                      <p className="mt-0.5 text-sm text-blue-100 dark:text-blue-200">
                        Availability, prescribing details, and documentation
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="flex gap-3">
                    {product.pdfBrochure && (
                      <button
                        type="button"
                        onClick={handleDownloadBrochure}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/50 dark:hover:text-blue-300"
                      >
                        <Download className="h-4 w-4" />
                        Download brochure
                      </button>
                    )}
                    <div className="relative flex-1">
                      <button
                        type="button"
                        onClick={handleShare}
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/50 dark:hover:text-blue-300"
                      >
                        <Share2 className="h-4 w-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 dark:bg-neutral-900/50 lg:py-24" aria-labelledby="details-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
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
                    <motion.ul
                      className="mt-5 grid gap-3 sm:grid-cols-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={{ hidden: {}, visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.06 } } }}
                    >
                      {product.uses.map((use) => (
                        <motion.li
                          key={use}
                          className="flex items-start gap-3 rounded-2xl bg-white p-4 text-neutral-700 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:text-neutral-300 dark:ring-neutral-800"
                          variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } } }}
                        >
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                          {use}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </ScrollReveal>
              )}

            </div>

            <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              {specifications.length > 0 && (
                <ScrollReveal>
                  <Card variant="elevated" className="rounded-3xl p-6">
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
                <Card variant="outlined" className="rounded-3xl border-blue-100 bg-blue-50 p-6 dark:border-blue-800/40 dark:bg-blue-900/20">
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
        <section className="bg-white py-16 dark:bg-neutral-950 lg:py-24" aria-labelledby="related-heading">
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
