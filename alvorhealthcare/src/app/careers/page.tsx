import { Metadata } from "next";
import { Briefcase, GraduationCap, HeartPulse, Globe, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Alvor Healthcare",
  description: "Explore careers in pharmaceutical distribution, quality, regulatory support, supply operations, and commercial functions at Alvor Healthcare.",
};

const benefits = [
  { icon: HeartPulse, title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { icon: GraduationCap, title: "Learning & Development", description: "Continuous learning opportunities, tuition reimbursement, and professional development programs." },
  { icon: Globe, title: "Global Opportunities", description: "Work across our global operations with opportunities for international assignments." },
  { icon: TrendingUp, title: "Career Growth", description: "Clear career progression paths, mentorship programs, and leadership development." },
  { icon: Users, title: "Inclusive Culture", description: "Diverse and inclusive workplace where every voice is valued and respected." },
  { icon: Briefcase, title: "Work-Life Balance", description: "Flexible working arrangements, generous paid time off, and family leave policies." },
];

const departments = [
  { name: "Supply Operations", description: "Coordinate inventory, storage requirements, orders, and reliable product movement." },
  { name: "Quality & Compliance", description: "Support supplier qualification, documentation, traceability, complaints, and recalls." },
  { name: "Regulatory Support", description: "Coordinate product and market information across applicable regulatory requirements." },
  { name: "Commercial", description: "Build responsible relationships with healthcare providers and distribution partners." },
  { name: "Customer Operations", description: "Provide clear product, order, documentation, and service support to customers." },
  { name: "Corporate Functions", description: "Support our work through finance, people operations, technology, and legal expertise." },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50 py-16 dark:from-blue-950/35 dark:via-neutral-950 dark:to-teal-950/25 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px] text-blue-950 opacity-[0.035] dark:text-blue-100 dark:opacity-[0.06]" aria-hidden="true" />
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10" aria-hidden="true" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-500/10" aria-hidden="true" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="display-lg lg:display-xl font-bold text-neutral-900 dark:text-white mb-4">
              Join Our Team
            </h1>
            <p className="body-lg text-neutral-600 dark:text-neutral-300">
              Help healthcare partners access pharmaceutical products through dependable distribution.
              At Alvor Healthcare, you&apos;ll work across quality, supply, service, and commercial operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-neutral-950">
        <div className="container max-w-6xl">
          <h2 className="display-md font-bold text-neutral-900 dark:text-white text-center mb-12">Why Join Alvor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl border border-neutral-100 bg-white hover:border-primary-200 hover:shadow-md transition-all dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-blue-700/70 dark:hover:bg-neutral-900">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 dark:bg-blue-900/35 dark:text-blue-400">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-sm font-bold text-neutral-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <h2 className="display-md font-bold text-neutral-900 dark:text-white text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {departments.map((dept) => (
              <Link
                key={dept.name}
                href="/contact"
                className="block p-6 rounded-2xl border border-neutral-100 bg-white hover:border-primary-200 hover:shadow-md transition-all group dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-blue-700/70 dark:hover:bg-neutral-900"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="heading-sm font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-blue-400 transition-colors">{dept.name}</h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{dept.description}</p>
              </Link>
            ))}
          </div>

          <div className="relative overflow-hidden text-center bg-neutral-50 rounded-2xl p-12 border border-neutral-100 dark:border-neutral-800 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-blue-950/45">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_42%)]" aria-hidden="true" />
            <h3 className="relative heading-lg font-bold text-neutral-900 dark:text-white mb-2">Don&apos;t See a Role That Fits?</h3>
            <p className="relative text-neutral-600 dark:text-neutral-300 mb-6 max-w-lg mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-neutral-950"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
