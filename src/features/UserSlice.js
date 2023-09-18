import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    isSignIn: false,
    userData: null,
    searchInput: "tech",
    blogData: null,
  },

  reducers: {
    setSignedIn: (state, action) => {
      state.isSignIn = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setBlogData: (state, action) => {
      state.blogData = action.payload;
    },
  },
});

export const { setSignedIn, setUserData, setInput, setBlogData } =
  UserSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;

export default UserSlice.reducer;
