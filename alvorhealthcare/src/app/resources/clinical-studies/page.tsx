import { Metadata } from "next";
import { ResourceDetailPage } from "@/components/resources/ResourceDetailPage";
import { getResourceCollection } from "@/data";

export const metadata: Metadata = {
  title: "Clinical Information Resources",
  description: "Request available clinical study information and scientific documents for products distributed by Alvor Healthcare.",
};

export default function ClinicalStudiesPage() {
  return <ResourceDetailPage collection={getResourceCollection("clinical-studies")!} />;
}
