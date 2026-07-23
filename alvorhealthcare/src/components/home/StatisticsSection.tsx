"use client";

import { motion } from "framer-motion";
import { Award, Package, Globe, Shield, Factory, Users, FlaskConical } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/Animations";

const statistics = [
  { label: "Years of Excellence", value: 26, suffix: "+", icon: Award, delay: 0 },
  { label: "Products Worldwide", value: 52, suffix: "+", icon: Package, delay: 0.1 },
  { label: "Countries Served", value: 45, suffix: "+", icon: Globe, delay: 0.2 },
  { label: "Certifications", value: 6, suffix: "", icon: Shield, delay: 0.3 },
  { label: "Mfg. Facilities", value: 3, suffix: "", icon: Factory, delay: 0.4 },
  { label: "R&D Scientists", value: 120, suffix: "+", icon: FlaskConical, delay: 0.5 },
];

export function StatisticsSection() {
  return (
    <section className="section bg-white" aria-labelledby="stats-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="stats-heading" className="display-md lg:display-lg font-bold text-neutral-900">
              Our Global Impact
            </h2>
            <p className="body-lg text-neutral-600 mt-4">
              Numbers that reflect our commitment to healthcare excellence worldwide
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
          {statistics.map((stat, index) => (
            <StaggerItem key={stat.label} delay={stat.delay || index * 0.1}>
              <ScrollReveal>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="text-center p-6 lg:p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: stat.delay || index * 0.1 }}
                    className="w-14 h-14 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600"
                  >
                    <stat.icon className="w-7 h-7" aria-hidden="true" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (stat.delay || index * 0.1) + 0.2, duration: 0.5 }}
                    className="text-3xl lg:text-4xl font-bold text-neutral-900"
                  >
                    {stat.value}
                    <span className="text-lg font-normal">{stat.suffix}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (stat.delay || index * 0.1) + 0.3, duration: 0.5 }}
                    className="text-sm text-neutral-600 mt-1 font-medium"
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}