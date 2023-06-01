import { configureStore } from "@reduxjs/toolkit";
import { userMediaLinksReducer } from "./userMediaLink";
import { reportsReducer } from "./report";

const store = configureStore({
  reducer: { report: reportsReducer, userMediaLink: userMediaLinksReducer },
});

export default store;
