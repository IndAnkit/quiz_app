import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQustions } from "services/QuestionService";

export const fetchQuestionById = createAsyncThunk(
  "questions/fetchQuestionById",
  async (userId, quizId) => {
    const response = await getQustions(userId, quizId);
    return response.data;
  }
);

const initialState = {
  data: [],
  startTime: null,
  isLoading: true,
  error: null,
  isSubmitting: false,
  currentQuestionIndex: null,
  currentAnswers: {},
};

// Then, handle actions in your reducers:
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setStartTime(state) {
      state.startTime = Date.now();
    },
    setQuestions(state, action) {
      const { data = [], currentQuestionIndex = 0 } = action.payload || {};
      state.data = data;
      state.isLoading = false;
      state.currentQuestionIndex = currentQuestionIndex;
    },
    setNextQuestion: (state) => {
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
      state.startTime = Date.now();
      state.currentAnswers={}
    },
    setCurrentAnswer: (state, action) => {
      const id = action.payload;
      if (state.currentAnswers[id]) {
        delete state.currentAnswers[id];
      } else {
        state.currentAnswers[id] = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionById.fulfilled, (state, action) => {
        const { data, currentQuestionIndex } = action.payload || {};
        state.currentQuestionIndex = currentQuestionIndex || 0;
        state.isLoading = false;
        state.data.push(...data);
      })
      .addCase(fetchQuestionById.rejected, (state, action) => {
        console.log(action.error)
        state.isLoading = false;
        state.error = "Something went wrong";
      });
  },
});

export const { setNextQuestion, setCurrentAnswer, setStartTime, setQuestions } =
  questionsSlice.actions;
export default questionsSlice.reducer;
