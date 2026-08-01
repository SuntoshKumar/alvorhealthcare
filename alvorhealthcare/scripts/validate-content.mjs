import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicRoot = join(root, "public");
const dataRoot = join(root, "src", "data");
const errors = [];

const readJson = (...parts) => JSON.parse(readFileSync(join(dataRoot, ...parts), "utf8"));
const company = readJson("company.json");
const categories = readJson("products", "categories.json");
const products = [
  ...readJson("products", "capsules.json"),
  ...readJson("products", "injections.json"),
  ...readJson("products", "supplements.json"),
  ...readJson("products", "syrups.json"),
  ...readJson("products", "tablets.json"),
];
const news = readJson("news", "articles.json");
const site = readJson("site.json");
const home = {
  hero: readJson("home", "hero.json"),
  importantNotices: readJson("home", "importantNotices.json"),
  whyChoose: readJson("home", "whyChoose.json"),
  partners: readJson("home", "partners.json"),
  news: readJson("home", "news.json"),
  cta: readJson("home", "cta.json"),
};
const about = {
  hero: readJson("about", "hero.json"),
  mission: readJson("about", "mission.json"),
  history: readJson("about", "history.json"),
  services: readJson("about", "services.json"),
};
const contact = {
  hero: readJson("contact", "hero.json"),
  contactInfo: readJson("contact", "contactInfo.json"),
  form: readJson("contact", "form.json"),
  faq: readJson("contact", "faq.json"),
  locations: readJson("contact", "locations.json"),
  map: readJson("contact", "map.json"),
  cta: readJson("contact", "cta.json"),
};
const resources = readJson("resources", "collections.json");
const resourcePages = readJson("resources", "pages.json");

const requireText = (value, path) => {
  if (typeof value !== "string" || value.trim() === "") errors.push(`${path} must be a non-empty string`);
};

const requireUnique = (items, field, label) => {
  const seen = new Set();
  for (const item of items) {
    const value = item[field];
    if (seen.has(value)) errors.push(`${label} has duplicate ${field}: ${value}`);
    seen.add(value);
  }
};

const requireSlug = (value, path) => {
  requireText(value, path);
  if (typeof value === "string" && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
    errors.push(`${path} must use lowercase kebab-case`);
  }
};

const requireDate = (value, path) => {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(value))) {
    errors.push(`${path} must be a valid YYYY-MM-DD date`);
  }
};

const requireAsset = (value, path) => {
  if (typeof value !== "string" || !value.startsWith("/")) {
    errors.push(`${path} must be a root-relative public path`);
    return;
  }
  if (!existsSync(join(publicRoot, value.slice(1)))) errors.push(`${path} does not exist: ${value}`);
};

const requireLinks = (links, path) => {
  if (!Array.isArray(links) || links.length === 0) {
    errors.push(`${path} must contain at least one link`);
    return;
  }
  links.forEach((link, index) => {
    requireText(link.label, `${path}[${index}].label`);
    requireText(link.href, `${path}[${index}].href`);
  });
};

const requireInternalHref = (value, path) => {
  requireText(value, path);
  if (typeof value === "string" && !value.startsWith("/")) {
    errors.push(`${path} must be a root-relative internal path`);
  }
};

if (!Array.isArray(categories)) errors.push("categories.json must contain an array");
if (!Array.isArray(products)) errors.push("products.json must contain an array");
if (!Array.isArray(news)) errors.push("news.json must contain an array");
if (!Array.isArray(resources)) errors.push("resources.json must contain an array");
if (!Array.isArray(resourcePages)) errors.push("resource-pages.json must contain an array");

requireText(company.name, "company.name");
requireText(company.contact?.email, "company.contact.email");
if (typeof company.contact?.email === "string" && !company.contact.email.includes("@")) {
  errors.push("company.contact.email must be a valid email address");
}
if (!Array.isArray(company.contact?.phones) || company.contact.phones.length === 0) {
  errors.push("company.contact.phones must contain at least one phone number");
}
if (!Array.isArray(company.contact?.locations) || company.contact.locations.length === 0) {
  errors.push("company.contact.locations must contain at least one location");
}

