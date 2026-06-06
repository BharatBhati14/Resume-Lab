import express from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createResume, getAllResumes, getSingleResume, updateResume, deleteResume, duplicateResume } from "../controllers/resume.controller.js";

const resumeRouter = express.Router();

// POST   /api/resumes
resumeRouter.post("/", authMiddleware, createResume)

// GET    /api/resumes
resumeRouter.get("/", authMiddleware, getAllResumes)

// GET    /api/resumes/:id
resumeRouter.get("/:id", authMiddleware, getSingleResume)

// PATCH  /api/resumes/:id
resumeRouter.patch("/:id", authMiddleware, updateResume);

// DELETE /api/resumes/:id
resumeRouter.delete("/:id", authMiddleware, deleteResume);

// POST /api/resumes/:id/duplicate
resumeRouter.post("/:id/duplicate", authMiddleware, duplicateResume);


export default resumeRouter;