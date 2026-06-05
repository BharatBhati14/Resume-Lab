import jwt from "jsonwebtoken";
import {config} from "../config/config.js";

// Generate JWT Token
export const generateJwtToken = (payload) => {
  return jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES_IN
  });
};

// Verify JWT Token
export const verifyJwtToken = (token) => {
  try {
    return jwt.verify(token, config.JWT_SECRET);
  } catch (error) {
    return null;
  }
};