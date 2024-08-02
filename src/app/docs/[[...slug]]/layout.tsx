import { Footer } from "@/components/custom/docs/footer";
import { Leftbar } from "@/components/custom/docs/leftbar";
import { Navbar } from "@/components/custom/docs/navbar";
import { DOCS_ROUTES, page_routes } from "@/lib/docs/routes-config";
import "../../globals.css";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar page_routes={page_routes} routes={DOCS_ROUTES} />
      <main className="sm:container mx-auto w-[85vw] h-auto">
        <div className="flex items-start gap-14">
          <Leftbar routes={DOCS_ROUTES} />
          <div className="flex-[4]">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
