import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/api";
import { useSessionStore } from "@/store/session";
import { toast } from "sonner";
import { COOKIE_NAME } from "@/constants";

export const useSignUp = () => {
  const { setSession } = useSessionStore();
  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      toast.success(data.data.message);
      const { token, user } = data.data.data;

      setSession(token, user);

      Cookies.set(COOKIE_NAME, token, {
        path: "/",
        sameSite: "Lax",
        expires: 1,
      });

      window.location.href = "/";
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
