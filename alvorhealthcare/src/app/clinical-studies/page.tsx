import type { Metadata } from "next";
import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";

export const metadata: Metadata = {
  title: "Clinical Information Requests",
  description: "Request available product-specific clinical study information through Alvor Healthcare.",
};

export default function ClinicalStudiesPage() {
  return <ResourceInformationPage page={getResourceInformationPage("clinical-studies")!} />;
}
