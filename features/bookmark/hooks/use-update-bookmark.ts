import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBookmarkById } from "../services/api";
import { toast } from "sonner";
import { UpdateRequestData } from "../types";

export const useUpdateBookmark = (id: string, data: UpdateRequestData) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => updateBookmarkById(id, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
      toast.success("Status updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
