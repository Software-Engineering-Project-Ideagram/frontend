import { createSlice, configureStore } from "@reduxjs/toolkit";

const reportsSlice = createSlice({
  name: "report",
  initialState: { reports: [], reportsNum: 0 },
  reducers: {
    addReport(state, action) {
      const newItem = action.payload;
      const existingItem = state.reports.find(
        (item) => item.title === newItem.title
      );

      if (!existingItem) {
        state.reportsNum++;
        state.reports.push({
          id: newItem.id,
          title: newItem.title,
        });
      }
    },
    deleteReport(state, action) {
      const newItem = action.payload;
      const existingItem = state.reports.find(
        (item) => item.title === newItem.title
      );

      if (existingItem) {
        state.reportsNum--;
        state.reports = state.reports.filter(
          (task) => task.title !== newItem.title
        );
      }
    },
    editReport(state, action) {
      const newItem = action.payload;
      const existingItem = state.reports.find(
        (item) => item.title === newItem.title
      );

      if (existingItem) {
        state.reports = state.reports.filter(
          (task) => task.title !== newItem.title
        );
        state.reports.push(newItem);
      }
    },
  },
});

export const reportsActions = reportsSlice.actions;

const store = configureStore({
  reducer: { reports: reportsSlice.reducer },
});

export default store;
