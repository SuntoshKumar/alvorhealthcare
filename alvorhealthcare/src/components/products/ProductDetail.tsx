"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, X, Download, ExternalLink, Share2, Star, CheckCircle, Shield, Clock, Package, Thermometer, Factory, Award, Leaf, Globe, Users, Star as StarIcon, Sparkles, Calendar, Tag, ArrowRight, Quote } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Breadcrumb } from "@/components/ui/Navigation";
import { Product } from "@/types";
import { getRelatedProducts } from "@/data";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Tablets: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></motion.svg>,
  Capsules: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16.5c0-.828.672-1.5 1.5-1.5h7c.828 0 1.5.672 1.5 1.5v2.5c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5v-2.5z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 9.5c0-.828.672-1.5 1.5-1.5h7c.828 0 1.5.672 1.5 1.5v2.5c0 .828-.672 1.5-1.5 1.5h-7c-.828 0-1.5-.672-1.5-1.5v-2.5z" /></motion.svg>,
  Syrups: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2h4a2 2 0 002-2v-2" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4" /></motion.svg>,
  Injections: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12H9m12 0a9 9 0 10-18 0 9 9 0 0018 0z" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" /></motion.svg>,
  Supplements: ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11l3 3L22 4" /><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></motion.svg>,
  "Medical Supplies": ({ className }) => <motion.svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></motion.svg>,
};

