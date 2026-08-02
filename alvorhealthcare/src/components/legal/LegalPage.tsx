import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { companyInfo } from "@/data";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  icon: LucideIcon;
  sections: Array<{ id: string; title: string }>;
  children: ReactNode;
}

export function LegalPage({
  eyebrow,
  title,
  summary,
  updated,
  icon: Icon,
  sections,
  children,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <header className="relative overflow-hidden border-b border-neutral-200/70 bg-[var(--bg-secondary)] pt-28 pb-16 dark:border-neutral-800 dark:bg-[var(--bg-primary)] lg:pt-40 lg:pb-24">
        <div className="pharma-grid absolute inset-0 opacity-70 dark:opacity-20" aria-hidden="true" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-300/25 blur-3xl dark:bg-primary-800/15" aria-hidden="true" />
        <div className="absolute -bottom-40 left-[10%] h-80 w-80 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-800/10" aria-hidden="true" />

        <div className="container relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.17em] text-primary-700 shadow-sm backdrop-blur-sm dark:border-primary-900/70 dark:bg-neutral-900/70 dark:text-primary-300">
              <Icon className="h-4 w-4" aria-hidden="true" />
              {eyebrow}
            </div>
            <h1 className="mt-7 text-4xl font-bold tracking-[-0.045em] text-neutral-950 dark:text-white sm:text-5xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-300 sm:text-xl">
              {summary}
            </p>
            <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
              <CalendarDays className="h-4 w-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
              Last updated {updated}
            </p>
          </div>
        </div>
      </header>

      <div className="container py-14 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          <aside className="lg:sticky lg:top-28">
            <details className="group rounded-2xl border border-neutral-200 bg-neutral-50/70 p-4 dark:border-neutral-800 dark:bg-neutral-900/60 lg:hidden">
              <summary className="cursor-pointer list-none font-bold text-neutral-950 outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-white">
                <span className="flex items-center justify-between gap-4">
                  Jump to a section
                  <span className="text-primary-600 transition-transform group-open:rotate-45 dark:text-primary-400" aria-hidden="true">+</span>
                </span>
              </summary>
              <nav className="mt-4 grid gap-1 border-t border-neutral-200 pt-3 dark:border-neutral-800" aria-label={`${title} sections`}>
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="rounded-lg px-2 py-2 text-sm font-semibold text-neutral-600 outline-none hover:bg-white hover:text-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-primary-300"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </details>

            <div className="hidden lg:block">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
                On this page
              </p>
              <nav className="mt-4 border-l border-neutral-200 dark:border-neutral-800" aria-label={`${title} sections`}>
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block border-l-2 border-transparent py-2.5 pl-4 text-sm font-semibold text-neutral-600 transition-colors hover:border-primary-600 hover:text-primary-700 focus-visible:border-primary-600 focus-visible:text-primary-700 focus-visible:outline-none dark:text-neutral-400 dark:hover:text-primary-300 dark:focus-visible:text-primary-300"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className="mt-8 rounded-2xl border border-teal-200/70 bg-teal-50/70 p-5 dark:border-teal-900/60 dark:bg-teal-950/20">
                <p className="text-sm font-bold text-neutral-950 dark:text-white">Need help?</p>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  Contact us if you need this information in another format or have a question about this page.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 outline-none hover:text-teal-900 focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-teal-300 dark:hover:text-teal-100"
                >
                  Contact Alvor
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>

          <article className="legal-content min-w-0">{children}</article>
        </div>
      </div>
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 border-b border-neutral-200 py-9 first:pt-0 last:border-b-0 dark:border-neutral-800">
      <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-7 text-neutral-600 dark:text-neutral-300">{children}</div>
    </section>
  );
}

export function LegalCallout({
  title,
  children,
  tone = "blue",
}: {
  title: string;
  children: ReactNode;
  tone?: "blue" | "teal" | "amber";
}) {
  const styles = {
    blue: "border-primary-200 bg-primary-50/70 dark:border-primary-900/60 dark:bg-primary-950/20",
    teal: "border-teal-200 bg-teal-50/70 dark:border-teal-900/60 dark:bg-teal-950/20",
    amber: "border-amber-200 bg-amber-50/80 dark:border-amber-900/60 dark:bg-amber-950/20",
  };

  return (
    <div className={`rounded-2xl border p-5 sm:p-6 ${styles[tone]}`}>
      <p className="flex items-start gap-2 font-bold text-neutral-950 dark:text-white">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
        {title}
      </p>
      <div className="mt-2 pl-7 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{children}</div>
    </div>
  );
}

export function LegalContact({ subject }: { subject: string }) {
  const address = `${companyInfo.contact.address}, ${companyInfo.contact.city}, ${companyInfo.contact.state}, ${companyInfo.contact.country}`;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <a
        href={`mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(subject)}`}
        className="flex items-start gap-3 rounded-2xl border border-neutral-200 p-4 font-semibold text-neutral-800 outline-none transition-colors hover:border-primary-300 hover:bg-primary-50/50 focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-neutral-800 dark:text-neutral-100 dark:hover:border-primary-800 dark:hover:bg-primary-950/20"
      >
        <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
        <span className="break-all">{companyInfo.contact.email}</span>
      </a>
      <a
        href={`tel:${companyInfo.contact.phone.replace(/\D/g, "")}`}
        className="flex items-start gap-3 rounded-2xl border border-neutral-200 p-4 font-semibold text-neutral-800 outline-none transition-colors hover:border-primary-300 hover:bg-primary-50/50 focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-neutral-800 dark:text-neutral-100 dark:hover:border-primary-800 dark:hover:bg-primary-950/20"
      >
        <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
        {companyInfo.contact.phone}
      </a>
      <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 p-4 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300 sm:col-span-2">
        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
        <span>{address}</span>
      </div>
    </div>
  );
}
