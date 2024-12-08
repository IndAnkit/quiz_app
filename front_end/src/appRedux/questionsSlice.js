import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQustions } from "services";

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
  isLoading: false,
  error: null,
  isSubmitting: false,
  currentQuestionIndex: null,
  currentAnswers: {},
  quiz: null,
};

// Then, handle actions in your reducers:
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setStartTime(state) {
      state.startTime = Date.now();
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
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
      state.currentAnswers = {};
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
        const { questions, quiz, currentQuestionIndex } = action.payload || {};
        state.currentQuestionIndex = currentQuestionIndex || 0;
        state.isLoading = false;
        state.data=questions;
        state.quiz = quiz;
        state.startTime = Date.now();
      })
      .addCase(fetchQuestionById.rejected, (state, action) => {
        console.log(action.error);
        state.isLoading = false;
        state.error = "Something went wrong";
      });
  },
});

export const {
  setNextQuestion,
  setLoading,
  setCurrentAnswer,
  setStartTime,
  setQuestions,
} = questionsSlice.actions;
export default questionsSlice.reducer;
