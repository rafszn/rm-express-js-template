const express = require("express");
const { userSignup, userLogin } = require("../controllers/auth.controller");
const router = express.Router();


router.post("/sign-up", userSignup);
router.post("/sign-in", userLogin);


module.exports = router;
