import { Metadata } from "next";
import { PageStub } from "@/components/ui/PageStub";

export const metadata: Metadata = {
  title: "Compliance | Alvor Healthcare",
  description: "Regulatory compliance and quality standards information.",
};

export default function CompliancePage() {
  return <PageStub title="Compliance" description="Information about our regulatory compliance, quality standards, and certifications coming soon." />;
}
