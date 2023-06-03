import { createSlice } from "@reduxjs/toolkit";

const collaborationRequestsSlice = createSlice({
  name: "collaborationRequest",
  initialState: { collaborationRequests: [], collaborationRequestsNum: 0 },
  reducers: {
    addCollaborationRequest(state, action) {
      const newItem = action.payload;
      const existingItem = state.collaborationRequests.find(
        (item) => item.uuid === newItem.uuid
      );

<<<<<<< HEAD
      if (state.collaborationRequestsNum === 0 || !existingItem) {
=======
      if (state.collaborationRequestsNum === 0 ||!existingItem) {
>>>>>>> 06602119ff224ecb95cb38430b7b95af186d111d
        state.collaborationRequestsNum++;
        state.collaborationRequests.push({
          uuid: newItem.uuid,
          jobTitle: newItem.jobTitle,
          skills: newItem.skills,
          education: newItem.education,
          age: newItem.age,
          salary: newItem.salary,
          status: newItem.status,
          description: newItem.description,
        });
      }
    },
    deleteCollaborationRequest(state, action) {
      const newItem = action.payload;
      const existingItem = state.collaborationRequests.find(
        (item) => item.uuid === newItem.uuid
      );

      if (existingItem) {
        state.collaborationRequestsNum--;
        state.collaborationRequests = state.collaborationRequests.filter(
          (task) => task.uuid !== newItem.uuid
        );
      }
    },
<<<<<<< HEAD
=======
    
>>>>>>> 06602119ff224ecb95cb38430b7b95af186d111d
    deleteAll(state, action) {
      state.collaborationRequests = [];
      state.collaborationRequestsNum = 0;
    },
  },
});

export const collaborationRequestsActions = collaborationRequestsSlice.actions;

export const collaborationRequestsReducer = collaborationRequestsSlice.reducer;
