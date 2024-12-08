import { useQuestions } from "appRedux/hooks";
import Layout from "components/Layout";
import Loader from "components/Loader";
import StartQuizButton from "components/StartQuizButton";
import { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { getSoreCard } from "services";

const ScorePage = () => {
  const [scoreCard, setScoreCard] = useState(null);
  const { quiz } = useQuestions();
 
  useEffect(() => {
    getSoreCard(quiz?.quiz_id).then((res) => {
      setScoreCard(res.data);
    });
  }, [quiz]);

  return (
    <Layout>
      {scoreCard ? (
        <>
          <div className="flex flex-row  justify-center">
            <ReactSpeedometer
              minValue={0}
              ringWidth={50}
              width={300}
              //   fluidWidth={'100%'}
              value={scoreCard.correctAnswer}
              maxValue={scoreCard.totalQuestions}
              currentValueText="Score"
              customSegmentLabels={[
                {
                  text: "Very Bad",
                  position: "INSIDE",
                  color: "#555",
                  fontSize: 10,
                },
                {
                  text: "Bad",
                  position: "INSIDE",
                  color: "#555",
                  fontSize: 10,
                },
                {
                  text: "Ok",
                  position: "INSIDE",
                  color: "#555",
                  fontSize: 10,
                },
                {
                  text: "Good",
                  position: "INSIDE",
                  color: "#555",
                  fontSize: 10,
                },
                {
                  text: "Very Good",
                  position: "INSIDE",
                  color: "#555",
                  fontSize: 10,
                },
              ]}
            />
          </div>
          <div className="flex flex-col gap-2 animate-pulse ">
            <div className="flex text-gray-500 font-medium items-center gap-2 bg-blue-100 p-4 rounded-xl">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="w-5 font-semibold text-black">
                {scoreCard.totalQuestions}
              </span>
              Total Questions
            </div>
            <div className="flex text-gray-500 font-medium items-center gap-2 bg-green-100 p-4 rounded-xl">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="w-5 font-semibold text-black">
                {scoreCard.correctAnswer}
              </span>
              Correct
            </div>
            <div className="flex text-gray-500 font-medium items-center gap-2 bg-red-100 p-4 rounded-xl">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-5 font-semibold text-black">
                {scoreCard.incorrectAnswer}
              </span>
              Incorrect
            </div>
          </div>
          <StartQuizButton className="mt-4" title="Start Again"  />
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default ScorePage;
