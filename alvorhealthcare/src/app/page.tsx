"use client";

import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { CareChannelsSection } from "@/components/home/CareChannelsSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { CTASection } from "@/components/home/CTASection";
import { DistributionSection } from "@/components/home/DistributionSection";
import { DistributionQualitySection } from "@/components/home/DistributionQualitySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyChooseUsSection />
      <DistributionSection />
      <DistributionQualitySection />
      <CareChannelsSection />
      <CTASection />
    </>
  );
}
