"use client";

import {useEffect, useState} from "react";
import {motion, useReducedMotion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronRight,
    Package,
    Users,
    Globe,
    Award,
    Shield,
    Leaf,
    Star,
    Cpu,
} from "lucide-react";
import {ScrollReveal, StaggerContainer, StaggerItem, HoverScale} from "@/components/animations/Animations";
import {Card, CardContent, CardTitle, CardDescription} from "@/components/ui/Card";
import {Badge} from "@/components/ui/Badge";
import {LinkButton} from "@/components/ui/Button";
import {categories} from "@/data";
import {publicAssetPath} from "@/lib/paths";
import {
    AnimatedCounter,
    TiltCard,
} from "@/components/products/category-utils";

function HeroDecor({reducedMotion}: { reducedMotion: boolean }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <motion.div
                className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/50 dark:border-blue-700/20"
                animate={reducedMotion ? undefined : {rotate: 360}}
                transition={{duration: 48, repeat: Infinity, ease: "linear"}}
            >
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" />
                <span className="absolute bottom-[15%] left-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-teal-400 shadow-[0_0_0_5px_rgba(45,212,191,0.1)]" />
            </motion.div>
            <motion.div
                className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-300/40 dark:border-blue-600/15"
                animate={reducedMotion ? undefined : {rotate: -360}}
                transition={{duration: 36, repeat: Infinity, ease: "linear"}}
            >
                <span className="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400" />
            </motion.div>
            <motion.div
                className="absolute left-1/2 top-[18%] h-px w-[420px] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300/60 to-transparent dark:via-blue-600/30"
                animate={reducedMotion ? undefined : {opacity: [0.3, 0.8, 0.3], scaleX: [0.85, 1, 0.85]}}
                transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}}
            />
            <motion.div
                className="absolute left-1/2 bottom-[22%] h-px w-[320px] -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-300/40 to-transparent dark:via-teal-600/20"
                animate={reducedMotion ? undefined : {opacity: [0.2, 0.6, 0.2], scaleX: [0.9, 1.05, 0.9]}}
                transition={{duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5}}
            />
        </div>
    );
}

function CyclingText({words, reducedMotion}: { words: string[]; reducedMotion: boolean }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (reducedMotion) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2200);
        return () => clearInterval(interval);
    }, [words.length, reducedMotion]);

    return (
        <span className="inline-block relative h-[1.2em] align-text-bottom">
            {words.map((word, i) => (
                <motion.span
                    key={word}
                    initial={false}
                    animate={{
                        y: i === index ? 0 : i < index ? "-110%" : "110%",
                        opacity: i === index ? 1 : 0,
                    }}
                    transition={{type: "spring", stiffness: 300, damping: 30}}
                    className="gradient-text absolute left-0 bottom-0 whitespace-nowrap"
                    aria-hidden={i !== index}
                >
                    {word}
                </motion.span>
            ))}
            <span className="gradient-text invisible">{words[0]}</span>
        </span>
    );
}

