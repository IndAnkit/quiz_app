import { useSelector } from "react-redux";

export const useQuestions = () => {
  return useSelector((state) => state.questions);
};
export const useQuestion = () => {
  return useSelector(
    (state) => state.questions.data?.[state.questions?.currentQuestionIndex]
  );
};
export const useIsQuestionLoading = () => {
  return useSelector((state) => state.questions.isLoading);
};

export const useError = () => {
  return useSelector((state) => state.questions.error);
};

export const useIsQuestionSubmitting = () => {
  return useSelector((state) => state.questions.isSubmitting);
};

export const useCurrentAnswer = () => {
  return useSelector((state) => state.questions.currentAnswers);
};


export const useUser=()=>useSelector(state=>state.user)