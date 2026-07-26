import resourcesData from "./collections.json";
import resourcePagesData from "./pages.json";

export type ResourceIconName =
  | "book"
  | "users"
  | "flask"
  | "graduation"
  | "file"
  | "shield"
  | "pill"
  | "heart"
  | "search"
  | "calendar"
  | "play"
  | "briefcase"
  | "message";

export type ResourceTone = "blue" | "teal" | "amber" | "coral";

export interface ResourceLink {
  title: string;
  description: string;
  href: string;
  icon: ResourceIconName;
  meta?: string;
}

export interface ResourceSection {
  eyebrow: string;
  title: string;
  description: string;
  items: ResourceLink[];
}

export interface ResourceCollection {
  slug: "hcp" | "patients" | "clinical-studies" | "education";
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  href: string;
  icon: ResourceIconName;
  tone: ResourceTone;
  audience: string;
  highlights: string[];
  featured: ResourceLink;
  sections: ResourceSection[];
  supportTitle: string;
  supportDescription: string;
  supportHref: string;
  supportLabel: string;
}

export interface ResourceInformationTopic {
  title: string;
  description: string;
  icon: ResourceIconName;
}

export interface ResourceInformationAction {
  label: string;
  href: string;
}

export interface ResourceInformationPage {
  slug:
    | "medical-education"
    | "clinical-studies"
    | "compliance"
    | "prescribing-info"
    | "medication-guides"
    | "patient-support";
  title: string;
  eyebrow: string;
  description: string;
  audience: string;
  icon: ResourceIconName;
  tone: ResourceTone;
  overviewTitle: string;
  overviewDescription: string;
  topics: ResourceInformationTopic[];
  noticeTitle: string;
  noticeDescription: string;
  primaryAction: ResourceInformationAction;
  secondaryAction: ResourceInformationAction;
}

export const resourceCollections = resourcesData as ResourceCollection[];
export const resourceInformationPages = resourcePagesData as ResourceInformationPage[];

export function getResourceCollection(slug: ResourceCollection["slug"]) {
  return resourceCollections.find((collection) => collection.slug === slug);
}

export function getResourceInformationPage(slug: ResourceInformationPage["slug"]) {
  return resourceInformationPages.find((page) => page.slug === slug);
}
