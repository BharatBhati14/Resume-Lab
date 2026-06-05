import { config } from "../config/config.js";

// Set auth cookie
export const setTokenCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true, // prevents XSS attacks
    secure: config.NODE_ENV === "production", // HTTPS only in prod
    sameSite: "strict", // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
};

// Clear cookie (logout)
export const clearTokenCookie = (res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict"
  });
};