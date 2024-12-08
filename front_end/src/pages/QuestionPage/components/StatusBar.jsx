import { useQuestions } from "appRedux/hooks";
import RatingCircle from "components/RatingCircle";

const StatusBar = () => {
  const { data, currentQuestionIndex } = useQuestions();

  return (
    <div className="left-0 right-0 flex justify-center w-full bg-transparent rounded-full absolute -top-20">
      <div className="bg-white h-40 w-40 p-5 rounded-full relative">
        <RatingCircle
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={data.length}
        />
      </div>
    </div>
  );
};

export default StatusBar;
