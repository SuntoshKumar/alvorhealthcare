"use client";

import { motion } from "framer-motion";
import { Shield, FlaskConical, Truck, Leaf, Users, Award, Globe, HeartPulse } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";

const features = [
  {
    icon: Shield,
    title: "WHO GMP Certified",
    description: "All products manufactured in WHO GMP certified facilities ensuring international quality standards.",
  },
  {
    icon: FlaskConical,
    title: "Advanced R&D",
    description: "State-of-the-art research center with 120+ scientists driving pharmaceutical innovation.",
  },
  {
    icon: Truck,
    title: "Global Distribution",
    description: "Efficient supply chain serving 45+ countries with temperature-controlled logistics.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Green manufacturing with reduced carbon footprint and eco-friendly packaging.",
  },
  {
    icon: Users,
    title: "Patient Centric",
    description: "Focused on improving patient outcomes through affordable and accessible medications.",
  },
  {
    icon: Award,
    title: "Regulatory Excellence",
    description: "Compliance with FDA, EMA, WHO, and local regulatory requirements worldwide.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section bg-white" aria-labelledby="why-choose-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="why-choose-heading" className="display-md lg:display-lg font-bold text-neutral-900">
              Why Choose Alvor Healthcare
            </h2>
            <p className="body-lg text-neutral-600 mt-4">
              Our commitment to quality, innovation, and patient care sets us apart in the pharmaceutical industry
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <StaggerItem key={feature.title} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="h-full p-6 lg:p-8 group">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
                      className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"
                    >
                      <feature.icon className="w-7 h-7" aria-hidden="true" />
                    </motion.div>
                    <CardTitle className="text-neutral-900">{feature.title}</CardTitle>
                    <CardDescription className="mt-3">{feature.description}</CardDescription>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}