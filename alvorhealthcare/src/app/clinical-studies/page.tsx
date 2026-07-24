import type { Metadata } from "next";
import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";

export const metadata: Metadata = {
  title: "Clinical Studies",
  description: "Clinical research information and scientific enquiry pathways from Alvor Healthcare.",
};

export default function ClinicalStudiesPage() {
  return <ResourceInformationPage page={getResourceInformationPage("clinical-studies")!} />;
}
