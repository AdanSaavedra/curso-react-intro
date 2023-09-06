import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  const completedMsg = "Felicidades!! Haz completado todos los To Do";
  const defaultMsg = `Has completado ${completed} de ${total} TODOS`;
  return <h1>{completed !== total ? defaultMsg : completedMsg}</h1>;
}

export { TodoCounter };
