import type { Metadata } from "next";
import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";

export const metadata: Metadata = {
  title: "Patient Support",
  description: "Practical patient and caregiver support pathways from Alvor Healthcare.",
};

export default function PatientSupportPage() {
  return <ResourceInformationPage page={getResourceInformationPage("patient-support")!} />;
}
