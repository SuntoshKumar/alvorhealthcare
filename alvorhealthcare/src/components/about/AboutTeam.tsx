"use client";

import React from "react";
import { Award, FlaskConical, Building2, Users, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zm-.792 22.543H2.545V1.731h18.888v20.812z"/>
  </svg>
);

const leadershipTeam = [
  {
    id: "t1",
    name: "Dr. Sarah Mitchell",
    role: "Chief Executive Officer",
    bio: "Pharmaceutical industry veteran with 30+ years of experience leading global healthcare organizations. PhD in Pharmaceutics from University of London. Previously VP Global Operations at major pharma company.",
    image: "/images/team/sarah-mitchell.svg",
    linkedin: "https://linkedin.com/in/sarahmitchell",
    email: "sarah.mitchell@alvorhealthcare.com",
    expertise: ["Strategic Leadership", "Global Operations", "Business Development", "Regulatory Strategy"],
    education: "PhD Pharmaceutics, University of London",
    experience: "30+ years",
  },
  {
    id: "t2",
    name: "Dr. James Chen",
    role: "Chief Scientific Officer",
    bio: "Renowned pharmacologist with 50+ peer-reviewed publications and multiple patent holdings. PhD in Pharmacology from Stanford. Leading our R&D innovation pipeline across multiple therapeutic areas.",
    image: "/images/team/james-chen.svg",
    linkedin: "https://linkedin.com/in/jameschen",
    email: "james.chen@alvorhealthcare.com",
    expertise: ["Drug Discovery", "Clinical Development", "Pharmacology", "Intellectual Property"],
    education: "PhD Pharmacology, Stanford University",
    experience: "25+ years",
  },
  {
    id: "t3",
    name: "Maria Rodriguez",
    role: "Chief Operating Officer",
    bio: "Operations expert with extensive experience in global pharmaceutical manufacturing and supply chain management. MBA from Wharton. Six Sigma Black Belt. Previously Senior Director at major contract manufacturer.",
    image: "/images/team/maria-rodriguez.svg",
    linkedin: "https://linkedin.com/in/mariarodriguez",
    email: "maria.rodriguez@alvorhealthcare.com",
    expertise: ["Manufacturing Operations", "Supply Chain", "Quality Systems", "Lean Manufacturing"],
    education: "MBA, Wharton School",
    experience: "20+ years",
  },
  {
    id: "t4",
    name: "Dr. Robert Kim",
    role: "Chief Medical Officer",
    bio: "Board-certified physician leading clinical development and medical affairs strategy. MD from Johns Hopkins. Previously Medical Director at global CRO. Expert in clinical trial design and regulatory submissions.",
    image: "/images/team/robert-kim.svg",
    linkedin: "https://linkedin.com/in/robertkim",
    email: "robert.kim@alvorhealthcare.com",
    expertise: ["Clinical Development", "Medical Affairs", "Regulatory Strategy", "Patient Safety"],
    education: "MD, Johns Hopkins University",
    experience: "18+ years",
  },
];

const seniorLeadership = [
  {
    id: "s1",
    name: "Dr. Priya Sharma",
    role: "VP Quality Assurance",
    department: "Quality",
    image: "/images/team/priya-sharma.svg",
  },
  {
    id: "s2",
    name: "Michael Thompson",
    role: "VP Global Supply Chain",
    department: "Operations",
    image: "/images/team/michael-thompson.svg",
  },
  {
    id: "s3",
    name: "Dr. Ana Santos",
    role: "VP Regulatory Affairs",
    department: "Regulatory",
    image: "/images/team/ana-santos.svg",
  },
  {
    id: "s4",
    name: "David Park",
    role: "VP Commercial Operations",
    department: "Commercial",
    image: "/images/team/david-park.svg",
  },
  {
    id: "s5",
    name: "Dr. Lisa Wang",
    role: "VP Research & Development",
    department: "R&D",
    image: "/images/team/lisa-wang.svg",
  },
  {
    id: "s6",
    name: "James O'Connor",
    role: "VP Finance & Strategy",
    department: "Finance",
    image: "/images/team/james-oconnor.svg",
  },
];

const FileCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const departmentIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Quality: Award,
  Operations: Building2,
  Regulatory: FileCheckIcon,
  Commercial: Users,
  RD: FlaskConical,
  Finance: Briefcase,
};

const getDepartmentIcon = (department: string) => {
  const keyMap: Record<string, string> = {
    "R&D": "RD",
    "R and D": "RD",
  };
  return departmentIcons[keyMap[department] || department] || Building2;
};

export function AboutTeam() {
  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="team-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="team-heading" className="display-md lg:display-lg font-bold text-neutral-900 dark:text-white">
              Leadership Team
            </h2>
            <p className="body-lg text-neutral-600 dark:text-neutral-300 mt-4">
              Experienced professionals dedicated to pharmaceutical excellence and patient care
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="heading-lg font-bold text-neutral-900 dark:text-white text-center mb-12">Executive Leadership</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {leadershipTeam.map((member, index) => (
            <StaggerItem key={member.id} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="elevated" className="h-full overflow-hidden">
                    <div className="relative h-64 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20">
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <LinkedinIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        {member.expertise.slice(0, 3).map((exp) => (
                          <Badge key={exp} variant="primary" size="sm">{exp}</Badge>
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="text-neutral-900 dark:text-white">{member.name}</CardTitle>
                      <div className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">{member.role}</div>
                      <CardDescription className="line-clamp-3">{member.bio}</CardDescription>
                      <div className="mt-4 flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          {member.education.split(",")[0]}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {member.experience}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <h3 className="heading-lg font-bold text-neutral-900 dark:text-white text-center mb-12">Senior Leadership</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {seniorLeadership.map((member, index) => (
            <StaggerItem key={member.id} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                      {React.createElement(getDepartmentIcon(member.department), { className: "w-10 h-10 text-blue-600 dark:text-blue-400" })}
                    </div>
                    <CardTitle className="text-neutral-900 dark:text-white">{member.name}</CardTitle>
                    <div className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">{member.role}</div>
                    <Badge variant="outline" size="sm" className="mb-4">{member.department}</Badge>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Leading our {member.department.toLowerCase()} division with excellence and innovation.</p>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="display-sm font-bold mb-4">Join Our Team</h3>
            <p className="body-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for passionate professionals who share our commitment to healthcare excellence.
              Explore career opportunities across R&D, manufacturing, quality, regulatory, and commercial functions.
            </p>
            <Button size="lg" variant="secondary" rightIcon={<ArrowRight className="w-5 h-5" />}>
              View Career Opportunities
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
