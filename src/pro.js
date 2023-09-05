const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Estudiar en platzi", completed: false },
  { text: "lalalla", completed: true },
  { text: "Usar Estados derivados", completed: true },
];

let test = defaultTodos.filter((starts) => starts.text.startsWith("l"));
console.log(test);

let pron = defaultTodos.filter(function (text) {
  return text.text.startsWith("l");
});

console.log(pron);

const jk = ["hola", "homer", "jk"];
let prueb = jk.filter((start) => start.startsWith("h"));
console.log(prueb);
