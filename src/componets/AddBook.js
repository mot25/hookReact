import React, { useContext, useState, useEffect, useRef } from "react";
import { conrtexBooks } from "../Context";

export default function AddBook() {
  const { addBook } = useContext(conrtexBooks);
  const [input, setinput] = useState();
  const addBookText = useRef(null);
  console.log("addBookText", addBookText.current);
  const clickButton = (e) => {
    e.preventDefault();
    console.log("addBookText", addBookText.current.value);
    let obj = {
      id: Date.now(),
      title: addBookText.current.value,
    };
    addBook(obj);
    addBookText.current.value = null
  };
  return (
    <form>
      <input ref={addBookText} type="text" />
      <button onClick={clickButton} type="submit">
        add
      </button>
    </form>
  );
}
