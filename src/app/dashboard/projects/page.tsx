import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no projects
          </h3>
          <p className="text-sm text-muted-foreground">
            Get started by creating a project.
          </p>
          <Button className="mt-4">Create Project</Button>
        </div>
      </div>
    </main>
  );
}
