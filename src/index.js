import "./style.css";

const todoList = [
  { description: "buy laptop", completed: false, index: 0 },
  { description: "read books", completed: false, index: 1 },
  { description: "study c#", completed: false, index: 2 },
];

function render() {
  let screenElement = "";
  for (const list of todoList) {
    screenElement += `<li id=${list.index}>${list.description}</li>`;
  }
  return screenElement;
}
// if the list is not ordered i will use sorting
window.onload = function () {
  const root = document.querySelector(".todos-list");
  root.innerHTML = render();
};
