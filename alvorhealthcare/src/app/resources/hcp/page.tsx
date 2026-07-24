import { Metadata } from "next";
import { ResourceDetailPage } from "@/components/resources/ResourceDetailPage";
import { getResourceCollection } from "@/data";

export const metadata: Metadata = {
  title: "Healthcare Professional Resources",
  description: "Product information, clinical evidence, and medical education resources for healthcare professionals.",
};

export default function HCPPage() {
  return <ResourceDetailPage collection={getResourceCollection("hcp")!} />;
}
