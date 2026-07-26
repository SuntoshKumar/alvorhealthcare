import { ResourcesPageContent } from "./ResourcesPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Healthcare Resources",
  description: "Access product information, medical education, clinical information, and patient resources from Alvor Healthcare.",
  path: "/resources",
});

export default function ResourcesPage() {
  return <ResourcesPageContent />;
}
