import Pagination from "@/components/custom/docs/pagination";
import { getMarkdownForSlug } from "@/lib/markdown";
import { page_routes } from "@/lib/blog/routes-config";
import { notFound } from "next/navigation";
import { PropsWithChildren, cache } from "react";
import DocsBreadcrumb from "@/components/custom/docs/docs-breadcrumb";
import Toc from "@/components/custom/docs/toc";

type PageProps = {
  params: { slug: string[] };
};

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);

export default async function BlogPage({ params: { slug = [] } }: PageProps) {
  slug.unshift("blog");
  let pathName = slug.join("/");
  if (pathName === "blog") {
    pathName = page_routes[0].href;
    slug = page_routes[0].href.split("/");
  }
  console.log(pathName);
  const res = await cachedGetMarkdownForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-12">
      <div className="flex-[3] pt-10">
        <DocsBreadcrumb paths={slug} />
        <Markdown>
          <h1>{res.frontmatter.title}</h1>
          <p className="-mt-4 text-muted-foreground text-[16.5px]">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <Pagination page_routes={page_routes} pathname={pathName} />
        </Markdown>
      </div>
      <Toc path={pathName} />
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
  slug.unshift("blog");
  let pathName = slug.join("/");
  if (pathName === "blog") {
    pathName = page_routes[0].href;
    slug = page_routes[0].href.split("/");
  }
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
