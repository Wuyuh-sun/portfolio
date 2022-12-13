import { createSlice } from "@reduxjs/toolkit";
import expData from "../../components/main/exp.json";

const initialState = {
  value: expData.data[0],
};

export const expSelectSlice = createSlice({
  name: "expSelect",
  initialState,
  reducers: {
    expSelectFunc:(state, action)=>{
      state.value = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { expSelectFunc } = expSelectSlice.actions;

export default expSelectSlice.reducer;