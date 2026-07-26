import { ResourceDetailPage } from "@/components/resources/ResourceDetailPage";
import { getResourceCollection } from "@/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Healthcare Professional Resources",
  description: "Product information, clinical evidence, and medical education resources for healthcare professionals.",
  path: "/resources/hcp",
});

export default function HCPPage() {
  return <ResourceDetailPage collection={getResourceCollection("hcp")!} />;
}
