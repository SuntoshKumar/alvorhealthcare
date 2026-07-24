import ContactPageContent from "./ContactPageContent";

const inquiryTypes = [
  "general",
  "product-inquiry",
  "partnership",
  "career",
  "complaint",
  "media",
] as const;

type InquiryType = (typeof inquiryTypes)[number];

interface ContactPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function isInquiryType(value: string | undefined): value is InquiryType {
  return inquiryTypes.some((type) => type === value);
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const requestedInquiryType = firstValue(params.inquiryType);
  const product = firstValue(params.product);
  const subject = firstValue(params.subject);

  const initialInquiryType = isInquiryType(requestedInquiryType)
    ? requestedInquiryType
    : "general";
  const initialSubject = product
    ? `Product inquiry: ${product}`
    : subject ?? "";

  return (
    <ContactPageContent
      initialInquiryType={initialInquiryType}
      initialSubject={initialSubject}
    />
  );
}
