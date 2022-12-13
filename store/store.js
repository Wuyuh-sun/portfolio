import { configureStore } from "@reduxjs/toolkit";
import splashReducer from "./modules/splashSlice";
import aboutReducer from "./modules/aboutSlice";
import navControllerReducer from "./modules/navControllerSlice";
import expSelectrReducer from "./modules/expSelectSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    splash: splashReducer,
    about: aboutReducer,
    navController: navControllerReducer,
    expSelect: expSelectrReducer,
  },
  // middleware: [thunk, logger],
  middleware: [thunk]
});
