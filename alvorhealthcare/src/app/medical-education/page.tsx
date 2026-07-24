import { Metadata } from "next";
import { PageStub } from "@/components/ui/PageStub";

export const metadata: Metadata = {
  title: "Medical Education | Alvor Healthcare",
  description: "Educational resources for healthcare professionals.",
};

export default function MedicalEducationPage() {
  return <PageStub title="Medical Education" description="Continuing medical education resources, webinars, and training programs coming soon." />;
}
