"use client";

import { homeContent } from "@/data";

export function CareChannelsSection() {
  const content = homeContent.partners;

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="partners-heading" id="partners">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{content.eyebrow}</span>
          <h2 id="partners-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-3">
            {content.title}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-stretch">
          {content.names.map((channel) => (
            <div
              key={channel}
              className="flex items-center justify-center p-5 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50 hover:border-neutral-200 dark:hover:border-neutral-600 transition-all h-full"
            >
              <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                {channel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
