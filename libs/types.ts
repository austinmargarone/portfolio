import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  description: z.string(),
  phone: z.string(),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
