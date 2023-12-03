const express = require("express");
const { login, logout, verifyToken } = require("../controllers/auth");

const router = express.Router();

router.post("/login", login);
router.post("/logout", verifyToken, logout);

module.exports = router;
