import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { signin } from "../services/api";

import { toast } from "sonner";
import { useSessionStore } from "@/store/session";
import { COOKIE_NAME } from "@/constants";

export const useSignin = () => {
  const { setSession } = useSessionStore();
  return useMutation({
    mutationFn: signin,
    onSuccess(data) {
      const { token, user } = data.data.data;
      toast.success(data.data.message);
      setSession(token, user);

      Cookies.set(COOKIE_NAME, token, {
        path: "/",
        expires: 1,
        sameSite: "Lax",
      });

      window.location.href = "/";
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
