import { z } from "zod";

const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters");
const emailSchema = z.email();

export const signUpSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: emailSchema,
  password: passwordSchema,
});

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SignUpType = z.infer<typeof signUpSchema>;
export type SignInType = z.infer<typeof signInSchema>;
