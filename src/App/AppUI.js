import { TodoCounter } from "../components/TodoCount/TodoCounter";
import { TodoSearch } from "../components/Search/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItems/TodoItem";
import { TodoButton } from "../components/CreateButton/TodoButton";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import React from "react";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            //Forma de pasar una funcion a un componente sin ejecutarla
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoButton setOpenModal={setOpenModal} />

      {openModal && <Modal>la funcionalidad de agregar todo</Modal>}
    </>
  );
}

export { AppUI };
