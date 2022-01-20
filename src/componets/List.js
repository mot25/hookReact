import React, { useState, useEffect, useRef } from "react";
import useScroll from "../hook/useScroll";

export default function List() {
  const [show, setshow] = useState({
    checked: true,
    textCheck: "show",
  });
  const [todos, setTodos] = useState([]);
  const [page, setpage] = useState(1);

  const limit = 10;
  const parentRef = useRef();
  const childRef = useRef();
  const intersected = useScroll(parentRef, childRef, () =>
    fetchTodos(page, limit)
  );

  function fetchTodos(page, limit) {
    console.log("limit", limit);
    console.log("page", page);
    if (page > 20) {
      return;
    }
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos((prev) => [...prev, ...json]);
        setpage((prev) => prev + 1);
      });
  }

  const showList = () => {
    setshow({
      checked: !show.checked,
      textCheck: show.checked ? "hidden" : "show",
    });
  };
  return (
    <div style={{ marginBottom: "50px" }}>
      <button onClick={() => showList()}>{show.textCheck} list posts</button>
      <div  ref={parentRef} style={{ maxHeight: "500px", overflowY: "scroll"}}>
        {show.checked ? (
          <div>
            {todos.map((item) => {
              return (
                <div key={item.id}>
                  <span>{item.id}</span> . <span>{item.title}</span>
                </div>
              );
            })}
            <div
              ref={childRef}
              style={{ background: "red", height: "20px" }}
            ></div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
