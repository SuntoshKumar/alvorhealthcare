import type { Category, CompanyInfo, Product, Partner, TeamMember, NewsArticle, Statistic, Feature, Testimonial } from "@/types";
import categoriesData from "./categories.json";
import companyData from "./company.json";
import homeData from "./home.json";
import newsData from "./news.json";
import productsData from "./products.json";
import siteData from "./site.json";
import aboutData from "./about.json";

export {
  getResourceCollection,
  getResourceInformationPage,
  resourceCollections,
  resourceInformationPages,
  type ResourceCollection,
  type ResourceIconName,
  type ResourceInformationAction,
  type ResourceInformationPage,
  type ResourceInformationTopic,
  type ResourceLink,
  type ResourceSection,
  type ResourceTone,
} from "./resources";

export const products: Product[] = productsData as Product[];
export const categories: Category[] = categoriesData.map((category) => ({
  ...category,
  productCount: products.filter((product) => product.category === category.name).length,
  subCategories: category.subCategories?.map((subCategory) => ({
    ...subCategory,
    productCount: products.filter(
      (product) => product.category === category.name && product.subCategory === subCategory.name
    ).length,
  })),
}));
export const companyInfo: CompanyInfo = {
  ...(companyData as Omit<CompanyInfo, "experienceYears" | "productsCount">),
  experienceYears: new Date().getFullYear() - companyData.foundedYear,
  productsCount: products.length,
};
export const newsArticles: NewsArticle[] = newsData as NewsArticle[];
export const siteContent = siteData;
export const homeContent = homeData;
export const aboutContent = aboutData;

export const statistics: Statistic[] = [
  { label: "Years of Excellence", value: companyInfo.experienceYears, suffix: "+", icon: "award", animationDelay: 0 },
  { label: "Products Worldwide", value: companyInfo.productsCount, suffix: "+", icon: "package", animationDelay: 0.1 },
  { label: "Countries Served", value: companyInfo.countriesServed, suffix: "+", icon: "globe", animationDelay: 0.2 },
  { label: "Certifications", value: companyInfo.certifications.length, suffix: "", icon: "shield-check", animationDelay: 0.3 },
  { label: "Manufacturing Facilities", value: 3, suffix: "", icon: "factory", animationDelay: 0.4 },
  { label: "R&D Scientists", value: 120, suffix: "+", icon: "flask-conical", animationDelay: 0.5 },
];

export const features: Feature[] = [
  {
    icon: "shield-check",
    title: "WHO GMP Certified",
    description: "All products manufactured in WHO GMP certified facilities ensuring international quality standards.",
  },
  {
    icon: "flask-conical",
    title: "Advanced R&D",
    description: "State-of-the-art research center with 120+ scientists driving pharmaceutical innovation.",
  },
  {
    icon: "truck",
    title: "Global Distribution",
    description: "Efficient supply chain serving 45+ countries with temperature-controlled logistics.",
  },
  {
    icon: "leaf",
    title: "Sustainable Practices",
    description: "Green manufacturing with reduced carbon footprint and eco-friendly packaging.",
  },
  {
    icon: "users",
    title: "Patient Centric",
    description: "Focused on improving patient outcomes through affordable and accessible medications.",
  },
  {
    icon: "award",
    title: "Regulatory Excellence",
    description: "Compliance with FDA, EMA, WHO, and local regulatory requirements worldwide.",
  },
];

