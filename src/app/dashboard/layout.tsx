import { NavBarLeftComponent } from "@/components/custom/nav-bar-left.component";
import { NavBarTopComponent } from "@/components/custom/nav-bar-top.component";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex flex-row">
      <NavBarLeftComponent />
      <NavBarTopComponent>
        <main className="flex flex-col gap-4 lg:gap-6 p-4 mt-14">
          {children}
        </main>
      </NavBarTopComponent>
    </div>
  );
}
