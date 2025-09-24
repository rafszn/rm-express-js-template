const asyncHandler = require("../middlewares/asyncHandler");

exports.getUser = asyncHandler(async (req, res) => {
  const user = {
    id: "1",
    name: "RM Studios",
    email: "info@rapid-minds.com",
  };

  res.status(201).json({
    success: true,
    message: "fetch user success",
    user,
  });
});
