import { configureStore } from "@reduxjs/toolkit";
import { userMediaLinksReducer } from "./userMediaLink";
import { reportsReducer } from "./report";
import { collaborationRequestsReducer } from "./collaborationRequest";
import { ideasReducer } from "./idea";


const store = configureStore({
  reducer: {
    report: reportsReducer,
    userMediaLink: userMediaLinksReducer,
    collaborationRequests: collaborationRequestsReducer,
    ideas: ideasReducer,
  },
});

export default store;