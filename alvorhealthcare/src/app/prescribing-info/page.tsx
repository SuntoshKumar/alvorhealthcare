import { ResourceInformationPage } from "@/components/resources/ResourceInformationPage";
import { getResourceInformationPage } from "@/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Prescribing Information",
  description: "Request market-appropriate prescribing and professional product information from Alvor Healthcare.",
  path: "/prescribing-info",
});

export default function PrescribingInfoPage() {
  return <ResourceInformationPage page={getResourceInformationPage("prescribing-info")!} />;
}
