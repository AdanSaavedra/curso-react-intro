import { TodoCounter } from "./components/TodoCount/TodoCounter";
import { TodoSearch } from "./components/Search/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItems/TodoItem";
import { TodoButton } from "./components/CreateButton/TodoButton";
import React from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Estudiar en platzi", completed: false },
  { text: "lalalla", completed: true },
  { text: "Usar Estados derivados", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const TotalTodos = todos.length;

  let searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });

  console.log(`los usuarios buscan todos de ${searchValue} `);

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
          />
        ))}
      </TodoList>

      <TodoButton />
    </>
  );
}

export default App;
