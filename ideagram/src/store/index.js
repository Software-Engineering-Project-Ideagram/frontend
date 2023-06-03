import { configureStore } from "@reduxjs/toolkit";
import { userMediaLinksReducer } from "./userMediaLink";
import { reportsReducer } from "./report";
import { collaborationRequestsReducer } from "./collaborationRequest";
import { ideasReducer } from "./idea";
import { evolutionStepsReducer } from "./evolutionStep";
import { financialStepsReducer } from "./financialStep";
import { attachedFilesReducer } from "./attachedFilesForIdea";
import { officialInformationReducer } from "./officialInformation";

const store = configureStore({
  reducer: {
    report: reportsReducer,
    userMediaLink: userMediaLinksReducer,
    collaborationRequests: collaborationRequestsReducer,
    ideas: ideasReducer,
    evolutionSteps: evolutionStepsReducer,
    financialSteps: financialStepsReducer,
    attachedFiles: attachedFilesReducer,
    officialInformation: officialInformationReducer,
  },
});

export default store;
