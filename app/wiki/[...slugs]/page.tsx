import { MarkdownContent } from "@/components/markdown/markdown-content";
import { TransparentHeader } from "@/components/sticky-transparent-header";
import { SubPageBackButton } from "@/components/sub-page-back-button";
import { Title } from "@/components/title";
import { getWikiArticleBySlug, getWikiArticleMarkdown } from "@/content/wiki";
import { formatDate } from "@/utils/date/display";

export const revalidate = 100;

interface Props {
  params: { slugs: string[] };
}

export default async function WikiPage({ params }: Props) {
  const slug = params.slugs[0];
  const page = await getWikiArticleBySlug(slug);
  const markdown = await getWikiArticleMarkdown(page.slug);

  const { metadata } = page;

  return (
    <>
      <TransparentHeader className="md:hidden sticky top-0 px-5 py-3">
        <SubPageBackButton href="/wiki" />
      </TransparentHeader>

      <div className="px-5 md:p-5 w-full md:mx-auto md:max-w-[75ch]">
        <Title level={1}>{page.title}</Title>
        <div className="mt-2">
          <p className="font-medium">{page.description}</p>
        </div>

        <hr className="mt-4" />

        <article className="mt-4">
          <MarkdownContent markdown={markdown ?? ""} />
        </article>

        {metadata && (
          <div className="my-10 text-sm p-3 border rounded-md">
            <p>Created {formatDate(metadata.createdAt)}</p>
            <p>Last edited {formatDate(metadata.lastEditedAt)}</p>
          </div>
        )}
      </div>
    </>
  );
}
