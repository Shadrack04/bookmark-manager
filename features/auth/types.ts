import { User } from "@/types";

type Data = {
  token: string;
  user: User;
};

export type SignInResponse = {
  data: {
    message: string;
    success: boolean;
    data: Data;
  };
};
