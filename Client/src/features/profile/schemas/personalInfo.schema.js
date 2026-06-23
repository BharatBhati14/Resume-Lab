import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(50, "Lenght is too long"),

  email: z.string().trim().email("Invalid email").max(80, "Lenght is too long"),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .optional(),

  location: z.string().max(50).optional(),

  website: z.string().max(100).url("Invalid URL").optional().or(z.literal("")),

  linkedin: z
    .string()
    .max(100)
    .url("Invalid LinkedIn URL")
    .optional()
    .or(z.literal("")),

  github: z
    .string()
    .max(100)
    .url("Invalid GitHub URL")
    .optional()
    .or(z.literal("")),

  portfolio: z
    .string()
    .max(100)
    .url("Invalid Portfolio URL")
    .optional()
    .or(z.literal("")),

  profileImage: z.string().max(100).optional(),
});
