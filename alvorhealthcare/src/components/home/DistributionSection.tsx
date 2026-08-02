"use client";

import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  ClipboardCheck,
  MapPinned,
  PackageCheck,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";

const highlights = [
  {
    icon: PackageCheck,
    title: "Qualified Sourcing",
    description: "Products are sourced through approved pharmaceutical supply partners.",
  },
  {
    icon: ClipboardCheck,
    title: "Document Review",
    description: "Product, batch, and market documentation is checked before distribution.",
  },
  {
    icon: Warehouse,
    title: "Responsible Storage",
    description: "Medicines are handled according to their labelled storage requirements.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Coordinated inventory and logistics support dependable product availability.",
  },
];

const supplySteps = [
  { icon: Boxes, label: "Source" },
  { icon: ShieldCheck, label: "Verify" },
  { icon: Warehouse, label: "Store" },
  { icon: Truck, label: "Deliver" },
];

export function DistributionSection() {
  return (
    <section className="section" aria-labelledby="distribution-heading">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              Pharmaceutical Distribution
            </span>
            <h2 id="distribution-heading" className="display-md mt-2 mb-4 font-bold text-neutral-900 dark:text-white">
              From Trusted Supply Partners to Healthcare Providers
            </h2>
            <p className="mb-6 leading-relaxed text-neutral-500 dark:text-neutral-400">
              Alvor Healthcare focuses on the dependable distribution of medicines. We coordinate sourcing,
              documentation, storage, inventory, and delivery so healthcare organizations can access the products
              they need with clarity and confidence.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/30">
                    <highlight.icon className="h-4.5 w-4.5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">{highlight.title}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/compliance"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Explore Distribution Standards <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-primary-100 bg-gradient-to-br from-slate-50 via-primary-50 to-teal-50 p-6 dark:border-primary-800/30 dark:from-neutral-900 dark:via-primary-950/40 dark:to-teal-950/30 sm:p-8">
              <div className="pharma-grid absolute inset-0 opacity-35 dark:opacity-15" aria-hidden="true" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">Supply network</p>
                    <p className="mt-2 max-w-xs text-xl font-bold text-neutral-900 dark:text-white">A clear path from source to care</p>
                  </div>
                  <MapPinned className="h-10 w-10 text-teal-500" />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {supplySteps.map((step, index) => (
                    <div key={step.label} className="relative rounded-2xl border border-white/80 bg-white/75 p-4 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-neutral-900/70">
                      <step.icon className="mx-auto h-6 w-6 text-primary-600 dark:text-primary-400" />
                      <p className="mt-2 text-xs font-bold text-neutral-800 dark:text-neutral-100">{step.label}</p>
                      {index < supplySteps.length - 1 && (
                        <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-primary-300 sm:block" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Batch traceability", "Storage oversight", "Delivery coordination"].map((control) => (
                    <span key={control} className="rounded-full border border-primary-100 bg-white/70 px-3 py-1.5 text-xs font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-950/50 dark:text-primary-300">
                      {control}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
