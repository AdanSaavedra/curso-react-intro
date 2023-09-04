import "./TodoSearch.css";

function TodoSearch() {
  return (
    <input
      placeholder="Cortar cebolla"
      onChange={(event) => {
        console.log("Escribiste en todoSearch");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
