export const categoryPresentation: Record<
  string,
  {
    accent: string;
    glow: string;
    surface: string;
    text: string;
  }
> = {
  tablets: {
    accent: "from-blue-500 to-cyan-400",
    glow: "bg-blue-400/20 dark:bg-blue-500/15",
    surface: "from-blue-50 via-white to-cyan-50/80 dark:from-blue-950/55 dark:via-neutral-900 dark:to-cyan-950/35",
    text: "text-blue-700 dark:text-blue-300",
  },
  capsules: {
    accent: "from-teal-500 to-emerald-400",
    glow: "bg-teal-400/20 dark:bg-teal-500/15",
    surface: "from-teal-50 via-white to-emerald-50/80 dark:from-teal-950/55 dark:via-neutral-900 dark:to-emerald-950/35",
    text: "text-teal-700 dark:text-teal-300",
  },
  syrups: {
    accent: "from-emerald-500 to-lime-400",
    glow: "bg-emerald-400/20 dark:bg-emerald-500/15",
    surface: "from-emerald-50 via-white to-lime-50/80 dark:from-emerald-950/55 dark:via-neutral-900 dark:to-lime-950/25",
    text: "text-emerald-700 dark:text-emerald-300",
  },
  injections: {
    accent: "from-sky-500 to-blue-600",
    glow: "bg-sky-400/20 dark:bg-sky-500/15",
    surface: "from-sky-50 via-white to-blue-50/80 dark:from-sky-950/55 dark:via-neutral-900 dark:to-blue-950/35",
    text: "text-sky-700 dark:text-sky-300",
  },
  supplements: {
    accent: "from-amber-400 to-orange-500",
    glow: "bg-amber-400/20 dark:bg-amber-500/15",
    surface: "from-amber-50 via-white to-orange-50/80 dark:from-amber-950/45 dark:via-neutral-900 dark:to-orange-950/30",
    text: "text-amber-700 dark:text-amber-300",
  },
};
