import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3),
  email: z.string().email().min(3),
  description: z.string().min(3),
  phone: z.string().min(7),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
