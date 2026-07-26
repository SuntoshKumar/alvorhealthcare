"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";

const inquiryTypes = [
  "general",
  "product-inquiry",
  "partnership",
  "career",
  "complaint",
  "media",
] as const;

type InquiryType = (typeof inquiryTypes)[number];

function isInquiryType(value: string | null): value is InquiryType {
  return inquiryTypes.some((type) => type === value);
}

export function ContactPageQuery() {
  const searchParams = useSearchParams();
  const requestedInquiryType = searchParams.get("inquiryType");
  const product = searchParams.get("product");
  const subject = searchParams.get("subject");

  return (
    <ContactForm
      initialInquiryType={
        isInquiryType(requestedInquiryType) ? requestedInquiryType : "general"
      }
      initialSubject={product ? `Product inquiry: ${product}` : subject ?? ""}
    />
  );
}
