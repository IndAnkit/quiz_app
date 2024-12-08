const sequelize = require("../config");
const Choice = require("../model/Choice");
const Question = require("../model/Question");
const Quiz = require("../model/Quiz");
const QuizQuestions = require("../model/QuizQuestions");
const catchAsync = require("../utils/catchAsync");
const { success } = require("../utils/responseHandler");

exports.getQuiz = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  try {
    // Step 1: Create a new quiz
    const quiz = await Quiz.create();

    // Step 2: Select 5 random questions from the questions table
    const randomQuestions = await Question.findAll({
      order: sequelize.random(),
      limit: 5,
    });

    if (!randomQuestions.length) {
      return res.status(404).json({ message: "No questions found" });
    }

    // Step 3: Insert the selected questions into the quiz_questions table
    const quizQuestions = [];
    randomQuestions.forEach((question) => {
      quizQuestions.push({
        quiz_id: quiz.quiz_id,
        question_id: question.question_id,
      });
    });

    // Bulk insert into quiz_questions table
    await QuizQuestions.bulkCreate(quizQuestions);

    // Step 4: Fetch all selected questions and their choices
    const questionsWithChoices = await Promise.all(
      randomQuestions.map(async (question) => {
        const choices = await Choice.findAll({
          where: { question_id: question.question_id },
        });

        return {
          question_id: question.question_id,
          text: question.text,
          image_url: question.image_url,
          question_type: question.question_type,
          options: choices.map((choice) => ({
            choice_id: choice.choice_id,
            text: choice.text,
            is_correct: choice.is_correct,
          })),
        };
      })
    );

    // Return the quiz and selected questions with their choices
    success({
      res,
      data: {
        quiz:quiz,
        quiz_id: quiz.quiz_id,
        title: quiz.title,
        status: quiz.status,
        currentQuestionIndex: 0,
        questions: questionsWithChoices,
      },
    });
  } catch (error) {
    console.error("Error starting quiz:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
