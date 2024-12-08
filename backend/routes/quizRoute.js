const express = require("express");
const quizController = require("../controller/quizController");

const router = express.Router();

// Get all users
router.get("/:userId", quizController.getQuiz);

module.exports = router;
