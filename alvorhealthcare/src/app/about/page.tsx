import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutSectionNav } from "@/components/about/AboutSectionNav";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutHistory } from "@/components/about/AboutHistory";
import { AboutQuality } from "@/components/about/AboutQuality";
import { AboutManufacturing } from "@/components/about/AboutManufacturing";
import { AboutCertifications } from "@/components/about/AboutCertifications";
import { AboutTeam } from "@/components/about/AboutTeam";
import { CTASection } from "@/components/home/CTASection";
import { companyInfo } from "@/data";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${companyInfo.name}'s ${companyInfo.experienceYears}+ year journey of pharmaceutical excellence. Our mission, vision, quality commitment, manufacturing capabilities, and leadership team.`,
  openGraph: {
    title: `About ${companyInfo.name} | ${companyInfo.experienceYears}+ Years of Pharmaceutical Excellence`,
    description: `Leading global pharmaceutical company dedicated to improving health through innovation and quality.`,
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
      <AboutManufacturing />
      <AboutCertifications />
      <AboutTeam />
      <CTASection />
    </div>
  );
}
