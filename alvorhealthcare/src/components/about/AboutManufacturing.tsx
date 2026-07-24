"use client";

import Link from "next/link";
import { Factory, Shield, CheckCircle, Microscope, Database, RotateCcw, Leaf, Cpu, BarChart3 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { companyInfo } from "@/data";

const manufacturingCapabilities = [
  { icon: Factory, title: "Tablet Compression", description: "High-speed rotary tablet presses with single & multi-layer capability. Force feeders, weight control, and rejection systems.", features: ["Up to 1M tablets/hour", "Bilayer & trilayer", "In-process weight control"] },
  { icon: Shield, title: "Capsule Filling", description: "Automatic hard & soft gelatin capsule filling machines with precision dosing and capsule polishing.", features: ["Hard & soft gelatin", "Micro-dosing capability", "Capsule inspection"] },
  { icon: Microscope, title: "Liquid Manufacturing", description: "Vacuum-emulsifying mixers, homogenizers, and aseptic filling lines for syrups, suspensions, and solutions.", features: ["CIP/SIP systems", "Aseptic processing", "Viscosity control"] },
  { icon: Database, title: "Sterile Injectables", description: "Class A/B cleanrooms with isolator technology for ampoules, vials, and pre-filled syringes. Terminal sterilization & aseptic filling.", features: ["Grade A isolators", "Lyophilization", "100% visual inspection"] },
  { icon: RotateCcw, title: "Packaging Lines", description: "High-speed blister, strip, bottle, and sachet packaging with serialization and track & trace capability.", features: ["Blister & strip pack", "Bottle filling & capping", "Serialization ready"] },
  { icon: Leaf, title: "Nutraceuticals", description: "Dedicated supplement manufacturing for tablets, capsules, softgels, powders, and gummies with allergen control.", features: ["Allergen segregation", "Organic certified", "Custom formulations"] },
];

export function AboutManufacturing() {
  return (
    <section id="manufacturing" className="relative scroll-mt-32 overflow-hidden bg-white py-20 dark:bg-neutral-950 sm:py-24 lg:py-32" aria-labelledby="manufacturing-heading">
      <div className="container">
        <ScrollReveal>
          <div className="mb-14 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">Manufacturing platform</span>
              <h2 id="manufacturing-heading" className="mt-4 font-display text-[clamp(2.6rem,5vw,4.7rem)] font-bold leading-[0.96] tracking-[-0.055em] text-neutral-950 dark:text-white">
                Precision, built at scale.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 lg:text-lg">
              World-class facilities with advanced technology and stringent quality controls
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {manufacturingCapabilities.map((capability, index) => (
            <StaggerItem key={capability.title} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="group h-full rounded-[1.5rem] border-neutral-200/80 p-6 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_28px_70px_-48px_rgba(30,64,175,0.75)] dark:border-neutral-800 lg:p-8">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                        <capability.icon className="w-7 h-7" aria-hidden="true" />
                      </div>
                      <div>
                        <CardTitle className="text-neutral-900 dark:text-white">{capability.title}</CardTitle>
                        <CardDescription className="mt-2">{capability.description}</CardDescription>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {capability.features.map((feature) => (
                            <span key={feature} className="px-3 py-1 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700/50">
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

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Cpu, title: "Continuous Manufacturing", value: "Industry 4.0", desc: "PAT-enabled continuous processing with real-time release testing" },
              { icon: BarChart3, title: "Process Analytics", value: "Real-time", desc: "NIR, Raman, and FBRM for in-line quality monitoring" },
              { icon: Leaf, title: "Green Manufacturing", value: "Carbon Neutral", desc: "Solar power, water recycling, waste reduction programs" },
            ].map((item, index) => (
              <StaggerItem key={item.title} delay={index * 0.1}>
                <Card variant="elevated" className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <item.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-neutral-900 dark:text-white">{item.title}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 my-2">{item.value}</div>
                  <CardDescription>{item.desc}</CardDescription>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="rounded-[2rem] border border-neutral-200/80 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="display-sm font-bold text-neutral-900 dark:text-white mb-4">Facility Certifications & Compliance</h3>
                <p className="body-md text-neutral-600 dark:text-neutral-300 mb-6">
                  Our three manufacturing facilities maintain the highest regulatory standards with continuous compliance monitoring.
                </p>
                <ul className="space-y-3 mb-6">
                  {companyInfo.manufacturingCapabilities.slice(0, 8).map((cap, index) => (
                    <li key={index} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                      <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
                <Link href="/contact?inquiryType=partnership&subject=Facility%20information" className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold text-neutral-800 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
                  Request facility details
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Cleanroom Class", value: "A/B/C/D", desc: "ISO 5-8" },
                  { label: "Batch Capacity", value: "500K+", desc: "Units/Day" },
                  { label: "Automation", value: "Level 4", desc: "Industry 4.0" },
                  { label: "OEE", value: "92%+", desc: "Equipment Effectiveness" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-white dark:bg-neutral-800/30 rounded-xl border border-neutral-100 dark:border-neutral-700/50">
                    <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-500">{stat.desc}</div>
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
