import React from "react";
import { Context } from "./Context";
import Counter from "./componets/Counter";
import Books from "./componets/Books";
import AddBook from "./componets/AddBook";

function App() {
  return (
    <Context>
      <div>
        <h1>hooki</h1>
        <Counter />
        <Books />
        <AddBook />
      </div>
    </Context>
  );
}

export default App;