requireLinks(site.navigation, "site.navigation");
requireText(site.headerCta?.label, "site.headerCta.label");
requireText(site.headerCta?.href, "site.headerCta.href");
requireText(site.footer?.description, "site.footer.description");
requireLinks(site.footer?.quickLinks, "site.footer.quickLinks");
requireLinks(site.footer?.legalLinks, "site.footer.legalLinks");

requireText(home.hero?.titlePrefix, "home.hero.titlePrefix");
requireText(home.hero?.titleHighlight, "home.hero.titleHighlight");
requireText(home.hero?.description, "home.hero.description");
requireText(home.importantNotices?._note, "home.importantNotices._note");
if (typeof home.importantNotices?.carousel?.autoPlay !== "boolean") {
  errors.push("home.importantNotices.carousel.autoPlay must be a boolean");
}
if (
  !Number.isInteger(home.importantNotices?.carousel?.intervalSeconds) ||
  home.importantNotices.carousel.intervalSeconds < 3 ||
  home.importantNotices.carousel.intervalSeconds > 30
) {
  errors.push("home.importantNotices.carousel.intervalSeconds must be an integer from 3 to 30");
}
if (!Array.isArray(home.importantNotices?.notices)) {
  errors.push("home.importantNotices.notices must be an array");
} else {
  requireUnique(home.importantNotices.notices, "id", "home.importantNotices.notices");
  home.importantNotices.notices.forEach((notice, index) => {
    const path = `home.importantNotices.notices[${index}]`;
    if (typeof notice.enabled !== "boolean") errors.push(`${path}.enabled must be a boolean`);
    if (typeof notice.dismissible !== "boolean") errors.push(`${path}.dismissible must be a boolean`);
    requireSlug(notice.id, `${path}.id`);
    requireText(notice.title, `${path}.title`);
    requireText(notice.message, `${path}.message`);
    if (!new Set(["low", "medium", "important", "critical"]).has(notice.priority)) {
      errors.push(`${path}.priority is invalid: ${notice.priority}`);
    }
    if (notice.cta) {
      requireText(notice.cta.label, `${path}.cta.label`);
      requireInternalHref(notice.cta.href, `${path}.cta.href`);
    }
    if (notice.startDate) requireDate(notice.startDate, `${path}.startDate`);
    if (notice.endDate) requireDate(notice.endDate, `${path}.endDate`);
    if (notice.startDate && notice.endDate && notice.startDate > notice.endDate) {
      errors.push(`${path}.endDate must be on or after startDate`);
    }
  });
}
requireText(home.whyChoose?.title, "home.whyChoose.title");
requireText(home.cta?.title, "home.cta.title");
if (!Array.isArray(home.whyChoose?.items) || home.whyChoose.items.length === 0) {
  errors.push("home.whyChoose.items must contain at least one item");
}

requireText(about.hero?.titlePrefix, "about.hero.titlePrefix");
requireText(about.hero?.titleHighlight, "about.hero.titleHighlight");
requireText(about.mission?.title, "about.mission.title");
requireText(about.history?.title, "about.history.title");
if (!Array.isArray(about.mission?.coreValues) || about.mission.coreValues.length === 0) {
  errors.push("about.mission.coreValues must contain at least one value");
}
if (!Array.isArray(about.history?.milestones) || about.history.milestones.length === 0) {
  errors.push("about.history.milestones must contain at least one milestone");
}
requireText(about.services?.title, "about.services.title");
if (!Array.isArray(about.services?.items) || about.services.items.length === 0) {
  errors.push("about.services.items must contain at least one service");
}

requireText(contact.hero?.description, "contact.hero.description");
if (!Array.isArray(contact.contactInfo) || contact.contactInfo.length === 0) {
  errors.push("contact.contactInfo must contain at least one contact method");
}
requireText(contact.form?.title, "contact.form.title");
if (!Array.isArray(contact.faq?.items) || contact.faq.items.length === 0) {
  errors.push("contact.faq.items must contain at least one item");
}

