import React, { useState, useRef } from "react";
import useScroll from "../hook/useScroll";

export default function List() {
  // список постов
  const [todos, setTodos] = useState([]);
  // странца постов
  const [page, setpage] = useState(1);
  // кол-во постов на странице
  const limit = 10;
  // род. блок
  const parentRef = useRef();
  // доч. блок
  const childRef = useRef();
  // наш наблюдатель
  const intersected = useScroll(parentRef, childRef, () =>
    fetchTodos(page, limit)
  );
  // функция которая забирает посты
  function fetchTodos(page, limit) {
    if (page > 20) {
      return;
    }
    // ссылка обращения к серверу
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos([...todos, ...json]);
        setpage(page + 1);
      });
  }
  // компонент JSX
  return (
    <div
      ref={parentRef}
      style={{
        marginBottom: "50px",
        marginTop: "20px",
        maxHeight: "350px",
        overflowY: "scroll",
      }}
    >
      <div>
        {/* // перебор главного массива, чтобы выводить посты */}
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.id} . {item.title}</span>
            </div>
          );
        })}
        {/* // блок который дает отмашку для фетча */}
        <div ref={childRef} style={{ background: "red", height: "20px" }}></div>
      </div>
    </div>
  );
}
