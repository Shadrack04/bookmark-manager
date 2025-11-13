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

export default function ConfirmationDialog() {
  return (
    <AlertDialog open={true}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Alert dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" w-[30%] flex flex-col gap-6 bg-foreground">
        <AlertDialogHeader>
          <AlertDialogTitle className=" text-secondary">
            Archive bookmark
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want archive this bookmark?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className=" text-secondary border-0.5 bg-background">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className=" text-secondary">
            Archive
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
