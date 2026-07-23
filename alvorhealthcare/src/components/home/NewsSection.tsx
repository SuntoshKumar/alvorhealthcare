"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, ExternalLink, Star } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations/Animations";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { format } from "date-fns";
import { newsArticles } from "@/data";

const categoryLabels: Record<string, string> = {
  "product-launch": "Product Launch",
  announcement: "Announcement",
  research: "Research",
  "healthcare-news": "Healthcare News",
  event: "Event",
};

export function NewsSection() {
  return (
    <section className="section bg-neutral-50" aria-labelledby="news-heading">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <ScrollReveal>
            <div>
              <h2 id="news-heading" className="display-md lg:display-lg font-bold text-neutral-900">
                Latest News & Updates
              </h2>
              <p className="body-lg text-neutral-600 mt-2">
                Stay informed about our latest innovations, achievements, and industry insights
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
            >
              View All News
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <StaggerItem key={article.id} delay={index * 0.1}>
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
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <CardHeader className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" size="sm">{categoryLabels[article.category]}</Badge>
                          <time dateTime={article.publishDate} className="text-sm text-neutral-500">
                            {format(new Date(article.publishDate), "MMM d, yyyy")}
                          </time>
                        </CardHeader>
                        <CardTitle className="text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">{article.excerpt}</CardDescription>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {article.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
                          ))}
                        </div>
                        <Link
                          href={`/news/${article.slug}`}
                          className="inline-flex items-center gap-2 mt-6 text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </CardContent>
                    </Card>
                  </article>
                </HoverScale>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12">
            <Link href="/news" className="btn-outline inline-flex">
              View All News & Updates
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}