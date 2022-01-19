import React from "react";
import useColor from "../hook/useColor";

export default function Color() {

  const { state, icrr, decr, icrg, decg, icrb, decb } = useColor();
  return (
    <div>
      <h1 style={{ color: `rgb(${state.r},${state.g},${state.b})` }}>
        COLOr
      </h1>
      <span>r</span>
      <button onClick={() => icrr()}>+</button>
      <button onClick={() => decr()}>-</button>
      <span>g</span>
      <button onClick={() => icrg()}>+</button>
      <button onClick={() => decg()}>-</button>
      <span>b</span>
      <button onClick={() => icrb()}>+</button>
      <button onClick={() => decb()}>-</button>
    </div>
  );
}
