import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "services";

export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  const response = await getUser(userId);
  return response;
});

const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

// Then, handle actions in your reducers:
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { data } = action.payload || {};
        state.isLoading = false;
        state.data = data;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log(action.error?.message);
        state.isLoading = false;
        state.error = action.error?.message || "Something went wrong";
      });
  },
});

export default userSlice.reducer;
