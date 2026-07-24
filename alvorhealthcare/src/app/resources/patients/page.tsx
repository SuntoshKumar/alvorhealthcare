import { Metadata } from "next";
import { PageStub } from "@/components/ui/PageStub";

export const metadata: Metadata = {
  title: "Patient Resources | Alvor Healthcare",
  description: "Resources and support information for patients and caregivers.",
};

export default function PatientsPage() {
  return <PageStub title="Patient Resources" description="Medication guides, support programs, and educational materials for patients and caregivers coming soon." />;
}
