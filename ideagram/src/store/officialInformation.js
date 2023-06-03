import { createSlice } from "@reduxjs/toolkit";

const officialInformationSlice = createSlice({
  name: "officialInformation",
  initialState: { officialInformation: [], officialInformationNum: 0 },
  reducers: {
    addOfficialInformation(state, action) {
      const newItem = action.payload;
      const existingItem = state.officialInformation.find(
        (item) => item.uuid === newItem.uuid
      );

      if (state.officialInformationNum === 0 || !existingItem) {
        state.officialInformationNum++;
        state.officialInformation.push({
          uuid: newItem.uuid,
          organization: newItem.organization,
          registerNumber: newItem.registerNumber,
          description: newItem.description,
        });
      }
    },
    deleteOfficialInformation(state, action) {
      const newItem = action.payload;
      const existingItem = state.officialInformation.find(
        (item) => item.uuid === newItem.uuid
      );

      if (existingItem) {
        state.officialInformationNum--;
        state.officialInformation = state.officialInformation.filter(
          (task) => task.uuid !== newItem.uuid
        );
      }
    },
    deleteAll(state, action) {
      state.officialInformation = [];
      state.officialInformationNum = 0;
    },
  },
});

export const officialInformationActions = officialInformationSlice.actions;

export const officialInformationReducer = officialInformationSlice.reducer;
