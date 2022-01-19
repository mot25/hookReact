import React, { useReducer } from "react";
import reducer from "./reducer";
import { INCREMENT, DECREMENT } from "./actionsName";

export default function useCounter(n = 0) {
  const [state, dispatch] = useReducer(reducer, { counter: n });
  return {
    counter: state.counter,
    add: () => dispatch({ type: INCREMENT }),
    remove: () => dispatch({ type: DECREMENT }),
  };
}
