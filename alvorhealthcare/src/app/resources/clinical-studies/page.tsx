import { Metadata } from "next";
import { ResourceDetailPage } from "@/components/resources/ResourceDetailPage";
import { getResourceCollection } from "@/data";

export const metadata: Metadata = {
  title: "Clinical Research Resources",
  description: "Explore Alvor Healthcare clinical research, evidence, responsible study conduct, and scientific collaboration.",
};

export default function ClinicalStudiesPage() {
  return <ResourceDetailPage collection={getResourceCollection("clinical-studies")!} />;
}
