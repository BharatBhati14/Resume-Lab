import profileModel from "../models/profile.model.js";

export const createProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // from auth middleware

    const profileData = req.body;

    let profile = await profileModel.findOne({ userId });

    if (!profile) {
      profile = new profileModel({ userId, ...profileData });
    } else {
      await Object.assign(profile, profileData);
    }

    await profile.save();

    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ******************************************************