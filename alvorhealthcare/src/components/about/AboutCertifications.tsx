"use client";

import { motion } from "framer-motion";
import { Award, Shield, Globe, CheckCircle, FileCheck, Calendar, Clock, Building2, FileText, BadgeCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { companyInfo } from "@/data";
import { format } from "date-fns";

const regulatoryBodies = [
  { name: "WHO", full: "World Health Organization", standard: "GMP Certification", status: "Certified", icon: Globe },
  { name: "FDA", full: "US Food & Drug Administration", standard: "Facility Registration", status: "Registered", icon: Shield },
  { name: "EMA", full: "European Medicines Agency", standard: "GMP Compliance", status: "Compliant", icon: Award },
  { name: "CDSCO", full: "Central Drugs Standard Control Organization", standard: "Manufacturing License", status: "Licensed", icon: Building2 },
  { name: "ANVISA", full: "Brazilian Health Regulatory Agency", standard: "GMP Certification", status: "Certified", icon: CheckCircle },
  { name: "SFDA", full: "Saudi Food & Drug Authority", standard: "Product Registration", status: "Registered", icon: FileText },
  { name: "TGA", full: "Therapeutic Goods Administration", standard: "GMP Clearance", status: "Cleared", icon: Globe },
  { name: "PMDA", full: "Pharmaceuticals and Medical Devices Agency", standard: "Foreign Manufacturer Accreditation", status: "Accredited", icon: Award },
];

const certifications = companyInfo.certifications;

export function AboutCertifications() {
  return (
    <section id="certifications" className="relative scroll-mt-32 overflow-hidden bg-[#f7fafc] py-20 dark:bg-[#09111d] sm:py-24 lg:py-32" aria-labelledby="certifications-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-800" aria-hidden="true" />
      <div className="container">
        <ScrollReveal>
          <div className="mb-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Verified globally</span>
              <h2 id="certifications-heading" className="mt-4 font-display text-[clamp(2.5rem,5vw,4.6rem)] font-bold leading-[0.96] tracking-[-0.055em] text-neutral-950 dark:text-white">
                Standards you can audit.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 lg:text-lg">
              Meeting the highest international standards across global regulatory bodies
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <StaggerItem key={cert.id} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="elevated" className="group relative h-full overflow-hidden rounded-[1.5rem] border-white/90 p-6 shadow-[0_22px_60px_-44px_rgba(30,64,175,0.7)] dark:border-white/10">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Badge variant="success" size="sm">Active</Badge>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
                      className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4"
                    >
                      <Award className="w-7 h-7" aria-hidden="true" />
                    </motion.div>
                    <CardTitle className="text-neutral-900 dark:text-white mb-2">{cert.name}</CardTitle>
                    <CardDescription className="mb-4">{cert.description}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Since {cert.yearObtained}</span>
                      </div>
                      {cert.validUntil && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>Valid {format(new Date(cert.validUntil), "MMM yyyy")}</span>
                        </div>
                      )}
                    </div>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <h3 className="mb-8 font-display text-2xl font-bold tracking-[-0.03em] text-neutral-950 dark:text-white sm:text-3xl">Global regulatory authorities</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regulatoryBodies.map((body, index) => (
            <StaggerItem key={body.name} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="h-full p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <body.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900 dark:text-white">{body.name}</div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{body.full}</div>
                        <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{body.standard}</div>
                        <Badge variant={body.status === "Certified" || body.status === "Licensed" ? "success" : body.status === "Registered" ? "primary" : "secondary"} size="sm" className="mt-2">
                          {body.status}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900 p-8 text-white lg:p-12">
            <h3 className="font-display text-3xl font-bold tracking-[-0.04em]">Compliance documentation</h3>
            <p className="mb-8 mt-4 max-w-2xl text-base leading-relaxed text-blue-100/70">
              All certifications and regulatory approvals are maintained current. Documentation available for qualified partners and regulatory authorities upon request.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: FileCheck, title: "GMP Certificates", desc: "WHO, FDA, EMA, National" },
                { icon: BadgeCheck, title: "Product Registrations", desc: "45+ Countries, 52+ Products" },
                { icon: FileText, title: "Regulatory Filings", desc: "DMF, ANDA, CTD Dossiers" },
              ].map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/8 p-5 text-left backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-300">
                    <doc.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-white">{doc.title}</h4>
                  <p className="mt-1 text-sm text-blue-100/65">{doc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
