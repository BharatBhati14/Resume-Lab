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



// Get profile
export const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const profile = await profileModel.findOne({ userId }).select('-_id -userId');

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error Fetching Profile: ${error.message}`,
    });
  }
};


/*


// add experience
exports.addExperience = async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await Profile.findOneAndUpdate(
      { userId },
      {
        $push: { experience: req.body },
      },
      { new: true }
    );

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

// update experience
exports.updateExperience = async (req, res) => {
  try {
    const { expId } = req.params;
    const userId = req.user.id;

    const profile = await Profile.findOneAndUpdate(
      { userId, "experience._id": expId },
      {
        $set: {
          "experience.$": req.body,
        },
      },
      { new: true }
    );

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

// delete experience

exports.deleteExperience = async (req, res) => {
  try {
    const { expId } = req.params;
    const userId = req.user.id;

    const profile = await Profile.findOneAndUpdate(
      { userId },
      {
        $pull: { experience: { _id: expId } },
      },
      { new: true }
    );

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

*/