const express = require("express");
const questionController = require("../controller/questionController");

const router = express.Router();

// Get all users
router.get("/", questionController.getQuiz);
router.post("/submit", questionController.submitAnswer);
router.get("/createSample", questionController.createSample);

module.exports = router;
