import { PageStub } from "@/components/ui/PageStub";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Distributors",
  description: "Partner with Alvor Healthcare as a distributor.",
  path: "/distributors",
});

export default function DistributorsPage() {
  return <PageStub title="Distributors" description="Information for current and prospective distribution partners coming soon." />;
}
