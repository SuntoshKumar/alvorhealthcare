"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { homeContent } from "@/data";

export function TestimonialsSection() {
  const content = homeContent.testimonials;
  const testimonials = content.items;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="container max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{content.eyebrow}</span>
          <h2 id="testimonials-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-3">
            {content.title}
          </h2>
        </div>

        <div className="relative bg-white dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-700/50 rounded-3xl p-8 lg:p-12 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 font-medium">
            &ldquo;{t.content}&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800/50 dark:to-blue-700/50 flex items-center justify-center">
              <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">{t.name.charAt(0)}</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-neutral-900 dark:text-white">{t.name}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{t.role}, {t.company}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-xl border border-neutral-200 dark:border-neutral-600 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-neutral-500" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-blue-600 w-6" : "bg-neutral-300 dark:bg-neutral-600"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-xl border border-neutral-200 dark:border-neutral-600 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
