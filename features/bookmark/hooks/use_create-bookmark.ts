import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBookmark } from "../services/api";
import { toast } from "sonner";

export const useCreateBookmark = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBookmark,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
      toast.success("Bookmark created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
