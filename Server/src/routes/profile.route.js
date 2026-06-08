import express from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createProfile } from "../controllers/profile.controller.js";

const ProfileRouter = express.Router();

// POST   /api/profile
ProfileRouter.post("/", authMiddleware, createProfile)

export default ProfileRouter;