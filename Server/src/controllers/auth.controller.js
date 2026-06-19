import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";
import { generateJwtToken } from "../utils/jwt.js";
import { setTokenCookie, clearTokenCookie } from "../utils/cookie.js";

/**
 * POST /api/auth/register
 */

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 1. Validate input
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 2. Check if user already exists
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // 3. Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // 4. Create user
    const user = await userModel.create({
      username,
      email,
      password: passwordHash,
    });

    // 5. Set auth cookie
    const token = await generateJwtToken({ userId: user._id });

    await setTokenCookie(res, token);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        onboardingCompleted: user.onboardingCompleted,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/**
 * POST /api/auth/login
 */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateJwtToken({ userId: user._id });

    setTokenCookie(res, token);

    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
};

/**
 * GET /api/auth/me
 */
export const userdetails = async (req, res) => {
  try {
    const userPassed = req.user;

    if (!userPassed) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    // console.log(userPassed);

    const user = await userModel.findOne({ _id: userPassed.userId });

    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    return res.status(401).json({ 
        message: "Invalid email or password" 
    })
  }
};


/**
 * GET /api/auth/logout
 */


export const logoutUser = async (req, res) => {
  try {
    clearTokenCookie(res);

    return res.status(200).json({
      success: true,
      message: "Logged out successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Logout failed"
    });
  }
};