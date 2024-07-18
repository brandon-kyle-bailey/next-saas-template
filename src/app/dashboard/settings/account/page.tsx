import NavBarComponent from "@/app/dashboard/settings/(components)/nav-bar.component";
import { AccountForm } from "@/app/dashboard/settings/account/account-form";
import { Separator } from "@/components/ui/separator";

export default function SettingsAccount() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
