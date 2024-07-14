import { HomeIcon, PanelsTopLeft, Settings } from "lucide-react";
import { RoutesEnum } from "@/lib/enum/routes.enum";

export const navItems = [
  {
    href: RoutesEnum.DASHBOARD,
    name: "Dashboard",
    icon: (styles?: string) => (
      <HomeIcon className={styles ? styles : "h-3 w-3"} />
    ),
  },
  {
    href: RoutesEnum.EXAMPLE_ONE,
    name: "Example 1",
    icon: (styles?: string) => (
      <PanelsTopLeft className={styles ? styles : "h-3 w-3"} />
    ),
  },
  {
    href: RoutesEnum.DASHBOARD_SETTINGS,
    name: "Settings",
    icon: (styles?: string) => (
      <Settings className={styles ? styles : "h-3 w-3"} />
    ),
  },
];
