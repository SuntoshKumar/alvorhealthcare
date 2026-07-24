"use client";

import Link from "next/link";
import { ArrowRight, Shield, Award, ChevronDown, Globe } from "lucide-react";
import { clsx } from "clsx";
import { companyInfo, homeContent } from "@/data";

function FloatingPill({ className, delay = "0s", duration = "6s" }: { className?: string; delay?: string; duration?: string }) {
  return (
    <div
      className={clsx("absolute animate-float", className)}
      style={{ animationDelay: delay, animationDuration: duration }}
    >
      <div className="w-16 h-8 lg:w-20 lg:h-10 rounded-full bg-gradient-to-r from-blue-400/30 to-blue-600/30 dark:from-blue-500/20 dark:to-blue-700/20 backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-lg" />
    </div>
  );
}

function FloatingCapsule({ className, delay = "0s", duration = "7s" }: { className?: string; delay?: string; duration?: string }) {
  return (
    <div
      className={clsx("absolute animate-float-slow", className)}
      style={{ animationDelay: delay, animationDuration: duration }}
    >
      <div className="w-10 h-20 lg:w-12 lg:h-24 rounded-full bg-gradient-to-b from-teal-400/30 to-emerald-600/30 dark:from-teal-500/20 dark:to-emerald-700/20 backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-lg" />
    </div>
  );
}

function FloatingMolecule({ className, delay = "0s" }: { className?: string; delay?: string }) {
  return (
    <div className={clsx("absolute animate-spin-slow", className)} style={{ animationDelay: delay }}>
      <svg width="60" height="60" viewBox="0 0 60 60" className="lg:w-[80px] lg:h-[80px]">
        <circle cx="30" cy="10" r="4" fill="rgba(59, 130, 246, 0.3)" />
        <circle cx="10" cy="45" r="4" fill="rgba(20, 184, 166, 0.3)" />
        <circle cx="50" cy="45" r="4" fill="rgba(59, 130, 246, 0.3)" />
        <line x1="30" y1="10" x2="10" y2="45" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1.5" />
        <line x1="30" y1="10" x2="50" y2="45" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1.5" />
        <line x1="10" y1="45" x2="50" y2="45" stroke="rgba(20, 184, 166, 0.15)" strokeWidth="1.5" />
        <circle cx="30" cy="10" r="2" fill="rgba(59, 130, 246, 0.5)" />
        <circle cx="10" cy="45" r="2" fill="rgba(20, 184, 166, 0.5)" />
        <circle cx="50" cy="45" r="2" fill="rgba(59, 130, 246, 0.5)" />
      </svg>
    </div>
  );
}

function FloatingParticle({ className, delay = "0s" }: { className?: string; delay?: string }) {
  return (
    <div
      className={clsx("absolute w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full animate-pulse-glow", className)}
      style={{ animationDelay: delay }}
    >
      <div className="w-full h-full rounded-full bg-blue-400/40 dark:bg-blue-500/30" />
    </div>
  );
}

