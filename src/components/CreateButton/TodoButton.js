import "./TodoButton.css";

function TodoButton({ setOpenModal }) {
  return (
    <button
      className="createTodo"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}

export { TodoButton };
