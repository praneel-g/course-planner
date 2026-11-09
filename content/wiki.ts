// Wiki articles from content/articles.json and their Markdown in
// content/pages/<slug>.md. The content was exported from Husker's Notion
// workspace by husker's scripts/export-notion.mjs.
import articles from "./articles.json";
import { readContentFile } from "./read";

export interface WikiArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryIds: string[];
  metadata?: ArticleMetadata;
}
interface ArticleMetadata {
  createdAt: Date;
  lastEditedAt: Date;
}

type ArticleRow = (typeof articles)[number];

function toWikiArticle({ id, slug, title, description, categoryIds, createdAt, lastEditedAt }: ArticleRow): WikiArticle {
  return {
    id,
    slug,
    title,
    description,
    categoryIds,
    metadata: { createdAt: new Date(createdAt), lastEditedAt: new Date(lastEditedAt) },
  };
}

/** All wiki articles, sorted by title (content/articles.json is kept sorted). */
export async function getWikiArticles() {
  return articles.map(toWikiArticle);
}

export async function getWikiArticleBySlug(slug: string) {
  const article = articles.find((article) => article.slug === slug);
  if (!article) throw new Error(`No wiki article with slug "${slug}"`);
  return toWikiArticle(article);
}

export async function getWikiArticle(id: string) {
  const article = articles.find((article) => article.id === id);
  if (!article) throw new Error(`No wiki article with id "${id}"`);
  return toWikiArticle(article);
}

/** A wiki article's Markdown, or null if it has none. */
export async function getWikiArticleMarkdown(slug: string) {
  return readContentFile("pages", slug);
}
