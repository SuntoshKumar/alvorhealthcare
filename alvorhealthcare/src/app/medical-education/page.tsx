import type { Metadata } from "next";
import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";

export const metadata: Metadata = {
  title: "Medical Education",
  description: "Professional medical education and learning information from Alvor Healthcare.",
};

export default function MedicalEducationPage() {
  return <ResourceInformationPage page={getResourceInformationPage("medical-education")!} />;
}
