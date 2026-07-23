"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Award, Globe, Users, FlaskConical, Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/Animations";
import { Floating } from "@/components/animations/Animations";

const scrollVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const } },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -90 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
};

const features = [
  {
    icon: Shield,
    title: "WHO GMP Certified",
    description: "All products manufactured in WHO GMP certified facilities ensuring international quality standards.",
    color: "primary",
  },
  {
    icon: FlaskConical,
    title: "Advanced R&D",
    description: "State-of-the-art research center with 120+ scientists driving pharmaceutical innovation.",
    color: "secondary",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description: "Efficient supply chain serving 45+ countries with temperature-controlled logistics.",
    color: "primary",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Green manufacturing with reduced carbon footprint and eco-friendly packaging.",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Patient Centric",
    description: "Focused on improving patient outcomes through affordable and accessible medications.",
    color: "primary",
  },
  {
    icon: Award,
    title: "Regulatory Excellence",
    description: "Compliance with FDA, EMA, WHO, and local regulatory requirements worldwide.",
    color: "secondary",
  },
];

const statistics = [
  { label: "Years of Excellence", value: 26, suffix: "+", icon: Award, delay: 0 },
  { label: "Products Worldwide", value: 52, suffix: "+", icon: FlaskConical, delay: 0.1 },
  { label: "Countries Served", value: 45, suffix: "+", icon: Globe, delay: 0.2 },
  { label: "Certifications", value: 6, suffix: "", icon: Shield, delay: 0.3 },
  { label: "Mfg. Facilities", value: 3, suffix: "", icon: Factory, delay: 0.4 },
  { label: "R&D Scientists", value: 120, suffix: "+", icon: Users, delay: 0.5 },
];

function Factory({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14v1a2 2 0 01-2 2H7a2 2 0 01-2-2v-1m14 0l-3-3m0 0l-3 3m3-3v10" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 11V5a2 2 0 012-2h2a2 2 0 012 2v6" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50">
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-cover bg-center opacity-5" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-secondary-500/10" aria-hidden="true" />
      
      <div className="relative container px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scrollVariants}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              Trusted by Healthcare Professionals in 45+ Countries
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="display-xl lg:display-2xl font-bold text-neutral-900 leading-tight mb-6"
            >
              Advancing Health Through{" "}
              <span className="gradient-text">Innovation & Quality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="body-lg lg:text-xl text-neutral-600 max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Alvor Healthcare is a globally recognized pharmaceutical company dedicated to improving patient 
              outcomes through innovative, high-quality, and affordable medicines. 26+ years of excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="w-full sm:w-auto">
                Explore Products
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-neutral-600"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-600" aria-hidden="true" />
                <span className="font-medium text-neutral-900">WHO GMP Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary-600" aria-hidden="true" />
                <span className="font-medium text-neutral-900">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary-600" aria-hidden="true" />
                <span className="font-medium text-neutral-900">FDA Registered</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={scrollVariants}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <Floating amplitude={12} duration={7}>
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl blur-3xl scale-110" />
                  <Image
                    src="/images/hero-illustration.svg"
                    alt="Alvor Healthcare - Pharmaceutical Excellence"
                    width={500}
                    height={500}
                    className="relative z-10 w-full h-auto"
                    priority
                  />
                </div>
              </Floating>

              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-2xl shadow-large p-4 flex flex-col items-center border border-neutral-100 animate-float">
                <Shield className="w-8 h-8 text-primary-600" aria-hidden="true" />
                <span className="text-xs font-semibold text-neutral-900 text-center leading-tight">Quality Assured</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-large p-4 flex flex-col items-center border border-neutral-100 animate-float" style={{ animationDelay: '2s' }}>
                <Globe className="w-8 h-8 text-secondary-600" aria-hidden="true" />
                <span className="text-xs font-semibold text-neutral-900 text-center leading-tight">Global Reach</span>
              </div>
              <div className="absolute top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-large p-4 flex flex-col items-center border border-neutral-100 animate-float" style={{ animationDelay: '4s' }}>
                <Award className="w-8 h-8 text-warning-500" aria-hidden="true" />
                <span className="text-xs font-semibold text-neutral-900 text-center leading-tight">Certified</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-8"
            >
              <Link href="/about" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="hidden lg:flex items-center gap-4 text-neutral-500">
                <div className="w-px h-8 bg-neutral-200" />
                <span className="text-sm">Scroll to explore</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}