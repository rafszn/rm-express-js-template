const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const corsOptions = require("../config/corsOptions");
const rateLimit = require("express-rate-limit");

function setupMiddlewares(app) {
  // Parse cookies
  app.use(cookieParser());

  // Parse URL-encoded data
  app.use(express.urlencoded({ extended: true }));

  // Setup CORS
  app.use(cors(corsOptions));

  // Setup Rate Limiting (only on /v1/auth routes)
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many requests from this IP, please try again later.",
  });

  app.use("/v1/auth", limiter);
}

module.exports = setupMiddlewares;
