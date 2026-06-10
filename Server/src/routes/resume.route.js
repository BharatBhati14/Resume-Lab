import express from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {generateResume, saveResume, updateResumeSection } from "../controllers/resume.controller.js";

const resumeRouter = express.Router();

// POST   /api/ai/resumes/generste
resumeRouter.post("/generate", authMiddleware, generateResume);

// POST   /api/ai/resumes/save
resumeRouter.post("/save", authMiddleware, saveResume);

// POST   /api/ai/resumes/regenerate
resumeRouter.post("/regenerate", authMiddleware, updateResumeSection);

export default resumeRouter;