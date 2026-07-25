"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, FlaskConical, Building2, Users, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { publicAssetPath } from "@/lib/paths";

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
    image: "/images/team/sarah.png",
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
    image: "/images/team/james.png",
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
    image: "/images/team/mariaa.png",
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
    image: "/images/team/robert.png",
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
    image: "/images/team/mariaa.png",
  },
  {
    id: "s2",
    name: "Michael Thompson",
    role: "VP Global Supply Chain",
    department: "Operations",
    image: "/images/team/robert.png",
  },
  {
    id: "s3",
    name: "Dr. Ana Santos",
    role: "VP Regulatory Affairs",
    department: "Regulatory",
    image: "/images/team/james.png",
  },
  {
    id: "s4",
    name: "David Park",
    role: "VP Commercial Operations",
    department: "Commercial",
    image: "/images/team/robert.png",
  },
  {
    id: "s5",
    name: "Dr. Lisa Wang",
    role: "VP Research & Development",
    department: "R&D",
    image: "/images/team/mariaa.png",
  },
  {
    id: "s6",
    name: "James O'Connor",
    role: "VP Finance & Strategy",
    department: "Finance",
    image: "/images/team/james.png",
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
    <section id="leadership" className="relative scroll-mt-32 overflow-hidden bg-white py-20 dark:bg-neutral-950 sm:py-24 lg:py-32" aria-labelledby="team-heading">
      <div className="container">
        <ScrollReveal>
          <div className="mb-14 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">Leadership</span>
              <h2 id="team-heading" className="mt-4 font-display text-[clamp(2.6rem,5vw,4.7rem)] font-bold leading-[0.96] tracking-[-0.055em] text-neutral-950 dark:text-white">
                Expertise with accountability.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 lg:text-lg">
              Experienced professionals dedicated to pharmaceutical excellence and patient care
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="mb-8 font-display text-2xl font-bold tracking-[-0.03em] text-neutral-950 dark:text-white sm:text-3xl">Executive leadership</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {leadershipTeam.map((member, index) => (
            <StaggerItem key={member.id} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="elevated" className="group h-full overflow-hidden rounded-[1.6rem] border-neutral-200/80">
                    <div className="relative h-72 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20" >
                      <Image src={publicAssetPath(member.image || "/images/team/default-avatar.png")} alt="" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/10 to-transparent" />
                      <a href={member.linkedin} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-neutral-950/30 text-white backdrop-blur-xl transition-colors hover:bg-blue-600" aria-label={`${member.name} on LinkedIn`}>
                        <LinkedinIcon className="h-4 w-4" />
                      </a>
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
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
          <h3 className="mb-8 font-display text-2xl font-bold tracking-[-0.03em] text-neutral-950 dark:text-white sm:text-3xl">Senior leadership</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {seniorLeadership.map((member, index) => (
            <StaggerItem key={member.id} delay={index * 0.1}>
              <ScrollReveal>
                <HoverScale>
                  <Card variant="outlined" className="group p-6 text-left">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                        <Image src={publicAssetPath(member.image || "/images/team/default-avatar.png")} alt="" fill className="object-cover" sizes="64px" />
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        {React.createElement(getDepartmentIcon(member.department), { className: "w-5 h-5" })}
                      </div>
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
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 to-teal-700 p-8 text-white lg:p-12">
            <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/15" aria-hidden="true" />
            <h3 className="relative font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Build what healthcare needs next.</h3>
            <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-blue-100 lg:text-lg">
              We&apos;re always looking for passionate professionals who share our commitment to healthcare excellence.
              Explore career opportunities across R&D, manufacturing, quality, regulatory, and commercial functions.
            </p>
            <Link href="/careers" className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 transition-transform hover:-translate-y-0.5">
              View Career Opportunities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
