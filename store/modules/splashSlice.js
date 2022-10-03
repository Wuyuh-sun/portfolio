import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const splashSlice = createSlice({
  name: "splash",
  initialState,
  reducers: {
    splashOn:(state, action)=>{
      state.value = 1;
    },
    splashOff:(state, action)=>{
      state.value = 0;
    }
  },
});

// Action creators are generated for each case reducer function
export const { splashOn, splashOff } = splashSlice.actions;

export default splashSlice.reducer;