const CategoryIcon = ({ categoryName, className }: { categoryName: string; className?: string }) => {
  const icons = categoryIcons;
  const Icon = icons[categoryName] || icons.Tablets;
  return <Icon className={className} aria-hidden="true" />;
};

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.shortDescription,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleDownloadBrochure = () => {
    if (product.pdfBrochure) {
      const link = document.createElement("a");
      link.href = product.pdfBrochure;
      link.download = `${product.slug}-brochure.pdf`;
      link.click();
      toast.success("Brochure download started!");
    } else {
      setShowBrochureModal(true);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const keyInfo = [
    { icon: Factory, label: "Manufacturer", value: product.keyInformation.manufacturer || "Alvor Healthcare Ltd." },
    { icon: Shield, label: "License Number", value: product.keyInformation.licenseNumber || "MFG/2023/001" },
    { icon: Package, label: "Packaging", value: product.keyInformation.packaging || "Standard pharmaceutical packaging" },
    { icon: Thermometer, label: "Storage", value: product.keyInformation.storage || "Below 30°C, protect from moisture" },
    { icon: Clock, label: "Shelf Life", value: product.keyInformation.shelfLife || "36 months" },
    { icon: Award, label: "Dosage Form", value: product.keyInformation.dosageForm || "Tablet" },
    { icon: CheckCircle, label: "Strength", value: product.keyInformation.strength || "As specified" },
    { icon: Leaf, label: "Composition", value: product.keyInformation.composition || "Active pharmaceutical ingredient" },
  ];

  const certifications = ["WHO GMP", "ISO 9001:2015", "FDA Registered", "EMA Compliant"];

  return (
    <>
      <nav className="bg-neutral-50 border-b border-neutral-100" aria-label="Breadcrumb">
        <div className="container py-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.category, href: `/categories/${product.category.toLowerCase()}` },
              { label: product.name, href: undefined },
            ]}
          />
        </div>
      </nav>

      <section className="section bg-white" aria-labelledby="product-title">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <ScrollReveal>
                <div className="relative aspect-square bg-neutral-50 rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={product.images[selectedImage] || "/images/placeholder-product.svg"}
                        alt={`${product.name} - Image ${selectedImage + 1}`}
                        fill
                        className="object-cover"
                        priority={selectedImage === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {product.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {product.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === selectedImage
                              ? "bg-primary-600 w-6"
                              : "bg-neutral-300 hover:bg-neutral-400"
                          }`}
                          aria-label={`View image ${index + 1}`}
                          aria-current={index === selectedImage ? "true" : "false"}
                        />
                      ))}
                    </div>
                  )}

                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button variant="ghost" size="sm" className="bg-white/90 backdrop-blur-sm" onClick={handleShare} aria-label="Share product">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="bg-white/90 backdrop-blur-sm" onClick={() => setShowModal(true)} aria-label="View fullscreen">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                        index === selectedImage
                          ? "border-primary-600"
                          : "border-neutral-200 hover:border-neutral-300"
                      }`}
                      aria-label={`View image ${index + 1}`}
                      aria-current={index === selectedImage ? "true" : "false"}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                      {product.isNew && index === 0 && (
                        <Badge variant="primary" className="absolute top-1 right-1 text-xs">New</Badge>
                      )}
                      {product.isBestseller && index === 0 && (
                        <Badge variant="secondary" className="absolute top-1 left-1 text-xs">Bestseller</Badge>
                      )}
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:sticky lg:top-24">
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary-600">{product.category}</span>
                      {product.subCategory && (
                        <span className="ml-2 text-sm text-neutral-500">· {product.subCategory}</span>
                      )}
                    </div>
                  </div>

                  <h1 id="product-title" className="display-sm lg:display-md font-bold text-neutral-900">
                    {product.name}
                  </h1>

                  <div className="flex flex-wrap items-center gap-3">
                    {product.isNew && <Badge variant="primary"><Sparkles className="w-3 h-3 mr-1" /> New Arrival</Badge>}
                    {product.isBestseller && <Badge variant="secondary"><Star className="w-3 h-3 mr-1 fill-current" /> Bestseller</Badge>}
                    {product.featured && <Badge variant="outline"><Award className="w-3 h-3 mr-1" /> Featured</Badge>}
                    {product.tags.includes("rx") && <Badge variant="primary"><Shield className="w-3 h-3 mr-1" /> Prescription</Badge>}
                    {product.tags.includes("otc") && <Badge variant="outline"><Users className="w-3 h-3 mr-1" /> OTC</Badge>}
                  </div>

                  <p className="body-lg text-neutral-600 mt-4">{product.shortDescription}</p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                    {product.tags.slice(0, 5).map((tag) => (
                      <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral-100">
                  <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Quality Assured</p>
                      <p className="text-xs text-neutral-500">WHO GMP Certified</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl">
                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Regulatory Compliant</p>
                      <p className="text-xs text-neutral-500">FDA, EMA, WHO</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl">
                    <div className="w-10 h-10 bg-warning-100 rounded-lg flex items-center justify-center text-warning-600">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{product.isBestseller ? "Bestseller" : "Trusted Quality"}</p>
                      <p className="text-xs text-neutral-500">Proven Efficacy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl">
                    <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center text-success-600">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Sustainable</p>
                      <p className="text-xs text-neutral-500">Green Manufacturing</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-3 pt-6">
                  <Button size="lg" className="flex-1 sm:flex-none" onClick={handleDownloadBrochure}>
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleShare}>
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </Button>
                  <Button variant="ghost" size="lg" onClick={() => setShowModal(true)}>
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50" aria-labelledby="details-heading">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <div className="flex items-center justify-between mb-6">
                  <h2 id="details-heading" className="display-sm font-bold text-neutral-900">Product Details</h2>
                  <Badge variant="primary" size="sm">
                    Updated {formatDate(product.updatedAt)}
                  </Badge>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="prose prose-neutral max-w-none">
                  <p className="body-lg text-neutral-700 leading-relaxed mb-6">{product.description}</p>
                  
                  <h3 className="heading-md font-semibold text-neutral-900 mb-4">Indications & Uses</h3>
                  <ul className="space-y-2 mb-6">
                    {product.uses.map((use, index) => (
                      <li key={index} className="flex items-center gap-3 text-neutral-700">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                        {use}
                      </li>
                    ))}
                  </ul>

                  <h3 className="heading-md font-semibold text-neutral-900 mb-4">Key Information</h3>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {Object.entries(product.keyInformation).map(([key, value]) => (
                      value && (
                        <div key={key} className="p-4 bg-white rounded-xl border border-neutral-100">
                          <dt className="text-sm font-medium text-neutral-500 mb-1">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}</dt>
                          <dd className="text-neutral-900">{value}</dd>
                        </div>
                      )
                    ))}
                  </dl>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h3 className="heading-md font-semibold text-neutral-900 mb-4">Certifications & Compliance</h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <Badge key={cert} variant="outline" className="px-4 py-2">
                      <Shield className="w-3 h-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <h3 className="heading-md font-semibold text-neutral-900 mb-4">Packaging Information</h3>
                <div className="p-6 bg-white rounded-xl border border-neutral-100">
                  <p className="text-neutral-700">{product.keyInformation.packaging || "Standard pharmaceutical packaging with child-resistant features where applicable."}</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <ScrollReveal>
                <Card variant="elevated" className="p-6">
                  <h3 className="heading-sm font-bold text-neutral-900 mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary-600" />
                    Key Specifications
                  </h3>
                  <div className="space-y-3">
                    {keyInfo.map((info) => (
                      <div key={info.label} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                          <info.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-neutral-500">{info.label}</p>
                          <p className="text-sm text-neutral-900">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Card variant="elevated" className="p-6">
                  <h3 className="heading-sm font-bold text-neutral-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary-600" />
                    Certifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((cert) => (
                      <Badge key={cert} variant="outline" className="px-3 py-1.5">
                        <CheckCircle className="w-3 h-3 mr-1 text-secondary-600" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card variant="outlined" className="p-6 bg-primary-50 border-primary-100">
                  <h3 className="heading-sm font-bold text-neutral-900 mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary-600" />
                    Global Availability
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3">
                    This product is registered and available in 45+ countries worldwide. 
                    Contact our team for specific market availability and registration status.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Globe className="w-4 h-4 mr-2" />
                    Check Market Availability
                  </Button>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card variant="outlined" className="p-6 bg-secondary-50 border-secondary-100">
                  <h3 className="heading-sm font-bold text-neutral-900 mb-3 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-secondary-600" />
                    Sustainability
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3">
                    Manufactured in our carbon-neutral facilities with eco-friendly packaging. 
                    Part of our commitment to sustainable pharmaceutical manufacturing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" size="sm">Carbon Neutral</Badge>
                    <Badge variant="secondary" size="sm">Recyclable Packaging</Badge>
                    <Badge variant="secondary" size="sm">Green Certified</Badge>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="related-heading">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <ScrollReveal>
              <h2 id="related-heading" className="display-sm font-bold text-neutral-900">
                Related Products
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href="/products" className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
                View All Products
                <ChevronRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related, index) => (
              <StaggerItem key={related.id} delay={index * 0.1}>
                <ScrollReveal>
                  <Link href={`/products/${related.slug}`} className="block">
                    <HoverScale>
                      <Card variant="elevated" className="h-full overflow-hidden">
                        <div className="relative aspect-square bg-neutral-100">
                          <CategoryIcon categoryName={related.category} className="absolute inset-0 w-full h-full text-primary-200" aria-hidden="true" />
                        </div>
                        <CardContent className="p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <CategoryIcon categoryName={related.category} className="w-4 h-4 text-primary-600" aria-hidden="true" />
                            <span className="text-sm font-medium text-primary-600">{related.category}</span>
                          </div>
                          <CardTitle className="text-neutral-900 line-clamp-1">{related.name}</CardTitle>
                          <CardDescription className="mt-2 line-clamp-2">{related.shortDescription}</CardDescription>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm font-medium text-primary-600">View Details</span>
                            <ChevronRight className="w-4 h-4 text-neutral-400" />
                          </div>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </Link>
                </ScrollReveal>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}