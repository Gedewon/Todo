import "./style.css";
import { TodoList, Task } from "./utils.js";

const task1 = new Task("buy ldaptop", 0);
const task2 = new Task("buy pc", 0);
const todoList = new TodoList([task1, task2]);
const root = document.querySelector(".todos-list");
const taskInput = document.querySelector("#input-list");

function render() {
  let screenElement = "";
  todoList.getTasks().forEach((list) => {
    screenElement += `<li contenteditable="true" id=${list.index}><p><input type="checkbox" name="" id="">${list.description}</p>&vellip;</li>`;
  });
  return screenElement;
}
taskInput.addEventListener("change", (e) => {
  todoList.addTask(e.target.value, todoList.getIndex());
  init();
});
function init() {
  root.innerHTML = render();
}
window.onload = init();
