"use client";

import Link from "next/link";
import {
  AlertCircle,
  Archive,
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  FileCheck,
  FileSearch,
  RotateCcw,
  Shield,
  ThermometerSnowflake,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";

const qualityControls = [
  {
    icon: BadgeCheck,
    title: "Supplier Qualification",
    description: "Supply relationships and available supporting documents are reviewed before portfolio onboarding.",
    badge: "Source",
  },
  {
    icon: FileSearch,
    title: "Document Review",
    description: "Product, batch, and market documents are coordinated according to the customer request.",
    badge: "Verify",
  },
  {
    icon: ClipboardList,
    title: "Batch Traceability",
    description: "Batch and shipment records support traceability across receiving, storage, and delivery.",
    badge: "Trace",
  },
  {
    icon: ThermometerSnowflake,
    title: "Storage Oversight",
    description: "Handling and transport are coordinated according to each product's labelled storage requirements.",
    badge: "Protect",
  },
  {
    icon: Archive,
    title: "Inventory Control",
    description: "Expiry review and stock rotation support responsible inventory management.",
    badge: "Monitor",
  },
  {
    icon: RotateCcw,
    title: "Recall Readiness",
    description: "Documented communication and reconciliation processes support supplier-initiated recalls.",
    badge: "Respond",
  },
];

const responseProcesses = [
  {
    icon: AlertCircle,
    title: "Quality complaints",
    description: "Product-quality concerns are documented and routed to the appropriate supplier and responsible team.",
  },
  {
    icon: Shield,
    title: "Safety information",
    description: "Adverse-event information is directed promptly to the appropriate safety reporting channel.",
  },
  {
    icon: FileCheck,
    title: "Documentation requests",
    description: "Customers can request available product, batch, or market-specific documentation.",
  },
];

export function AboutQuality() {
  return (
    <section id="quality" className="relative scroll-mt-32 overflow-hidden bg-[#f4f8ff] py-20 dark:bg-[#081321] sm:py-24 lg:py-32" aria-labelledby="quality-heading">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-800/10" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <div className="relative mb-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Distribution quality</span>
              <h2 id="quality-heading" className="mt-4 font-display text-[clamp(2.6rem,5vw,4.7rem)] font-bold leading-[0.96] tracking-[-0.055em] text-neutral-950 dark:text-white">
                Product stewardship at every handoff.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 lg:text-lg">
              We focus on the controls a distributor can own: supplier review, documentation, storage oversight, traceability, communication, and timely escalation.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {qualityControls.map((control, index) => (
            <StaggerItem key={control.title} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="h-full p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        <control.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <CardTitle className="text-neutral-900 dark:text-white">{control.title}</CardTitle>
                          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">{control.badge}</span>
                        </div>
                        <CardDescription>{control.description}</CardDescription>
                      </div>
                    </div>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <h3 className="mb-8 font-display text-2xl font-bold tracking-[-0.03em] text-neutral-950 dark:text-white sm:text-3xl">When support is needed</h3>
        </ScrollReveal>

        <StaggerContainer className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {responseProcesses.map((process, index) => (
            <StaggerItem key={process.title} delay={index * 0.1}>
              <Card variant="elevated" className="h-full p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <process.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="text-neutral-900 dark:text-white">{process.title}</CardTitle>
                <CardDescription className="mt-2">{process.description}</CardDescription>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-teal-700 p-8 text-white shadow-[0_32px_90px_-45px_rgba(30,64,175,0.9)] lg:p-12">
            <h3 className="relative font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Need product documentation?</h3>
            <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-blue-100 lg:text-lg">
              Tell us the product, destination market, organization, and document required. Our team will confirm what is available for that request.
            </p>
            <Link href="/contact?inquiryType=partnership&subject=Product%20documentation" className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 transition-transform hover:-translate-y-0.5">
              Request documentation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
