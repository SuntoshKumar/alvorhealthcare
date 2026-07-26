import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutSectionNav } from "@/components/about/AboutSectionNav";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutHistory } from "@/components/about/AboutHistory";
import { AboutQuality } from "@/components/about/AboutQuality";
import { AboutDistribution } from "@/components/about/AboutDistribution";
import { AboutTeam } from "@/components/about/AboutTeam";
import { CTASection } from "@/components/home/CTASection";
import { companyInfo } from "@/data";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${companyInfo.name}'s ${companyInfo.experienceYears}+ year journey in pharmaceutical distribution, responsible supply, quality stewardship, and customer service.`,
  openGraph: {
    title: `About ${companyInfo.name} | ${companyInfo.experienceYears}+ Years of Pharmaceutical Excellence`,
    description: `Pharmaceutical distributor focused on dependable supply, responsible handling, and responsive service.`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutSectionNav />
      <AboutMission />
      <AboutHistory />
      <AboutQuality />
      <AboutDistribution />
      <AboutTeam />
      <CTASection />
    </div>
  );
}
