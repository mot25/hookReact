import { useState } from "react";

export default function Observer() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
}
