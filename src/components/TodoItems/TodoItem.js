import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      <CompleteIcon />
      {/* <span
        className={`complete ${props.completed && "complete-check"}`}
        onClick={props.onComplete}
        >
        ✔️
      </span> */}
      <p className={`item-text ${props.completed && "item-text-check"}`}>
        {props.text}
      </p>
      <DeleteIcon />
      {/* <span className={`delete`} onClick={props.onDelete}>
        X
      </span> */}
    </li>
  );
}

export { TodoItem };
