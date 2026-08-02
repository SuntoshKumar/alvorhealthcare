import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Distributors",
  description: "Partner with Alvor Healthcare as a distributor in Myanmar.",
  path: "/distributors",
});

export default function DistributorsPage() {
  redirect("/contact?inquiryType=partnership");
}
