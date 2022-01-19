import React, { useEffect, createContext, useState } from "react";

export const conrtexBooks = createContext();

export const Context = (props) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem("book")));
  }, []);
  useEffect(() => {
    localStorage.setItem("book", JSON.stringify(books));
  }, [books]);
  const addBook = (item) => {
    books ? setBooks([item, ...books]) : setBooks([item]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const value = {
    books,
    addBook,
    removeBook,
  };
 
  return (
    <conrtexBooks.Provider value={value}>
      {props.children}
    </conrtexBooks.Provider>
  );
};
