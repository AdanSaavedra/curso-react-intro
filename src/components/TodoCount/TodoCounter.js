import { TodoContext } from "../../TodoContext";
import "./TodoCounter.css";
import React from "react";

function TodoCounter() {
  const { completedTodos, TotalTodos } = React.useContext(TodoContext);
  const completedMsg = "Felicidades!! Haz completado todos los To Do";
  const defaultMsg = `Has completado ${completedTodos} de ${TotalTodos} TODOS`;
  return <h1>{completedTodos !== TotalTodos ? defaultMsg : completedMsg}</h1>;
}

export { TodoCounter };
