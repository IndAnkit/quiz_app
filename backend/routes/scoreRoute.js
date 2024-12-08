const express = require("express");
const quizController = require("../controller/scoreController");

const router = express.Router();

// Get all users
router.get("/:quizeId", quizController.getScore);

module.exports = router;
