"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Globe, FlaskConical, HeartPulse, Leaf, Building2, Users } from "lucide-react";
import { ScrollReveal } from "@/components/animations/Animations";
import { Card } from "@/components/ui/Card";
import { companyInfo } from "@/data";

const partners = [
  { id: "p1", name: "World Health Organization", category: "regulatory" },
  { id: "p2", name: "CVS Health", category: "pharmacy" },
  { id: "p3", name: "Walgreens Boots Alliance", category: "pharmacy" },
  { id: "p4", name: "McKesson Corporation", category: "distributor" },
  { id: "p5", name: "Cardinal Health", category: "distributor" },
  { id: "p6", name: "Mayo Clinic", category: "hospital" },
  { id: "p7", name: "Cleveland Clinic", category: "hospital" },
  { id: "p8", name: "NIH", category: "research" },
  { id: "p9", name: "FDA", category: "regulatory" },
  { id: "p10", name: "EMA", category: "regulatory" },
  { id: "p11", name: "AmerisourceBergen", category: "distributor" },
  { id: "p12", name: "Kaiser Permanente", category: "hospital" },
];

const trustBadges = [
  { icon: Award, label: `${companyInfo.experienceYears}+ Years`, description: "Pharmaceutical Excellence" },
  { icon: Shield, label: `${companyInfo.certifications.length} Global`, description: "Certifications" },
  { icon: Globe, label: `${companyInfo.countriesServed}+ Countries`, description: "Worldwide Presence" },
  { icon: FlaskConical, label: "120+ R&D", description: "Scientists" },
  { icon: HeartPulse, label: `${companyInfo.productsCount}+ Products`, description: "Therapeutic Areas" },
  { icon: Leaf, label: "3 Facilities", description: "GMP Certified" },
  { icon: Building2, label: "Zero Critical", description: "FDA Observations" },
  { icon: Users, label: "500+ Healthcare", description: "Professionals Trained" },
];

export function TrustedPartners() {
  return (
    <section className="section bg-neutral-900 text-white" aria-labelledby="trust-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="trust-heading" className="display-md lg:display-lg font-bold text-white">
              Trusted by Industry Leaders
            </h2>
            <p className="body-lg text-neutral-400 mt-4">
              Partnering with world-renowned healthcare institutions and distributors
            </p>
          </div>
        </ScrollReveal>

        <div className="overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-12 lg:gap-20 px-4">
            {partners.map((partner) => (
              <div key={partner.id} className="flex-shrink-0 w-40 lg:w-48 opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0">
                <a href={`https://${partner.name.toLowerCase().replace(/\s+/g, '')}.com`} target="_blank" rel="noopener noreferrer" className="block p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-full h-12 lg:h-16 flex items-center justify-center">
                    <div className="w-full h-full bg-neutral-800 rounded-lg flex items-center justify-center">
                      <span className="text-neutral-400 text-sm font-medium text-center px-2">{partner.name}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
            {partners.map((partner) => (
              <div key={`${partner.id}-dup`} className="flex-shrink-0 w-40 lg:w-48 opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0">
                <a href={`https://${partner.name.toLowerCase().replace(/\s+/g, '')}.com`} target="_blank" rel="noopener noreferrer" className="block p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-full h-12 lg:h-16 flex items-center justify-center">
                    <div className="w-full h-full bg-neutral-800 rounded-lg flex items-center justify-center">
                      <span className="text-neutral-400 text-sm font-medium text-center px-2">{partner.name}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {trustBadges.map((badge, index) => (
            <ScrollReveal key={badge.label} delay={index * 0.1}>
              <Card variant="outlined" className="bg-neutral-800/50 border-neutral-800 p-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
                  className="w-12 h-12 mx-auto mb-4 bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-400"
                >
                  <badge.icon className="w-6 h-6" aria-hidden="true" />
                </motion.div>
                <h3 className="font-semibold text-white mb-1">{badge.label}</h3>
                <p className="text-sm text-neutral-400">{badge.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
