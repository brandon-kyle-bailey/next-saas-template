export const BLOG_ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [{ title: "Installation", href: "/blog/installation" }],
  },
];

export const page_routes = BLOG_ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
