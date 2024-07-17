import NavLeftComponent from "@/app/dashboard/(components)/nav-left.component";
import NavTopComponent from "@/app/dashboard/(components)/nav-top.component";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <NavLeftComponent />
      <div className="flex flex-col">
        <NavTopComponent />
        {children}
      </div>
    </div>
  );
}
