import DashboardOnboardingComponent from "@/components/custom/dashboard-onboarding.component";

export default function DashboardPage() {
  const someVar = false;
  return someVar ? (
    <div>hello there</div>
  ) : (
    <DashboardOnboardingComponent redirectTo="/dashboard/create" />
  );
}
