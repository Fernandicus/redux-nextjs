import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface IState {
  amount: number;
}

interface IAction {
  type: string;
  payload: IState;
}

const initState: IState = {
  amount: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    incrementByAmount: (state, action: IAction) => {
      state.amount += action.payload.amount;
    },
    decrementByAmount: (state, action: IAction) => {
      state.amount -= action.payload.amount;
    },
  },
});

export const store = configureStore({ reducer: counterSlice.reducer });
export const { decrementByAmount, incrementByAmount } = counterSlice.actions;
