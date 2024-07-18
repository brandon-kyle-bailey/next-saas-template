"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarComponent() {
  const pathname = usePathname();
  return (
    <nav
      className="grid gap-4 text-sm text-muted-foreground"
      x-chunk="dashboard-04-chunk-0"
    >
      <Link
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          {
            "text-primary bg-muted": pathname === "/dashboard/settings/profile",
          },
        )}
        href="/dashboard/settings/profile"
      >
        Profile
      </Link>
      <Link
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          {
            "text-primary bg-muted": pathname === "/dashboard/settings/account",
          },
        )}
        href="/dashboard/settings/account"
      >
        Account
      </Link>
      <Link
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          {
            "text-primary bg-muted":
              pathname === "/dashboard/settings/appearance",
          },
        )}
        href="/dashboard/settings/appearance"
      >
        Appearance
      </Link>
      <Link
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          {
            "text-primary bg-muted":
              pathname === "/dashboard/settings/notifications",
          },
        )}
        href="/dashboard/settings/notifications"
      >
        Notifications
      </Link>
    </nav>
  );
}
