"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Award, Microscope, ClipboardCheck, Database, Search, Layers, RotateCcw, FileCheck, Users, Globe, Target, Leaf, AlertCircle, BarChart3, Cpu, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

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
    <section className="section bg-neutral-50" aria-labelledby="quality-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="quality-heading" className="display-md lg:display-lg font-bold text-neutral-900">
              Quality Commitment
            </h2>
            <p className="body-lg text-neutral-600 mt-4">
              Uncompromising quality standards across every aspect of our pharmaceutical operations
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
                  className="text-center p-6 bg-white rounded-2xl border border-neutral-100"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                    <stat.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-neutral-900">{stat.value}</div>
                  <div className="text-sm font-medium text-neutral-900 mt-1">{stat.label}</div>
                  <div className="text-xs text-neutral-500">{stat.desc}</div>
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
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                        <system.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-neutral-900">{system.title}</CardTitle>
                          <span className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">{system.badge}</span>
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
          <h3 className="heading-xl font-bold text-neutral-900 text-center mb-12">Regulatory Compliance Framework</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {regulatoryCompliance.map((item, index) => (
            <StaggerItem key={item.title} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="elevated" className="p-6">
                    <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center text-secondary-600 mb-4">
                      <item.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                      <CardTitle className="text-neutral-900">{item.title}</CardTitle>
                      <span className="px-2 py-0.5 bg-secondary-50 text-secondary-700 rounded-full text-xs font-medium mt-1">{item.standard}</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <h3 className="heading-xl font-bold text-neutral-900 text-center mb-12">Analytical Testing Capabilities</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {analyticalCapabilities.map((cap, index) => (
            <StaggerItem key={cap.category} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="p-6">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                      <Microscope className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-neutral-900">{cap.category}</CardTitle>
                    <ul className="mt-4 space-y-2">
                      {cap.techniques.map((tech) => (
                        <li key={tech} className="flex items-center gap-2 text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-secondary-600 flex-shrink-0" />
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
          <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="display-sm font-bold mb-4">Quality Without Compromise</h3>
            <p className="body-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Every product that leaves our facilities undergoes comprehensive testing and quality review. 
              Our commitment to quality is not just a standard—it's our promise to patients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" rightIcon={<ArrowRight className="w-5 h-5" />}>
                View Quality Certificates
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Download Quality Manual
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}