import { createSlice } from "@reduxjs/toolkit";

const reportsSlice = createSlice({
  name: "report",
  initialState: { reports: [], reportsNum: 0 },
  reducers: {
    addReport(state, action) {
      const newItem = action.payload;
      const existingItem = state.reports.find(
        (item) => item.title === newItem.title
      );
    },
    deleteReport(state, action) {
      const newItem = action.payload;
      const existingItem = state.reports.find(
        (item) => item.title === newItem.title
      );
      
    editReport(state, action) {
        const newItem = action.payload;
        const existingItem = state.reports.find(
          (item) => item.title === newItem.title
        );
});

export const reportsActions = reportsSlice.actions;

export const reportsReducer = reportsSlice.reducer;
