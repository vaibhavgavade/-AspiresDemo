//define combine reducer here
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const counterSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    BalanceLimtReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {BalanceLimtReducer} = counterSlice.actions;

export default counterSlice.reducer;
