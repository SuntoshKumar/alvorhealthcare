"use client";

import { motion } from "framer-motion";
import { Factory, Shield, CheckCircle, Microscope, Database, RotateCcw, Layers, Zap, Leaf, Truck, Cpu, BarChart3, Search, FileCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/data";

const manufacturingCapabilities = [
  { icon: Factory, title: "Tablet Compression", description: "High-speed rotary tablet presses with single & multi-layer capability. Force feeders, weight control, and rejection systems.", features: ["Up to 1M tablets/hour", "Bilayer & trilayer", "In-process weight control"] },
  { icon: Shield, title: "Capsule Filling", description: "Automatic hard & soft gelatin capsule filling machines with precision dosing and capsule polishing.", features: ["Hard & soft gelatin", "Micro-dosing capability", "Capsule inspection"] },
  { icon: Microscope, title: "Liquid Manufacturing", description: "Vacuum-emulsifying mixers, homogenizers, and aseptic filling lines for syrups, suspensions, and solutions.", features: ["CIP/SIP systems", "Aseptic processing", "Viscosity control"] },
  { icon: Database, title: "Sterile Injectables", description: "Class A/B cleanrooms with isolator technology for ampoules, vials, and pre-filled syringes. Terminal sterilization & aseptic filling.", features: ["Grade A isolators", "Lyophilization", "100% visual inspection"] },
  { icon: RotateCcw, title: "Packaging Lines", description: "High-speed blister, strip, bottle, and sachet packaging with serialization and track & trace capability.", features: ["Blister & strip pack", "Bottle filling & capping", "Serialization ready"] },
  { icon: Leaf, title: "Nutraceuticals", description: "Dedicated supplement manufacturing for tablets, capsules, softgels, powders, and gummies with allergen control.", features: ["Allergen segregation", "Organic certified", "Custom formulations"] },
];

const qualitySystems = [
  { icon: CheckCircle, title: "Quality Assurance", description: "Comprehensive QA oversight including vendor qualification, change control, deviation management, CAPA, and annual product reviews.", badge: "ICH Q10" },
  { icon: Search, title: "Quality Control", description: "State-of-the-art analytical labs with HPLC, GC, UV-Vis, FTIR, DSC, Karl Fischer, and microbiology testing capabilities.", badge: "ISO 17025" },
  { icon: FileCheck, title: "Document Control", description: "Electronic document management system (eDMS) with 21 CFR Part 11 compliance, electronic signatures, and audit trails.", badge: "21 CFR Part 11" },
  { icon: RotateCcw, title: "Change Management", description: "Structured change control system with impact assessment, risk evaluation, regulatory filing strategy, and implementation tracking.", badge: "ICH Q9" },
  { icon: BarChart3, title: "Data Integrity", description: "ALCOA+ principles implemented across all systems. Audit trail reviews, access controls, and computerized system validation (CSV).", badge: "ALCOA+" },
  { icon: Layers, title: "Stability Programs", description: "ICH-compliant stability chambers (long-term, accelerated, intermediate, photostability). Real-time monitoring and trending.", badge: "ICH Q1A" },
];

export function AboutManufacturing() {
  return (
    <section className="section bg-white" aria-labelledby="manufacturing-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="manufacturing-heading" className="display-md lg:display-lg font-bold text-neutral-900">
              Manufacturing Excellence
            </h2>
            <p className="body-lg text-neutral-600 mt-4">
              World-class facilities with advanced technology and stringent quality controls
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {manufacturingCapabilities.map((capability, index) => (
            <StaggerItem key={capability.title} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="h-full p-6 lg:p-8">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                        <capability.icon className="w-7 h-7" aria-hidden="true" />
                      </div>
                      <div>
                        <CardTitle className="text-neutral-900">{capability.title}</CardTitle>
                        <CardDescription className="mt-2">{capability.description}</CardDescription>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {capability.features.map((feature) => (
                            <span key={feature} className="px-3 py-1 bg-neutral-50 text-neutral-700 rounded-full text-xs font-medium border border-neutral-200">
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
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                    <item.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-neutral-900">{item.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary-600 my-2">{item.value}</div>
                  <CardDescription>{item.desc}</CardDescription>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-neutral-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="display-sm font-bold text-neutral-900 mb-4">Facility Certifications & Compliance</h3>
                <p className="body-md text-neutral-600 mb-6">
                  Our three manufacturing facilities maintain the highest regulatory standards with continuous compliance monitoring.
                </p>
                <ul className="space-y-3 mb-6">
                  {companyInfo.manufacturingCapabilities.slice(0, 8).map((cap, index) => (
                    <li key={index} className="flex items-center gap-3 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="lg">View Facility Details</Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Cleanroom Class", value: "A/B/C/D", desc: "ISO 5-8" },
                  { label: "Batch Capacity", value: "500K+", desc: "Units/Day" },
                  { label: "Automation", value: "Level 4", desc: "Industry 4.0" },
                  { label: "OEE", value: "92%+", desc: "Equipment Effectiveness" },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center p-4 bg-white rounded-xl border border-neutral-100">
                    <div className="text-2xl lg:text-3xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                    <div className="text-xs text-neutral-500">{stat.desc}</div>
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