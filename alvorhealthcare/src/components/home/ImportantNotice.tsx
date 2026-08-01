"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Bell, ChevronLeft, ChevronRight, CircleAlert, Info, Pause, Play, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { homeContent } from "@/data";

type NoticePriority = "low" | "medium" | "important" | "critical";

export interface ImportantNoticeContent {
  enabled: boolean;
  id: string;
  priority: NoticePriority;
  title: string;
  message: string;
  cta?: {
    label: string;
    href: string;
  };
  startDate?: string;
  endDate?: string;
  dismissible: boolean;
}

interface ImportantNoticesData {
  _note: string;
  carousel: {
    autoPlay: boolean;
    intervalSeconds: number;
  };
  notices: ImportantNoticeContent[];
}

const importantNoticesData = homeContent.importantNotices as ImportantNoticesData;

const priorityWeight: Record<NoticePriority, number> = {
  low: 0,
  medium: 1,
  important: 2,
  critical: 3,
};

const toneStyles = {
  low: {
    container:
      "border-emerald-200/70 bg-gradient-to-r from-emerald-50/90 via-white to-teal-50/80 text-emerald-950 dark:border-emerald-800/50 dark:from-emerald-950/55 dark:via-neutral-950 dark:to-teal-950/40 dark:text-emerald-100",
    accent: "bg-emerald-500",
    icon: "bg-emerald-600 text-white dark:bg-emerald-500",
    priority: "border-emerald-200 bg-emerald-100/80 text-emerald-800 dark:border-emerald-700/50 dark:bg-emerald-900/45 dark:text-emerald-200",
    link: "text-emerald-700 hover:text-emerald-950 dark:text-emerald-300 dark:hover:text-white",
    close: "text-emerald-700/70 hover:bg-emerald-100 hover:text-emerald-950 dark:text-emerald-300/70 dark:hover:bg-emerald-900/50 dark:hover:text-white",
    Icon: Bell,
  },
  medium: {
    container:
      "border-blue-200/80 bg-gradient-to-r from-blue-50 via-white to-cyan-50 text-blue-950 dark:border-blue-800/60 dark:from-blue-950/70 dark:via-neutral-950 dark:to-cyan-950/50 dark:text-blue-100",
    accent: "bg-blue-500",
    icon: "bg-blue-600 text-white dark:bg-blue-500",
    priority: "border-blue-200 bg-blue-100/80 text-blue-800 dark:border-blue-700/50 dark:bg-blue-900/45 dark:text-blue-200",
    link: "text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-white",
    close: "text-blue-700/70 hover:bg-blue-100 hover:text-blue-950 dark:text-blue-300/70 dark:hover:bg-blue-900/60 dark:hover:text-white",
    Icon: Info,
  },
  important: {
    container:
      "border-amber-200/80 bg-gradient-to-r from-amber-50 via-white to-orange-50 text-amber-950 dark:border-amber-800/60 dark:from-amber-950/60 dark:via-neutral-950 dark:to-orange-950/40 dark:text-amber-100",
    accent: "bg-amber-500",
    icon: "bg-amber-500 text-white dark:bg-amber-500",
    priority: "border-amber-200 bg-amber-100/80 text-amber-900 dark:border-amber-700/50 dark:bg-amber-900/45 dark:text-amber-200",
    link: "text-amber-800 hover:text-amber-950 dark:text-amber-300 dark:hover:text-white",
    close: "text-amber-700/70 hover:bg-amber-100 hover:text-amber-950 dark:text-amber-300/70 dark:hover:bg-amber-900/50 dark:hover:text-white",
    Icon: AlertTriangle,
  },
  critical: {
    container:
      "border-red-200/80 bg-gradient-to-r from-red-50 via-white to-rose-50 text-red-950 dark:border-red-800/60 dark:from-red-950/65 dark:via-neutral-950 dark:to-rose-950/45 dark:text-red-100",
    accent: "bg-red-600",
    icon: "bg-red-600 text-white dark:bg-red-500",
    priority: "border-red-200 bg-red-100/80 text-red-900 dark:border-red-700/50 dark:bg-red-900/45 dark:text-red-200",
    link: "text-red-700 hover:text-red-950 dark:text-red-300 dark:hover:text-white",
    close: "text-red-700/70 hover:bg-red-100 hover:text-red-950 dark:text-red-300/70 dark:hover:bg-red-900/50 dark:hover:text-white",
    Icon: CircleAlert,
  },
} satisfies Record<NoticePriority, object>;

function currentDateKey() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Yangon",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${value("year")}-${value("month")}-${value("day")}`;
}

function isWithinSchedule(notice: ImportantNoticeContent) {
  const today = currentDateKey();
  return (!notice.startDate || notice.startDate <= today) && (!notice.endDate || notice.endDate >= today);
}

