import capsules from "./capsules.json";
import injections from "./injections.json";
import supplements from "./supplements.json";
import syrups from "./syrups.json";
import tablets from "./tablets.json";
import categoriesData from "./categories.json";

export const products = [
  ...capsules,
  ...injections,
  ...supplements,
  ...syrups,
  ...tablets,
];

export const categories = categoriesData;
