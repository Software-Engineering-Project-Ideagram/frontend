import { createSlice } from "@reduxjs/toolkit";

const ideasSlice = createSlice({
  name: "idea",
  initialState: { ideas: [], ideasNum: 0 },
  reducers: {
    addIdea(state, action) {
      const newItem = action.payload;
      const existingItem = state.ideas.find(
        (item) => item.uuid === newItem.uuid
      );

      if (!existingItem) {
        state.ideasNum++;
        state.ideas.push({
          uuid: newItem.uuid,
          title: newItem.title,
          goal: newItem.goal,
          details: newItem.details,
          likes: newItem.likes,
          views: newItem.views,
          comments: newItem.comments,
        });
      }
    },
    deleteIdea(state, action) {
      const newItem = action.payload;
      const existingItem = state.ideas.find(
        (item) => item.uuid === newItem.uuid
      );

      if (existingItem) {
        state.ideasNum--;
        state.ideas = state.ideas.filter((task) => task.uuid !== newItem.uuid);
      }
    },
    editIdea(state, action) {
      const newItem = action.payload;
      const existingItem = state.ideas.find(
        (item) => item.title === newItem.title
      );

      if (existingItem) {
        state.ideas = state.ideas.filter(
          (task) => task.title !== newItem.title
        );
        state.ideas.push(newItem);
      }
    },
  },
});

export const ideasActions = ideasSlice.actions;

export const ideasReducer = ideasSlice.reducer;