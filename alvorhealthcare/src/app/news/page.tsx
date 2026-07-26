import type { Metadata } from "next";
import { NewsPageContent } from "./NewsPageContent";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Read Alvor Healthcare company announcements, product updates, distribution news, and healthcare information from Myanmar.",
};

export default function NewsPage() {
  return <NewsPageContent />;
}
