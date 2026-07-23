"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const testimonials = [
  {
    id: "test1",
    name: "Dr. Emily Watson",
    role: "Chief of Pharmacy",
    company: "Metropolitan Hospital",
    content: "Alvor Healthcare's products consistently meet our stringent quality standards. Their reliable supply chain and comprehensive documentation make them a preferred partner for our hospital system.",
    rating: 5,
  },
  {
    id: "test2",
    name: "James Patterson",
    role: "Procurement Director",
    company: "National Pharmacy Chain",
    content: "We've partnered with Alvor for over a decade. Their commitment to quality, competitive pricing, and exceptional customer service sets them apart in the industry. Highly recommended.",
    rating: 5,
  },
  {
    id: "test3",
    name: "Dr. Michael Torres",
    role: "Medical Director",
    company: "Regional Health System",
    content: "The therapeutic efficacy of Alvor's products is evident in our patient outcomes. Their portfolio breadth allows us to consolidate vendors without compromising quality.",
    rating: 5,
  },
  {
    id: "test4",
    name: "Sarah Chen",
    role: "Pharmacy Manager",
    company: "Community Health Centers",
    content: "Alvor's patient support programs and medication adherence tools have significantly improved outcomes in our underserved populations. A true partner in community health.",
    rating: 5,
  },
  {
    id: "test5",
    name: "Dr. Robert Kim",
    role: "Clinical Pharmacist",
    company: "University Medical Center",
    content: "The quality and consistency of Alvor's generic formulations are exceptional. We've seen equivalent clinical outcomes with significant cost savings for our institution.",
    rating: 5,
  },
  {
    id: "test6",
    name: "Lisa Rodriguez",
    role: "Supply Chain Director",
    company: "Global Distributors Inc.",
    content: "Alvor's logistics and cold chain management are best-in-class. On-time delivery rates exceed 99%, and their temperature monitoring gives us complete confidence.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerView = 3;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - itemsPerView + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - itemsPerView + 1)) % (testimonials.length - itemsPerView + 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="section bg-white" aria-labelledby="testimonials-heading">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="testimonials-heading" className="display-md lg:display-lg font-bold text-neutral-900">
              Trusted by Healthcare Professionals
            </h2>
            <p className="body-lg text-neutral-600 mt-4">
              Hear from our partners who rely on Alvor Healthcare for quality pharmaceutical solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 0.1}>
                <HoverScale>
                  <Card variant="elevated" className="h-full p-8">
                    <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-warning-400 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Quote className="w-8 h-8 text-primary-200 mb-4" aria-hidden="true" />
                      <p className="body-md text-neutral-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                    </motion.div>
                    <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                        <div className="text-sm text-neutral-600">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>

          {testimonials.length > 3 && (
            <div className="flex justify-center gap-4 mt-10">
              <Button
                variant="ghost"
                size="sm"
                onClick={prev}
                disabled={currentIndex === 0}
                className="disabled:opacity-50"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
                {Array.from({ length: testimonials.length - 2 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentIndex
                        ? "bg-primary-600 w-8"
                        : "bg-neutral-300 hover:bg-neutral-400"
                    }`}
                    role="tab"
                    aria-selected={i === currentIndex}
                    aria-label={`Go to testimonial set ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={next}
                disabled={currentIndex === testimonials.length - 3}
                className="disabled:opacity-50"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}