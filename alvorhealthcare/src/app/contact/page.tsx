import { Suspense } from "react";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactLocations } from "@/components/contact/ContactLocations";
import { ContactMap } from "@/components/contact/ContactMap";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { ContactPageQuery } from "./ContactPageQuery";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Alvor Healthcare in Yangon or Mandalay about products, distribution, partnerships, medical supplies, or general company enquiries.",
  path: "/contact",
  openGraphTitle: "Contact | Alvor Healthcare",
  openGraphDescription: "Get in touch with Alvor Healthcare for products, distribution, partnerships, or general enquiries in Myanmar.",
});

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <Suspense fallback={<div className="min-h-[48rem] bg-neutral-50 dark:bg-neutral-900/50" />}>
        <ContactPageQuery />
      </Suspense>
      <ContactLocations />
      <ContactMap />
      <ContactCTA />
    </div>
  );
}
