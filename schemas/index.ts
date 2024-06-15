import * as z from "zod";

export const SigninSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8),
});
