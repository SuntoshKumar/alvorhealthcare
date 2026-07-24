import { Metadata } from "next";
import { PageStub } from "@/components/ui/PageStub";

export const metadata: Metadata = {
  title: "Clinical Studies | Alvor Healthcare",
  description: "Access our clinical research data and study results.",
};

export default function ClinicalStudiesPage() {
  return <PageStub title="Clinical Studies" description="Clinical trial data, research publications, and study results coming soon." />;
}
