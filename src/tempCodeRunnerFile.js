const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Estudiar en platzi", completed: false },
  { text: "lalalla", completed: true },
  { text: "Usar Estados derivados", completed: true },
];

let test = defaultTodos.filter((starts) => starts.text.startsWith("l"));
console.log(test);