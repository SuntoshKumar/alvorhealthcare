"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, Tag, ArrowRight, Share2, ExternalLink, Download, RotateCcw } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { Pagination } from "@/components/ui/Navigation";
import { format } from "date-fns";
import { newsArticles } from "@/data";

const categoryLabels: Record<string, string> = {
  "product-launch": "Product Launch",
  announcement: "Announcement",
  research: "Research",
  "healthcare-news": "Healthcare News",
  event: "Event",
};

export default function NewsPage() {
  const [filters, setFilters] = useState({
    category: "all",
    search: "",
    page: 1,
    limit: 9,
  });

  const filteredArticles = useMemo(() => {
    let result = [...newsArticles];
    
    if (filters.category !== "all") {
      result = result.filter((a) => a.category === filters.category);
    }
    
    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    return result.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }, [filters]);

  const paginated = useMemo(() => {
    const start = (filters.page - 1) * filters.limit;
    return {
      data: filteredArticles.slice(start, start + filters.limit),
      total: filteredArticles.length,
      totalPages: Math.ceil(filteredArticles.length / filters.limit),
    };
  }, [filteredArticles, filters]);

  const handleFilterChange = (key: string, value: unknown) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }));
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 via-white to-secondary-50 py-16 lg:py-24" aria-labelledby="news-heading">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 id="news-heading" className="display-lg lg:display-xl font-bold text-neutral-900">
                Latest News & Updates
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="body-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
                Stay informed about our latest innovations, partnerships, and healthcare initiatives.
                Our commitment to transparency keeps you updated on everything that matters.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="articles-heading">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
            <div>
              <ScrollReveal>
                <h2 id="articles-heading" className="display-md font-bold text-neutral-900">
                  Articles
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="body-lg text-neutral-600 mt-2">
                  {paginated.total} articles found
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                <div className="relative max-w-xs flex-1">
                  <input
                    type="search"
                    placeholder="Search articles..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange("search", e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-neutral-50 border-none focus:ring-2 focus:ring-primary-500 text-base"
                    aria-label="Search articles"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <Select
                  value={filters.category}
                  onChange={(e) => handleFilterChange("category", e.target.value)}
                  options={[
                    { value: "all", label: "All Categories" },
                    { value: "product-launch", label: "Product Launch" },
                    { value: "announcement", label: "Announcement" },
                    { value: "research", label: "Research" },
                    { value: "healthcare-news", label: "Healthcare News" },
                    { value: "event", label: "Event" },
                  ]}
                  placeholder="Filter by Category"
                  className="w-full sm:w-48"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-neutral-600">
              Showing <span className="font-semibold text-neutral-900">{paginated.data.length > 0 ? (filters.page - 1) * filters.limit + 1 : 0}</span> to{" "}
              <span className="font-semibold text-neutral-900">{Math.min(filters.page * filters.limit, filteredArticles.length)}</span> of{" "}
              <span className="font-semibold text-neutral-900">{filteredArticles.length}</span> articles
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.data.map((article, index) => (
              <StaggerItem key={article.id} delay={index * 0.05}>
                <ScrollReveal>
                  <HoverScale scale={1.02}>
                    <article className="group">
                      <Card variant="elevated" className="h-full overflow-hidden">
                        <div className="relative aspect-video overflow-hidden bg-neutral-100">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-4">
                              <Tag className="w-10 h-10 mx-auto mb-2 text-primary-600" aria-hidden="true" />
                              <span className="text-neutral-500 text-sm">{categoryLabels[article.category]}</span>
                            </div>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant="primary" size="sm" className="group-hover:bg-primary-700">
                              {article.readTime} min read
                            </Badge>
                          </div>
                          {article.featured && (
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" size="sm" className="group-hover:bg-secondary-700">
                                Featured
                              </Badge>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-6">
                          <CardHeader className="flex items-center gap-2 mb-4">
                            <Badge variant="outline" size="sm">{categoryLabels[article.category]}</Badge>
                            <time dateTime={article.publishDate} className="text-sm text-neutral-500">
                              {format(new Date(article.publishDate), "MMM d, yyyy")}
                            </time>
                          </CardHeader>
                          <CardTitle className="text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="mt-2 line-clamp-3">{article.excerpt}</CardDescription>
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {article.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
                            ))}
                          </div>
                        </CardContent>
                        <div className="px-6 pb-6">
                          <Link
                            href={`/news/${article.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors group"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </Card>
                    </article>
                  </HoverScale>
                </ScrollReveal>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {paginated.totalPages > 1 && (
            <div className="mt-12">
              <ScrollReveal>
                <Pagination
                  currentPage={filters.page}
                  totalPages={paginated.totalPages}
                  onPageChange={(page) => setFilters((prev) => ({ ...prev, page }))}
                />
              </ScrollReveal>
            </div>
          )}

          {filteredArticles.length === 0 && (
            <ScrollReveal>
              <div className="text-center py-16">
                <Tag className="w-16 h-16 mx-auto mb-4 text-neutral-300" />
                <h3 className="heading-lg font-bold text-neutral-900 mb-2">No articles found</h3>
                <p className="text-neutral-600 mb-4">Try adjusting your search or filters</p>
                <Button variant="outline" onClick={() => setFilters({ category: "all", search: "", page: 1, limit: 9 })}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <section className="section bg-primary-600 text-white relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-[url('/images/cta-pattern.svg')] bg-cover bg-center opacity-10" aria-hidden="true" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 id="cta-heading" className="display-md font-bold mb-6">
                Stay Updated with Alvor Healthcare
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="body-lg text-primary-100 mb-8">
                Subscribe to our newsletter for the latest product launches, research updates, and industry insights delivered to your inbox.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
                  required
                />
                <Button size="lg" variant="secondary" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Subscribe
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState, useMemo } from "react";