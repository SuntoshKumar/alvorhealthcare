"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Globe, Users, ChevronDown, Building2, ArrowRight, Navigation } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardTitle } from "@/components/ui/Card";
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

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "general",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");

    if (params.get("inquiryType") === "product-inquiry") {
      setValue("inquiryType", "product-inquiry");
    }
    if (product) {
      setValue("subject", `Product inquiry: ${product}`);
    }
  }, [setValue]);

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
      title: "Corporate Headquarters",
      details: [
        companyInfo.contact.address,
        `${companyInfo.contact.city}, ${companyInfo.contact.state} ${companyInfo.contact.postalCode}`,
        companyInfo.contact.country,
      ],
      link: null,
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: [
        companyInfo.contact.phone,
        companyInfo.contact.workingHours,
        companyInfo.contact.whatsapp ? `WhatsApp: ${companyInfo.contact.whatsapp}` : null,
      ].filter(Boolean),
      link: `tel:${companyInfo.contact.phone.replace(/\D/g, "")}`,
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        companyInfo.contact.email,
        "partner@alvorhealthcare.com (Partnerships)",
        "careers@alvorhealthcare.com (Careers)",
        "safety@alvorhealthcare.com (Adverse Events)",
      ],
      link: `mailto:${companyInfo.contact.email}`,
    },
  ];

  const faqs = [
    {
      q: "How can I become a distributor for Alvor Healthcare products?",
      a: "We welcome qualified distributors globally. Please submit a partnership inquiry through our contact form or email partner@alvorhealthcare.com with your company profile, target markets, and distribution capabilities. Our business development team will review and respond within 5 business days.",
    },
    {
      q: "Where can I find prescribing information for your products?",
      a: "Prescribing information is available for healthcare professionals through our HCP portal. You can request access by contacting us with your medical license number and practice details. Product brochures are also available for download on individual product pages.",
    },
    {
      q: "How do I report an adverse event or product quality complaint?",
      a: "For adverse events, email safety@alvorhealthcare.com or call our 24/7 pharmacovigilance hotline. For quality complaints, use our contact form with 'Quality Complaint' selected. Include product name, batch number, and details. We investigate all reports within 24 hours.",
    },
    {
      q: "Are your products available in my country?",
      a: "Alvor Healthcare products are registered in 45+ countries. Availability varies by market due to local regulatory requirements. Contact us with your country and product of interest, and our team will provide specific availability and registration status information.",
    },
    {
      q: "Do you offer contract manufacturing services?",
      a: "Yes, we offer contract manufacturing for tablets, capsules, liquids, and sterile injectables. Our facilities are WHO GMP, FDA, and EMA compliant. Contact our business development team with your project requirements for a feasibility assessment and quotation.",
    },
    {
      q: "What certifications do your manufacturing facilities hold?",
      a: "Our facilities hold WHO GMP certification, ISO 9001:2015, FDA registration, EMA compliance, HALAL certification, and Green Manufacturing certification. We undergo regular audits and maintain zero critical observations from major regulatory authorities.",
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
                Have questions about our products, need partnership information, or want to join our team? 
                Our global team is ready to assist you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="contact-info-heading">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 0.1}>
                <StaggerItem delay={index * 0.1}>
                  <HoverScale>
                    <Card variant="elevated" className="h-full p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <info.icon className="w-8 h-8" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-neutral-900 dark:text-white">{info.title}</CardTitle>
                      <div className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-300">
                        {info.details.map((detail, i) => (
                          <div key={i} className="body-sm">
                            {info.link && detail === info.details[0] ? (
                              <a href={info.link} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </div>
                        ))}
                      </div>
                    </Card>
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
                  Fill out the form below and we&apos;ll route your inquiry to the appropriate team member.
                  We typically respond within 24 hours during business days.
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
                      placeholder="+1 (555) 123-4567"
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
                Global Offices & Partners
              </h2>
              <p className="body-lg text-neutral-600 dark:text-neutral-300 mt-4">
                Strategic locations worldwide to serve our global healthcare network
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "New York, USA", role: "Global Headquarters", icon: Building2, details: ["Corporate HQ", "R&D Center", "Regulatory Affairs"] },
              { city: "London, UK", role: "European Operations", icon: Globe, details: ["EMA Compliance", "EU Distribution", "Clinical Ops"] },
              { city: "Singapore", role: "Asia-Pacific Hub", icon: Users, details: ["APAC Sales", "Regulatory", "Supply Chain"] },
              { city: "Dubai, UAE", role: "MENA Regional Office", icon: MapPin, details: ["GCC Markets", "Regulatory", "Distribution"] },
            ].map((office, index) => (
              <StaggerItem key={office.city} delay={index * 0.1}>
                <ScrollReveal>
                  <HoverScale>
                    <Card variant="elevated" className="p-6 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                          <office.icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-white">{office.city}</h4>
                          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-1">{office.role}</p>
                          <ul className="mt-3 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                            {office.details.map((detail) => (
                              <li key={detail} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
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
                Visit our global headquarters. Schedule a meeting with our team.
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
                title="Alvor Healthcare Corporate Headquarters"
                className="w-full"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-soft flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">Corporate Headquarters</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300">{companyInfo.contact.address}, {companyInfo.contact.city}, {companyInfo.contact.state} {companyInfo.contact.postalCode}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-blue-600 dark:bg-blue-700 text-white relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-[url('/images/cta-pattern.svg')] bg-cover bg-center opacity-10" aria-hidden="true" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 id="cta-heading" className="display-md font-bold mb-6">
                Ready to Partner with Alvor Healthcare?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="body-lg text-blue-100 dark:text-blue-300 mb-8">
                Join 45+ countries trusting our pharmaceutical expertise. Let&apos;s discuss how we can support your healthcare needs.
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
