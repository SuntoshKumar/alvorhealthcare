import type { Metadata } from "next";
import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description: "Quality systems, regulatory responsibility, and compliance information from Alvor Healthcare.",
};

export default function CompliancePage() {
  return <ResourceInformationPage page={getResourceInformationPage("compliance")!} />;
}
