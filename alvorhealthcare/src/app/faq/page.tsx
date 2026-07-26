"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { ScrollReveal } from "@/components/animations/Animations";

const faqs = [
  {
    category: "Products & Orders",
    items: [
      {
        q: "How can I place an order for Alvor Healthcare products?",
        a: "For wholesale orders, please contact our commercial team through the Contact page. For individual prescriptions, our products are available through authorized distributors and pharmacies worldwide.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "Minimum order quantities vary by product and market. Please contact our sales team for specific MOQ information for your region.",
      },
      {
        q: "Do you offer product samples?",
        a: "Yes, we provide product samples to qualified healthcare professionals for evaluation purposes. Please submit a request through our Contact page.",
      },
      {
        q: "How can I check product availability in my country?",
        a: "Product availability varies by market. Please contact our regional sales team or use the Contact form to inquire about availability in your country.",
      },
    ],
  },
  {
    category: "Quality & Safety",
    items: [
      {
        q: "Are Alvor Healthcare products approved in my country?",
        a: "Product registration and approval status varies by product and market. Contact our team with the product and country so we can confirm the applicable availability and documentation.",
      },
      {
        q: "How do you ensure product quality?",
        a: "As a distributor, we focus on supplier qualification, product documentation, storage requirements, batch traceability, stock rotation, complaint handling, and recall coordination. Product-specific quality documents can be requested from our team.",
      },
      {
        q: "What should I do if I experience a side effect?",
        a: "Please report any adverse events to your healthcare provider immediately. You can also report directly to our pharmacovigilance team through the Contact page or by emailing safety@alvorhealthcare.com.",
      },
    ],
  },
  {
    category: "Partnerships & Distribution",
    items: [
      {
        q: "How can I become a distributor?",
        a: "We are always looking for qualified distribution partners. Please visit our Distributors page or contact our business development team with information about your organization and target market.",
      },
      {
        q: "What services do you provide to distribution partners?",
        a: "We support portfolio review, market and product enquiries, documentation coordination, availability planning, order management, storage information, shipment visibility, and post-distribution quality communication.",
      },
      {
        q: "What markets do you currently serve?",
        a: "We serve 45+ countries across North America, Europe, Asia, Africa, and the Middle East. Our expansion roadmap includes additional markets in Southeast Asia and Latin America.",
      },
    ],
  },
  {
    category: "Patients & Consumers",
    items: [
      {
        q: "Where can I buy Alvor Healthcare products?",
        a: "Our products are available through pharmacies, hospitals, and healthcare providers. Please consult your healthcare provider or use our distributor locator to find a supplier near you.",
      },
      {
        q: "Do you offer patient assistance programs?",
        a: "Yes, we offer patient support programs in select markets. These programs may include medication adherence support, educational resources, and financial assistance for eligible patients.",
      },
      {
        q: "How should I store my medication?",
        a: "Storage requirements vary by product. Please refer to the storage instructions on the product packaging and the patient information leaflet. Most products should be stored at room temperature, away from moisture and direct sunlight.",
      },
    ],
  },
];

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const filteredFaqs = faqs
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50 py-16 dark:from-blue-950/35 dark:via-neutral-950 dark:to-teal-950/25 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px] text-blue-950 opacity-[0.035] dark:text-blue-100 dark:opacity-[0.06]" aria-hidden="true" />
        <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10" aria-hidden="true" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-500/10" aria-hidden="true" />
        <div className="container relative max-w-3xl mx-auto text-center">
          <h1 className="display-lg lg:display-xl font-bold text-neutral-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="body-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Find answers to common questions about our products, services, and partnerships.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 dark:text-neutral-500" />
            <input
              type="search"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-white dark:placeholder:text-neutral-500 dark:focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-neutral-950">
        <div className="container max-w-3xl">
          {filteredFaqs.map((category) => (
            <div key={category.category} className="mb-12">
              <ScrollReveal>
                <h2 className="heading-xl font-bold text-neutral-900 dark:text-white mb-6">{category.category}</h2>
              </ScrollReveal>
              <div className="space-y-3">
                {category.items.map((item) => {
                  const key = `${category.category}:${item.q}`;
                  const isOpen = openItems.has(key);
                  return (
                    <ScrollReveal key={key}>
                      <div className="border border-neutral-100 bg-white rounded-2xl overflow-hidden transition-colors dark:border-neutral-800 dark:bg-neutral-900/70">
                        <button
                          type="button"
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:hover:bg-neutral-800/70 dark:focus-visible:ring-blue-500"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-neutral-900 dark:text-white pr-4">{item.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-neutral-400 dark:text-neutral-500 flex-shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="border-t border-neutral-100 px-6 py-5 text-neutral-600 leading-relaxed dark:border-neutral-800 dark:text-neutral-300">{item.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">No results found for &ldquo;{search}&rdquo;</p>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-primary-600 font-semibold hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-blue-400 dark:hover:text-blue-300 dark:focus-visible:ring-blue-500 dark:focus-visible:ring-offset-neutral-950"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
