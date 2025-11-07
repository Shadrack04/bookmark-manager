import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/api";
import { useSessionStore } from "@/store/session";
import { toast } from "sonner";

export const useSignUp = () => {
  const { setSession } = useSessionStore();
  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      toast.success(data.data.message);
      const { token, user } = data.data.data;
      setSession(token, user);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
