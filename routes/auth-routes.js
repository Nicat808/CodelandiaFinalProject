const authController = require("../controllers/auth-controller");

const express = require("express");
const router = express.Router();

router.post("/login", authController.loginUser);
router.post("/register", authController.registerUser);
router.post('/refresh-roken',authController.refreshRoken)


module.exports = router