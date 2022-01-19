import React, { useContext, useRef } from "react";
import { conrtexBooks } from "../Context";

export default function AddBook() {
  const { addBook } = useContext(conrtexBooks);
  const addBookText = useRef(null);
  const clickButton = (e) => {
    e.preventDefault();
    if (!addBookText.current.value) return addBookText.current.focus();
    let obj = {
      id: Date.now(),
      title: addBookText.current.value,
    };
    addBook(obj);
    addBookText.current.value = null;
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
