import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import { ResourceIcon } from "./ResourceIcon";
import type { ResourceInformationPage as ResourceInformationPageData, ResourceTone } from "@/data";

const toneStyles: Record<
  ResourceTone,
  {
    badge: string;
    icon: string;
    iconSoft: string;
    panel: string;
    glow: string;
    line: string;
  }
> = {
  blue: {
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    icon: "bg-blue-600 text-white",
    iconSoft: "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-300",
    panel: "from-blue-600 to-blue-800",
    glow: "bg-blue-400/25",
    line: "bg-blue-500",
  },
  teal: {
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    icon: "bg-teal-600 text-white",
    iconSoft: "bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-300",
    panel: "from-teal-600 to-emerald-800",
    glow: "bg-teal-400/25",
    line: "bg-teal-500",
  },
  amber: {
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    icon: "bg-amber-500 text-neutral-950",
    iconSoft: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
    panel: "from-amber-500 to-orange-700",
    glow: "bg-amber-300/25",
    line: "bg-amber-500",
  },
  coral: {
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    icon: "bg-rose-500 text-white",
    iconSoft: "bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-300",
    panel: "from-rose-500 to-orange-700",
    glow: "bg-rose-300/25",
    line: "bg-rose-500",
  },
};

interface ResourceInformationPageProps {
  page: ResourceInformationPageData;
}

export function ResourceInformationPage({ page }: ResourceInformationPageProps) {
  const tone = toneStyles[page.tone];

  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-100 bg-neutral-50 pt-28 pb-16 dark:border-neutral-800 dark:bg-neutral-950 lg:pt-36 lg:pb-24">
        <div className={`absolute -right-24 -top-28 h-96 w-96 rounded-full blur-3xl ${tone.glow}`} aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.045] dark:opacity-[0.08]" aria-hidden="true">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px]" />
        </div>

        <div className="container relative">
          <nav className="mb-10 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400" aria-label="Breadcrumb">
            <Link href="/resources" className="inline-flex items-center gap-2 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              <ArrowLeft className="h-4 w-4" />
              Resources
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-neutral-700 dark:text-neutral-200">{page.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="animate-resource-enter">
              <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${tone.badge}`}>
                {page.eyebrow}
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-[-0.045em] text-neutral-950 dark:text-white sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                {page.description}
              </p>
              <div className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                <span>
                  <strong className="text-neutral-900 dark:text-white">Designed for:</strong> {page.audience}
                </span>
              </div>
            </div>

            <div className="animate-resource-enter [animation-delay:120ms]">
              <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 text-white shadow-xl sm:p-10 ${tone.panel}`}>
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/20" aria-hidden="true" />
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                    <ResourceIcon name={page.icon} className="h-8 w-8" />
                  </div>
                  <h2 className="mt-12 text-3xl font-bold tracking-tight">{page.overviewTitle}</h2>
                  <p className="mt-4 leading-7 text-white/80">{page.overviewDescription}</p>
                  <Link
                    href={page.primaryAction.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-neutral-900 outline-none hover:bg-neutral-100 focus-visible:ring-4 focus-visible:ring-white/40"
                  >
                    {page.primaryAction.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-neutral-950" aria-labelledby={`${page.slug}-topics`}>
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">How we can help</p>
            <h2 id={`${page.slug}-topics`} className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              A clear path to the right information.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {page.topics.map((topic, index) => (
              <div
                key={topic.title}
                className="relative flex min-h-72 flex-col rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <span className="absolute right-7 top-7 text-xs font-bold tracking-[0.16em] text-neutral-300 dark:text-neutral-700">
                  0{index + 1}
                </span>
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone.iconSoft}`}>
                  <ResourceIcon name={topic.icon} className="h-6 w-6" />
                </div>
                <div className="mt-auto pt-10">
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-white">{topic.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50 dark:bg-neutral-900/40">
        <div className="container">
          <div className="grid overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 lg:grid-cols-[1fr_auto]">
            <div className="p-7 sm:p-10 lg:p-14">
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${tone.iconSoft}`}>
                <ResourceIcon name="shield" className="h-6 w-6" />
              </span>
              <h2 className="mt-7 text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">{page.noticeTitle}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">{page.noticeDescription}</p>
            </div>
            <div className={`flex flex-col justify-center gap-3 bg-gradient-to-br p-7 sm:p-10 lg:w-96 ${tone.panel}`}>
              <Link
                href={page.primaryAction.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-neutral-900 outline-none hover:bg-neutral-100 focus-visible:ring-4 focus-visible:ring-white/40"
              >
                {page.primaryAction.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={page.secondaryAction.href}
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                {page.secondaryAction.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
