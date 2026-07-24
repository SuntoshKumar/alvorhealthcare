"use client";

import { Factory, Shield, Cpu, Beaker, Package as PackageIcon, CheckCircle } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Factory,
    title: "WHO GMP Facilities",
    description: "State-of-the-art manufacturing facilities compliant with WHO Good Manufacturing Practices.",
  },
  {
    icon: Beaker,
    title: "Advanced R&D Center",
    description: "Dedicated research wing for formulation development and process optimization.",
  },
  {
    icon: Cpu,
    title: "Automated Production",
    description: "Fully automated production lines with real-time quality monitoring systems.",
  },
  {
    icon: Shield,
    title: "Quality Control Labs",
    description: "In-house QC laboratories equipped with HPLC, GC, UV spectrophotometers and more.",
  },
];

export function ManufacturingSection() {
  return (
    <section className="section" aria-labelledby="manufacturing-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Manufacturing
            </span>
            <h2 id="manufacturing-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
              World-Class Pharmaceutical Manufacturing
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
              Our manufacturing facilities adhere to the highest international standards, with WHO GMP certification 
              and ISO 9001:2024 quality management systems. From raw material sourcing to finished product dispatch, 
              every step is rigorously controlled.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <h.icon className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">{h.title}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/quality"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Explore Quality Standards <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-100 dark:border-blue-800/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Factory className="w-16 h-16 text-blue-300 dark:text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-400 dark:text-blue-500 text-sm font-medium">Manufacturing Facility</p>
                  <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {["WHO GMP", "ISO 9001", "FDA", "EMA"].map((cert) => (
                      <span key={cert} className="px-3 py-1.5 bg-white/60 dark:bg-white/10 rounded-lg text-xs font-semibold text-blue-700 dark:text-blue-300">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
