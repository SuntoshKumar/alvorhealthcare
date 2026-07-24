import { Metadata } from "next";
import { Briefcase, GraduationCap, HeartPulse, Globe, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Alvor Healthcare",
  description: "Join Alvor Healthcare and make a difference in global healthcare. Explore career opportunities across R&D, manufacturing, quality, and commercial functions.",
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
  { name: "Research & Development", count: "12 openings", description: "Drive innovation in drug discovery and formulation development." },
  { name: "Manufacturing", count: "8 openings", description: "Produce quality pharmaceuticals at our state-of-the-art facilities." },
  { name: "Quality Assurance", count: "6 openings", description: "Ensure the highest quality standards across all operations." },
  { name: "Regulatory Affairs", count: "4 openings", description: "Navigate global regulatory landscapes to bring products to market." },
  { name: "Commercial", count: "10 openings", description: "Expand our global reach and serve healthcare providers worldwide." },
  { name: "Corporate Functions", count: "5 openings", description: "Support our mission through finance, HR, IT, and legal expertise." },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="display-lg lg:display-xl font-bold text-neutral-900 mb-4">
              Join Our Team
            </h1>
            <p className="body-lg text-neutral-600">
              Help us advance global health through pharmaceutical innovation. At Alvor Healthcare,
              you&apos;ll work with passionate professionals dedicated to making a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-6xl">
          <h2 className="display-md font-bold text-neutral-900 text-center mb-12">Why Join Alvor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-sm font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <h2 className="display-md font-bold text-neutral-900 text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {departments.map((dept) => (
              <Link
                key={dept.name}
                href="/contact"
                className="block p-6 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="heading-sm font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">{dept.name}</h3>
                  <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">{dept.count}</span>
                </div>
                <p className="text-sm text-neutral-600">{dept.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center bg-neutral-50 rounded-2xl p-12 border border-neutral-100">
            <h3 className="heading-lg font-bold text-neutral-900 mb-2">Don&apos;t See a Role That Fits?</h3>
            <p className="text-neutral-600 mb-6 max-w-lg mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
