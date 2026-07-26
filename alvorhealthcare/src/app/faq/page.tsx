import { FAQPageContent } from "./FAQPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Frequently Asked Questions",
  description: "Find answers about Alvor Healthcare products, distribution services, enquiries, and company information.",
  path: "/faq",
});

export default function FAQPage() {
  return <FAQPageContent />;
}
