import React from "react";
import "../components/css/TodoCounter.css";
import { TodoContext } from "../TodoContext/index";

export const TodoCounter = () => {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
};

