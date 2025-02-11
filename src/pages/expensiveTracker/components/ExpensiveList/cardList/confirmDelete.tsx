import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { X } from "lucide-react";

const ConfirmDelete = ({
  open,
  setOpen,
  confirm,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  confirm: () => void;
}) => {
  return (
    <Dialog open={open} modal={true}>
      <DialogContent className="sm:max-w-[358px] h-[272px] py-0 bg-white !rounded-[25px] max-sm:w-[300px]">
        <div
          onClick={() => setOpen(false)}
          className="absolute right-1 top-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground bg-blue-dialogue h-[40px] w-[40px] rounded-[11px] z-[40] flex items-center"
        >
          <X className="h-4 w-4" />
        </div>
        <div className="mt-20">
          <p className="font-[600] w-[276px] break-words h-[56px] text-center flex align-center text-[20px] items-center justify-center m-auto max-sm:w-auto">
            Are You Sure You want to delete this expenses
          </p>
        </div>
        <DialogFooter className="flex justify-center gap-4 mt-4 flex-row">
          <button
            type="submit"
            className="bg-red-600 h-[40px] rounded-full
             hover:bg-white  hover:border hover:border-red
             hover:text-red-600 text-white w-1/2 transition-color"
            onClick={() => {
              confirm();
              setOpen(false);
            }}
            aria-label="confirm delete"
          >
            confirm
          </button>
          <button
            onClick={() => {
              setOpen(false);
            }}
            type="button"
            className="border border-re h-[40px] rounded-full text-primary
             w-1/2  hover:bg-primary hover:text-white transition-colors"
            aria-label="cancel delete"
          >
            cancel
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default ConfirmDelete;
