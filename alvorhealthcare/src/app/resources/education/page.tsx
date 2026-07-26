import { ResourceDetailPage } from "@/components/resources/ResourceDetailPage";
import { getResourceCollection } from "@/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Medical Education Resources",
  description: "Structured medical education and professional learning resources from Alvor Healthcare.",
  path: "/resources/education",
});

export default function EducationPage() {
  return <ResourceDetailPage collection={getResourceCollection("education")!} />;
}
