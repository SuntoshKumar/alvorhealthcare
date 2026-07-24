import type { Metadata } from "next";
import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";

export const metadata: Metadata = {
  title: "Prescribing Information",
  description: "Request market-appropriate prescribing and professional product information from Alvor Healthcare.",
};

export default function PrescribingInfoPage() {
  return <ResourceInformationPage page={getResourceInformationPage("prescribing-info")!} />;
}
