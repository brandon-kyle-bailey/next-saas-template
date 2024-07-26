import { Footer } from "@/components/custom/docs/footer";
import { Leftbar } from "@/components/custom/docs/leftbar";
import { Navbar } from "@/components/custom/docs/navbar";
import "../../globals.css";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="sm:container mx-auto w-[85vw] h-auto">
        <div className="flex items-start gap-14">
          <Leftbar />
          <div className="flex-[4]">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
