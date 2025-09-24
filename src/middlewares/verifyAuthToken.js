require("dotenv").config();
const jwt = require("jsonwebtoken");
const CustomError = require("./customError");

const verifyAuthToken = (req, res, next) => {
  const header = req.headers["authorization"];

  if (!header || !header.startsWith("Bearer ")) {
    throw new CustomError("Access denied. No token provided.", 401);
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch {
    throw new CustomError("Access denied. expired token.", 401);
  }
};

module.exports = verifyAuthToken;

/**
 * 🔐 Expected from frontend:
 * Send the access token inside a custom header called "Authorization"
 * Format: "Bearer <access_token>"
 *
 * Example:
 * {
 *   "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * }
 *
 * This middleware extracts and verifies the access token using ACCESS_TOKEN_SECRET.
 * If valid, attaches the decoded user payload to req.user.
 */
