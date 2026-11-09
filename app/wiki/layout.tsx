import { getWikiArticles } from "@/content/wiki";
import { ReactNode } from "react";
import { WikiPageLayoutContainer } from "./wiki-layout-container";
import { getWikiCategories } from "@/content/categories";

export const revalidate = 1000;

export default async function WikiPageLayout({ children }: { children: ReactNode }) {
  const categories = await getWikiCategories();
  const articles = await getWikiArticles();

  return (
    <WikiPageLayoutContainer articles={articles} categories={categories}>
      {children}
    </WikiPageLayoutContainer>
  );
}
