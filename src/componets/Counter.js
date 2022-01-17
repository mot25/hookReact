import React, { useState, useEffect } from "react";

export default function Counter() {
  const [state, setState] = useState({
    count: 0,
    isCounting: false,
  });
  const hedlerCount = () => {
    setState({ ...state, count: state.count + 1 });
  };
  const hedlerStatus = () => {
    setState({ ...state, isCounting: !state.isCounting });
  };
  return (
    <div className="App">
      <button onClick={hedlerCount}>Click </button>
      <br />
      <button onClick={hedlerStatus}>
        Click hedlerStatus={state.isCounting.toString()}
      </button>
      <h2>{state.count}</h2>
    </div>
  );
}
