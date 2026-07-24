import { Metadata } from "next";
import { PageStub } from "@/components/ui/PageStub";

export const metadata: Metadata = {
  title: "Patient Support | Alvor Healthcare",
  description: "Support programs and resources for patients.",
};

export default function PatientSupportPage() {
  return <PageStub title="Patient Support" description="Patient assistance programs, support resources, and medication adherence tools coming soon." />;
}
