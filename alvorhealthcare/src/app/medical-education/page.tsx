import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Medical Education",
  description: "Professional medical education and learning information from Alvor Healthcare.",
  path: "/medical-education",
});

export default function MedicalEducationPage() {
  return <ResourceInformationPage page={getResourceInformationPage("medical-education")!} />;
}
