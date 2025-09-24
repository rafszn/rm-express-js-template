const { generateAccessToken, generateRefreshToken } = require("../lib/tokens");
const asyncHandler = require("../middlewares/asyncHandler");
const bcrypt = require("bcryptjs");

exports.userSignup = asyncHandler(async (req, res) => {
  const { password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  res.status(201).json({
    success: true,
    message: "Sign-up complete!",
    data: { ...req.body, hashedPassword },
  });
});

exports.userLogin = asyncHandler(async (req, res) => {
  const payload = {
    id: "1",
    name: "RM Studios",
    email: "info@rapid-minds.com",
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    .status(201)
    .json({
      success: true,
      message: "log in complete",
      accessToken,
    });
});
