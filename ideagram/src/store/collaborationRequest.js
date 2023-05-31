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
    },
    deleteCollaborationRequest(state, action) {
      const newItem = action.payload;
      const existingItem = state.collaborationRequests.find(
        (item) => item.uuid === newItem.uuid
      );
    },
    editCollaborationRequest(state, action) {
      const newItem = action.payload;
      const existingItem = state.collaborationRequests.find(
        (item) => item.uuid === newItem.uuid
      );

      if (existingItem) {
        state.collaborationRequests.push(newItem);
      }
    },
  },
  },
});

export const collaborationRequestsActions = collaborationRequestsSlice.actions;

export const collaborationRequestsReducer = collaborationRequestsSlice.reducer;
