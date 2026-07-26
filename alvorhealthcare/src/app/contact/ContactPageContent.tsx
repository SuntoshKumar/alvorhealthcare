"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ChevronDown, Building2, ArrowRight, Navigation } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { toast } from "react-hot-toast";
import { companyInfo } from "@/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  inquiryType: z.enum(["general", "product-inquiry", "partnership", "career", "complaint", "media"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inquiryTypes = [
  { value: "general", label: "General Inquiry", description: "General questions about Alvor Healthcare" },
  { value: "product-inquiry", label: "Product Inquiry", description: "Questions about specific products or categories" },
  { value: "partnership", label: "Partnership & Distribution", description: "Business development and distribution partnerships" },
  { value: "career", label: "Career Opportunities", description: "Job applications and career inquiries" },
  { value: "complaint", label: "Quality Complaint", description: "Report product quality issues or adverse events" },
  { value: "media", label: "Media & Press", description: "Press inquiries and media relations" },
];

interface ContactPageContentProps {
  initialInquiryType?: ContactFormData["inquiryType"];
  initialSubject?: string;
}

export default function ContactPageContent({
  initialInquiryType = "general",
  initialSubject = "",
}: ContactPageContentProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: initialInquiryType,
      subject: initialSubject,
    },
  });

  const onSubmit = (data: ContactFormData) => {
    try {
      const inquiryLabel = inquiryTypes.find((type) => type.value === data.inquiryType)?.label ?? "Website inquiry";
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.phone ? `Phone: ${data.phone}` : "",
        data.company ? `Company: ${data.company}` : "",
        `Inquiry type: ${inquiryLabel}`,
        "",
        data.message,
      ].filter(Boolean).join("\n");
      const mailto = `mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;

      window.location.assign(mailto);
      setSubmitStatus("success");
      toast.success("Your email app should open with a prefilled message.");
    } catch {
      setSubmitStatus("error");
      toast.error("Unable to open your email app. Please contact us directly.");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Yangon Office",
      subtitle: "Main Headquarters",
      details: [
        companyInfo.contact.address,
        `${companyInfo.contact.city}, ${companyInfo.contact.country}`,
      ],
      action: "View Location",
      link: null,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      subtitle: "Talk to our team",
      details: companyInfo.contact.phones,
      action: "Call Now",
      link: `tel:${companyInfo.contact.phone.replace(/\D/g, "")}`,
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Business enquiries",
      details: [companyInfo.contact.email],
      action: "Send Email",
      link: `mailto:${companyInfo.contact.email}`,
      gradient: "from-teal-500 to-teal-600",
    },
  ];

  const faqs = [
    {
      q: "How can I become a distributor for Alvor Healthcare products?",
      a: `Send a partnership inquiry through this page or email ${companyInfo.contact.email} with your company profile, service area, and distribution capabilities.`,
    },
    {
      q: "Where can I find prescribing information for your products?",
      a: "Contact our team with the product name and the information you require. We will confirm which product information or manufacturer-provided documents are available.",
    },
    {
      q: "How do I report an adverse event or product quality complaint?",
      a: `Contact a healthcare professional for urgent medical concerns. Product quality or safety information can be sent to ${companyInfo.contact.email}; include the product name, batch number, contact details, and a clear description.`,
    },
    {
      q: "Where are your products available?",
      a: "Alvor Healthcare serves healthcare providers and organizations in Myanmar. Contact us with the product and location you need so our team can confirm current availability.",
    },
    {
      q: "What distribution support do you provide?",
      a: "We support qualified healthcare and distribution partners with product availability information, documentation coordination, order planning, storage requirements, shipment visibility, and market-specific enquiries.",
    },
    {
      q: "Can I request product and supplier documentation?",
      a: "Yes. Tell us the product, destination market, organization, and document required. Our team will review the request and confirm which product-specific or supplier-provided documents are available.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="bg-gradient-to-b from-blue-50 via-white to-teal-50 dark:from-blue-950/30 dark:via-neutral-950 dark:to-teal-950/30 py-16 lg:py-24" aria-labelledby="contact-heading">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 id="contact-heading" className="display-lg lg:display-xl font-bold text-neutral-900 dark:text-white">
                Get in Touch
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="body-lg text-neutral-600 dark:text-neutral-300 mt-4 max-w-2xl mx-auto">
                Contact our Myanmar team about products, distribution, partnerships, medical supplies, or general company enquiries.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="contact-info-heading">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-5 items-stretch">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 0.1} className="h-full">
                <StaggerItem delay={index * 0.1} className="h-full">
                  <HoverScale className="h-full">
                    <div className="pharma-card group relative flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-6 dark:border-neutral-700/50 dark:bg-neutral-800/30 lg:p-7">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-105`}>
                        <info.icon className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>

                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                        {info.subtitle}
                      </p>

                      <h3 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                        {info.title}
                      </h3>

                      <div className="flex-1 space-y-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {info.details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))}
                      </div>

                      {info.link && (
                        <a
                          href={info.link}
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 transition-colors hover:text-blue-700 dark:hover:text-blue-300"
                        >
                          {info.action}
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:group-hover:bg-blue-600">
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </a>
                      )}
                    </div>
                  </HoverScale>
                </StaggerItem>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="form-heading">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ScrollReveal>
                <h2 id="form-heading" className="display-md font-bold text-neutral-900 dark:text-white mb-4">
                  Send Us a Message
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="body-lg text-neutral-600 dark:text-neutral-300 mb-8">
                  Fill out the form below to open a pre-addressed email draft for the Alvor Healthcare team.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Full Name *"
                      placeholder="John Smith"
                      error={errors.name?.message}
                      {...register("name")}
                    />
                    <Input
                      label="Email Address *"
                      type="email"
                      placeholder="john@company.com"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Phone Number"
                      placeholder="09-XXXXXXXXX"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                    <Input
                      label="Company/Organization"
                      placeholder="Company Name"
                      error={errors.company?.message}
                      {...register("company")}
                    />
                  </div>

                  <Select
                    label="Inquiry Type *"
                    error={errors.inquiryType?.message}
                    options={inquiryTypes.map((t) => ({ value: t.value, label: t.label }))}
                    placeholder="Select inquiry type"
                    {...register("inquiryType")}
                  />

                  <Input
                    label="Subject *"
                    placeholder="Brief description of your inquiry"
                    error={errors.subject?.message}
                    {...register("subject")}
                  />

                  <Textarea
                    label="Message *"
                    placeholder="Please provide details about your inquiry..."
                    rows={6}
                    error={errors.message?.message}
                    {...register("message")}
                  />

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="w-5 h-5" />
                    Open Email App
                  </Button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-success-50 border border-success-200 rounded-xl flex items-center gap-3 text-success-800"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <p>Your email app has been opened with a draft. Review it and press Send to complete your inquiry.</p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-danger-50 border border-danger-200 rounded-xl flex items-center gap-3 text-danger-800"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p>Failed to send message. Please try again or contact us directly at {companyInfo.contact.email}.</p>
                    </motion.div>
                  )}
                </form>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal delay={0.3}>
                <h3 className="heading-lg font-bold text-neutral-900 dark:text-white mb-6">Frequently Asked Questions</h3>
              </ScrollReveal>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <ScrollReveal key={faq.q} delay={index * 0.05}>
                    <details className="group bg-white dark:bg-neutral-950 rounded-xl border border-neutral-100 dark:border-neutral-700/50 overflow-hidden">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <p className="font-medium text-neutral-900 dark:text-white pr-10">{faq.q}</p>
                        <ChevronDown className="w-5 h-5 text-neutral-400 dark:text-neutral-500 transition-transform group-open:rotate-180 flex-shrink-0" />
                      </summary>
                      <div className="px-5 pb-5 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="offices-heading">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="offices-heading" className="display-md font-bold text-neutral-900 dark:text-white">
                Our Locations
              </h2>
              <p className="body-lg text-neutral-600 dark:text-neutral-300 mt-4">
                Contact Alvor Healthcare in Yangon or Mandalay.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {companyInfo.contact.locations.map((office, index) => (
              <StaggerItem key={office.name} delay={index * 0.1} className="h-full">
                <ScrollReveal className="h-full">
                  <HoverScale className="h-full">
                    <Card variant="elevated" className="p-6 h-full flex flex-col">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                          <Building2 className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-white">{office.name}</h4>
                          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-1">{office.city}</p>
                          <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                            {office.address}, {office.region}, {office.country}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </HoverScale>
                </ScrollReveal>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="map-heading">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 id="map-heading" className="display-md font-bold text-neutral-900 dark:text-white">
                Find Us
              </h2>
              <p className="body-lg text-neutral-600 dark:text-neutral-300 mt-4">
                Find our primary Yangon office at SOHO Tower in Botahtaung Township.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden shadow-medium border border-neutral-100 dark:border-neutral-700/50">
              <iframe
                src={companyInfo.contact.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alvor Healthcare Yangon Office"
                className="w-full"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-soft flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">Yangon Office</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300">{companyInfo.contact.address}, {companyInfo.contact.city}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-blue-600 dark:bg-blue-700 text-white relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px] opacity-10" aria-hidden="true" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 id="cta-heading" className="display-md font-bold mb-6">
                Ready to Partner with Alvor Healthcare?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="body-lg text-blue-100 dark:text-blue-300 mb-8">
                Let&apos;s discuss how Alvor Healthcare can support your product, distribution, or healthcare supply needs in Myanmar.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#form-heading"
                  className="btn btn-lg btn-secondary"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${companyInfo.contact.email}?subject=${encodeURIComponent("Product catalog request")}`}
                  className="btn btn-lg btn-outline border-white/30 text-white hover:bg-white/10"
                >
                  Request Product Catalog
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
