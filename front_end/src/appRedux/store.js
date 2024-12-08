import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./questionsSlice";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    questions: questionsReducer,
  },
});
