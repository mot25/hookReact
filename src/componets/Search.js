import React, { useState } from "react";
import useDebounce from "../hook/useDebounce";

export default function Search() {
  const [value, setValue] = useState();
  const debounceSearch = useDebounce(fetchTodosSearch, 500);
  function fetchTodosSearch(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const onChange = (e) => {
    setValue(e.target.value);
    debounceSearch(e.target.value);
  };

  return <input placeholder="Search" value={value} onChange={onChange} />;
}
