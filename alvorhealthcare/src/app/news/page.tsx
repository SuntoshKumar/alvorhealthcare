import { NewsPageContent } from "./NewsPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Newsroom",
  description:
    "Read Alvor Healthcare company announcements, product updates, distribution news, and healthcare information from Myanmar.",
  path: "/news",
});

export default function NewsPage() {
  return <NewsPageContent />;
}
