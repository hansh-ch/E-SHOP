import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  currentUser: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    loginFailed: (state, action) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});
export const { loginUser, loginFailed } = userSlice.actions;
export default userSlice.reducer;
