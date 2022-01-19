import React from "react";
import useCounter from "../hook/useCounter";
export default function Counter() {
  const { counter, add, remove } = useCounter();
  return (
    <div className="App">
      <button onClick={() => add()}>+</button>
      <span>{counter}</span>
      <button onClick={() => remove()}>-</button>
    </div>
  );
}