export function ImportantNotices({
  notices = importantNoticesData.notices,
  autoPlay = importantNoticesData.carousel.autoPlay,
  intervalSeconds = importantNoticesData.carousel.intervalSeconds,
}: {
  notices?: ImportantNoticeContent[];
  autoPlay?: boolean;
  intervalSeconds?: number;
}) {
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const dismissibleIds = notices
    .filter((notice) => notice.dismissible)
    .map((notice) => notice.id)
    .join("|");

  useEffect(() => {
    try {
      const storedIds = dismissibleIds
        .split("|")
        .filter((id) => id && window.localStorage.getItem(`alvor-notice-dismissed:${id}`) === "true");
      /* eslint-disable-next-line react-hooks/set-state-in-effect -- dismissal is browser-only state */
      setDismissedIds(storedIds);
    } catch {
      // Notices remain usable when browser storage is unavailable.
    }
  }, [dismissibleIds]);

  const dismiss = (id: string) => {
    setDismissedIds((current) => (current.includes(id) ? current : [...current, id]));
    try {
      window.localStorage.setItem(`alvor-notice-dismissed:${id}`, "true");
    } catch {
      // Dismiss for this visit even when browser storage is unavailable.
    }
  };

  const visibleNotices = notices
    .filter((notice) => notice.enabled && isWithinSchedule(notice) && !dismissedIds.includes(notice.id))
    .sort((a, b) => priorityWeight[b.priority] - priorityWeight[a.priority]);
  const visibleCount = visibleNotices.length;
  const hasMultiple = visibleCount > 1;
  const autoRotationEnabled = autoPlay && hasMultiple && !prefersReducedMotion;
  const rotationDelay = Math.max(0.05, intervalSeconds) * 1000;

  useEffect(() => {
    if (!autoRotationEnabled || userPaused || hovered || focusWithin) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => {
        const index = Math.min(current, visibleCount - 1);
        return (index + 1) % visibleCount;
      });
    }, rotationDelay);

    return () => window.clearInterval(timer);
  }, [activeIndex, autoRotationEnabled, focusWithin, hovered, rotationDelay, userPaused, visibleCount]);

  if (visibleCount === 0) return null;

  const safeIndex = Math.min(activeIndex, visibleCount - 1);
  const notice = visibleNotices[safeIndex];
  const tone = toneStyles[notice.priority] ?? toneStyles.medium;
  const Icon = tone.Icon;
  const urgent = notice.priority === "important" || notice.priority === "critical";

  const move = (step: -1 | 1) => {
    setDirection(step);
    setActiveIndex((current) => {
      const index = Math.min(current, visibleCount - 1);
      return (index + step + visibleCount) % visibleCount;
    });
  };

  const dismissCurrent = () => {
    dismiss(notice.id);
    setDirection(1);
    if (safeIndex === visibleCount - 1) {
      setActiveIndex(Math.max(0, safeIndex - 1));
    }
  };

  return (
    <section
      className="important-notices relative z-30 mt-16 overflow-hidden shadow-[0_14px_40px_-32px_rgba(15,23,42,0.65)] xl:mt-[4.5rem]"
      aria-label="Important updates"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocusWithin(false);
        }
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.article
          key={notice.id}
          role={urgent ? "alert" : "status"}
          aria-label={`${safeIndex + 1} of ${visibleCount}: ${notice.title}`}
          aria-roledescription="slide"
          initial={prefersReducedMotion ? false : { opacity: 0, x: direction * 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, x: direction * -32 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
          drag={hasMultiple ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x <= -55 || info.velocity.x <= -500) move(1);
            if (info.offset.x >= 55 || info.velocity.x >= 500) move(-1);
          }}
          className={`relative overflow-hidden border-b ${tone.container}`}
        >
          <span className={`absolute inset-y-0 left-0 w-1 ${tone.accent}`} aria-hidden="true" />
          <div className="container flex min-h-16 items-start gap-3 py-3.5 sm:items-center">
            <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-sm sm:mt-0 ${tone.icon}`}>
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>

            <div className="min-w-0 flex-1 lg:flex lg:items-center lg:gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] ${tone.priority}`}>
                    {notice.priority} priority
                  </span>
                  <p className="font-heading text-sm font-bold leading-5">{notice.title}</p>
                </div>
                <p className="mt-1 text-sm leading-5 opacity-80">{notice.message}</p>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-2 lg:mt-0 lg:shrink-0">
                {notice.cta?.label && notice.cta.href && (
                  <Link
                    href={notice.cta.href}
                    className={`group inline-flex items-center gap-1.5 rounded-lg py-1 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current lg:px-2 ${tone.link}`}
                  >
                    {notice.cta.label}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                )}

                {hasMultiple && (
                  <div className="flex items-center gap-1 rounded-xl border border-current/15 bg-white/45 p-1 dark:bg-black/15" aria-label="Notification navigation">
                    <button
                      type="button"
                      onClick={() => move(-1)}
                      className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current dark:hover:bg-white/10"
                      aria-label="Previous notification"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                    <span className="min-w-9 text-center text-[10px] font-bold tabular-nums opacity-70" aria-live="polite">
                      {safeIndex + 1}/{visibleCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => move(1)}
                      className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current dark:hover:bg-white/10"
                      aria-label="Next notification"
                    >
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                    {autoRotationEnabled && (
                      <button
                        type="button"
                        onClick={() => setUserPaused((paused) => !paused)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current dark:hover:bg-white/10"
                        aria-label={userPaused ? "Resume automatic notifications" : "Pause automatic notifications"}
                      >
                        {userPaused
                          ? <Play className="h-3.5 w-3.5" aria-hidden="true" />
                          : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {notice.dismissible && (
              <button
                type="button"
                onClick={dismissCurrent}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current ${tone.close}`}
                aria-label={`Dismiss ${notice.title} notice`}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </motion.article>
      </AnimatePresence>
    </section>
  );
}
