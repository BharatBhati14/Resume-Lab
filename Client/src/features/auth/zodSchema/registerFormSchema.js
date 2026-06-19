import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(1, "Name is required")
      .max(20, "Name cannot exceed 20 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email")
      .max(40, "Lenght is too long"),
    // /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password cannot exceed 20 characters"),

    confirmPassword: z.string().min(1, "Please confirm your Password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
