import { useCurrentAnswer, useQuestion } from "appRedux/hooks";
import { setCurrentAnswer } from "appRedux/questionsSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Option from "./Option";

const Question = () => {
  const dispatch = useDispatch();
  const { question, imgUrl, options } = useQuestion();
  const currentSelectedAnswer = useCurrentAnswer();

  const onSelect = useCallback(
    (id) => {
      dispatch(setCurrentAnswer(id));
    },
    [dispatch]
  );
  return (
    <div className="flex flex-col gap-2 h-full overflow-hidden">
      {/* Question  */}
      <div className="font-extrabold text-2xl">{question}</div>
      {/* IMAGE IF AVALABEL */}
      {imgUrl && (
        <div className="h-96">
          <img src={imgUrl} alt={imgUrl} />
        </div>
      )}
      {/* RENDER OPTIONS */}
      <div className="h-full flex flex-col gap-2 overflow-auto">
        {options.map((option) => {
          return (
            <Option
              isSelected={currentSelectedAnswer[option.id]}
              key={option.id}
              {...option}
              onSelect={onSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
