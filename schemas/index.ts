import * as z from "zod";

export const SigninSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Enter an email address",
  }),
  password: z.string().min(6, {
    message: "Use 6 characters or more for your password",
  }),
  name: z.string().min(1, {
    message: "Enter your name",
  }),
});
