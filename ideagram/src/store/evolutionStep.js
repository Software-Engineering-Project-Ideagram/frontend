import { createSlice } from "@reduxjs/toolkit";

const evolutionStepsSlice = createSlice({
  name: "evolutionStep",
  initialState: { evolutionSteps: [], evolutionStepsNum: 0 },
  reducers: {
    addEvolutionStep(state, action) {
      const newItem = action.payload;
      const existingItem = state.evolutionSteps.find(
        (item) => item.uuid === newItem.uuid
      );

      if (!existingItem) {
        state.evolutionStepsNum++;
        state.evolutionSteps.push({
          uuid: newItem.uuid,
          step: newItem.step,
          finishDate: newItem.finishDate,
          priority: newItem.priority,
          description: newItem.description,
        });
        console.log(state.evolutionSteps);
      }
    },
<<<<<<< HEAD
    deleteEvolutionStep(state, action) {
      const newItem = action.payload;
      const existingItem = state.evolutionSteps.find(
        (item) => item.uuid === newItem.uuid
      );

      if (existingItem) {
        state.evolutionStepsNum--;
        state.evolutionSteps = state.evolutionSteps.filter(
          (task) => task.uuid !== newItem.uuid
        );
      }
    },
    deleteAll(state, action) {
      state.evolutionSteps = [];
      state.evolutionStepsNum = 0;
    },
=======
    
    deleteEvolutionStep(state, action) {
        const newItem = action.payload;
        const existingItem = state.evolutionSteps.find(
          (item) => item.uuid === newItem.uuid
        );
  
        if (existingItem) {
          state.evolutionStepsNum--;
          state.evolutionSteps = state.evolutionSteps.filter(
            (task) => task.uuid !== newItem.uuid
          );
        }
      },
      deleteAll(state, action) {
        state.evolutionSteps = [];
        state.evolutionStepsNum = 0;
      },
      
>>>>>>> 06602119ff224ecb95cb38430b7b95af186d111d
  },
});

export const evolutionStepsActions = evolutionStepsSlice.actions;

export const evolutionStepsReducer = evolutionStepsSlice.reducer;
