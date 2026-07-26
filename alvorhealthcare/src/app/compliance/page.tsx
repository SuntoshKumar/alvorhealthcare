import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Quality & Compliance",
  description: "Quality systems, regulatory responsibility, and compliance information from Alvor Healthcare.",
  path: "/compliance",
});

export default function CompliancePage() {
  return <ResourceInformationPage page={getResourceInformationPage("compliance")!} />;
}
