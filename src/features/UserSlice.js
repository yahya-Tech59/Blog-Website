import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    isSignIn: false,
    userData: null,
    searchInput: "tech",
    blogData: null,
  },

  reducers: {
    setSignIn: (state, action) => {
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
