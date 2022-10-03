import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: undefined,
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    aboutWrap:(state, action)=>{
      state.value = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { aboutWrap } = aboutSlice.actions;

export default aboutSlice.reducer;