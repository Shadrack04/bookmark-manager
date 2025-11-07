import { useMutation } from "@tanstack/react-query";
import { signin } from "../services/api";

import { toast } from "sonner";
import { useSessionStore } from "@/store/session";

export const useSignin = () => {
  const { setSession } = useSessionStore();
  return useMutation({
    mutationFn: signin,
    onSuccess(data) {
      const { token, user } = data.data.data;
      toast.success(data.data.message);
      setSession(token, user);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
