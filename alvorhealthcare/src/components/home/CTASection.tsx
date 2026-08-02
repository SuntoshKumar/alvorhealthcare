"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/data";

export function CTASection() {
  const content = homeContent.cta;

  return (
    <section className="section relative overflow-hidden bg-primary-600 dark:bg-primary-800" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/60 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-400/20 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="cta-heading" className="display-md lg:display-lg font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-lg mx-auto">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-primary-50 transition-all hover:-translate-y-0.5 text-sm"
            >
              {content.primaryCta.label}
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5 text-sm"
            >
              {content.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
