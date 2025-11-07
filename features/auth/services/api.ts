import api from "@/lib/axios";
import { SignInType, SignUpType } from "../validation";
import { SIGN_IN_ENDPOINT, SIGN_UP_ENDPOINT } from "@/constants/endpoint";
import { AuthResponse } from "../types";

export const signup = async (data: SignUpType): Promise<AuthResponse> => {
  return await api.post(SIGN_UP_ENDPOINT, data);
};

export const signin = async (data: SignInType): Promise<AuthResponse> => {
  return await api.post(SIGN_IN_ENDPOINT, data);
};
