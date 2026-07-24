import type { Metadata } from "next";
import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";

export const metadata: Metadata = {
  title: "Medication Guides",
  description: "Patient-focused medicine information and medication guide request pathways from Alvor Healthcare.",
};

export default function MedicationGuidesPage() {
  return <ResourceInformationPage page={getResourceInformationPage("medication-guides")!} />;
}
