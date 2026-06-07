import resumeModel from "../models/resume.model.js";
import mongoose from "mongoose";
import { generateResumePrompt } from "../services/resumeGeneration.prompt.js";
import { generateGeminiResumeContent } from "../services/gemini.service.js";

/**
 *  POST  /api/ai/resumes/generate
 */

export const generateResume = async (req, res) => {
  try {

    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const prompt = generateResumePrompt(req.body);

    const response = await generateGeminiResumeContent(prompt);

    const result = JSON.parse(response);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Resume Generation Error: ${error.message}`,
    });
  }

};
