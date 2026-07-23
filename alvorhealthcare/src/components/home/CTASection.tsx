"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Shield, Globe, Award, Users, Truck, Leaf, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/Animations";
import { Floating } from "@/components/animations/Animations";

const trustBadges = [
  { icon: Award, label: "WHO GMP", desc: "Certified" },
  { icon: Shield, label: "ISO 9001", desc: "Compliant" },
  { icon: Globe, label: "FDA", desc: "Registered" },
  { icon: Users, label: "EMA", desc: "Compliant" },
  { icon: Truck, label: "Halal", desc: "Certified" },
  { icon: Leaf, label: "Green", desc: "Mfg." },
];

export function CTASection() {
  return (
    <section className="section bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-[url('/images/cta-pattern.svg')] bg-cover bg-center opacity-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-transparent" aria-hidden="true" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 id="cta-heading" className="display-md lg:display-lg font-bold mb-6">
              Ready to Partner with Alvor Healthcare?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="body-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Join 45+ countries trusting our pharmaceutical expertise. Let's discuss how we can support your healthcare needs.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" rightIcon={<ArrowRight className="w-5 h-5" />} className="w-full sm:w-auto">
                Contact Our Team
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10" rightIcon={<Download className="w-5 h-5" />}>
                Download Catalog
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              {trustBadges.map((badge, index) => (
                <Floating key={badge.label} amplitude={8} duration={6 + index}>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                    <badge.icon className="w-5 h-5" aria-hidden="true" />
                    <span className="text-sm font-medium">{badge.label}</span>
                  </div>
                </Floating>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}