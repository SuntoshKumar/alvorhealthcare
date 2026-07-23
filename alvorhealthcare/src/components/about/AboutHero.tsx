"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Globe, FlaskConical, Factory, HeartPulse, Leaf, Building2, Users, Truck, CheckCircle, Target, Lightbulb, Microscope, Globe as GlobeIcon, HandHeart } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/data";

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    description: companyInfo.mission,
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: companyInfo.vision,
    color: "secondary",
  },
  {
    icon: HandHeart,
    title: "Our Values",
    description: "Patient safety, Quality excellence, Innovation, Integrity, Sustainability, and Global accessibility guide every decision we make.",
    color: "primary",
  },
];

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50">
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-cover bg-center opacity-5" aria-hidden="true" />
      
      <div className="relative container px-6 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              26+ Years of Pharmaceutical Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="display-xl lg:display-2xl font-bold text-neutral-900 leading-tight mb-6"
          >
            Advancing Health Through{" "}
            <span className="gradient-text">Innovation & Quality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="body-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto mb-10"
          >
            Founded in {companyInfo.foundedYear}, Alvor Healthcare has grown from a regional pharmaceutical manufacturer 
            to a globally recognized leader in healthcare solutions. Our commitment to quality, innovation, and patient 
            care has earned the trust of healthcare professionals in {companyInfo.countriesServed}+ countries worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="w-full sm:w-auto">
              Our Story
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
              View Certifications
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Excellence", value: companyInfo.experienceYears, suffix: "+", icon: Award },
            { label: "Products", value: companyInfo.productsCount, suffix: "+", icon: FlaskConical },
            { label: "Countries", value: companyInfo.countriesServed, suffix: "+", icon: Globe },
            { label: "Certifications", value: companyInfo.certifications.length, suffix: "", icon: Shield },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-neutral-100">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                <stat.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-neutral-900">
                {stat.value}
                <span className="text-lg font-normal">{stat.suffix}</span>
              </div>
              <div className="text-sm text-neutral-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}