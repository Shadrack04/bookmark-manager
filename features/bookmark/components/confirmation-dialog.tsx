import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type ConfirmationDialogProps = {
  dialogTitle: string;
  dialogDescription: string;
  onConfirm: () => void;
  btnVariant?: string;
  confirmText: string;
  children: React.ReactNode;
};

export default function ConfirmationDialog({
  dialogTitle,
  dialogDescription,
  onConfirm,
  btnVariant,
  confirmText,
  children,
}: ConfirmationDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className=" w-[30%] flex flex-col gap-6 bg-foreground">
        <AlertDialogHeader>
          <AlertDialogTitle className=" text-secondary">
            {dialogTitle}
          </AlertDialogTitle>
          <AlertDialogDescription>{dialogDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className=" text-secondary border-0.5 bg-background">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className=" text-secondary" asChild>
            <Button onClick={onConfirm}>{confirmText}</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
