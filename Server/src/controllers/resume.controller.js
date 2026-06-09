import mongoose from "mongoose";
import resumeModel from "../models/resume.model.js";
import { generateResumePrompt } from "../services/resumeGeneration.prompt.js";
import { generateGeminiResumeContent } from "../services/gemini.service.js";

/**
 *  POST  /api/ai/resumes/generate
 */

export const generateResume = async (req, res) => {
  try {

    // if (!req.body) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "All fields are required",
    //   });
    // }

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

/**
 *  POST  /api/ai/resumes/save
 */

export const saveResume = async (req, res) => {
  try {
    const userId = req.user.userId;
    const resumeContent = req.body;

    if (!resumeContent) {
      return res.status(400).json({
        success: false,
        message: "Resume content is required",
      });
    }

    let resume = await resumeModel.findOne({ userId })

    if(!resume) {
      resume = await resumeModel.create({ userId, ...resumeContent });
    }
    else {
      resume = await resumeModel.findOneAndUpdate(
        { userId }, 
        { ...resumeContent }, 
        { new: true, runValidators: true });
    }

    return res.status(201).json({
      success: true,
      message: "Resume saved successfully",
      resume,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error saving resume: ${error.message}`,
    });
  }
}