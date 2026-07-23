"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Award, FlaskConical, Building2, HeartPulse, Users, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zm-.792 22.543H2.545V1.731h18.888v20.812z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24-1.926 1.799-10.784-10.91-1.987 1.731 10.95 10.548-8.317 9.12-2.83-2.684-7.043-8.25 8.192-9.275L22 1.55l-1.756 0.7z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.046V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.617-6.78-6.979-6.98-.1281-.058-1.69-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 7.649 0 12 0 12s0 4.351.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 16.351 24 12 24 12s0-4.351-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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

const FileCheck = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const departmentIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Quality: Award,
  Operations: Building2,
  Regulatory: FileCheck,
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
    <section className="section bg-neutral-50" aria-labelledby="team-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="team-heading" className="display-md lg:display-lg font-bold text-neutral-900">
              Leadership Team
            </h2>
            <p className="body-lg text-neutral-600 mt-4">
              Experienced professionals dedicated to pharmaceutical excellence and patient care
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="heading-lg font-bold text-neutral-900 text-center mb-12">Executive Leadership</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {leadershipTeam.map((member, index) => (
            <StaggerItem key={member.id} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="elevated" className="h-full overflow-hidden">
                    <div className="relative h-64 bg-gradient-to-br from-primary-100 to-secondary-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <LinkedinIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        {member.expertise.slice(0, 3).map((exp) => (
                          <Badge key={exp} variant="primary" size="sm" className="group-hover:bg-primary-700">
                            {exp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="text-neutral-900">{member.name}</CardTitle>
                      <div className="text-primary-600 font-medium text-sm mb-3">{member.role}</div>
                      <CardDescription className="line-clamp-3">{member.bio}</CardDescription>
                      <div className="mt-4 flex items-center gap-4 text-sm text-neutral-500">
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
          <h3 className="heading-lg font-bold text-neutral-900 text-center mb-12">Senior Leadership</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {seniorLeadership.map((member, index) => (
            <StaggerItem key={member.id} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                      {React.createElement(getDepartmentIcon(member.department), { className: "w-10 h-10 text-primary-600" })}
                    </div>
                    <CardTitle className="text-neutral-900">{member.name}</CardTitle>
                    <div className="text-primary-600 font-medium text-sm mb-2">{member.role}</div>
                    <Badge variant="outline" size="sm" className="mb-4">{member.department}</Badge>
                    <p className="text-sm text-neutral-600">Leading our {member.department.toLowerCase()} division with excellence and innovation.</p>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="display-sm font-bold mb-4">Join Our Team</h3>
            <p className="body-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate professionals who share our commitment to healthcare excellence. 
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