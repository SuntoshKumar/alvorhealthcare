import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutSectionNav } from "@/components/about/AboutSectionNav";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutServices } from "@/components/about/AboutServices";
import { AboutQuality } from "@/components/about/AboutQuality";
import { AboutDistribution } from "@/components/about/AboutDistribution";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Alvor Healthcare Company Limited, a Myanmar healthcare and pharmaceutical importer, marketer, and distributor.",
  openGraph: {
    title: "About Alvor Healthcare Company Limited",
    description: "Pharmaceutical products, medical supplies, consumer healthcare, and dependable distribution across Myanmar.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutSectionNav />
      <AboutMission />
      <AboutServices />
      <AboutQuality />
      <AboutDistribution />
      <CTASection />
    </div>
  );
}
