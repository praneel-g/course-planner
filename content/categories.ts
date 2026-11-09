import categories from "./categories.json";
import { WikiArticle, getWikiArticle } from "./wiki";

export interface Category {
  id: string;
  title: string;
  slug: string;
  wikiArticle?: WikiArticle;
}

type CategoryRow = (typeof categories)[number];

async function toCategory({ id, title, slug, wikiPageId }: CategoryRow): Promise<Category> {
  const wikiArticle = wikiPageId ? await getWikiArticle(wikiPageId) : undefined;
  return { id, title, slug, wikiArticle };
}

/** Categories shown on the links page, in their links-page order. */
export async function getLinksCategories() {
  const rows = categories
    .filter((category) => category.isLinksCategory)
    .sort((a, b) => (a.linksOrder ?? Infinity) - (b.linksOrder ?? Infinity));
  return Promise.all(rows.map(toCategory));
}

/** All categories, in wiki order (content/categories.json is kept in that order). */
export async function getWikiCategories() {
  return Promise.all(categories.map(toCategory));
}
