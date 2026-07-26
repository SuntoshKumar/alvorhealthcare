"use client";

import { Archive, BadgeCheck, ClipboardList, FileSearch, RotateCcw, ThermometerSnowflake } from "lucide-react";

const controls = [
  {
    icon: BadgeCheck,
    title: "Supplier Qualification",
    description: "Supply relationships are reviewed before products enter the distribution portfolio.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: FileSearch,
    title: "Product Documentation",
    description: "Available product and regulatory documents are checked for the intended market.",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    icon: ClipboardList,
    title: "Batch Traceability",
    description: "Batch and shipment records support accountable handling across the supply chain.",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    icon: ThermometerSnowflake,
    title: "Storage Requirements",
    description: "Storage and transport are coordinated according to each product's labelled conditions.",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: Archive,
    title: "Inventory Oversight",
    description: "Expiry, stock rotation, and availability are monitored to support responsible supply.",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: RotateCcw,
    title: "Recall Readiness",
    description: "Traceable records support timely action when a supply partner initiates a recall.",
    gradient: "from-rose-500 to-rose-600",
  },
];

export function DistributionQualitySection() {
  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="quality-heading">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Distribution Quality
          </span>
          <h2 id="quality-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
            Careful Handling at Every Step
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Our role is to protect product integrity through disciplined sourcing, documentation, storage, and delivery practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {controls.map((control) => (
            <div
              key={control.title}
              className="group p-6 lg:p-7 rounded-2xl bg-white dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-700/50 hover:border-neutral-200 dark:hover:border-neutral-600 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${control.gradient} flex items-center justify-center mb-4 shadow-md`}>
                <control.icon className="w-5.5 h-5.5 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-neutral-900 dark:text-white mb-2">{control.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{control.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
