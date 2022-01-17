import React, { useContext } from "react";
import Book from "./Book";
import { conrtexBooks } from "../Context";

export default function Books() {
  const { books } = useContext(conrtexBooks);
  return (
    <div className="Books">
      {books ? (
        books.map((item) => {
          return <Book key={item.id} remove={item.id} title={item.title} />;
        })
      ) : (
        <h3>empty book</h3>
      )}
    </div>
  );
}
