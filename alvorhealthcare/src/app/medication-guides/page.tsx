import { Metadata } from "next";
import { PageStub } from "@/components/ui/PageStub";

export const metadata: Metadata = {
  title: "Medication Guides | Alvor Healthcare",
  description: "Patient medication guides and safety information.",
};

export default function MedicationGuidesPage() {
  return <PageStub title="Medication Guides" description="Patient-friendly medication guides and safety information for our products coming soon." />;
}
