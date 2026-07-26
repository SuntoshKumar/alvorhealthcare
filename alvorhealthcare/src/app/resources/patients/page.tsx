import { ResourceDetailPage } from "@/components/resources/ResourceDetailPage";
import { getResourceCollection } from "@/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Patient & Caregiver Resources",
  description: "Plain-language medication guidance, support information, and helpful resources for patients and caregivers.",
  path: "/resources/patients",
});

export default function PatientsPage() {
  return <ResourceDetailPage collection={getResourceCollection("patients")!} />;
}
