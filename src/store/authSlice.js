// store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// 🧠 LocalStorage se data uthao
const storedUser = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser || null,
    isLoggedIn: !!storedUser,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
