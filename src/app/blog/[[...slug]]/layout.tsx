import { Footer } from "@/components/custom/docs/footer";
import { Navbar } from "@/components/custom/docs/navbar";
import "../../globals.css";
import { Leftbar } from "@/components/custom/docs/leftbar";
import { BLOG_ROUTES, page_routes } from "@/lib/blog/routes-config";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar page_routes={page_routes} routes={BLOG_ROUTES} />
      <main className="sm:container mx-auto w-[85vw] h-auto">
        <div className="flex items-start gap-14">
          <Leftbar routes={BLOG_ROUTES} />
          <div className="flex-[4]">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
