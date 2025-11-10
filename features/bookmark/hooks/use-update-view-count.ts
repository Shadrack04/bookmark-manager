import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateViewCount } from "../services/api";
import { toast } from "sonner";

export const useUpdateViewCount = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => updateViewCount(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
