import { TodoCounter } from "../components/TodoCount/TodoCounter";
import { TodoSearch } from "../components/Search/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItems/TodoItem";
import { TodoButton } from "../components/CreateButton/TodoButton";

function AppUI({
  completedTodos,
  TotalTodos,
  searchedTodos,
  setSearchValue,
  searchValue,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={TotalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
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

      <TodoButton />
    </>
  );
}

export { AppUI };
