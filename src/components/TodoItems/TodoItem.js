import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      <span
        className={`done ${props.completed && "done-check"}`}
        onClick={() => console.log("clickin")}
      >
        ✔️
      </span>
      <p className={`item-text ${props.completed && "item-text-check"}`}>
        {props.text}
      </p>
      <span className={`x`}>X</span>
    </li>
  );
}

export { TodoItem };
