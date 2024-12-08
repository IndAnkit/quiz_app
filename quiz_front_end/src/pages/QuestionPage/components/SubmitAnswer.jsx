import { ROUTES } from "appConstants";
import { useQuestions } from "appRedux/hooks";
import { setNextQuestion } from "appRedux/questionsSlice";
import Button from "components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitAnswer } from "services/QuestionService";

const SubmitAnswer = () => {
  const navigate = useNavigate();
  const { currentAnswers, startTime, data, currentQuestionIndex } =
    useQuestions();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const isLast = currentQuestionIndex === data?.length - 1;
  const onSubmit = () => {
    setIsLoading(true);
    submitAnswer({
      answers: currentAnswers,
      questionId: data[currentQuestionIndex]?.id,
      timeTaken: Date.now() - startTime,
    })
      .then(() => {
        if (isLast) {
          navigate(`/${ROUTES.SCORE_CARD}`);
        } else {
          dispatch(setNextQuestion());
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex justify-end">
      <Button
        onClick={onSubmit}
        disabled={isLoading || !Object.keys(currentAnswers).length}
      >
        {isLoading ? "Submitting" : "Next"}
      </Button>
    </div>
  );
};

export default SubmitAnswer;