requireUnique(categories, "id", "categories.json");
requireUnique(categories, "slug", "categories.json");
requireUnique(products, "id", "products.json");
requireUnique(products, "slug", "products.json");
requireUnique(news, "id", "news.json");
requireUnique(news, "slug", "news.json");
requireUnique(resources, "slug", "resources.json");
requireUnique(resourcePages, "slug", "resource-pages.json");

const categoryByName = new Map(categories.map((category) => [category.name, category]));
const productIds = new Set(products.map((product) => product.id));
const newsCategories = new Set(["announcement", "product-launch", "healthcare-news", "research", "event"]);
const resourceSlugs = new Set(["hcp", "patients", "clinical-studies", "education"]);
const resourcePageSlugs = new Set([
  "medical-education",
  "clinical-studies",
  "compliance",
  "prescribing-info",
  "medication-guides",
  "patient-support",
]);
const resourceTones = new Set(["blue", "teal", "amber", "coral"]);
const resourceIcons = new Set([
  "book",
  "users",
  "flask",
  "graduation",
  "file",
  "shield",
  "pill",
  "heart",
  "search",
  "calendar",
  "play",
  "briefcase",
  "message",
]);

categories.forEach((category, index) => {
  const path = `categories[${index}]`;
  requireText(category.id, `${path}.id`);
  requireSlug(category.slug, `${path}.slug`);
  requireText(category.name, `${path}.name`);
  requireText(category.description, `${path}.description`);
  requireAsset(category.image, `${path}.image`);

  requireUnique(category.subCategories ?? [], "id", `${path}.subCategories`);
  requireUnique(category.subCategories ?? [], "slug", `${path}.subCategories`);
});

products.forEach((product, index) => {
  const path = `products[${index}]`;
  requireText(product.id, `${path}.id`);
  requireSlug(product.slug, `${path}.slug`);
  requireText(product.name, `${path}.name`);
  requireText(product.shortDescription, `${path}.shortDescription`);
  requireText(product.description, `${path}.description`);
  requireDate(product.createdAt?.slice(0, 10), `${path}.createdAt`);
  requireDate(product.updatedAt?.slice(0, 10), `${path}.updatedAt`);

  const category = categoryByName.get(product.category);
  if (!category) {
    errors.push(`${path}.category references an unknown category: ${product.category}`);
  } else if (
    product.subCategory &&
    !category.subCategories?.some((subCategory) => subCategory.name === product.subCategory)
  ) {
    errors.push(`${path}.subCategory is not part of ${product.category}: ${product.subCategory}`);
  }

  requireAsset(product.thumbnail, `${path}.thumbnail`);
  for (const [imageIndex, image] of (product.images ?? []).entries()) {
    requireAsset(image, `${path}.images[${imageIndex}]`);
  }
  if (product.pdfBrochure) requireAsset(product.pdfBrochure, `${path}.pdfBrochure`);

  for (const relatedId of product.relatedProducts ?? []) {
    if (!productIds.has(relatedId)) errors.push(`${path}.relatedProducts references unknown product: ${relatedId}`);
  }
});

news.forEach((article, index) => {
  const path = `news[${index}]`;
  requireText(article.id, `${path}.id`);
  requireSlug(article.slug, `${path}.slug`);
  requireText(article.title, `${path}.title`);
  requireText(article.excerpt, `${path}.excerpt`);
  requireText(article.content, `${path}.content`);
  requireDate(article.publishDate, `${path}.publishDate`);
  requireAsset(article.featuredImage, `${path}.featuredImage`);
  if (!newsCategories.has(article.category)) errors.push(`${path}.category is invalid: ${article.category}`);
});

