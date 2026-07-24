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
        q: "Are Alvor Healthcare products FDA approved?",
        a: "Our products are manufactured in FDA-registered facilities and comply with international quality standards including WHO GMP, ISO 9001, and applicable pharmacopoeia standards. Regulatory approvals vary by product and country.",
      },
      {
        q: "How do you ensure product quality?",
        a: "We maintain comprehensive quality systems covering raw material sourcing, manufacturing, packaging, and distribution. Our QC laboratories are ISO 17025 accredited, and we conduct rigorous testing at every stage.",
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
        q: "Do you offer contract manufacturing services?",
        a: "Yes, we offer comprehensive CDMO services including formulation development, analytical testing, clinical trial materials, and commercial manufacturing. Contact our business development team for more information.",
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
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="container max-w-3xl mx-auto text-center">
          <h1 className="display-lg lg:display-xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="body-lg text-neutral-600 mb-8">
            Find answers to common questions about our products, services, and partnerships.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="search"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-3xl">
          {filteredFaqs.map((category) => (
            <div key={category.category} className="mb-12">
              <ScrollReveal>
                <h2 className="heading-xl font-bold text-neutral-900 mb-6">{category.category}</h2>
              </ScrollReveal>
              <div className="space-y-3">
                {category.items.map((item) => {
                  const key = `${category.category}:${item.q}`;
                  const isOpen = openItems.has(key);
                  return (
                    <ScrollReveal key={key}>
                      <div className="border border-neutral-100 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-neutral-50 transition-colors"
                        >
                          <span className="font-semibold text-neutral-900 pr-4">{item.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${
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
                              <p className="px-6 pb-5 text-neutral-600 leading-relaxed">{item.a}</p>
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
              <p className="text-neutral-600 mb-4">No results found for &ldquo;{search}&rdquo;</p>
              <button
                onClick={() => setSearch("")}
                className="text-primary-600 font-semibold hover:text-primary-700"
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
