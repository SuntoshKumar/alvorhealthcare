import { Metadata } from "next";
import { PageStub } from "@/components/ui/PageStub";

export const metadata: Metadata = {
  title: "Prescribing Information | Alvor Healthcare",
  description: "Detailed prescribing information for Alvor Healthcare products.",
};

export default function PrescribingInfoPage() {
  return <PageStub title="Prescribing Information" description="Comprehensive prescribing information, dosage guidelines, and safety data for our products coming soon." />;
}
