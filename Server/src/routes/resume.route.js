import express from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {generateResume } from "../controllers/resume.controller.js";

const resumeRouter = express.Router();

// POST   /api/ai/resumes/generste
resumeRouter.post("/generate", authMiddleware, generateResume)

export default resumeRouter;