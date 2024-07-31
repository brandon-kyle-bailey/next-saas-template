import { Footer } from "@/components/custom/docs/footer";
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
      <main className="sm:container mx-auto w-full h-auto">
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}
