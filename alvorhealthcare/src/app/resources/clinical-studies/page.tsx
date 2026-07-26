import { ResourceDetailPage } from "@/components/resources/ResourceDetailPage";
import { getResourceCollection } from "@/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Clinical Information Resources",
  description: "Request available clinical study information and scientific documents for products distributed by Alvor Healthcare.",
  path: "/resources/clinical-studies",
});

export default function ClinicalStudiesPage() {
  return <ResourceDetailPage collection={getResourceCollection("clinical-studies")!} />;
}
