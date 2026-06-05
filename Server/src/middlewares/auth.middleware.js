import { verifyJwtToken } from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {
  try {
    const token =
      req.cookies?.token ||
      req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided"
      });
    }

    const decoded = verifyJwtToken(token);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token"
      });
    }

    req.user = decoded; // attach user to request

    next();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Auth error"
    });
  }
};