import { configureStore } from "@reduxjs/toolkit";
import splashReducer from "./modules/splashSlice";
import aboutReducer from "./modules/aboutSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    splash: splashReducer,
    about: aboutReducer,
  },
  // middleware: [thunk, logger],
  middleware: [thunk]
});
