"use client";

import { Shield, FlaskConical, Truck, Award, Users, Leaf } from "lucide-react";
import { homeContent } from "@/data";

const icons: Record<string, typeof Shield> = {
  shield: Shield,
  flask: FlaskConical,
  truck: Truck,
  award: Award,
  users: Users,
  leaf: Leaf,
};

const gradients: Record<string, string> = {
  shield: "from-blue-500 to-blue-600",
  flask: "from-purple-500 to-purple-600",
  award: "from-amber-500 to-amber-600",
  truck: "from-cyan-500 to-cyan-600",
  users: "from-rose-500 to-rose-600",
  leaf: "from-emerald-500 to-emerald-600",
};

export function WhyChooseUsSection() {
  const content = homeContent.whyChoose;

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="why-choose-heading">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{content.eyebrow}</span>
          <h2 id="why-choose-heading" className="display-md font-bold text-neutral-900 dark:text-white mt-2 mb-4">
            {content.title}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.items.map((feature) => {
            const Icon = icons[feature.icon] ?? Shield;
            return (
              <div
                key={feature.title}
                className="group p-6 lg:p-7 rounded-2xl bg-white dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-700/50 hover:border-neutral-200 dark:hover:border-neutral-600 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradients[feature.icon] ?? gradients.shield} flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-5.5 h-5.5 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-neutral-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
