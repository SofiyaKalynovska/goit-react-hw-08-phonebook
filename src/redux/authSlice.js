import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => builder.addCase(register.pending, (state, action) => state{
    
  })
})

export const authReducer = authSlice.reducer;