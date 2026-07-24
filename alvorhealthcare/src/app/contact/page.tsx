import { Suspense } from "react";
import { ContactPageQuery } from "./ContactPageQuery";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-neutral-950" />}>
      <ContactPageQuery />
    </Suspense>
  );
}
