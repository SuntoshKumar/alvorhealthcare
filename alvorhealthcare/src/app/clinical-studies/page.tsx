import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Clinical Information Requests",
  description: "Request available product-specific clinical study information through Alvor Healthcare.",
  path: "/clinical-studies",
});

export default function ClinicalStudiesPage() {
  return <ResourceInformationPage page={getResourceInformationPage("clinical-studies")!} />;
}
