let pron = defaultTodos.filter(function (text) {
  return text.text.startsWith("l");
});

console.log(pron);

const jk = ["hola", "homer", "jk"];
let prueb = jk.filter((start) => start.startsWith("h"));
console.log(prueb);
