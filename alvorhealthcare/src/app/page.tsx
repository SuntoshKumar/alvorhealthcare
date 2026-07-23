"use client";

import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { CategoriesSection } from "@/components/products/CategoriesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TrustedPartners } from "@/components/home/TrustedPartners";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { CTASection } from "@/components/home/CTASection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { NewsSection } from "@/components/home/NewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <CategoriesSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <TrustedPartners />
      <TestimonialsSection />
      <NewsSection />
      <CTASection />
    </>
  );
}