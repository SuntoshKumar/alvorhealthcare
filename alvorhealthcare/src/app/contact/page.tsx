import { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactLocations } from "@/components/contact/ContactLocations";
import { ContactMap } from "@/components/contact/ContactMap";
import { ContactCTA } from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact | Alvor Healthcare",
  description: "Contact Alvor Healthcare in Yangon or Mandalay about products, distribution, partnerships, medical supplies, or general company enquiries.",
  openGraph: {
    title: "Contact | Alvor Healthcare",
    description: "Get in touch with Alvor Healthcare for products, distribution, partnerships, or general enquiries in Myanmar.",
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactLocations />
      <ContactMap />
      <ContactCTA />
    </div>
  );
}