export function HeroSection() {
  const hero = homeContent.hero;
  const trustIcons = [Shield, Award, Globe];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950" aria-labelledby="hero-heading">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-br from-blue-100/40 to-teal-100/20 dark:from-blue-900/20 dark:to-teal-900/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-tr from-blue-100/30 to-purple-100/20 dark:from-blue-900/15 dark:to-purple-900/10 blur-3xl" />
        <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-teal-100/20 dark:bg-teal-900/10 rounded-full blur-3xl animate-blob-delayed" />

        <FloatingPill className="top-[15%] right-[12%] lg:right-[18%]" delay="0s" />
        <FloatingCapsule className="top-[30%] right-[8%] lg:right-[12%]" delay="1s" duration="8s" />
        <FloatingPill className="top-[55%] right-[15%] lg:right-[20%]" delay="2s" duration="7s" />
        <FloatingCapsule className="top-[70%] right-[10%] lg:right-[15%]" delay="0.5s" duration="9s" />
        <FloatingPill className="top-[20%] right-[25%] lg:right-[30%]" delay="1.5s" duration="8s" />
        <FloatingMolecule className="top-[25%] right-[5%] lg:right-[8%]" delay="0s" />
        <FloatingMolecule className="top-[60%] right-[22%] lg:right-[28%]" delay="3s" />
        <FloatingMolecule className="top-[45%] right-[5%] lg:right-[8%]" delay="1.5s" />

        <FloatingParticle className="top-[10%] right-[30%]" delay="0s" />
        <FloatingParticle className="top-[40%] right-[25%]" delay="1s" />
        <FloatingParticle className="top-[75%] right-[20%]" delay="2s" />
        <FloatingParticle className="top-[20%] right-[35%]" delay="0.5s" />
        <FloatingParticle className="top-[50%] right-[30%]" delay="1.5s" />
        <FloatingParticle className="top-[80%] right-[35%]" delay="2.5s" />
        <FloatingParticle className="top-[15%] right-[15%]" delay="3s" />
        <FloatingParticle className="top-[65%] right-[5%]" delay="0.8s" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-300 mb-6 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              {hero.eyebrow} · {companyInfo.countriesServed}+ Countries
            </div>

            <h1 id="hero-heading" className="display-xl lg:display-2xl font-bold text-neutral-900 dark:text-white leading-[1.05] mb-5">
              {hero.titlePrefix}{" "}
              <span className="gradient-text">{hero.titleHighlight}</span>
              <br />
              {hero.titleSuffix}
            </h1>

            <p className="text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 max-w-lg">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm"
              >
                {hero.primaryCta.label}
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 font-semibold rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all hover:-translate-y-0.5 text-sm"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {hero.trustBadges.map((badge, index) => {
                const Icon = trustIcons[index] ?? Shield;
                return (
                  <div key={badge} className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">{badge}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-8 mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800">
              <div>
                <span className="display-sm font-bold text-neutral-900 dark:text-white">{companyInfo.experienceYears}+</span>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Years Experience</p>
              </div>
              <div>
                <span className="display-sm font-bold text-neutral-900 dark:text-white">{companyInfo.productsCount}+</span>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Products</p>
              </div>
              <div>
                <span className="display-sm font-bold text-neutral-900 dark:text-white">{companyInfo.countriesServed}+</span>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Countries</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative h-[500px] xl:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/50 to-teal-100/30 dark:from-blue-900/20 dark:to-teal-900/10 animate-pulse-glow" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 xl:w-32 xl:h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl shadow-blue-500/30 flex items-center justify-center">
                  <svg className="w-12 h-12 xl:w-16 xl:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                <FloatingPill className="!absolute top-[5%] left-[15%]" delay="0s" duration="6s" />
                <FloatingCapsule className="!absolute top-[18%] right-[10%]" delay="1s" duration="7s" />
                <FloatingPill className="!absolute bottom-[20%] left-[8%]" delay="2s" duration="8s" />
                <FloatingCapsule className="!absolute bottom-[8%] right-[15%]" delay="0.5s" duration="9s" />
                <FloatingMolecule className="!absolute top-[10%] right-[25%]" delay="0s" />
                <FloatingMolecule className="!absolute bottom-[25%] right-[5%]" delay="3s" />
                <FloatingMolecule className="!absolute top-[35%] left-[5%]" delay="1.5s" />

                <FloatingParticle className="!absolute top-[40%] left-[20%]" delay="0s" />
                <FloatingParticle className="!absolute top-[60%] right-[20%]" delay="1s" />
                <FloatingParticle className="!absolute bottom-[35%] left-[25%]" delay="2s" />
                <FloatingParticle className="!absolute top-[25%] left-[35%]" delay="0.5s" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-neutral-300 dark:text-neutral-600" />
      </div>
    </section>
  );
}
