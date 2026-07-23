"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, FlaskConical, Award, Globe, Users, Truck, CheckCircle, Target, Zap, Shield, Leaf, Microscope, Factory } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/Animations";
import { Timeline } from "@/components/ui/Timeline";

const milestones = [
  {
    year: "1998",
    title: "Company Founded",
    description: "Alvor Healthcare established as a regional pharmaceutical manufacturer with a vision to provide quality medicines.",
    icon: Building2,
    color: "bg-primary-500",
    side: "left" as const,
  },
  {
    year: "2002",
    title: "First GMP Certification",
    description: "Achieved first Good Manufacturing Practice certification, enabling export to regulated markets.",
    icon: Award,
    color: "bg-secondary-500",
    side: "right" as const,
  },
  {
    year: "2005",
    title: "WHO GMP Certified",
    description: "Received World Health Organization GMP certification, opening doors to 45+ international markets.",
    icon: Globe,
    color: "bg-primary-500",
    side: "left" as const,
  },
  {
    year: "2008",
    title: "R&D Center Established",
    description: "State-of-the-art research center launched with focus on novel drug delivery systems and generic development.",
    icon: FlaskConical,
    color: "bg-secondary-500",
    side: "right" as const,
  },
  {
    year: "2012",
    title: "FDA Facility Registration",
    description: "Manufacturing facilities registered with US FDA, meeting stringent American regulatory standards.",
    icon: Shield,
    color: "bg-primary-500",
    side: "left" as const,
  },
  {
    year: "2015",
    title: "EMA Compliance Achieved",
    description: "European Medicines Agency compliance obtained, enabling access to European Union markets.",
    icon: Award,
    color: "bg-secondary-500",
    side: "right" as const,
  },
  {
    year: "2018",
    title: "Sterile Injectable Facility",
    description: "New Class A/B cleanroom facility for sterile injectable production commissioned with latest technology.",
    icon: Factory,
    color: "bg-primary-500",
    side: "left" as const,
  },
  {
    year: "2020",
    title: "Green Manufacturing Award",
    description: "Recognized for sustainable pharmaceutical manufacturing practices and carbon footprint reduction.",
    icon: Leaf,
    color: "bg-secondary-500",
    side: "right" as const,
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Implemented AI-driven quality control, blockchain supply chain tracking, and digital twin manufacturing.",
    icon: Zap,
    color: "bg-primary-500",
    side: "left" as const,
  },
  {
    year: "2025",
    title: "50+ Products Portfolio",
    description: "Expanded portfolio to 52+ products across 6 categories, serving millions of patients globally.",
    icon: Target,
    color: "bg-secondary-500",
    side: "right" as const,
  },
];

export function AboutHistory() {
  return (
    <section className="section bg-neutral-50" aria-labelledby="history-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="history-heading" className="display-md lg:display-lg font-bold text-neutral-900">
              Our Journey of Excellence
            </h2>
            <p className="body-lg text-neutral-600 mt-4">
              26+ years of continuous growth, innovation, and commitment to healthcare
            </p>
          </div>
        </ScrollReveal>

        <Timeline items={milestones} lineColor="primary-400" />
      </div>
    </section>
  );
}