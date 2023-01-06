import { useDispatch, useSelector } from "react-redux";
import { decrementByAmount, incrementByAmount, IState } from "./reducer";

interface ICounterActions {
  increaseBy(amount: number): void;
  decreaseBy(amount: number): void;
  getState: IState;
}

export const useCounterActions = (): ICounterActions => {
  const state = useSelector((state: IState) => state);
  const dispatch = useDispatch();

  return {
    increaseBy: (amount: number) => {
      dispatch(incrementByAmount({ amount }));
    },
    decreaseBy: (amount: number) => {
      dispatch(decrementByAmount({ amount }));
    },
    getState: state,
  };
};
