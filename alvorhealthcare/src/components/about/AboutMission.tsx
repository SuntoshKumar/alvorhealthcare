"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, HandHeart, Shield, Award, HeartPulse, Leaf, Globe, Users, Truck, FlaskConical, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To improve the quality of life for patients worldwide by developing, manufacturing, and delivering innovative, high-quality, and affordable pharmaceutical products that meet the highest standards of safety and efficacy.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "To be a globally recognized leader in the pharmaceutical industry, known for our unwavering commitment to quality, innovation, and patient-centric care.",
    color: "secondary",
  },
  {
    icon: HandHeart,
    title: "Our Values",
    description: "Patient safety, Quality excellence, Innovation, Integrity, Sustainability, and Global accessibility guide every decision we make.",
    color: "primary",
  },
];

const coreValues = [
  { icon: Shield, title: "Patient Safety First", description: "Every product undergoes rigorous testing to ensure maximum safety and efficacy for patients worldwide." },
  { icon: Award, title: "Quality Excellence", description: "WHO GMP certified facilities with zero critical FDA observations. Uncompromising quality standards." },
  { icon: Lightbulb, title: "Continuous Innovation", description: "120+ R&D scientists driving pharmaceutical innovation across multiple therapeutic areas." },
  { icon: HeartPulse, title: "Patient-Centric Care", description: "Affordable medications and patient support programs improving access to essential healthcare." },
  { icon: Globe, title: "Global Accessibility", description: "Serving 45+ countries with reliable supply chain and temperature-controlled logistics." },
  { icon: Leaf, title: "Sustainable Practices", description: "Green manufacturing with reduced carbon footprint and eco-friendly packaging initiatives." },
];

export function AboutMission() {
  return (
    <section className="section bg-white" aria-labelledby="mission-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="mission-heading" className="display-md lg:display-lg font-bold text-neutral-900">
              Mission, Vision & Values
            </h2>
            <p className="body-lg text-neutral-600 mt-4">
              Our founding principles that guide every decision and action
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {missionVision.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <HoverScale>
                <Card variant="elevated" className="h-full p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
                    className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6"
                  >
                    <item.icon className="w-7 h-7" aria-hidden="true" />
                  </motion.div>
                  <CardTitle className="text-neutral-900">{item.title}</CardTitle>
                  <CardDescription className="mt-3">{item.description}</CardDescription>
                </Card>
              </HoverScale>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h3 className="heading-lg font-bold text-neutral-900 text-center mb-12">Our Core Values</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <StaggerItem key={value.title} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="h-full p-6 lg:p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
                      className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center text-secondary-600 mb-4"
                    >
                      <value.icon className="w-6 h-6" aria-hidden="true" />
                    </motion.div>
                    <CardTitle className="text-neutral-900">{value.title}</CardTitle>
                    <CardDescription className="mt-2">{value.description}</CardDescription>
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