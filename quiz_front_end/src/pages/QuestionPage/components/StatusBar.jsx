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
        {/* <div className="m-5 h-1/2 w-[90%] right-0 top-0 rounde  absolute bg-red-900"></div> */}
      </div>
    </div>
  );
};

export default StatusBar;
