import { configureStore } from "@reduxjs/toolkit";
import { userMediaLinksReducer } from "./userMediaLink";
import { reportsReducer } from "./report";
import { collaborationRequestsReducer } from "./collaborationRequest";
import { ideasReducer } from "./idea";
import { evolutionStepsReducer } from "./evolutionStep";
import { financialStepsReducer } from "./financialStep";
import { attachedFilesReducer } from "./attachedFilesForIdea";
<<<<<<< HEAD
import { officialInformationReducer } from "./officialInformation";
=======
>>>>>>> 06602119ff224ecb95cb38430b7b95af186d111d

const store = configureStore({
  reducer: {
    report: reportsReducer,
    userMediaLink: userMediaLinksReducer,
    collaborationRequests: collaborationRequestsReducer,
    ideas: ideasReducer,
    evolutionSteps: evolutionStepsReducer,
    financialSteps: financialStepsReducer,
    attachedFiles: attachedFilesReducer,
<<<<<<< HEAD
    officialInformation: officialInformationReducer,
=======
>>>>>>> 06602119ff224ecb95cb38430b7b95af186d111d
  },
});

export default store;
