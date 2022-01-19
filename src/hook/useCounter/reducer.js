import { INCREMENT, DECREMENT } from "./actionsName";
export default function reducer(state, actions) {
  switch (actions.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return { ...state };
  }
}
