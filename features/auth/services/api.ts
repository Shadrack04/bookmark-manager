import api from "@/lib/axios";
import { SignInType, SignUpType } from "../validation";
import { SIGN_IN_ENDPOINT, SIGN_UP_ENDPOINT } from "@/constants/endpoint";
import { SignInResponse } from "../types";

export const signup = async (data: SignUpType) => {
  return await api.post(SIGN_UP_ENDPOINT, data);
};

export const signin = async (data: SignInType): Promise<SignInResponse> => {
  return await api.post(SIGN_IN_ENDPOINT, data);
};
