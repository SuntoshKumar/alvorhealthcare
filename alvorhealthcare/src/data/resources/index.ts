import collections from "./collections.json";
import pages from "./pages.json";

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

export const resources = collections;
export const resourcePages = pages;
