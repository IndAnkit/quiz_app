const Choice = require("../model/Choice");
const Question = require("../model/Question");
const UserResponses = require("../model/UserResponses");
const catchAsync = require("../utils/catchAsync");
const { success } = require("../utils/responseHandler");

exports.getQuiz = (req, res) => {};
exports.submitAnswer = catchAsync(async (req, res) => {
  const { answers, question_id, time_taken, quiz_id, user_id } = req.body || {};
  const correctAnswers = await Choice.findAll({
    where: {
      question_id: question_id,
      is_correct: true,
    },
  });
  const is_correct = correctAnswers.every((ele) => answers[ele.choice_id]);
  await UserResponses.findOrCreate({
    where: {
      question_id,
      quiz_id,
      user_id,
    },
    defaults: {
      question_id,
      quiz_id,
      user_id,
      selected_choices: Object.keys(answers).join(","),
      time_taken,
      is_correct,
    },
  }).catch(console.log);
  success({
    res,
    data: {
      message: "Submitted successfully",
    },
  });
});

exports.createSample = async (req, res) => {
  const questions = [
    {
      text: "What is the capital of France?",
      question_type: "single",
      choices: [
        { text: "Paris", is_correct: true },
        { text: "London", is_correct: false },
        { text: "Berlin", is_correct: false },
        { text: "Madrid", is_correct: false },
      ],
    },
    {
      text: "What is the largest planet in our solar system?",
      question_type: "single",
      choices: [
        { text: "Earth", is_correct: false },
        { text: "Mars", is_correct: false },
        { text: "Jupiter", is_correct: true },
        { text: "Saturn", is_correct: false },
      ],
    },
    {
      text: "Which programming language is known for its use in web development?",
      question_type: "single",
      choices: [
        { text: "Java", is_correct: true },
        { text: "Python", is_correct: false },
        { text: "C++", is_correct: false },
        { text: "Swift", is_correct: false },
      ],
    },
    // Add the rest of the questions here
    // For simplicity, I'm adding a few more below:
    {
      text: "What is the square root of 64?",
      question_type: "single",
      choices: [
        { text: "6", is_correct: false },
        { text: "8", is_correct: true },
        { text: "7", is_correct: false },
        { text: "9", is_correct: false },
      ],
    },
    {
      text: "Which animal is known as the King of the Jungle?",
      question_type: "single",
      choices: [
        { text: "Elephant", is_correct: false },
        { text: "Tiger", is_correct: false },
        { text: "Lion", is_correct: true },
        { text: "Bear", is_correct: false },
      ],
    },
    // Continue adding all questions...
  ];

  try {
    // Insert Questions
    for (const questionData of questions) {
      const question = await Question.create({
        text: questionData.text,
        question_type: questionData.question_type,
      });

      // Insert Choices for the question
      const choicesData = questionData.choices.map((choice) => ({
        question_id: question.question_id,
        text: choice.text,
        is_correct: choice.is_correct,
      }));

      await Choice.bulkCreate(choicesData);
    }

    console.log("Questions and Choices inserted successfully!");
    success({ res, data: [] });
  } catch (error) {
    console.error("Error inserting questions and choices:", error);
    res.status(500).json({ message: "Error inserting questions and choices:" });
  }
};
