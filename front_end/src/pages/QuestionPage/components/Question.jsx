import { useCurrentAnswer, useQuestion } from "appRedux/hooks";
import { setCurrentAnswer } from "appRedux/questionsSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Option from "./Option";

const Question = () => {
  const dispatch = useDispatch();
  const { text, image_url, options } = useQuestion();
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
      <div className="font-extrabold text-2xl">{text}</div>
      {/* IMAGE IF AVALABEL */}
      {image_url && (
        <div className="h-[150px] overflow-hidden">
          <img
            className="h-full w-full object-contain"
            src={image_url}
            alt={image_url}
          />
        </div>
      )}
      {/* RENDER OPTIONS */}
      <div className="h-full flex flex-col gap-2 overflow-auto">
        {options.map((option) => {
          return (
            <Option
              isSelected={currentSelectedAnswer[option.choice_id]}
              key={option.choice_id}
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
