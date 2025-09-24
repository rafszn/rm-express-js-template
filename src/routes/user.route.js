const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../middlewares/verifyAuthToken");
const { getUser } = require("../controllers/user.controller");

router.get("/me", verifyAuthToken, getUser);

module.exports = router;
