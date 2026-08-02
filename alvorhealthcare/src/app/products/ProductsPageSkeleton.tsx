export function ProductsPageSkeleton() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950" aria-busy="true" aria-label="Loading products">
      <section className="border-b border-neutral-100 bg-gradient-to-b from-primary-50 via-white to-white pb-12 pt-28 dark:border-neutral-800 dark:from-primary-950/30 dark:via-neutral-950 dark:to-neutral-950 lg:pb-14">
        <div className="container">
          <div className="max-w-3xl animate-pulse">
            <div className="h-7 w-36 rounded-full bg-primary-100 dark:bg-primary-900/40" />
            <div className="mt-5 h-12 w-full max-w-2xl rounded-xl bg-neutral-200/80 dark:bg-neutral-800" />
            <div className="mt-3 h-12 w-3/4 rounded-xl bg-neutral-200/70 dark:bg-neutral-800/80" />
            <div className="mt-6 h-5 w-full max-w-xl rounded-lg bg-neutral-200/60 dark:bg-neutral-800/70" />
            <div className="mt-8 flex gap-3">
              <div className="h-9 w-32 rounded-full bg-white shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800" />
              <div className="h-9 w-40 rounded-full bg-white shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800" />
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-neutral-100 bg-white/90 dark:border-neutral-800 dark:bg-neutral-950/90">
        <div className="container flex gap-2 overflow-hidden py-3.5">
          {[88, 108, 104, 92, 116, 110].map((width) => (
            <div key={width} className="h-9 shrink-0 animate-pulse rounded-full bg-neutral-100 dark:bg-neutral-900" style={{ width }} />
          ))}
        </div>
      </div>

      <section className="bg-neutral-50/70 py-10 dark:bg-neutral-900/30 lg:py-14">
        <div className="container animate-pulse">
          <div className="h-32 rounded-3xl border border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-neutral-900/80" />
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="h-[420px] rounded-[1.35rem] border border-neutral-100 bg-white dark:border-neutral-800 dark:bg-neutral-900/70" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
