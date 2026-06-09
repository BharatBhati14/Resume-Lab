import express from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createProfile, getProfile } from "../controllers/profile.controller.js";

const profileRouter = express.Router();

// POST   /api/profile
profileRouter.post("/", authMiddleware, createProfile);

//  GET    /api/profile
profileRouter.get("/", authMiddleware, getProfile);

export default profileRouter;