import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ReactNode } from "react";
interface ISheetProps {
  open?: boolean;
  children: ReactNode;
}

export function SheetComponent({
  children,
  open,
}: Pick<ISheetProps, "children" | "open">) {
  return (
    <Sheet open={open}>
      <SheetContent>{children}</SheetContent>
    </Sheet>
  );
}
