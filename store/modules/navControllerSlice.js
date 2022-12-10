import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const navControllerSlice = createSlice({
  name: "navController",
  initialState,
  reducers: {
    nowLocate: (state, action) => {
      state.value.now = action.payload;
    },
    locateAboutMe: (state, action) => {
      state.value.aboutme = action.payload;
    },
    locateMyInfo: (state, action) => {
      state.value.myinfo = action.payload;
    },
    locateSkills: (state, action) => {
      state.value.skills = action.payload;
    },
    locatePortfolio: (state, action) => {
      state.value.portfolio = action.payload;
    },
    locateMore: (state, action) => {
      state.value.more = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  locateAboutMe,
  locateMyInfo,
  locateSkills,
  locatePortfolio,
  locateMore,
  nowLocate,
} = navControllerSlice.actions;

export default navControllerSlice.reducer;
