export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subCategory?: string;
  shortDescription: string;
  description: string;
  uses: string[];
  keyInformation: {
    composition?: string;
    strength?: string;
    dosageForm?: string;
    packaging?: string;
    storage?: string;
    shelfLife?: string;
    manufacturer?: string;
    licenseNumber?: string;
  };
  images: string[];
  thumbnail: string;
  pdfBrochure?: string;
  tags: string[];
  featured: boolean;
  isNew: boolean;
  isBestseller: boolean;
  certifications: string[];
  relatedProducts: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  productCount: number;
  featured: boolean;
  order: number;
  subCategories?: SubCategory[];
}

export interface SubCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  productCount: number;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  mission: string;
  vision: string;
  foundedYear: number;
  experienceYears: number;
  productsCount: number;
  countriesServed: number;
  certifications: Certification[];
  manufacturingCapabilities: string[];
  qualityStandards: string[];
  contact: ContactInfo;
  socialLinks: SocialLink[];
}

export interface Certification {
  id: string;
  name: string;
  logo: string;
  description: string;
  yearObtained: number;
  validUntil?: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone: string;
  email: string;
  fax?: string;
  whatsapp?: string;
  workingHours: string;
  mapEmbedUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  category: 'hospital' | 'pharmacy' | 'distributor' | 'regulatory' | 'research';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: 'announcement' | 'product-launch' | 'healthcare-news' | 'research' | 'event';
  featuredImage: string;
  tags: string[];
  featured: boolean;
  readTime: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  inquiryType: 'general' | 'product-inquiry' | 'partnership' | 'career' | 'complaint' | 'media';
}

export interface FilterState {
  search: string;
  category: string;
  subCategory: string;
  tags: string[];
  sortBy: 'name' | 'newest' | 'popular' | 'featured';
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: Record<string, unknown>;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  megaMenu?: {
    columns: MegaMenuColumn[];
  };
}

export interface MegaMenuColumn {
  title: string;
  items: NavItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface Statistic {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
  icon?: string;
  animationDelay?: number;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}