import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, Leaf, PackageCheck, Recycle, Route, Users } from "lucide-react";
import { HoverScale, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/Animations";
import { SustainabilityHero } from "@/components/sustainability/SustainabilityHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sustainability",
  description: "Our approach to responsible pharmaceutical distribution, logistics, packaging, and community access.",
  path: "/sustainability",
});

const initiatives = [
  {
    icon: Leaf,
    title: "Efficient Distribution",
    description: "We seek practical ways to consolidate shipments, reduce avoidable handling, and improve planning across our distribution network.",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    description: "We support responsible segregation, recycling, and disposal practices across offices, storage locations, and distribution activities.",
  },
  {
    icon: PackageCheck,
    title: "Packaging Stewardship",
    description: "We work with suppliers and logistics partners to reduce unnecessary packaging while protecting product integrity in transit.",
  },
  {
    icon: Users,
    title: "Community Health",
    description: "Access needs and responsible supply considerations guide conversations with healthcare and community partners.",
  },
  {
    icon: Route,
    title: "Smarter Logistics",
    description: "Route planning, shipment consolidation, and inventory visibility help reduce urgent or avoidable product movement.",
  },
  {
    icon: ClipboardCheck,
    title: "Responsible Partners",
    description: "Environmental and social considerations are included in supplier and logistics-partner conversations where relevant.",
  },
];

const priorities = [
  {
    number: "01",
    value: "Plan",
    label: "Efficient Routes",
    description: "Consolidate orders and delivery routes where practical.",
  },
  {
    number: "02",
    value: "Reduce",
    label: "Material Waste",
    description: "Review packaging, handling, and avoidable operational waste.",
  },
  {
    number: "03",
    value: "Track",
    label: "Product Movement",
    description: "Use inventory visibility to support better supply decisions.",
  },
  {
    number: "04",
    value: "Review",
    label: "Partner Practices",
    description: "Keep responsible operations part of supplier conversations.",
  },
];

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <SustainabilityHero />

      <section id="initiatives" className="scroll-mt-28 bg-white py-20 dark:bg-neutral-950 sm:py-24 lg:py-32" aria-labelledby="initiatives-heading">
        <div className="container">
          <ScrollReveal>
            <div className="mb-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Practical initiatives</span>
                <h2 id="initiatives-heading" className="mt-4 font-display text-[clamp(2.6rem,5vw,4.7rem)] font-bold leading-[0.96] tracking-[-0.055em] text-neutral-950 dark:text-white">
                  Responsibility across the distribution journey.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 lg:text-lg">
                Each initiative focuses on operational choices within our role, without overstating control over how pharmaceutical products are made.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <HoverScale className="h-full" scale={1.015}>
                  <article className="group relative h-full overflow-hidden rounded-[1.65rem] border border-neutral-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_28px_70px_-48px_rgba(5,150,105,0.8)] dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-emerald-800 dark:hover:bg-neutral-900 lg:p-8">
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-emerald-500 to-teal-400 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 dark:bg-emerald-900/35 dark:text-emerald-300">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-neutral-300 transition-colors group-hover:text-emerald-500 dark:text-neutral-700 dark:group-hover:text-emerald-400" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-neutral-950 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{item.description}</p>
                  </article>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative overflow-hidden bg-neutral-50 py-20 dark:bg-neutral-900/45 sm:py-24 lg:py-32" aria-labelledby="priorities-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_48%)] dark:bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_52%)]" aria-hidden="true" />
        <div className="container relative">
          <ScrollReveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Operating priorities</span>
              <h2 id="priorities-heading" className="mt-4 font-display text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.05em] text-neutral-950 dark:text-white">
                A repeatable cycle, not a distant promise.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
                We use practical operating verbs to keep sustainability connected to everyday distribution decisions.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {priorities.map((priority) => (
              <StaggerItem key={priority.label} className="h-full">
                <div className="group relative h-full rounded-[1.5rem] border border-neutral-200/80 bg-white p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_24px_60px_-48px_rgba(5,150,105,0.75)] dark:border-neutral-800 dark:bg-neutral-950/75 dark:hover:border-emerald-800">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-bold tracking-[0.18em] text-neutral-400 dark:text-neutral-600">{priority.number}</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-100 transition-transform duration-300 group-hover:scale-125 dark:ring-emerald-900/50" aria-hidden="true" />
                  </div>
                  <p className="mt-8 font-display text-3xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">{priority.value}</p>
                  <p className="mt-2 font-bold text-neutral-950 dark:text-white">{priority.label}</p>
                  <p className="mt-3 text-sm leading-6 text-neutral-500 dark:text-neutral-400">{priority.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-neutral-950 sm:py-24" aria-labelledby="sustainability-cta">
        <div className="container">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-neutral-950 px-6 py-12 text-white shadow-[0_35px_90px_-55px_rgba(5,150,105,0.8)] sm:px-10 lg:px-14 lg:py-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.28),transparent_42%)]" aria-hidden="true" />
              <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-emerald-400/20" aria-hidden="true" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Work with us</p>
                  <h2 id="sustainability-cta" className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                    Looking for a more thoughtful distribution partner?
                  </h2>
                  <p className="mt-4 leading-7 text-neutral-300">
                    Tell us about your market, product requirements, and logistics priorities. We will route the conversation to the appropriate team.
                  </p>
                </div>
                <Link
                  href="/contact?inquiryType=partnership&subject=Responsible%20distribution"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-bold text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-700"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
