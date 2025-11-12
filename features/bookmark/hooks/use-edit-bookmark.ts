import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateRequestData } from "../types";
import { editBookmark } from "../services/api";
import { toast } from "sonner";

export const useEditBookmark = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateRequestData) => editBookmark(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
      toast.success("Bookmark edited successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
