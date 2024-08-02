export const BLOG_ROUTES = [
  {
    title: "Getting Started",
    href: "blog/getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      { title: "Project Structure", href: "/project-structure" },
      { title: "Changelog", href: "/changelog" },
      { title: "FAQ", href: "/faq" },
    ],
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
