import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Patient Support",
  description: "Practical patient and caregiver support pathways from Alvor Healthcare.",
  path: "/patient-support",
});

export default function PatientSupportPage() {
  return <ResourceInformationPage page={getResourceInformationPage("patient-support")!} />;
}
