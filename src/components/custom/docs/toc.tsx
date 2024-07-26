import { getTocs } from "@/lib/markdown";
import { ScrollArea } from "@/components/ui/scroll-area";
import TocObserver from "@/components/custom/docs/toc-observer";

export default async function Toc({ path }: { path: string }) {
  const tocs = await getTocs(path);

  return (
    <div className="lg:flex hidden toc flex-[1] min-w-[230px] py-8 sticky top-16 h-[95.95vh]">
      <div className="flex flex-col gap-2.5 w-full">
        <h3 className="font-medium text-sm">On this page</h3>
        <ScrollArea className="pb-4 pt-0.5">
          <TocObserver data={tocs} />
        </ScrollArea>
      </div>
    </div>
  );
}