export function CategoriesPageContent() {
    const reducedMotion = useReducedMotion();
    const totalProducts = categories.reduce((sum, c) => sum + c.productCount, 0);
    const totalSubs = categories.reduce((sum, c) => sum + (c.subCategories?.length ?? 0), 0);

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <section
                className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-teal-50 dark:from-blue-950/30 dark:via-neutral-950 dark:to-teal-950/30">
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.04]"
                    aria-hidden="true"/>
                <HeroDecor reducedMotion={!!reducedMotion}/>

                <div className="container relative px-6 py-20 lg:py-28">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <motion.span
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
                            >
                                <Package className="w-4 h-4" aria-hidden="true"/>
                                {categories.length} Product Categories
                            </motion.span>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <motion.h1
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6}}
                                className="display-xl lg:display-2xl font-bold text-neutral-900 dark:text-white leading-tight mb-6"
                            >
                                Explore Our{" "}
                                <CyclingText words={categories.map((c) => c.name)} reducedMotion={!!reducedMotion}/>
                            </motion.h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6}}
                                className="body-lg lg:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-10"
                            >
                                Explore a broad portfolio organized by dosage form, with clear product information and
                                distribution support for healthcare and supply partners.
                            </motion.p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6}}
                                className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-600 dark:text-neutral-300"
                            >
                                <div className="flex items-center gap-2">
                                    <Package className="w-5 h-5 text-blue-600 dark:text-blue-400"/>
                                    <AnimatedCounter end={totalProducts} suffix="+" duration={1800}/>
                                    <span>Products</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-blue-600 dark:text-blue-400"/>
                                    <AnimatedCounter end={totalSubs} duration={1600}/>
                                    <span>Subcategories</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400"/>
                                    <span className="font-medium text-neutral-900 dark:text-white">Myanmar</span>
                                    <span>Market</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400"/>
                                    <span className="font-medium text-neutral-900 dark:text-white">Documented</span>
                                    <span>Records</span>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="section bg-white dark:bg-neutral-950" aria-labelledby="categories-heading">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 id="categories-heading"
                                className="display-md lg:display-lg font-bold text-neutral-900 dark:text-white">
                                All Product Categories
                            </h2>
                            <p className="body-lg text-neutral-600 dark:text-neutral-300 mt-4">
                                Each category is supported by supplier documentation, storage-condition controls,
                                traceability, and responsive distribution service.
                            </p>
                        </div>
                    </ScrollReveal>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, index) => {
                            const { colors } = category;
                            const rowIndex = Math.floor(index / 3);
                            const rowDelay = rowIndex * 0.08;
                            return (
                                <StaggerItem key={category.id} delay={index * 0.1 + rowDelay}>
                                    <ScrollReveal margin={`0px 0px ${-40 + rowIndex * 15}px 0px`}>
                                        <HoverScale scale={1.02}>
                                            <TiltCard>
                                                <Link href={`/categories/${category.slug}`} className="block group">
                                                    <Card variant="elevated"
                                                          className={`h-full overflow-hidden rounded-[1.5rem] border-neutral-100 bg-white/90 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.45)] transition-all duration-500 ${colors.hoverBorder} hover:-translate-y-1 hover:shadow-[0_26px_60px_-34px_rgba(30,64,175,0.3)] dark:border-white/10 dark:bg-neutral-900/80 dark:hover:shadow-[0_26px_60px_-34px_rgba(0,0,0,0.45)]`}>
                                                        <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${colors.surface}`}>
                                                            <span className={`absolute -right-12 top-6 h-48 w-48 rounded-full ${colors.glow} blur-3xl transition-transform duration-700 group-hover:scale-110`} />
                                                            <span className="absolute -right-8 top-7 h-40 w-40 rounded-full border border-white/75 dark:border-white/10" />
                                                            <span className="absolute right-4 top-16 h-28 w-28 rounded-full border border-white/65 dark:border-white/[0.08]" />

                                                            <div className="relative flex items-center justify-between p-5">
                                                                <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${colors.text}`}>
                                                                    Category {String(index + 1).padStart(2, "0")}
                                                                </span>
                                                                <Badge variant="outline" className={`${colors.text} border-current/20 bg-white/55 dark:bg-neutral-950/25`}>
                                                                    {category.productCount} products
                                                                </Badge>
                                                            </div>

                                                            <div className={`absolute right-8 top-20 flex h-28 w-28 items-center justify-center rounded-[1.8rem] bg-gradient-to-br ${colors.accent} shadow-[0_22px_40px_-20px_rgba(15,23,42,0.6)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-[1.06]`}>
                                                                <Image
                                                                    src={publicAssetPath(category.image)}
                                                                    alt=""
                                                                    width={72}
                                                                    height={72}
                                                                    className="h-16 w-16 object-contain brightness-0 invert"
                                                                />
                                                            </div>

                                                            {category.featured && (
                                                                <Badge variant="secondary" className="absolute bottom-5 left-5 bg-white/65 shadow-sm backdrop-blur dark:bg-neutral-950/35">
                                                                    <Star className="mr-1 h-3 w-3 fill-current"/>
                                                                    Featured
                                                                </Badge>
                                                            )}
                                                        </div>
                                                        <CardContent className="p-6">
                                                            <div className="flex items-start justify-between gap-4">
                                                                <div>
                                                                    <CardTitle
                                                                        className="text-neutral-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                                                                        {category.name}
                                                                    </CardTitle>
                                                                    <CardDescription className="mt-2 line-clamp-2">{category.description}</CardDescription>
                                                                </div>
                                                                <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-neutral-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600 dark:text-neutral-600 dark:group-hover:text-blue-400"/>
                                                            </div>

                                                            {category.subCategories && category.subCategories.length > 0 && (
                                                                <div className="mt-4 flex gap-1.5 overflow-x-auto scrollbar-none">
                                                                    {category.subCategories.slice(0, 4).map((sub) => (
                                                                        <Badge key={sub.id} variant="outline" size="sm"
                                                                               className={`shrink-0 ${colors.subHoverBg} ${colors.subHoverText} ${colors.subHoverBorder} transition-colors duration-300`}>
                                                                            {sub.name} ({sub.productCount})
                                                                        </Badge>
                                                                    ))}
                                                                    {category.subCategories.length > 4 && (
                                                                        <Badge variant="outline"
                                                                               size="sm" className="shrink-0">+{category.subCategories.length - 4} more</Badge>
                                                                    )}
                                                                </div>
                                                            )}

                                                            <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                                                                <span className="group-hover:underline">View Products</span>
                                                                <span className="h-px w-5 bg-current transition-all duration-300 group-hover:w-8"/>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </Link>
                                            </TiltCard>
                                        </HoverScale>
                                    </ScrollReveal>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            <section className="section bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="why-heading">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 id="why-heading"
                                className="display-md lg:display-lg font-bold text-neutral-900 dark:text-white">
                                Why Choose Alvor Categories
                            </h2>
                            <p className="body-lg text-neutral-600 dark:text-neutral-300 mt-4">
                                Every category benefits from the same distributor-owned quality and service controls.
                            </p>
                        </div>
                    </ScrollReveal>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Award,
                                title: "Supplier Review",
                                desc: "Products are onboarded through documented supplier and portfolio review",
                                gradient: "from-blue-500 to-blue-600",
                                glow: "shadow-blue-500/25",
                                bg: "from-blue-50/80 to-transparent dark:from-blue-950/20 dark:to-transparent"
                            },
                            {
                                icon: Shield,
                                title: "Regulatory Ready",
                                desc: "Product information and documentation support for applicable local requirements",
                                gradient: "from-teal-500 to-teal-600",
                                glow: "shadow-teal-500/25",
                                bg: "from-teal-50/80 to-transparent dark:from-teal-950/20 dark:to-transparent"
                            },
                            {
                                icon: Leaf,
                                title: "Responsible Operations",
                                desc: "Practical packaging, transport, and waste-reduction choices",
                                gradient: "from-emerald-500 to-emerald-600",
                                glow: "shadow-emerald-500/25",
                                bg: "from-emerald-50/80 to-transparent dark:from-emerald-950/20 dark:to-transparent"
                            },
                            {
                                icon: Globe,
                                title: "Myanmar Supply",
                                desc: "Distribution support for healthcare organizations across Myanmar",
                                gradient: "from-violet-500 to-violet-600",
                                glow: "shadow-violet-500/25",
                                bg: "from-violet-50/80 to-transparent dark:from-violet-950/20 dark:to-transparent"
                            },
                            {
                                icon: Users,
                                title: "Clinical Support",
                                desc: "Medical affairs support for all therapeutic areas",
                                gradient: "from-rose-500 to-rose-600",
                                glow: "shadow-rose-500/25",
                                bg: "from-rose-50/80 to-transparent dark:from-rose-950/20 dark:to-transparent"
                            },
                            {
                                icon: Shield,
                                title: "Pharmacovigilance",
                                desc: "Integrated safety monitoring for all products",
                                gradient: "from-amber-500 to-amber-600",
                                glow: "shadow-amber-500/25",
                                bg: "from-amber-50/80 to-transparent dark:from-amber-950/20 dark:to-transparent"
                            },
                            {
                                icon: Cpu,
                                title: "Digital Tracking",
                                desc: "Serialization and traceability on every unit",
                                gradient: "from-cyan-500 to-cyan-600",
                                glow: "shadow-cyan-500/25",
                                bg: "from-cyan-50/80 to-transparent dark:from-cyan-950/20 dark:to-transparent"
                            },
                            {
                                icon: Award,
                                title: "Continuous Review",
                                desc: "Documentation, service, and supply processes are reviewed over time",
                                gradient: "from-indigo-500 to-indigo-600",
                                glow: "shadow-indigo-500/25",
                                bg: "from-indigo-50/80 to-transparent dark:from-indigo-950/20 dark:to-transparent"
                            },
                        ].map((item, index) => (
                            <StaggerItem key={item.title} delay={index * 0.1}>
                                <ScrollReveal>
                                    <HoverScale>
                                        <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 text-center transition-all duration-300 hover:border-neutral-200/80 hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.12)] dark:border-neutral-700/50 dark:bg-neutral-800/30 dark:hover:border-neutral-600/80 dark:hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.3)]">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-600/50" />
                                            <span className="absolute left-5 top-5 text-[10px] font-bold tracking-widest text-neutral-300 dark:text-neutral-600 select-none">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <div className="relative">
                                                <div className={`w-14 h-14 mx-auto mb-5 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg ${item.glow} group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                                                    <item.icon className="w-7 h-7" aria-hidden="true"/>
                                                </div>
                                                <h3 className="font-heading text-base font-semibold text-neutral-900 dark:text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-2.5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </HoverScale>
                                </ScrollReveal>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            <section className="section bg-primary-600 text-white relative overflow-hidden"
                     aria-labelledby="cta-heading">
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px] opacity-10"
                    aria-hidden="true"/>
                <div className="container relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 id="cta-heading" className="display-md lg:display-lg font-bold mb-6">
                                Need Help Selecting Products?
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <p className="body-lg text-blue-100 mb-8">
                                Our pharmaceutical experts can help you find the right products for your market needs.
                                Contact us for personalized recommendations.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <LinkButton
                                    href="/contact?inquiryType=product-inquiry"
                                    size="lg"
                                    variant="secondary"
                                    rightIcon={<ChevronRight className="w-5 h-5"/>}
                                >
                                    Contact Our Experts
                                </LinkButton>
                                <LinkButton
                                    href="/contact?inquiryType=product-inquiry&subject=Product%20catalog%20request"
                                    size="lg"
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10"
                                >
                                    Request Product Catalog
                                </LinkButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