export const partners: Partner[] = [
  { id: "p1", name: "World Health Organization", logo: "/images/partners/who.svg", website: "https://who.int", category: "regulatory" },
  { id: "p2", name: "CVS Health", logo: "/images/partners/cvshealth.svg", website: "https://cvshealth.com", category: "pharmacy" },
  { id: "p3", name: "Walgreens Boots Alliance", logo: "/images/partners/walgreens.svg", website: "https://walgreensbootsalliance.com", category: "pharmacy" },
  { id: "p4", name: "McKesson Corporation", logo: "/images/partners/mckesson.svg", website: "https://mckesson.com", category: "distributor" },
  { id: "p5", name: "Cardinal Health", logo: "/images/partners/cardinalhealth.svg", website: "https://cardinalhealth.com", category: "distributor" },
  { id: "p6", name: "Mayo Clinic", logo: "/images/partners/mayoclinic.svg", website: "https://mayoclinic.org", category: "hospital" },
  { id: "p7", name: "Cleveland Clinic", logo: "/images/partners/clevelandclinic.svg", website: "https://clevelandclinic.org", category: "hospital" },
  { id: "p8", name: "NIH", logo: "/images/partners/nih.svg", website: "https://nih.gov", category: "research" },
  { id: "p9", name: "FDA", logo: "/images/partners/fda.svg", website: "https://fda.gov", category: "regulatory" },
  { id: "p10", name: "EMA", logo: "/images/partners/ema.svg", website: "https://ema.europa.eu", category: "regulatory" },
  { id: "p11", name: "AmerisourceBergen", logo: "/images/partners/amerisourcebergen.svg", website: "https://amerisourcebergen.com", category: "distributor" },
  { id: "p12", name: "Kaiser Permanente", logo: "/images/partners/kaiser.svg", website: "https://kaiserpermanente.org", category: "hospital" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "t1",
    name: "Dr. Sarah Mitchell",
    role: "Chief Executive Officer",
    bio: "Pharmaceutical industry veteran with 30+ years of experience leading global healthcare organizations.",
    image: "/images/team/sarah-mitchell.svg",
    linkedin: "https://linkedin.com/in/sarahmitchell",
  },
  {
    id: "t2",
    name: "Dr. James Chen",
    role: "Chief Scientific Officer",
    bio: "Renowned pharmacologist with 50+ peer-reviewed publications and multiple patent holdings.",
    image: "/images/team/james-chen.svg",
    linkedin: "https://linkedin.com/in/jameschen",
  },
  {
    id: "t3",
    name: "Maria Rodriguez",
    role: "Chief Operating Officer",
    bio: "Operations expert with extensive experience in global pharmaceutical manufacturing and supply chain.",
    image: "/images/team/maria-rodriguez.svg",
    linkedin: "https://linkedin.com/in/mariarodriguez",
  },
  {
    id: "t4",
    name: "Dr. Robert Kim",
    role: "Chief Medical Officer",
    bio: "Board-certified physician leading clinical development and medical affairs strategy.",
    image: "/images/team/robert-kim.svg",
    linkedin: "https://linkedin.com/in/robertkim",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test1",
    name: "Dr. Emily Watson",
    role: "Chief of Pharmacy",
    company: "Metropolitan Hospital",
    content: "Alvor Healthcare's products consistently meet our stringent quality standards. Their reliable supply chain and comprehensive documentation make them a preferred partner.",
    image: "/images/testimonials/emily-watson.svg",
    rating: 5,
  },
  {
    id: "test2",
    name: "James Patterson",
    role: "Procurement Director",
    company: "National Pharmacy Chain",
    content: "We've partnered with Alvor for over a decade. Their commitment to quality, competitive pricing, and exceptional customer service sets them apart in the industry.",
    image: "/images/testimonials/james-patterson.svg",
    rating: 5,
  },
  {
    id: "test3",
    name: "Dr. Michael Torres",
    role: "Medical Director",
    company: "Regional Health System",
    content: "The therapeutic efficacy of Alvor's products is evident in our patient outcomes. Their portfolio breadth allows us to consolidate vendors without compromising quality.",
    image: "/images/testimonials/michael-torres.svg",
    rating: 5,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return products.filter((p) => p.category === category.name);
}

export function getProductsBySubCategory(categorySlug: string, subCategorySlug: string): Product[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  const subCategory = category.subCategories?.find((sc) => sc.slug === subCategorySlug);
  if (!subCategory) return [];
  return products.filter((p) => p.category === category.name && p.subCategory === subCategory.name);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew).slice(0, 8);
}

export function getBestsellerProducts(): Product[] {
  return products.filter((p) => p.isBestseller).slice(0, 8);
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];
  return products
    .filter((p) => p.id !== productId && (p.category === product.category || product.relatedProducts.includes(p.id)))
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.shortDescription.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      p.uses.some((use) => use.toLowerCase().includes(lowercaseQuery))
  );
}

export function filterProducts(filters: {
  category?: string;
  subCategory?: string;
  tags?: string[];
  search?: string;
  featured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}): Product[] {
  let filtered = [...products];

  if (filters.category) {
    const category = categories.find((c) => c.slug === filters.category);
    if (category) {
      filtered = filtered.filter((p) => p.category === category.name);
    }
  }

  if (filters.subCategory) {
    filtered = filtered.filter((p) => p.subCategory === filters.subCategory);
  }

  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter((p) => filters.tags!.some((tag) => p.tags.includes(tag)));
  }

  if (filters.search) {
    const searchResults = searchProducts(filters.search);
    filtered = filtered.filter((p) => searchResults.some((sp) => sp.id === p.id));
  }

  if (filters.featured) {
    filtered = filtered.filter((p) => p.featured);
  }

  if (filters.isNew) {
    filtered = filtered.filter((p) => p.isNew);
  }

  if (filters.isBestseller) {
    filtered = filtered.filter((p) => p.isBestseller);
  }

  return filtered;
}

export function sortProducts(products: Product[], sortBy: "name" | "newest" | "popular" | "featured"): Product[] {
  const sorted = [...products];
  switch (sortBy) {
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "newest":
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    case "popular":
      return sorted.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    case "featured":
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    default:
      return sorted;
  }
}

export function paginateProducts<T>(items: T[], page: number, limit: number): { data: T[]; total: number; totalPages: number } {
  const start = (page - 1) * limit;
  const end = start + limit;
  return {
    data: items.slice(start, end),
    total: items.length,
    totalPages: Math.ceil(items.length / limit),
  };
}
