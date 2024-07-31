import Pagination from "@/components/custom/docs/pagination";
import { getMarkdownForSlug } from "@/lib/docs/markdown";
import { page_routes } from "@/lib/docs/routes-config";
import { notFound } from "next/navigation";
import { PropsWithChildren, cache } from "react";

type PageProps = {
  params: { slug: string[] };
};

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  slug.unshift("docs");
  const pathName = slug.join("/");
  const res = await cachedGetMarkdownForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex pt-10 justify-center align-middle items-center w-full">
      <Markdown>
        <h1>{res.frontmatter.title}</h1>
        <p className="-mt-4 text-muted-foreground text-[16.5px]">
          {res.frontmatter.description}
        </p>
        <div>{res.content}</div>
        <Pagination pathname={pathName} />
      </Markdown>
    </div>
  );
}

function Markdown({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-zinc dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-neutral-800 prose-code:p-1 prose-code:rounded-md prose-pre:border pt-2">
      {children}
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  slug.unshift("docs");
  const pathName = slug.join("/");
  const res = await cachedGetMarkdownForSlug(pathName);
  if (!res) return {};
  const { frontmatter } = res;
  return {
    title: `The Startup Stack - ${frontmatter.title}`,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/"),
  }));
}
