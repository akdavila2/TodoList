import React from "react";
import { TodoContext } from "../TodoContext";
import "../components/css/TodoSearch.css";
export const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="search"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};
