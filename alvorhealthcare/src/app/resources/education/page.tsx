import { Metadata } from "next";
import { ResourceDetailPage } from "@/components/resources/ResourceDetailPage";
import { getResourceCollection } from "@/data";

export const metadata: Metadata = {
  title: "Medical Education Resources",
  description: "Structured medical education and professional learning resources from Alvor Healthcare.",
};

export default function EducationPage() {
  return <ResourceDetailPage collection={getResourceCollection("education")!} />;
}
