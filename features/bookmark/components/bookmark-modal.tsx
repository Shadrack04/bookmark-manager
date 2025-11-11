import { useEffect, useId } from "react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useBookmarkStore } from "@/store/bookmark-store";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export default function BookmarkModal() {
  const { isOpen, setIsOpen } = useBookmarkStore();
  const id = useId();
  const form = useForm();
  const { bookmarkItemData } = useBookmarkStore();

  useEffect(() => {
    if (bookmarkItemData) {
      form.reset(bookmarkItemData);
    }
  }, [bookmarkItemData, form]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className=" px-2 md:px-6 py-3 h-auto">
          <Plus className=" size-6 text-white" />
          <span className=" hidden md:block text-white">
            {bookmarkItemData ? "Edit bookmark" : "Add Bookmark"}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className=" w-[80%]">
        <div className="flex flex-col gap-2">
          <DialogHeader className=" text-left">
            <DialogTitle className=" text-secondary text-xl font-bold">
              {bookmarkItemData ? "Edit bookmark" : "Add a bookmark"}
            </DialogTitle>
            <DialogDescription className="">
              {bookmarkItemData
                ? "Update your saved link details — change the title, description, URL, or tags anytime."
                : "Save a link with details to keep your collection organized."}
            </DialogDescription>
          </DialogHeader>
        </div>

        <Form {...form}>
          <form>
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-secondary">Title*</FormLabel>
                    <FormControl>
                      <Input
                        id="title"
                        type="text"
                        {...field}
                        placeholder=""
                        required
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-secondary">
                      Description*
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        id="description"
                        {...field}
                        placeholder=""
                        required
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-secondary">
                      Website URL*
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="url"
                        type="text"
                        {...field}
                        placeholder=""
                        required
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-secondary">Tags*</FormLabel>
                    <FormControl>
                      <Input
                        id="tags"
                        type="text"
                        {...field}
                        placeholder=""
                        required
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className=" flex items-center md:justify-end gap-4 mt-4">
              <Button
                variant="outline"
                className=" flex-1 md:flex-none text-secondary"
              >
                Cancel
              </Button>
              <Button
                type="button"
                className=" flex-1 md:flex-none text-secondary"
              >
                {bookmarkItemData ? "Save Bookmark" : "Add Bookmark"}
              </Button>
            </div>
          </form>
        </Form>

        {/* <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          <span className="text-xs text-muted-foreground">Or</span>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
