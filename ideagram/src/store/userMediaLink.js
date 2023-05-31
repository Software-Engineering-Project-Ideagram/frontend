import { createSlice } from "@reduxjs/toolkit";

const userMediaLinksSlice = createSlice({
  name: "userMediaLink",
  initialState: { userMediaLinks: [], userMediaLinksNum: 0 },
  reducers: {
    addUserMediaLink(state, action) {
      const newItem = action.payload;
      const existingItem = state.userMediaLinks.find(
        (item) => item.title === newItem.title
      );

      if (
        (newItem.details.startsWith("https://") ||
          newItem.details.startsWith("http://")) {
        state.userMediaLinksNum++;
        state.userMediaLinks.push({
          uuid: newItem.uuid,
          title: newItem.title,
          details: newItem.details,
        });
      }
    },
  },
});

export const userMediaLinksActions = userMediaLinksSlice.actions;

export const userMediaLinksReducer = userMediaLinksSlice.reducer;
