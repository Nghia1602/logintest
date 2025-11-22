const AuthController = require("../controllers/auth.controllers");
const express = require ("express");
const router = express.Router();
const authenticateToken = require("../middlelware/auth.middleware");
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/profile", authenticateToken,AuthController.profile);

module.exports = router;