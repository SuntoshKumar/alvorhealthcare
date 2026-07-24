import { Metadata } from "next";
import { PageStub } from "@/components/ui/PageStub";

export const metadata: Metadata = {
  title: "Clinical Studies | Alvor Healthcare",
  description: "Clinical research and study data from Alvor Healthcare.",
};

export default function ClinicalStudiesPage() {
  return <PageStub title="Clinical Studies" description="Access our clinical research publications and trial data coming soon." />;
}
