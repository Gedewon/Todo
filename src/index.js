import "./style.css";

const todoList = [
  { description: "buy laptop", completed: false, index: 0 },
  { description: "read books", completed: false, index: 1 },
  { description: "study c#", completed: false, index: 2 },
];

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
