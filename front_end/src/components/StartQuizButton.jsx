import PropTypes from "prop-types";

import Button from "./Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useIsQuestionLoading, useUser } from "appRedux/hooks";
import { fetchQuestionById, setLoading } from "appRedux/questionsSlice";
import { ROUTES } from "appConstants";

const StartQuizButton = ({ title = "Start Quiz",className='' }) => {
  const { data } = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useIsQuestionLoading();

  const onStart = async (quizId) => {
    // quizId is used in case of any quiz that are not completed by the user
    try {
      dispatch(setLoading(true));
      await dispatch(fetchQuestionById(data?.user_id, quizId));
      setTimeout(() => {
        navigate(`/${ROUTES.QUESTION}`);
      }, 100);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Button
      isLoading={isLoading}
      className={`!w-full ${className}`}
      onClick={() => {
        onStart();
      }}
    >
      {title}
    </Button>
  );
};

StartQuizButton.propTypes = {
  title: PropTypes.string,
  className:PropTypes.string
};
export default StartQuizButton;
