import { Metadata } from "next";
import { ResourceDetailPage } from "@/components/resources/ResourceDetailPage";
import { getResourceCollection } from "@/data";

export const metadata: Metadata = {
  title: "Patient & Caregiver Resources",
  description: "Plain-language medication guidance, support information, and helpful resources for patients and caregivers.",
};

export default function PatientsPage() {
  return <ResourceDetailPage collection={getResourceCollection("patients")!} />;
}