resources.forEach((resource, index) => {
  const path = `resources[${index}]`;
  requireSlug(resource.slug, `${path}.slug`);
  requireText(resource.title, `${path}.title`);
  requireText(resource.shortTitle, `${path}.shortTitle`);
  requireText(resource.eyebrow, `${path}.eyebrow`);
  requireText(resource.description, `${path}.description`);
  requireInternalHref(resource.href, `${path}.href`);
  requireText(resource.audience, `${path}.audience`);
  requireText(resource.supportTitle, `${path}.supportTitle`);
  requireText(resource.supportDescription, `${path}.supportDescription`);
  requireInternalHref(resource.supportHref, `${path}.supportHref`);
  requireText(resource.supportLabel, `${path}.supportLabel`);

  if (!resourceSlugs.has(resource.slug)) errors.push(`${path}.slug is invalid: ${resource.slug}`);
  if (!resourceTones.has(resource.tone)) errors.push(`${path}.tone is invalid: ${resource.tone}`);
  if (!resourceIcons.has(resource.icon)) errors.push(`${path}.icon is invalid: ${resource.icon}`);

  if (!Array.isArray(resource.highlights) || resource.highlights.length === 0) {
    errors.push(`${path}.highlights must contain at least one item`);
  } else {
    resource.highlights.forEach((highlight, highlightIndex) => {
      requireText(highlight, `${path}.highlights[${highlightIndex}]`);
    });
  }

  const validateResourceLink = (link, linkPath) => {
    requireText(link?.title, `${linkPath}.title`);
    requireText(link?.description, `${linkPath}.description`);
    requireInternalHref(link?.href, `${linkPath}.href`);
    if (!resourceIcons.has(link?.icon)) errors.push(`${linkPath}.icon is invalid: ${link?.icon}`);
    if (link?.meta !== undefined) requireText(link.meta, `${linkPath}.meta`);
  };

  validateResourceLink(resource.featured, `${path}.featured`);

  if (!Array.isArray(resource.sections) || resource.sections.length === 0) {
    errors.push(`${path}.sections must contain at least one section`);
    return;
  }

  resource.sections.forEach((section, sectionIndex) => {
    const sectionPath = `${path}.sections[${sectionIndex}]`;
    requireText(section.eyebrow, `${sectionPath}.eyebrow`);
    requireText(section.title, `${sectionPath}.title`);
    requireText(section.description, `${sectionPath}.description`);

    if (!Array.isArray(section.items) || section.items.length === 0) {
      errors.push(`${sectionPath}.items must contain at least one resource`);
      return;
    }

    section.items.forEach((item, itemIndex) => {
      validateResourceLink(item, `${sectionPath}.items[${itemIndex}]`);
    });
  });
});

resourcePages.forEach((page, index) => {
  const path = `resourcePages[${index}]`;
  requireSlug(page.slug, `${path}.slug`);
  requireText(page.title, `${path}.title`);
  requireText(page.eyebrow, `${path}.eyebrow`);
  requireText(page.description, `${path}.description`);
  requireText(page.audience, `${path}.audience`);
  requireText(page.overviewTitle, `${path}.overviewTitle`);
  requireText(page.overviewDescription, `${path}.overviewDescription`);
  requireText(page.noticeTitle, `${path}.noticeTitle`);
  requireText(page.noticeDescription, `${path}.noticeDescription`);

  if (!resourcePageSlugs.has(page.slug)) errors.push(`${path}.slug is invalid: ${page.slug}`);
  if (!resourceTones.has(page.tone)) errors.push(`${path}.tone is invalid: ${page.tone}`);
  if (!resourceIcons.has(page.icon)) errors.push(`${path}.icon is invalid: ${page.icon}`);

  if (!Array.isArray(page.topics) || page.topics.length === 0) {
    errors.push(`${path}.topics must contain at least one topic`);
  } else {
    page.topics.forEach((topic, topicIndex) => {
      const topicPath = `${path}.topics[${topicIndex}]`;
      requireText(topic.title, `${topicPath}.title`);
      requireText(topic.description, `${topicPath}.description`);
      if (!resourceIcons.has(topic.icon)) errors.push(`${topicPath}.icon is invalid: ${topic.icon}`);
    });
  }

  for (const actionName of ["primaryAction", "secondaryAction"]) {
    requireText(page[actionName]?.label, `${path}.${actionName}.label`);
    requireInternalHref(page[actionName]?.href, `${path}.${actionName}.href`);
  }
});

if (errors.length > 0) {
  console.error(`Content validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Content is valid: ${products.length} products, ${categories.length} categories, ${news.length} news articles, ${resources.length} resource collections, ${resourcePages.length} resource pages.`
);
