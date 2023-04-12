import { createSlice, configureStore } from "@reduxjs/toolkit";

const reportSlice = createSlice({
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
          details: newItem.details,
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
          (report) => report.title !== newItem.title
        );
      }
    },
  },
});

export const reportActions = reportSlice.actions;

const store = configureStore({
  reducer: { report: reportSlice.reducer },
});

export default store;
