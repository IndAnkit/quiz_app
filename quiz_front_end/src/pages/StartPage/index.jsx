import { ROUTES, STORAGE_KEY } from "appConstants";
import Logo from "assets/Logo.svg";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import storage from "utils/storage";
const instructions = [
  "To begin the quiz, simply click on the “Start” button.",
  "Each question will either be a single-choice or multiple-choice question.",
  " you can select more than one answer (but at least one choice is required).",
];
const StartPage = () => {
  const navigate = useNavigate();
  const userId = storage.getUserId();
  if (userId) {
    // return <Navigate to={`${ROUTES.SCORE_CARD}`} />;
  }
  return (
    <div className="linear_gradient_bg h-full justify-between md:justify-evenly md:gap-20 gap-5 flex flex-col items-center">
      <img src={Logo} className="w-1/2 md:w-1/6 mt-8" />

      <div className="relative p-5 bg-white w-full h-1/2 md:w-2/4 md:max-h-min  rounded-t-3xl md:rounded-b-3xl flex flex-col ">
        <div className="absolute left-0 flex justify-center right-0 -top-20 text-center  overflow-hidden  font-bold ">
          <div className="text-primaryColor text-2xl flex items-center justify-center bg-white  w-40 h-40 rounded-full">
            Quiz
          </div>
        </div>
        <div className="mt-20 flex flex-col h-full gap-4">
          <div className="font-medium">Please read instruction carefully:</div>
          <ul className="list-disc ml-10 flex-1 text-gray-600 font-medium">
            {instructions.map((ele) => (
              <li key={ele} className="my-1">
                {ele}
              </li>
            ))}
          </ul>
          <Button
            className={"!w-full"}
            onClick={() => {
              storage.setValue(STORAGE_KEY.USER_ID, Date.now().toString());
              navigate(ROUTES.QUESTION);
            }}
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
