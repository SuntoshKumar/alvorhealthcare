"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, MessageSquare, HelpCircle, User, Mail, Phone, Building2, FileText, MessageCircle } from "lucide-react";
import { toast } from "react-hot-toast";
import { contactContent, companyInfo } from "@/data";
import { AnimatedFaq } from "./AnimatedFaq";

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

interface ContactFormProps {
  initialInquiryType?: ContactFormData["inquiryType"];
  initialSubject?: string;
}

export function ContactForm({
  initialInquiryType = "general",
  initialSubject = "",
}: ContactFormProps) {
  const { form, faq } = contactContent;
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
      const inquiryLabel = form.inquiryTypes.find((t) => t.value === data.inquiryType)?.label ?? "Website inquiry";
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
      toast.success(form.successMessage);
    } catch {
      setSubmitStatus("error");
      toast.error(form.errorMessage);
    }
  };

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="form-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  Send a Message
                </span>
              </div>
              <h2 id="form-heading" className="display-md font-bold text-neutral-900 dark:text-white mb-3">
                {form.title}
              </h2>
              <p className="body-lg text-neutral-600 dark:text-neutral-300 mb-8">
                {form.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Name & Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      <User className="w-3.5 h-3.5 text-neutral-400" />
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:focus:ring-blue-500/30 ${errors.name ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "border-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-600"}`}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      <Mail className="w-3.5 h-3.5 text-neutral-400" />
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:focus:ring-blue-500/30 ${errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "border-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-600"}`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Company row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      <Phone className="w-3.5 h-3.5 text-neutral-400" />
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="09-XXXXXXXXX"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:hover:border-neutral-600 dark:focus:ring-blue-500/30"
                      {...register("phone")}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                      Company/Organization
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Company Name"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:hover:border-neutral-600 dark:focus:ring-blue-500/30"
                      {...register("company")}
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    <FileText className="w-3.5 h-3.5 text-neutral-400" />
                    Inquiry Type *
                  </label>
                  <div className="relative">
                    <select
                      id="inquiryType"
                      className={`w-full appearance-none rounded-xl border bg-white px-4 py-3 pr-10 text-sm text-neutral-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:ring-blue-500/30 ${errors.inquiryType ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "border-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-600"}`}
                      {...register("inquiryType")}
                    >
                      {form.inquiryTypes.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.inquiryType && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.inquiryType.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    <FileText className="w-3.5 h-3.5 text-neutral-400" />
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Brief description of your inquiry"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:focus:ring-blue-500/30 ${errors.subject ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "border-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-600"}`}
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-neutral-400" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Please provide details about your inquiry..."
                    className={`w-full resize-y rounded-xl border bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:focus:ring-blue-500/30 ${errors.message ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "border-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-600"}`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 dark:from-blue-500 dark:to-blue-600"
                  >
                    <Send className="w-4.5 h-4.5" />
                    {form.submitLabel}
                  </button>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 max-w-[200px]">
                    Opens your email app with a pre-filled draft
                  </p>
                </div>

                {/* Status messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{form.successMessage}</p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{form.errorMessage}</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* FAQ Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                  Common Questions
                </span>
              </div>
              <h3 className="heading-lg font-bold text-neutral-900 dark:text-white mb-2">
                {faq.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                Find quick answers to frequently asked questions.
              </p>
            </motion.div>

            <AnimatedFaq items={faq.items} />
          </div>
        </div>
      </div>
    </section>
  );
}
