import { getLinksCategories } from "@/content/categories";
import { getLinks } from "@/content/links";
import { LinksDisplay } from "./links-display";

export default async function HubPage() {
  const categories = await getLinksCategories();
  const links = await getLinks();

  const [appCategory, ...otherCategories] = categories;
  return <LinksDisplay appCategory={appCategory} categories={otherCategories} links={links} />;
}
