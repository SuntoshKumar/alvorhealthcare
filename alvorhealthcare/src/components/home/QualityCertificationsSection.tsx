"use client";

import { Shield, Award, CheckCircle, FileCheck, ScrollText, Building } from "lucide-react";

const certs = [
  {
    icon: Shield,
    title: "WHO GMP Certified",
    description: "Good Manufacturing Practices compliance verified by World Health Organization standards.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Award,
    title: "ISO 9001:2024",
    description: "International quality management system certification for pharmaceutical manufacturing.",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    icon: FileCheck,
    title: "FDA Registered",
    description: "Registered with the U.S. Food and Drug Administration for product compliance.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: ScrollText,
    title: "EMA Compliant",
    description: "European Medicines Agency regulatory standards for EU market distribution.",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: Building,
    title: "ISO 14001:2024",
    description: "Environmental management system for sustainable pharmaceutical manufacturing.",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: CheckCircle,
    title: "ISO 45001:2024",
    description: "Occupational health and safety management for our workforce.",
    gradient: "from-rose-500 to-rose-600",
  },
];

export function QualityCertificationsSection() {
  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="quality-heading">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Certifications
          </span>
          <h2 id="quality-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
            Quality & Certifications
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Our commitment to quality is validated by the world&apos;s most respected pharmaceutical and healthcare regulatory bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="group p-6 lg:p-7 rounded-2xl bg-white dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-700/50 hover:border-neutral-200 dark:hover:border-neutral-600 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center mb-4 shadow-md`}>
                <cert.icon className="w-5.5 h-5.5 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-neutral-900 dark:text-white mb-2">{cert.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
