import { Card, CardContent } from "@/components/ui/card";

export const WhenToSwitchFrom = (): JSX.Element => {
  return (
    <div className="bg-neutral-colorswhite overflow-hidden w-full min-w-[766px] min-h-[540px] flex items-start justify-start p-10">
      <Card className="w-[209px] border-0 shadow-none">
        <CardContent className="p-0 flex flex-col gap-3">
          <h2 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#001489] text-sm tracking-[0] leading-normal">
            WHEN TO SWITCH FROM PRIMARY TO SECONDARY
          </h2>

          <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#5a5a5a] text-[8px] tracking-[0] leading-normal">
            To keep our logo looking professional and recognizable, it&apos;s
            important that it always appears exactly as designed. Please
            don&apos;t change, redraw, add to, or adjust the logo in any way.
            Always use the official artwork provided.
            <br />
            <br />
            To help explain this, here are a few common mistakes to avoid.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
