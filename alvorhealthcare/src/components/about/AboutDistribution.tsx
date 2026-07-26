"use client";

import Link from "next/link";
import {
  Archive,
  ArrowRight,
  Boxes,
  CheckCircle,
  ClipboardCheck,
  FileSearch,
  RotateCcw,
  Truck,
  Warehouse,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { companyInfo } from "@/data";

const distributionCapabilities = [
  {
    icon: Boxes,
    title: "Supplier Coordination",
    description: "We coordinate with pharmaceutical suppliers and brand partners to support portfolio availability.",
    features: ["Supplier review", "Product onboarding", "Availability planning"],
  },
  {
    icon: FileSearch,
    title: "Documentation Support",
    description: "Product, batch, and market documentation is organized for customer and regulatory enquiries.",
    features: ["Product documents", "Batch records", "Market requirements"],
  },
  {
    icon: Warehouse,
    title: "Storage Oversight",
    description: "Products are handled according to labelled storage conditions with expiry and stock-rotation controls.",
    features: ["Storage conditions", "Expiry monitoring", "Stock rotation"],
  },
  {
    icon: Truck,
    title: "Delivery Coordination",
    description: "Orders are planned and tracked from allocation through dispatch and customer receipt.",
    features: ["Order planning", "Shipment tracking", "Customer updates"],
  },
  {
    icon: ClipboardCheck,
    title: "Batch Traceability",
    description: "Batch and shipment records support accountable handling throughout the distribution journey.",
    features: ["Batch records", "Shipment history", "Customer traceability"],
  },
  {
    icon: RotateCcw,
    title: "Recall Coordination",
    description: "Documented communication paths support timely action when a supplier initiates a product recall.",
    features: ["Supplier alerts", "Customer notices", "Record reconciliation"],
  },
];

export function AboutDistribution() {
  return (
    <section id="distribution" className="relative scroll-mt-32 overflow-hidden bg-white py-20 dark:bg-neutral-950 sm:py-24 lg:py-32" aria-labelledby="distribution-heading">
      <div className="container">
        <ScrollReveal>
          <div className="mb-14 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">Distribution operations</span>
              <h2 id="distribution-heading" className="mt-4 font-display text-[clamp(2.6rem,5vw,4.7rem)] font-bold leading-[0.96] tracking-[-0.055em] text-neutral-950 dark:text-white">
                Dependable supply, handled responsibly.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 lg:text-lg">
              Our role is to connect qualified pharmaceutical supply with healthcare organizations through clear processes and responsive service.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {distributionCapabilities.map((capability, index) => (
            <StaggerItem key={capability.title} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="group h-full rounded-[1.5rem] border-neutral-200/80 p-6 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_28px_70px_-48px_rgba(30,64,175,0.75)] dark:border-neutral-800 lg:p-8">
                    <div className="flex gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        <capability.icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <div>
                        <CardTitle className="text-neutral-900 dark:text-white">{capability.title}</CardTitle>
                        <CardDescription className="mt-2">{capability.description}</CardDescription>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {capability.features.map((feature) => (
                            <span key={feature} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700/50 dark:bg-neutral-800/50 dark:text-neutral-300">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="rounded-[2rem] border border-neutral-200/80 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h3 className="display-sm mb-4 font-bold text-neutral-900 dark:text-white">Distribution capabilities</h3>
                <p className="body-md mb-6 text-neutral-600 dark:text-neutral-300">
                  Our operating model is designed around product stewardship, traceability, and practical support for healthcare customers.
                </p>
                <ul className="mb-7 space-y-3">
                  {companyInfo.distributionCapabilities.slice(0, 8).map((capability) => (
                    <li key={capability} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                      {capability}
                    </li>
                  ))}
                </ul>
                <Link href="/contact?inquiryType=partnership&subject=Distribution%20partnership" className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold text-neutral-800 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
                  Discuss distribution requirements
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Archive, title: "Inventory", description: "Expiry and stock rotation" },
                  { icon: ClipboardCheck, title: "Traceability", description: "Batch and shipment records" },
                  { icon: Warehouse, title: "Storage", description: "Labelled-condition oversight" },
                  { icon: Truck, title: "Delivery", description: "Order and shipment coordination" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-neutral-100 bg-white p-5 dark:border-neutral-700/50 dark:bg-neutral-800/30">
                    <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <p className="mt-4 font-bold text-neutral-900 dark:text-white">{item.title}</p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
