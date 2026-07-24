import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, GraduationCap, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | Alvor Healthcare",
  description: "Access healthcare resources, clinical studies, educational materials, and patient support information.",
};

const resourceCategories = [
  {
    title: "For Healthcare Professionals",
    description: "Prescribing information, clinical studies, and medical education resources.",
    href: "/resources/hcp",
    icon: BookOpen,
    items: ["Prescribing Info", "Clinical Studies", "Medical Education", "Dosage Guidelines"],
  },
  {
    title: "For Patients & Caregivers",
    description: "Medication guides, patient support programs, and educational materials.",
    href: "/resources/patients",
    icon: Users,
    items: ["Medication Guides", "Patient Support", "FAQ", "Safety Information"],
  },
  {
    title: "Clinical Research",
    description: "Access our clinical trial data, research publications, and study results.",
    href: "/resources/clinical-studies",
    icon: FlaskConical,
    items: ["Ongoing Trials", "Published Results", "Research Partnerships", "Ethics & Compliance"],
  },
  {
    title: "Continuing Education",
    description: "Professional development courses, webinars, and training materials.",
    href: "/resources/education",
    icon: GraduationCap,
    items: ["Webinars", "Training Modules", "Certification Programs", "Workshops"],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="bg-gradient-to-b from-blue-50 via-white to-teal-50 dark:from-blue-950/30 dark:via-neutral-950 dark:to-teal-950/30 py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="display-lg lg:display-xl font-bold text-neutral-900 dark:text-white mb-4">Resources</h1>
            <p className="body-lg text-neutral-600 dark:text-neutral-300">
              Comprehensive resources for healthcare professionals, patients, and researchers.
              Access the information you need to make informed healthcare decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-neutral-950">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block p-8 rounded-2xl border border-neutral-100 dark:border-neutral-700/50 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md dark:hover:shadow-blue-900/20 transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                  <cat.icon className="w-7 h-7" />
                </div>
                <h2 className="heading-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cat.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">{cat.description}</p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                  Explore Resources <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
