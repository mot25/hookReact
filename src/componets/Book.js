import React, { useContext } from "react";

import { conrtexBooks } from "../Context";

export default function Book(props) {
  const { removeBook } = useContext(conrtexBooks);
  return (
    <div className="Book">
      <h1>{props.title}</h1>
      <button
        data-del={props.remove}
        onClick={(e) => {
          removeBook(+e.target.dataset.del);
        }}
      >
        remove
      </button>
    </div>
  );
}
