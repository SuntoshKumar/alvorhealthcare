import type { Metadata } from "next";
import { NewsPageContent } from "./NewsPageContent";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Read Alvor Healthcare company announcements, product updates, quality milestones, and global healthcare news.",
};

export default function NewsPage() {
  return <NewsPageContent />;
}
