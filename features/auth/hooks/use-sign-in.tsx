import { useMutation } from "@tanstack/react-query";
import { signin } from "../services/api";

export const useSignin = () => {
  return useMutation({
    mutationFn: signin,
    onSuccess(data) {
      console.log(data);
    },
  });
};
