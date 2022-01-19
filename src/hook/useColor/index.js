import { useReducer } from "react";
import reducer from "./reducer";
export default function useColor() {
  const { state, dispatch } = useReducer(reducer, { r: 0, g: 150, b: 200 });
  return {
    state,
    icrr: () => dispatch({ type: "inc_R" }),
    // add: () => dispatch({ type: INCREMENT }),
    decr: () => dispatch({ type: "dec_R" }),
    icrg: () => dispatch({ type: "inc_G" }),
    decg: () => dispatch({ type: "dec_G" }),
    icrb: () => dispatch({ type: "inc_B" }),
    decb: () => dispatch({ type: "dec_B" })
  };
}
