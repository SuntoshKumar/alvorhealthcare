import { AboutHero } from "@/components/about/AboutHero";
import { AboutSectionNav } from "@/components/about/AboutSectionNav";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutServices } from "@/components/about/AboutServices";
import { AboutQuality } from "@/components/about/AboutQuality";
import { AboutDistribution } from "@/components/about/AboutDistribution";
import { CTASection } from "@/components/home/CTASection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description: "Learn about Alvor Healthcare Company Limited, a Myanmar healthcare and pharmaceutical importer, marketer, and distributor.",
  path: "/about",
  openGraphTitle: "About Alvor Healthcare Company Limited",
  openGraphDescription: "Pharmaceutical products, medical supplies, consumer healthcare, and dependable distribution across Myanmar.",
});

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
