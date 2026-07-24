"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, HandHeart, Shield, Award, HeartPulse, Leaf, Globe } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { aboutContent, companyInfo } from "@/data";

const missionIcons = {
  shield: Shield,
  award: Award,
  lightbulb: Lightbulb,
  heart: HeartPulse,
  globe: Globe,
  leaf: Leaf,
};

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
    description: aboutContent.mission.valuesSummary,
    color: "primary",
  },
];

export function AboutMission() {
  const content = aboutContent.mission;

  return (
    <section className="section bg-white dark:bg-neutral-950" aria-labelledby="mission-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="mission-heading" className="display-md lg:display-lg font-bold text-neutral-900 dark:text-white">
              {content.title}
            </h2>
            <p className="body-lg text-neutral-600 dark:text-neutral-300 mt-4">
              {content.description}
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
                    className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6"
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
          <h3 className="heading-lg font-bold text-neutral-900 dark:text-white text-center mb-12">{content.valuesTitle}</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.coreValues.map((value, index) => {
            const Icon = missionIcons[value.icon as keyof typeof missionIcons] ?? Shield;
            return (
              <StaggerItem key={value.title} delay={index * 0.1}>
                <ScrollReveal>
                  <HoverScale>
                    <Card variant="outlined" className="h-full p-6 lg:p-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
                        className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4"
                      >
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </motion.div>
                      <CardTitle className="text-neutral-900">{value.title}</CardTitle>
                      <CardDescription className="mt-2">{value.description}</CardDescription>
                    </Card>
                  </HoverScale>
                </ScrollReveal>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
