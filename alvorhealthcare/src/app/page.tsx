"use client";

import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { TrustedPartnersSection } from "@/components/home/TrustedPartnersSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { CTASection } from "@/components/home/CTASection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { ManufacturingSection } from "@/components/home/ManufacturingSection";
import { QualityCertificationsSection } from "@/components/home/QualityCertificationsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyChooseUsSection />
      <ManufacturingSection />
      <QualityCertificationsSection />
      <TrustedPartnersSection />
      <TestimonialsSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
