import { describe, it, expect } from "vitest";
import { products, categories, newsArticles, getProductBySlug, filterProducts, companyInfo } from "@/data";

describe("Data Layer", () => {
  it("has products with required fields", () => {
    expect(products.length).toBeGreaterThan(0);
    for (const product of products) {
      expect(product.id).toBeTruthy();
      expect(product.slug).toBeTruthy();
      expect(product.name).toBeTruthy();
      expect(typeof product.featured).toBe("boolean");
    }
  });

  it("has categories defined", () => {
    expect(categories.length).toBeGreaterThan(0);
    for (const cat of categories) {
      expect(cat.slug).toBeTruthy();
      expect(cat.name).toBeTruthy();
    }
  });

  it("has news articles", () => {
    expect(newsArticles.length).toBeGreaterThan(0);
    for (const article of newsArticles) {
      expect(article.slug).toBeTruthy();
      expect(article.title).toBeTruthy();
      expect(article.content).toBeTruthy();
    }
  });

  it("getProductBySlug returns correct product", () => {
    const product = getProductBySlug("alvorpar-500");
    expect(product).toBeDefined();
    expect(product?.name).toBe("AlvorPar 500");
  });

  it("getProductBySlug returns undefined for unknown slug", () => {
    const product = getProductBySlug("nonexistent-product");
    expect(product).toBeUndefined();
  });

  it("filterProducts by category", () => {
    const result = filterProducts({ category: "tablets" });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((p) => p.category === "Tablets")).toBe(true);
  });

  it("filterProducts by category and subcategory", () => {
    const result = filterProducts({ category: "tablets", subCategory: "Immediate Release" });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((p) => p.category === "Tablets" && p.subCategory === "Immediate Release")).toBe(true);
  });

  it("filterProducts by search", () => {
    const result = filterProducts({ search: "alvorpar" });
    expect(result.length).toBeGreaterThan(0);
  });

  it("companyInfo has required fields", () => {
    expect(companyInfo.name).toBe("Alvor Healthcare Company Limited");
    expect(companyInfo.contact.country).toBe("Myanmar");
    expect(companyInfo.contact.phones).toHaveLength(3);
    expect(companyInfo.contact.locations.length).toBeGreaterThanOrEqual(2);
    expect(companyInfo.contact.email).toContain("@");
  });
});
