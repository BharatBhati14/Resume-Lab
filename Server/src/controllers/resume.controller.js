import resumeModel from "../models/resume.model.js";
import mongoose from "mongoose";

/**
 *  POST  /api/resumes
 */
export const createResume = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title?.trim()) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const resume = await resumeModel.create({ userId: req.user.userId, title });

    return res.status(201).json({
      success: true,
      message: "Resume Created successfully",
      resume,
    });
  } catch (error) {
    console.error("Resume Creation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/**
 *  GET  /api/resumes
 */

export const getAllResumes = async (req, res) => {
  try {
    const { userId } = req.user;

    if (!userId) {
      return res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }

    const resumes = await resumeModel.find({ userId }).sort({ updatedAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Resumes Fetched Successfully",
      resumes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

/**
 *  GET  /api/resumes/:id
 */

export const getSingleResume = async (req, res) => {
  try {
    const { userId } = req.user;
    const resumeId = req.params.id;

    if (!userId || !resumeId) {
      return res.status(404).json({
        success: false,
        message: "Something went wrong 1",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(resumeId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid resume ID",
      });
    }

    const resume = await resumeModel.findOne({ _id: resumeId, userId });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Resume Fetched Successfully",
      resume,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

/**
 *  PATCH   /api/resumes/:id
 */

export const updateResume = async (req, res) => {
  try {
    const { userId } = req.user;
    const resumeId = req.params.id;
    const { payload } = req.body;

    if (!userId || !resumeId || !payload) {
      return res.status(404).json({
        success: false,
        message: "Something went wrong",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(resumeId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid resume ID",
      });
    }

    const resume = await resumeModel.findOneAndUpdate(
      { _id: resumeId, userId },
    //   { $set: { title } },
      payload,
      { new: true },
    );

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Resume Updated Successfully",
      resume,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

/**
 *  DELETE  /api/resumes/:id
 */

export const deleteResume = async (req, res) => {
  try {
    const { userId } = req.user;
    const resumeId = req.params.id;

    if (!userId || !resumeId) {
      return res.status(404).json({
        success: false,
        message: "Something went wrong",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(resumeId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid resume ID",
      });
    }

    const resume = await resumeModel.findOneAndDelete({
      _id: resumeId,
      userId,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Resume deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

/**
 *  POST   /api/resumes/:id/duplicate
 */

export const duplicateResume = async (req, res) => {
  try {
    const { userId } = req.user;
    const resumeId = req.params.id;

    if (!userId || !resumeId) {
      return res.status(404).json({
        success: false,
        message: "Something went wrong",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(resumeId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid resume ID",
      });
    }

    const originalResume = await resumeModel.findOne({
      _id: resumeId,
      userId: userId,
    });

    if (!originalResume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found or unauthorized",
      });
    }

    const resumeData = originalResume.toObject();
    delete resumeData._id;
    delete resumeData.__v;

    resumeData.createdAt = new Date();
    resumeData.updatedAt = new Date();

    // resumeData.title = `${resumeData.title} (Copy)`;

    const duplicateResume = await resumeModel.create({ ...resumeData });

    if (!duplicateResume) {
      return res.status(404).json({
        success: false,
        message: "Something went wrong",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Resume duplicated Successfully",
      originalResume,
      duplicateResume,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
