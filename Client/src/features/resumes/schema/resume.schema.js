import z from "zod";
import { personalInfoSchema } from "../../profile/schemas/personalInfo.schema";

// ********** Title & Summary Schema **********
export const titleSummarySchema = z.object({
  title: z
    .string()
    .trim()
    // .min(2, "Title is required")
    .max(100, "Title cannot exceed 100 characters"),

  summary: z
    .string()
    .trim()
    // .min(20, "Summary should be at least 20 characters")
    .max(500, "Summary cannot exceed 1200 characters"),
});

// ********** Experience Schema **********
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
  experience: z
    .array(experienceItemSchema)
    // .min(1, "Add at least one experience")
    .max(5, "Maximum 5 experiences allowed"),
});

// ********** Project Schema **********
export const projectItemSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Project title is required")
    .max(100, "Project title is too long"),

  description: z
    .string()
    .trim()
    .min(20, "Description must be 20 characters long")
    .max(500, "Project description is too long"),

  technologies: z
    .string()
    .trim()
    .min(1, "Add at least one technology")
    .max(150, "Technologies list is too long"),

  liveUrl: z
    .string()
    .trim()
    .url("Enter a valid Live URL")
    .optional()
    .or(z.literal("")),

  githubUrl: z
    .string()
    .trim()
    .url("Enter a valid GitHub URL")
    .optional()
    .or(z.literal("")),
});

export const projectsSchema = z.object({
  projects: z
    .array(projectItemSchema)
    .min(1, "Add at least one project")
    .max(3, "Project limit is 3"),
});

// ********** Education Schema **********

export const educationItemSchema = z
  .object({
    institution: z
      .string()
      .trim()
      .min(1, "Institution is required")
      .max(150, "Institution name is too long"),

    degree: z
      .string()
      .trim()
      .min(1, "Degree is required")
      .max(100, "Degree is too long"),

    fieldOfStudy: z
      .string()
      .trim()
      .min(1, "Field of study is required")
      .max(100, "Field of study is too long"),

    location: z
      .string()
      .trim()
      .max(100, "Location is too long")
      .optional()
      .or(z.literal("")),

    startDate: z.string().min(1, "Start date is required"),

    isCurrent: z.boolean(),

    endDate: z.string().optional(),

    grade: z
      .string()
      .trim()
      .max(50, "Grade is too long")
      .optional()
      .or(z.literal("")),

    description: z
      .string()
      .trim()
      .max(200, "Description is too long")
      .optional()
      .or(z.literal("")),
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

export const educationSchema = z.object({
  education: z
    .array(educationItemSchema)
    // .min(1, "Add at least one education")
    .max(3, "Maximum 5 education entries allowed"),
});


// ********** Skills Schema **********
export const skillsSchema = z.object({
  technical: z
    .string()
    .trim()
    .min(1, "At least one technical skill is required")
    .max(300, "limit reached."),

  soft: z.string().trim().max(300, "limit reached.").optional(),

  tools: z.string().trim().max(300, "limit reached.").optional(),
});

// ********** Certifications Schema **********
export const certificationItemSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Certification name is required")
    .max(150, "Certification name is too long"),

  issuer: z
    .string()
    .trim()
    .min(1, "Issuer is required")
    .max(100, "Issuer name is too long"),

  issueDate: z.string().min(1, "Issue date is required"),

  url: z.string().trim().url("Enter a valid URL").optional().or(z.literal("")),
});

export const certificationsSchema = z.object({
  certifications: z
    .array(certificationItemSchema)
    // .min(1, "Add at least one certification")
    .max(5, "Maximum 5 certifications allowed"),
});


// ********** Language Schema **********
export const languageItemSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Language is required")
    .max(50, "Language name is too long"),

  proficiency: z.enum(
    ["basic", "intermediate", "fluent", "native"],
    {
      errorMap: () => ({
        message: "Select a proficiency level",
      }),
    }
  ),
});

export const languagesSchema = z.object({
  languages: z
    .array(languageItemSchema)
    // .min(1, "Add at least one language")
    .max(5, "Maximum 5 languages allowed"),
});