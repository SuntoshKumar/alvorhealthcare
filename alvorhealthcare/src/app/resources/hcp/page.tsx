import { Metadata } from "next";
import { PageStub } from "@/components/ui/PageStub";

export const metadata: Metadata = {
  title: "Healthcare Professionals | Alvor Healthcare",
  description: "Resources and information for healthcare professionals.",
};

export default function HCPPage() {
  return <PageStub title="Healthcare Professionals" description="Prescribing information, clinical resources, and professional education materials coming soon." />;
}
