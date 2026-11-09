import links from "./links.json";

export interface HuskerLink {
  title: string;
  categoryIds: string[];
  description: string;
  url: string;
  filterIds: string[];
}

export const linkFilterMap = {
  graduateOnly: "ukCx",
  undergraduateOnly: "nT[|",
};

/** All links, in display order (content/links.json is kept sorted). */
export async function getLinks(): Promise<HuskerLink[]> {
  return links.map(({ title, url, description, categoryIds, filterIds }) => ({
    title,
    url,
    description,
    categoryIds,
    filterIds,
  }));
}
