const UserResponses = require("../model/UserResponses");
const catchAsync = require("../utils/catchAsync");
const { success } = require("../utils/responseHandler");

exports.getScore = catchAsync(async (req, res) => {
  const quizeId = req.params.quizeId;
  const userResponses = await UserResponses.findAll({
    where: { quiz_id: quizeId },
  });
  const { correctAnswer, incorrectAnswer } = userResponses.reduce(
    (prev, curr) => {
      if (curr.is_correct) {
        prev.correctAnswer = prev.correctAnswer + 1;
      } else {
        prev.incorrectAnswer = prev.incorrectAnswer + 1;
      }
      return prev;
    },
    { correctAnswer: 0, incorrectAnswer: 0 }
  );
  success({
    res,
    data: {
      totalQuestions:userResponses.length,
      correctAnswer,
      incorrectAnswer,
    },
  });
});
