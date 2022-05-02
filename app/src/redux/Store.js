//define your store here
import {configureStore} from '@reduxjs/toolkit';
import BalanceReducer from '.././redux/reducers/balanceReducer';

export const store = configureStore({
  reducer: {
    balance: BalanceReducer,
  },
});
