import type { Category, CompanyInfo, Product, NewsArticle } from "@/types";
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
  ...(companyData as Omit<CompanyInfo, "productsCount">),
  productsCount: products.length,
};
export const newsArticles: NewsArticle[] = newsData as NewsArticle[];
export const siteContent = siteData;
export const homeContent = homeData;
export const aboutContent = aboutData;

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
