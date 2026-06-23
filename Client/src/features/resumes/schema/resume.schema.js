import z from "zod";
import { personalInfoSchema } from "../../profile/schemas/personalInfo.schema";

// export const resumeSchema = z.object({
//   personalInfo: personalInfoSchema,
//   experience: z.array(
//     z.object({
//       company: z.string().min(1),
//       role: z.string().min(1),
//       startDate: z.string(),
//       endDate: z.string().optional(),
//       description: z.string().optional(),
//     }),
//   ),

//   education: z.array(z.any()),

//   projects: z.array(z.any()),

//   skills: z.object({}).optional(),
// });

export const experienceItemSchema = z
  .object({
    company: z
      .string()
      .trim()
      .min(1, "Company name is required")
      .max(100, "Company name is too long"),

    jobTitle: z
      .string()
      .trim()
      .min(1, "Job title is required")
      .max(100, "Job title is too long"),

    location: z
      .string()
      .trim()
      .max(100, "Location is too long")
      .optional()
      .or(z.literal("")),

    startDate: z.string().min(1, "Start date is required"),

    isCurrent: z.boolean(),

    endDate: z.string().optional(),

    description: z
      // .array(
      // z.
      .string()
      .trim()
      .min(1, "Description cannot be empty")
      .max(500, "Description is too long"),
    // )
    // .min(1, "Add at least one responsibility"),

    technologies: z.string().trim().min(1).max(300),
  })
  .superRefine((data, ctx) => {
    if (!data.isCurrent && !data.endDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["endDate"],
        message: "End date is required",
      });
    }

    if (
      data.startDate &&
      data.endDate &&
      new Date(data.endDate) < new Date(data.startDate)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["endDate"],
        message: "End date must be after start date",
      });
    }
  });

export const experienceSchema = z.object({
  experience: z.array(experienceItemSchema),
});
