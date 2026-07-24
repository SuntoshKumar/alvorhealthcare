import { Metadata } from "next";
import { PageStub } from "@/components/ui/PageStub";

export const metadata: Metadata = {
  title: "Medical Education | Alvor Healthcare",
  description: "Continuing education resources for healthcare professionals.",
};

export default function EducationPage() {
  return <PageStub title="Medical Education" description="Webinars, training modules, and professional development resources coming soon." />;
}
