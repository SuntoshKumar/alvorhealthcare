"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Award, Microscope, Search, Layers, RotateCcw, FileCheck, Globe, Target, AlertCircle, BarChart3, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";

const qualitySystems = [
  { icon: CheckCircle, title: "Quality Assurance", description: "Comprehensive QA oversight including vendor qualification, change control, deviation management, CAPA, and annual product reviews.", badge: "ICH Q10" },
  { icon: Search, title: "Quality Control", description: "State-of-the-art analytical labs with HPLC, GC, UV-Vis, FTIR, DSC, Karl Fischer, and microbiology testing capabilities.", badge: "ISO 17025" },
  { icon: FileCheck, title: "Document Control", description: "Electronic document management system (eDMS) with 21 CFR Part 11 compliance, electronic signatures, and audit trails.", badge: "21 CFR Part 11" },
  { icon: RotateCcw, title: "Change Management", description: "Structured change control system with impact assessment, risk evaluation, regulatory filing strategy, and implementation tracking.", badge: "ICH Q9" },
  { icon: BarChart3, title: "Data Integrity", description: "ALCOA+ principles implemented across all systems. Audit trail reviews, access controls, and computerized system validation (CSV).", badge: "ALCOA+" },
  { icon: Layers, title: "Stability Programs", description: "ICH-compliant stability chambers (long-term, accelerated, intermediate, photostability). Real-time monitoring and trending.", badge: "ICH Q1A" },
];

const regulatoryCompliance = [
  { icon: Shield, title: "cGMP Compliance", description: "Full adherence to Current Good Manufacturing Practices per FDA 21 CFR 210/211, EU GMP, and WHO GMP guidelines.", standard: "21 CFR 210/211" },
  { icon: Award, title: "ICH Guidelines", description: "Implementation of ICH Q7, Q8, Q9, Q10, Q11, Q12 across development, manufacturing, and quality systems.", standard: "ICH Q7-Q12" },
  { icon: FileCheck, title: "Pharmacopoeia Standards", description: "All products meet USP, BP, EP, JP, and IP monograph standards. Regular pharmacopoeia compliance verification.", standard: "USP/BP/EP/JP/IP" },
  { icon: AlertCircle, title: "Pharmacovigilance", description: "Robust safety monitoring with adverse event reporting, periodic safety update reports (PSUR), and risk management plans.", standard: "GVP Modules" },
  { icon: Globe, title: "Regulatory Submissions", description: "Experienced regulatory affairs team managing DMF, ANDA, Dossier, and variation submissions across 45+ countries.", standard: "CTD Format" },
  { icon: Target, title: "Post-Market Surveillance", description: "Continuous product quality monitoring, complaint handling, recall procedures, and market surveillance programs.", standard: "ISO 9001" },
];

const analyticalCapabilities = [
  { category: "Chromatography", techniques: ["HPLC (12 systems)", "UPLC (4 systems)", "GC (6 systems)", "GC-MS (2 systems)", "LC-MS/MS (2 systems)", "Ion Chromatography"] },
  { category: "Spectroscopy", techniques: ["UV-Vis (8 systems)", "FTIR (4 systems)", "Fluorescence", "Atomic Absorption", "ICP-OES", "NMR (400 MHz)"] },
  { category: "Thermal Analysis", techniques: ["DSC (3 systems)", "TGA (2 systems)", "Hot Stage Microscopy", "Karl Fischer Titration (5 systems)", "Osmolality"] },
  { category: "Microbiology", techniques: ["Sterility Testing (ISO 5)", "Endotoxin (LAL)", "Bioburden", "Preservative Efficacy", "Microbial Identification (MALDI-TOF)", "Rapid Microbial Methods"] },
  { category: "Particle Analysis", techniques: ["Laser Diffraction", "Dynamic Light Scattering", "Microscopy (SEM/TEM)", "Flow Imaging", "Sieving"] },
  { category: "Dissolution & Physical", techniques: ["USP Apparatus 1/2/3/4 (24 vessels)", "Disintegration (6 stations)", "Friability (4 testers)", "Hardness (8 testers)", "Weight Variation (auto)"] },
];

export function AboutQuality() {
  return (
    <section id="quality" className="relative scroll-mt-32 overflow-hidden bg-[#f4f8ff] py-20 dark:bg-[#081321] sm:py-24 lg:py-32" aria-labelledby="quality-heading">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-800/10" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <div className="relative mb-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Quality architecture</span>
              <h2 id="quality-heading" className="mt-4 font-display text-[clamp(2.6rem,5vw,4.7rem)] font-bold leading-[0.96] tracking-[-0.055em] text-neutral-950 dark:text-white">
                Evidence at every stage.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 lg:text-lg">
              Uncompromising quality standards across every aspect of our pharmaceutical operations
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, value: "Zero", label: "Critical FDA 483s", desc: "Since 2012" },
            { icon: Shield, value: "100%", label: "Batch Release Rate", desc: "On-time delivery" },
            { icon: CheckCircle, value: "500+", label: "Analytical Methods", desc: "Validated" },
            { icon: Microscope, value: "ISO 17025", label: "Lab Accreditation", desc: "QC Laboratories" },
          ].map((stat, index) => (
            <StaggerItem key={stat.label} delay={index * 0.1}>
              <ScrollReveal>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-[1.4rem] border border-white/80 bg-white/82 p-6 text-left shadow-[0_20px_55px_-42px_rgba(30,64,175,0.7)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/65"
                >
                  <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <stat.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div className="font-display text-3xl font-bold tracking-[-0.04em] text-neutral-950 dark:text-white lg:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm font-bold text-neutral-900 dark:text-white">{stat.label}</div>
                  <div className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">{stat.desc}</div>
                </motion.div>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </div>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {qualitySystems.map((system, index) => (
            <StaggerItem key={system.title} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="h-full p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                        <system.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-neutral-900 dark:text-white">{system.title}</CardTitle>
                          <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">{system.badge}</span>
                        </div>
                        <CardDescription>{system.description}</CardDescription>
                      </div>
                    </div>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <h3 className="mb-10 font-display text-2xl font-bold tracking-[-0.03em] text-neutral-950 dark:text-white sm:text-3xl">Regulatory compliance framework</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {regulatoryCompliance.map((item, index) => (
            <StaggerItem key={item.title} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="elevated" className="p-6">
                    <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                      <item.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                      <CardTitle className="text-neutral-900 dark:text-white">{item.title}</CardTitle>
                      <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium mt-1">{item.standard}</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <h3 className="mb-10 font-display text-2xl font-bold tracking-[-0.03em] text-neutral-950 dark:text-white sm:text-3xl">Analytical testing capabilities</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {analyticalCapabilities.map((cap, index) => (
            <StaggerItem key={cap.category} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="p-6">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                      <Microscope className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-neutral-900 dark:text-white">{cap.category}</CardTitle>
                    <ul className="mt-4 space-y-2">
                      {cap.techniques.map((tech) => (
                        <li key={tech} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-teal-700 p-8 text-white shadow-[0_32px_90px_-45px_rgba(30,64,175,0.9)] lg:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/15" aria-hidden="true" />
            <h3 className="relative font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Quality without compromise</h3>
            <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-blue-100 lg:text-lg">
              Every product that leaves our facilities undergoes comprehensive testing and quality review. 
              Our commitment to quality is not just a standard&mdash;it&apos;s our promise to patients worldwide.
            </p>
            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#certifications" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 transition-transform hover:-translate-y-0.5">
                View Quality Certificates
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact?inquiryType=partnership&subject=Quality%20documentation" className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20">
                Request documentation
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
