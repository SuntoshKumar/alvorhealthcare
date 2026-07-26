import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Medication Guides",
  description: "Patient-focused medicine information and medication guide request pathways from Alvor Healthcare.",
  path: "/medication-guides",
});

export default function MedicationGuidesPage() {
  return <ResourceInformationPage page={getResourceInformationPage("medication-guides")!} />;
}
