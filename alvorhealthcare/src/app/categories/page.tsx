"use client";

import {motion} from "framer-motion";
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
    Truck
} from "lucide-react";
import {ScrollReveal, StaggerContainer, StaggerItem, HoverScale} from "@/components/animations/Animations";
import {Card, CardContent, CardTitle, CardDescription} from "@/components/ui/Card";
import {Badge} from "@/components/ui/Badge";
import {Button} from "@/components/ui/Button";
import {categories} from "@/data";

const categoryIcons: Record<string, string> = {
    Tablets: "/images/categories/tablet.svg",
    Capsules: "/images/categories/capsule.svg",
    Syrups: "/images/categories/syrup.svg",
    Injections: "/images/categories/injection.svg",
    Supplements: "/images/categories/supplement.svg",
    "Medical Supplies": "/images/categories/tablet.svg",
};

function getCategoryIcon(name: string) {
    const icon = categoryIcons[name];

    if (icon) {
        return (
            <div
                className="w-20 h-20 bg-blue-600 dark:bg-blue-400 transition-colors duration-300 group-hover:scale-110"
                style={{
                    maskImage: `url(${icon})`,
                    WebkitMaskImage: `url(${icon})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                }}
            />
        );
    }

    return (
        <Package className="w-20 h-20 text-blue-600 dark:text-blue-400"/>
    );
}

export default function CategoriesPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <section
                className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-teal-50 dark:from-blue-950/30 dark:via-neutral-950 dark:to-teal-950/30">
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.04]"
                    aria-hidden="true"/>

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
                                Explore Our Pharmaceutical{" "}
                                <span className="gradient-text">Categories</span>
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
                                    <span
                                        className="font-medium text-neutral-900 dark:text-white">{categories.reduce((sum, c) => sum + c.productCount, 0)}+</span>
                                    <span>Products</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400"/>
                                    <span className="font-medium text-neutral-900 dark:text-white">45+</span>
                                    <span>Countries</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400"/>
                                    <span className="font-medium text-neutral-900 dark:text-white">Documented</span>
                                    <span>Product Records</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400"/>
                                    <span className="font-medium text-neutral-900 dark:text-white">Coordinated</span>
                                    <span>Supply</span>
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
                        {categories.map((category, index) => (
                            <StaggerItem key={category.id} delay={index * 0.1}>
                                <ScrollReveal>
                                    <HoverScale scale={1.02}>
                                        <Link href={`/categories/${category.slug}`} className="block">
                                            <Card variant="elevated"
                                                  className="h-full overflow-hidden border-neutral-100 dark:border-neutral-700/50 group-hover:border-blue-200 dark:group-hover:border-blue-700 transition-all duration-300">
                                                <div
                                                    className="relative h-56 bg-gradient-to-br from-blue-50 dark:from-blue-900/30 to-teal-50 dark:to-teal-900/30 overflow-hidden">
                                                    <div
                                                        className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        {getCategoryIcon(category.name)}
                                                    </div>
                                                    <Badge variant="primary" className="absolute top-4 right-4">
                                                        {category.productCount} Products
                                                    </Badge>
                                                    {category.featured && (
                                                        <Badge variant="secondary" className="absolute top-4 left-4">
                                                            <Star className="w-3 h-3 mr-1 fill-current"/>
                                                            Featured
                                                        </Badge>
                                                    )}
                                                </div>
                                                <CardContent className="p-6">
                                                    <CardTitle
                                                        className="text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                        {category.name}
                                                    </CardTitle>
                                                    <CardDescription
                                                        className="mt-2 line-clamp-2">{category.description}</CardDescription>

                                                    {category.subCategories && category.subCategories.length > 0 && (
                                                        <div className="mt-4 flex flex-wrap gap-2">
                                                            {category.subCategories.slice(0, 4).map((sub) => (
                                                                <Badge key={sub.id} variant="outline" size="sm"
                                                                       className="group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-200 dark:group-hover:border-blue-700 transition-colors">
                                                                    {sub.name} ({sub.productCount})
                                                                </Badge>
                                                            ))}
                                                            {category.subCategories.length > 4 && (
                                                                <Badge variant="outline"
                                                                       size="sm">+{category.subCategories.length - 4} more</Badge>
                                                            )}
                                                        </div>
                                                    )}

                                                    <div className="mt-6 flex items-center justify-between">
                            <span
                                className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                              View Products
                              <ChevronRight className="w-4 h-4 inline ms-1"/>
                            </span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </HoverScale>
                                </ScrollReveal>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <div className="text-center mt-12">
                        <ScrollReveal>
                            <Button variant="outline" size="lg" rightIcon={<ChevronRight className="w-5 h-5"/>}>
                                View All Categories
                            </Button>
                        </ScrollReveal>
                    </div>
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
                                desc: "Products are onboarded through documented supplier and portfolio review"
                            },
                            {
                                icon: Shield,
                                title: "Regulatory Ready",
                                desc: "Comprehensive documentation for global registrations"
                            },
                            {icon: Leaf, title: "Responsible Operations", desc: "Practical packaging, transport, and waste-reduction choices"},
                            {icon: Globe, title: "Global Supply", desc: "Reliable delivery to 45+ countries worldwide"},
                            {
                                icon: Users,
                                title: "Clinical Support",
                                desc: "Medical affairs support for all therapeutic areas"
                            },
                            {
                                icon: Shield,
                                title: "Pharmacovigilance",
                                desc: "Integrated safety monitoring for all products"
                            },
                            {
                                icon: Cpu,
                                title: "Digital Tracking",
                                desc: "Serialization and traceability on every unit"
                            },
                            {
                                icon: Award,
                                title: "Continuous Review",
                                desc: "Documentation, service, and supply processes are reviewed over time"
                            },
                        ].map((item, index) => (
                            <StaggerItem key={item.title} delay={index * 0.1}>
                                <ScrollReveal>
                                    <HoverScale>
                                        <Card variant="outlined" className="p-6 text-center h-full">
                                            <div
                                                className="w-14 h-14 mx-auto mb-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                <item.icon className="w-7 h-7" aria-hidden="true"/>
                                            </div>
                                            <CardTitle
                                                className="text-neutral-900 dark:text-white">{item.title}</CardTitle>
                                            <CardDescription className="mt-2">{item.desc}</CardDescription>
                                        </Card>
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
                            <p className="body-lg text-blue-200 dark:text-blue-700 mb-8">
                                Our pharmaceutical experts can help you find the right products for your market needs.
                                Contact us for personalized recommendations.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" variant="secondary" rightIcon={<ChevronRight className="w-5 h-5"/>}>
                                    Contact Our Experts
                                </Button>
                                <Button size="lg" variant="outline"
                                        className="border-white/30 text-white hover:bg-white/10">
                                    Request Product Catalog
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
