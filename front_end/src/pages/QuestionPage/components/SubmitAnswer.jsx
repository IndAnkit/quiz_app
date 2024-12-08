import { ROUTES } from "appConstants";
import { useQuestions, useUser } from "appRedux/hooks";
import { setNextQuestion } from "appRedux/questionsSlice";
import Button from "components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitAnswer } from "services";

const SubmitAnswer = () => {
  const navigate = useNavigate();
  const { currentAnswers, quiz, startTime, data, currentQuestionIndex } =
    useQuestions();
  const { data: userData } = useUser();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const isLast = currentQuestionIndex === data?.length - 1;
  const onSubmit = () => {
    setIsLoading(true);
    submitAnswer({
      answers: currentAnswers,
      question_id: data[currentQuestionIndex]?.question_id,
      time_taken: Date.now() - startTime,
      quiz_id: quiz?.quiz_id,
      user_id: userData?.user_id,
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
    <div className="flex justify-end mt-2">
      <Button
        onClick={onSubmit}
        isLoading={isLoading}
        disabled={!Object.keys(currentAnswers).length}
      >
        {isLoading ? "Submitting" : "Next"}
      </Button>
    </div>
  );
};

export default SubmitAnswer;
