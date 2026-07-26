import { Metadata } from "next";
import { CareersHero } from "@/components/careers/CareersHero";
import { CareersBenefits } from "@/components/careers/CareersBenefits";
import { CareersDepartments } from "@/components/careers/CareersDepartments";
import { CareersJobs } from "@/components/careers/CareersJobs";
import { CareersCulture } from "@/components/careers/CareersCulture";
import { CareersCTA } from "@/components/careers/CareersCTA";

export const metadata: Metadata = {
  title: "Careers | Alvor Healthcare",
  description: "Explore careers in pharmaceutical distribution, quality, regulatory support, supply operations, and commercial functions at Alvor Healthcare.",
  openGraph: {
    title: "Careers | Alvor Healthcare",
    description: "Join our team and help healthcare partners access quality pharmaceutical products across Myanmar.",
  },
};

export default function CareersPage() {
  return (
    <div>
      <CareersHero />
      <CareersBenefits />
      <CareersDepartments />
      <CareersJobs />
      <CareersCulture />
      <CareersCTA />
    </div>
  );
}
