import React from "react";
import { Context } from "./Context";
import Counter from "./componets/Counter";
import Books from "./componets/Books";
import Color from "./componets/Color";
import AddBook from "./componets/AddBook";
import List from "./componets/List";
import Observer from "./componets/Observer";

function App() {
  return (
    <Context>
      <h1>hooki</h1>
      <Counter />
      <Books />
      <AddBook />
      <Color />
      <List />
      {/* <Observer /> */}
    </Context>
  );
}

export default App;
